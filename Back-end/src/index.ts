import express, { Application } from "express";
import { memberRoutes } from "./routes/users";
import cors from "cors";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";
import { db } from "./config/db";
import { authRouter } from "./routes/auth";

const app: Application = express();

app.use(cors());

app.use(express.json());
// Add this line to enable JSON parsing in the request body
app.use("/api/users", memberRoutes);
app.use("/api/auth", authRouter);

// Middleware
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

//db connection then server connection
db.then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
