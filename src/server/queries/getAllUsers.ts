import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from '../db/schema'
import 'dotenv/config'

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

const connectionString = process.env.DATABASE_URL;;

const client = postgres(connectionString, { prepare: false })
const db = drizzle(client);

export const allUsers = await db.select().from(users);
