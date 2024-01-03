"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MemberSchema = new mongoose_1.default.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    age: {
        type: String,
        required: false,
    },
});
const Member = mongoose_1.default.model("Member", MemberSchema);
exports.default = Member;
