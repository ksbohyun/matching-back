import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, trim: true, required: true },
  fullname: { type: String, trim: true, required: true },
  username: { type: String, trim: true, required: true },
  loginSecret: { type: Number, trim: true },
});

export default mongoose.model("User", UserSchema);
