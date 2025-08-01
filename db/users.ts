import { drizzle } from 'drizzle-orm/d1';
import {users} from "./schema";

export interface Env {
    DB: D1Database;
}

const fetch = async (request: Request, env: Env) => {
    const db = drizzle(env.DB);
    const allUsers = await db.select().from(users).all();
    return new Response(JSON.stringify(allUsers), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export default fetch;
