import mongoose, { Model } from "mongoose";
import { TWhoAmI } from "./types";

const WhoAmISchema = new mongoose.Schema(
  {
    answer: {
      type: String,
      trim: true,
      required: [true, "please add the answer"],
    },
    clue1: {
      type: String,
      trim: true,
      required: [true, "please add clue"],
    },
    clue2: {
      type: String,
      trim: true,
      required: [true, "please add clue"],
    },
    clue3: {
      type: String,
      trim: true,
      required: [true, "please add clue"],
    },
    clue4: {
      type: String,
      trim: true,
      required: [true, "please add clue"],
    },
    clue5: {
      type: String,
      trim: true,
      required: [true, "please add clue"],
    },
  },
  {
    timestamps: true,
  }
);

const WhoAmI: Model<TWhoAmI> =
  mongoose.models.WhoAmI || mongoose.model<TWhoAmI>("WhoAmI", WhoAmISchema);

export default WhoAmI;
