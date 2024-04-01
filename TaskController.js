const TaskModel = require('./TaskModel');

module.exports.getTask = async (req, res) => {
    const myTasks = await TaskModel.find();
    res.send(myTasks);
}

module.exports.saveTasks = async (req, res) => {
    const { title } = req.body;
    TaskModel.create({ title })
    .then((data) => { console.log('Task added')
    res.json(data)
    })
}

module.exports.deleteTask = async (req, res) => {
    const { _id } = req.body;
    TaskModel.findByIdAndDelete(_id)
    .then(() => res.send('The task was deleted!'))
}

module.exports.editTask = async (req, res) => {
    const { _id, title } = req.body;
    TaskModel.findByIdAndUpdate(_id, {title})
    .then(() => res.json('The task was edited!'))
}