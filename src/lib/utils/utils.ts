import type { MetaRoute } from "$lib/utils/types";

export function buildPaths(paths: Record<string, any>): MetaRoute[] {
    const routes: MetaRoute[] = [];

    for(const [key, value] of Object.entries(paths)) {
        for(const [method, path] of Object.entries(value)) {
            routes.push({
                name: path.summary,
                path: key,
                method: method.toUpperCase() as 'GET' | 'POST' | 'PUT' | 'DELETE'
            })
        }
    }
    return routes;
}