const Task = require("../models/Tasks");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
  } catch (error) {
    res.status(500).json({msg:error})
  }
};

const createTask = async (req, res) => {
  try {
    const task = await new Task(req.body);
  await task.save();
  res.status(201).json({ task });
  } catch (error) {
    res.status(500).send({msg:error})
  }
};

const getTask = async (req, res) => {
 try {
  const {id:taskID} = req.params.id;
  // res.json({id:req.params.id})
  const task = await Task.findOne({id:taskID})
   res.status(200).json({task})
 } catch (error) {
  
 }
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
