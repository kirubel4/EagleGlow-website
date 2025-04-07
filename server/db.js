import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pkg from 'pg';
import dotenv from "dotenv";
const { Pool } = pkg; // Assuming you're using PostgreSQL


// import intiallization
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// db connection
const envPath = join(__dirname, '.env');
// dotenv.config({ path: join(__dirname, '.env') });
dotenv.config({ path: envPath });

const de = process.env;
const pool = new Pool({
    user: de.DB_USER,
    host: de.DB_HOST,
    database: de.DB_NAME,
    password: de.DB_PASSWORD,
    port: de.DB_PORT,
    max: 10,  // Maximum number of connections in the pool (adjust as needed)
    idleTimeoutMillis: 30000,  // Time before an idle connection is closed
    connectionTimeoutMillis: 2000,  // Time to wait for a connection before throwing an error
});
export default pool; // Exporting the pool for use in other files
