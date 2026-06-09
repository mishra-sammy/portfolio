import Contact from '../models/Contact.js';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ip: req.ip,
    });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: { id: contact._id },
    });
  } catch (error) {
    next(error);
  }
};
