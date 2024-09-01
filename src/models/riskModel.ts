import { TRisk } from "./types";
import mongoose, { Model } from "mongoose";

const RiskQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    trim: true,
    required: true,
  },
  choices: {
    type: [String],
    required: true,
    validate: [
      (val: string[]) => Array.isArray(val) && val.length === 4,
      "The choices must have exactly 4 items.",
    ],
  },
});

const RiskCategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    trim: true,
    required: [true, "please add Category Name"],
  },
  Q5: {
    type: RiskQuestionSchema,
    required: [true, "please add Category 5 points Question"],
  },
  Ans5: {
    type: String,
    trim: true,
    required: [true, "please add Category 5 points Answer"],
  },
  Q10: {
    type: RiskQuestionSchema,
    required: [true, "please add Category 10 points Question"],
  },
  Ans10: {
    type: String,
    trim: true,
    required: [true, "please add Category 10 points Answer"],
  },
  Q20: {
    type: RiskQuestionSchema,
    required: [true, "please add Category 20 points Question"],
  },
  Ans20: {
    type: String,
    trim: true,
    required: [true, "please add Category 20 points Answer"],
  },
  Q40: {
    type: RiskQuestionSchema,
    required: [true, "please add Category 40 points Question"],
  },
  Ans40: {
    type: String,
    trim: true,
    required: [true, "please add Category 40 points Answer"],
  },
});

const RiskSchema = new mongoose.Schema(
  {
    doubleQ: {
      type: String,
      required: [true, "please choose the double Question"],
    },
    category1: {
      type: RiskCategorySchema,
      required: [true, "please add Category"],
    },
    category2: {
      type: RiskCategorySchema,
      required: [true, "please add Category"],
    },
    category3: {
      type: RiskCategorySchema,
      required: [true, "please add Category"],
    },
    category4: {
      type: RiskCategorySchema,
      required: [true, "please add Category"],
    },
  },
  {
    timestamps: true,
  }
);

const Risk: Model<TRisk> =
  mongoose.models.Risk || mongoose.model<TRisk>("Risk", RiskSchema);

export default Risk;
