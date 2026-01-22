import next from "next";
import http from "http";
import dotenv from "dotenv";
import { connectDB } from "../server/src/database/connectDB";
import app from "../server/app";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const PORT = Number(process.env.PORT) || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

async function start() {
  console.log("🔥 server.ts started");

  await nextApp.prepare();
  console.log("✅ Next prepared");
  await connectDB();
  app.all(/.*/, (req: any, res: any) => {
    return handle(req, res);
  });

  http.createServer(app).listen(PORT, () => {
    console.log(`🚀 App running on http://localhost:${PORT}`);
  });
}

start();
