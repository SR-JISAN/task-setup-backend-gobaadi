import dotenv from "dotenv";
import path from "path"

dotenv.config({
    path: path.join(process.cwd(),".env")
})

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  app_url: process.env.APP_URL!,
  app_url_frontend: process.env.APP_URL_FRONTEND!,
  database_url: process.env.DATABASE_URL!,
};