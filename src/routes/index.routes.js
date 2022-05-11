import { Router } from "express";
import {
  renderTasks,
  addTask,
  renderTask,
  editTask,
  deleteTask,
  toggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

router.get("/about", (req, res) => {
  res.render("about");
});

router.post("/tasks/add", addTask);

router.get("/tasks/:id/edit", renderTask);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", toggleDone);

export default router;
