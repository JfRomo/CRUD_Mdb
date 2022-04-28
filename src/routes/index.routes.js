import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", (req, res) => {
  res.render('index.hbs');
});

router.get("/about", (req, res) => {
  res.render('about.hbs');
});

router.post('/tasks/add', (req, res) => {
  const task = Task(req.body)
  console.log(task)
  res.send("Añadida")
})

export default router;
