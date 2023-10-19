//Instalar mysql en el proyecto  npm install --save mysql2
import mysql from 'mysql2/promise';

//Importamos la librería dotenv
import 'dotenv/config'

const connection = mysql.createConnection({
    host: process.env.CHAT_AI_BD_HOST,
    user: process.env.CHAT_AI_BD_USER,
    password: process.env.CHAT_AI_BD_PASSWORD,
    database: process.env.CHAT_AI_BD_NAME,
    port: process.env.CHAT_AI_BD_PUERTO,
    waitForConnections: true,
  });

  export default connection;