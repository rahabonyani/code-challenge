"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAndLogin = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const generateToken_1 = __importDefault(require("../../utils/generateToken"));
const user_1 = __importDefault(require("../../models/user"));
// @Desc Login
// @Route /api/auth/loginAndRegister
// @Method POST
exports.registerAndLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield user_1.default.findOne({ username });
    if (!user) {
        const newUser = new user_1.default({
            username,
            password,
        });
        yield newUser.save();
        res.status(201).json({
            success: true,
            user: {
                username: newUser.username,
                token: (0, generateToken_1.default)(newUser._id),
            },
        });
    }
    else if (yield user.comparePassword(password)) {
        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                token: (0, generateToken_1.default)(user._id),
            },
        });
    }
    else {
        res.status(401);
        throw new Error("Email or password incorrect");
    }
}));
