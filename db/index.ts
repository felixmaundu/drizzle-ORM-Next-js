// import { drizzle } from 'drizzle-orm/planetscale-serverless';
// import { connect } from '@planetscale/database';

// const connection = connect({
//   url: process.env.DATABASE_URL,
// });

// export const db = drizzle(connection);

import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URL) {
  throw new Error("database url not found");
}

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql);
