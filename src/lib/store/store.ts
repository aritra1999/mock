import { writable } from "svelte/store";

export const swaggerJson = writable<Record<string, any>>({});