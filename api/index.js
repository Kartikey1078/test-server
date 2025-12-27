import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "🚀 Test server is running on Vercel"
  });
});

app.get("/health", (req, res) => {
  res.send("OK");
});

// ❌ DO NOT use app.listen()
// ✅ Export the app
export default app;
