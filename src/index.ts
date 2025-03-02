// Install dependencies first:
// npm init -y
// npm install express cors dotenv
// npm install --save-dev typescript ts-node-dev @types/node @types/express

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// To run the API, add this script to package.json:
// "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
// Then, run: npm run dev
