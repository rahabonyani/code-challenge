import mongoose from "mongoose";

export interface IMember {
  firstname: string;
  lastname: string;
  age?: string;
  id: number;
}

export interface DMember extends mongoose.Document {
  firstname: string;
  lastname: string;
  age?: string;
  id: number;
}

const MemberSchema = new mongoose.Schema({
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

const Member = mongoose.model<DMember>("Member", MemberSchema);

export default Member;
