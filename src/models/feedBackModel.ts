import mongoose, { Model } from "mongoose";

const FeedBackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "Please add player name"],
    },
    message: {
      type: String,
      required: [true, "Please add your message"],
    },
  },
  {
    timestamps: true,
  }
);

export type TFeedBack = mongoose.InferSchemaType<typeof FeedBackSchema>;

const FeedBack: Model<TFeedBack> =
  mongoose.models.FeedBack ||
  mongoose.model<TFeedBack>("FeedBack", FeedBackSchema);

export default FeedBack;
