import 'reflect-metadata';
import { createApp } from './app.factory.js';
import { loadEnv } from './config/env.js';

const env = loadEnv();
const app = await createApp(env);
await app.listen(env.API_PORT, env.API_HOST);
