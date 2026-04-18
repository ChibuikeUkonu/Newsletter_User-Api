import express from "express";
import Newsletter from "../models/Newsletter.js";

const router = express.Router();

router.post("/newsletter/signup", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const exists = await Newsletter.findOne({ email });

    if (exists) {
      return res.status(409).json({ error: "Already subscribed" });
    }

    await Newsletter.create({ email });

    res.status(201).json({ message: "Subscribed successfully" });
  } 
  catch (err) {
  console.error("NEWSLETTER ERROR:", err); // shows real error in terminal
  res.status(500).json({ error: err.message });
}
});

export default router;