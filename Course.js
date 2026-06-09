const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    // e.g. "CS101"
    courseCode: {
      type: String,
      required: [true, 'Course code is required'],
      unique: true,
      trim: true,
      uppercase: true,
    },

    // e.g. "Introduction to Computer Science"
    title: {
      type: String,
      required: [true, 'Course title is required'],
      trim: true,
    },

    // e.g. "Dr. Alan Turing"
    instructor: {
      type: String,
      required: [true, 'Instructor name is required'],
      trim: true,
    },

    // Maximum number of students allowed
    capacity: {
      type: Number,
      required: [true, 'Capacity is required'],
      min: [1, 'Capacity must be at least 1'],
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model('Course', courseSchema);
