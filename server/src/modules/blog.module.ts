import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  imageUrl: string;
  content: string;
  author: mongoose.Types.ObjectId;
  published: boolean;
  publishedAt?: Date;
  category: "Tech" | "Startup" | "AI" | "Design" | "IOT";
  readMinutes: number;
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
      index: true,
    },

    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
      match: [/^https?:\/\/.+/, "Please enter a valid image URL"],
    },

    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [20, "Content must be at least 20 characters"],
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
      index: true,
    },

    category: {
      type: String,
      enum: ["Tech", "Startup", "AI", "Design", "IOT"],
      required: [true, "Category is required"],
      index: true,
    },

    published: {
      type: Boolean,
      default: false,
      index: true,
    },

    publishedAt: {
      type: Date,
      default: null,
    },

    readMinutes: {
      type: Number,
      default: 1,
      min: [1, "Read time must be at least 1 minute"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Auto-calculate reading time (~200 words/minute)
blogSchema.pre("save", async function () {
  if (this.isModified("content")) {
    const words = this.content.trim().split(/\s+/).length;
    this.readMinutes = Math.max(1, Math.ceil(words / 200));
  }

  if (this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
});

const Blog = mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
