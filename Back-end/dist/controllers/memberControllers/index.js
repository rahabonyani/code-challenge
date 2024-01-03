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
exports.deleteMember = exports.updateMember = exports.getMembers = exports.addMemebr = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const member_1 = __importDefault(require("../../models/member"));
// add member
exports.addMemebr = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //data to be saved in database
    const member = {
        id: member_1.default.length + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
    };
    let members;
    try {
        yield member_1.default.create(member);
        members = yield member_1.default.find({});
    }
    catch (error) {
        console.log(error);
    }
    res.status(201).json({ users: members });
}));
// get all members
exports.getMembers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let members;
    try {
        members = yield member_1.default.find({});
    }
    catch (error) {
        console.log(error);
    }
    res.status(201).json({ users: members });
}));
//update member
exports.updateMember = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let members;
    try {
        yield member_1.default.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        members = yield member_1.default.find({});
    }
    catch (error) {
        console.log(error);
    }
    res.status(201).json({ users: members });
}));
//delete a member
exports.deleteMember = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let members;
    try {
        yield member_1.default.findByIdAndDelete(req.params.id);
        members = yield member_1.default.find({});
    }
    catch (error) {
        console.log(error);
    }
    res.status(201).json({ users: members });
}));
