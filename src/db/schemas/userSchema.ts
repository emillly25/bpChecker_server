import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    records: [
      {
        date: {
          type: String,
          required: true,
        },
        data: [
          {
            time: {
              type: String,
              required: true,
            },
            high: {
              type: Number,
              required: true,
            },
            low: {
              type: Number,
              required: true,
            },
            purse: {
              type: Number,
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export default userSchema;
