"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./routes/users");
const cors_1 = __importDefault(require("cors"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const db_1 = require("./config/db");
const auth_1 = require("./routes/auth");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Add this line to enable JSON parsing in the request body
app.use("/api/users", users_1.memberRoutes);
app.use("/api/auth", auth_1.authRouter);
// Middleware
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
const port = process.env.PORT || 5000;
//db connection then server connection
db_1.db.then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});
