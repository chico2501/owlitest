import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import MessageController from "./app/controllers/MessageController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.post("/messages/:id", MessageController.store);
routes.get("/messages", MessageController.index);

export default routes;
