import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') })

export default {
    mongoDbUrl: process.env.MONGO_DB_URL,
    port: process.env.PORT, 
    tokenKey: process.env.TOKEN_KEY
};