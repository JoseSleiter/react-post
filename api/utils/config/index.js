const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "dev";
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || "48h";

dotenv.config();
