const getAllTasks = (req, res) => {
  res.send("get all items");
};

const createTask = (req, res) => {
  res.send("create single task");
};

const getTask = (req, res) => {
  res.send("get single task");
};

const updateTask = (req, res) => {
  res.send("updatesingle task");
};

const deleteTask = (req, res) => {
  res.send("delete single task");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
