
exports.createTask = async (req, res) => {
  res.json({ message: "Task Created" });
};

exports.getTasks = async (req, res) => {
  res.json({ message: "All Tasks" });
};
