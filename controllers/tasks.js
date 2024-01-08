const asyncWrapper = require("../middleware/async");
const Task = require("../models/Tasks");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const taskId = await req.params.id;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` });
  }
  res.status(200).json({ id: taskId, data: req.body });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` });
  }
  // res.status(200).json({task})
  res.status(200).send();
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
