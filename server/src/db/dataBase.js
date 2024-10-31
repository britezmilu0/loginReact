import mysql2 from "mysql2/promise";
import { config } from "../config/config";

export const connectDB = async () => {
  try {
    const connection = await mysql2.createConnection({
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      port: config.DB_PORT,
      database: config.DB_NAME,
    });
    console.log("se ha conectado a la base de datos ");
  } catch (error) {
    console.log("Error al conectar a la base de datos: ", error);
  }
};
