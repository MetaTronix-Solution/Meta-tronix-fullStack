import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  imageUrl: string;
  content: string;
  author: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [5, "Title must be at least 5 characters"],
      maxlength: [150, "Title cannot exceed 150 characters"],
    },

    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },

    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [20, "Content must be at least 20 characters"],
    },

    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },

    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Blog = mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
