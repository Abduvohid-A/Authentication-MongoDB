import dotenv from "dotenv";
import { app } from "./src/app.js";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});
