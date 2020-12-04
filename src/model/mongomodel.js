import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  avatar: { type: String },
  email: { type: String, trim: true, required: true },
  fullname: { type: String, trim: true, required: true },
  username: { type: String, trim: true, required: true },
  loginSecret: { type: Number, trim: true },
  career: [
    {
      company: { type: String },
      companyterm: { type: String },
      position: { type: String, trim: true },
    },
  ],
  course: [
    {
      academy: { type: String },
      major: { type: String },
      graduation: { type: String },
    },
  ],
  license: { type: String },
  project: [
    {
      pname: { type: String },
      contents: { type: String },
    },
  ],

  portfolio: [
    {
      link: { type: String },
      files: { type: String },
    },
  ],
  competition: [
    {
      awards: { type: String },
    },
  ],
  language: [
    {
      lname: { type: String },
    },
  ],
  bio: { type: String },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date },
});

export default mongoose.model("User", UserSchema);
