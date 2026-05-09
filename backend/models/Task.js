
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  priority: String,
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do"
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }
});

module.exports = mongoose.model("Task", taskSchema);
