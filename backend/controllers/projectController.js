
exports.createProject = async (req, res) => {
  res.json({ message: "Project Created" });
};

exports.getProjects = async (req, res) => {
  res.json({ message: "All Projects" });
};
