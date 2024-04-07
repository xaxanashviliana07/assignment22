import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const taskId = req.params.id - 1;
    if (taskId >= 0 && taskId < tasks.length) {
      res.json(tasks[taskId]);
    } else {
      console.log("this id doesn't exist");
    }
});
  
app.post("/tasks", (req, res) => {
    const { task } = req.body;
    const newTask = { id: tasks.length + 1, task, done: false };
    tasks.push(newTask);
    res.json(newTask);
});
  
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { task, done } = req.body;
    const updatedTask = { id, task, done };
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
});
  
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const searchIndex = tasks.findIndex((task) => task.id === id);
    if (searchIndex > -1) {
      tasks.splice(searchIndex, 1);
      res.sendStatus(200);
    } else {
      res
        .status(404)
        .json({ error: `Task with the given id was not found.` });
    }
});
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  var tasks = [
    {
      id: 1,
      task: "Complete assignment",
      done: false
    },
    {
      id: 2,
      task: "Buy groceries",
      done: false
    },
    {
      id: 3,
      task: "Call mom",
      done: true
    },
    {
      id: 4,
      task: "Finish reading book",
      done: false
    },
    {
      id: 5,
      task: "Exercise",
      done: false
    },
    {
      id: 6,
      task: "Prepare presentation",
      done: true
    },
    {
      id: 7,
      task: "Pay bills",
      done: false
    },
    {
      id: 8,
      task: "Sort through old clothes",
      done: false,
    },
    {
      id: 9,
      task: "Learn a new language",
      done: true,
    },
    {
      id: 10,
      task: "Go to the gym",
      done: false,
    }
  ]