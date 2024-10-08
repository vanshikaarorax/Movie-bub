import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS={
    MONGO_URL:process.env.MONGO_URL,
    PORT:process.env.PORT||8000,
    JWT_SECRET:process.env.JWT_SECRET,
    NODE_ENV:process.env.NODE_ENV,
    TMBD_API:process.env.TMBD_API,
}