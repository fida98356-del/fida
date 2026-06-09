/**
 * models/Registration.js — Mongoose schema & model for a student Registration
 */

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {
    // Student's full name
    studentName: {
      type: String,
      required: [true, 'Student name is required'],
      trim: true,
    },

    // Student's email — must be unique per course (no duplicate registrations)
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },

    // Reference to the Course the student is registering for
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',                        // Enables .populate('course') to get full course details
      required: [true, 'Course selection is required'],
    },
  },
  {
    timestamps: true,
  }
);

// Compound unique index: one student (email) can only register for a course once
registrationSchema.index({ email: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Registration', registrationSchema);
