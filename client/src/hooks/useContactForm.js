import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../utils/api';

const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await api.post('/api/contact', data);
      
      if (response.data.success) {
        setSuccessMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
        reset();
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      if (error.response?.status === 429) {
        setErrorMessage('Too many requests. Please wait a moment before trying again.');
      } else if (error.response?.data?.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    successMessage,
    errorMessage,
  };
};

export default useContactForm;
