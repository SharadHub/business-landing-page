import express from 'express';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';
import contactLimiter from '../middleware/rateLimiter.js';
import * as contactController from '../services/email.service.js';

const router = express.Router();

const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Invalid email address'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
];

router.post('/', contactLimiter, contactValidation, validate, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await contactController.sendContactEmail({ name, email, message });
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send email. Please try again later.' 
    });
  }
});

export default router;
