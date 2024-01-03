// import { Router, Request, Response } from "express";
// import { body, validationResult } from "express-validator";
// import { IMember } from "../../models/member";

// const router = Router();
// let users: IMember[] = [];

// const taskValidationRules = [
//   body("firstname").notEmpty().withMessage("firstname is required"),
//   body("lastname").notEmpty().withMessage("lastname is required"),
// ];

// router.post("/", taskValidationRules, (req: Request, res: Response) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const user: IMember = {
//     id: users.length + 1,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     age: req.body.age,
//   };

//   users.push(user);
//   res.status(201).json({ users: users });
// });

// router.get("/", (req: Request, res: Response) => {
//   res.json({ users: users });
// });

// router.get("/:id", (req: Request, res: Response) => {
//   const user = users.find((t) => t.id === parseInt(req.params.id));

//   if (!user) {
//     res.status(404).send("Task not found");
//   } else {
//     res.json({ user: user });
//   }
// });

// router.put("/:id", taskValidationRules, (req: Request, res: Response) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const user = users.find((t) => t.id === parseInt(req.params.id));

//   if (!user) {
//     res.status(404).send("Task not found");
//   } else {
//     user.firstname = req.body.firstname || user.firstname;
//     user.lastname = req.body.lastname || user.lastname;
//     user.age = req.body.age || user.age;

//     res.json({ users: users });
//   }
// });

// router.delete("/:id", (req: Request, res: Response) => {
//   const index = users.findIndex((t) => t.id === parseInt(req.params.id));

//   if (index === -1) {
//     res.status(404).send("Task not found");
//   } else {
//     users.splice(index, 1);
//     res.status(201).json({ users: users });
//   }
// });

// export default router;

//importing modules
import express from "express";
import {
  addMemebr,
  getMembers,
  updateMember,
  deleteMember,
} from "../../controllers/memberControllers";

//initiating the router
export const memberRoutes = express.Router();

//add post route
memberRoutes.post("/", addMemebr);

//get posts
memberRoutes.get("/", getMembers);

//update a post
memberRoutes.put("/:id", updateMember);

//delete a post
memberRoutes.delete("/:id", deleteMember);
