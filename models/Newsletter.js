import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
});

// IMPORTANT EXPORT (this is where most mistakes happen)
const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

export default Newsletter;