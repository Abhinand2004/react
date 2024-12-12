import express from "express";
import router from "./router.js"; 

const app = express();
const PORT = 5000;

app.use("/api", router); 

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
