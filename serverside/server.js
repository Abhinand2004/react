import express from "express";
import router from "./router.js"; 
import connection from "./connection.js"
import path from 'path';

const app = express();
const PORT = 3003;
app.use(express.json({limit:"50mb"}));

app.use("/api", router); 



connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend is http://localhost/api/${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});

