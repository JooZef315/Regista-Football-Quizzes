// import { TPassword } from "./types";
import mongoose, { Model } from "mongoose";

const PasswordSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: [true, "Please add player name"],
  },
  level: {
    type: String,
    enum: ["سهل", "متوسط", "صعب"],
    required: [true, "Please add level"],
  },
  category: {
    type: String,
    enum: ["محلي", "عالمي"],
    required: [true, "Please add category"],
  },
});

export type TPassword = mongoose.InferSchemaType<typeof PasswordSchema>;

const Password: Model<TPassword> =
  mongoose.models.Password ||
  mongoose.model<TPassword>("Password", PasswordSchema);

export default Password;
