import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Member, { IMember } from "../../models/member";

// add member
export const addMemebr = asyncHandler(async (req: Request, res: Response) => {
  //data to be saved in database
  const member: IMember = {
    id: Member.length + 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  };

  let members;
  try {
    await Member.create(member);
    members = await Member.find({});
  } catch (error) {
    console.log(error);
  }
  res.status(201).json({ users: members });
});

// get all members
export const getMembers = asyncHandler(async (req: Request, res: Response) => {
  let members;
  try {
    members = await Member.find({});
  } catch (error) {
    console.log(error);
  }
  res.status(201).json({ users: members });
});

//update member
export const updateMember = asyncHandler(
  async (req: Request, res: Response) => {
    let members;
    try {
      await Member.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
      });

      members = await Member.find({});
    } catch (error) {
      console.log(error);
    }
    res.status(201).json({ users: members });
  }
);

//delete a member
export const deleteMember = asyncHandler(
  async (req: Request, res: Response) => {
    let members;

    try {
      await Member.findByIdAndDelete(req.params.id);
      members = await Member.find({});
    } catch (error) {
      console.log(error);
    }
    res.status(201).json({ users: members });
  }
);
