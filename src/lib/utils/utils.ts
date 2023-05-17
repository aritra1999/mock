import type { MetaRoute } from "$lib/utils/types";

export function buildPaths(paths: Record<string, any>): MetaRoute[] {
    const routes: MetaRoute[] = [];

    for(const [key, value] of Object.entries(paths)) {
        for(const [method, route] of Object.entries(value)) {
            const path = route as Record<string, any>;
            routes.push({
                path: key,
                tags: path.tags,
                name: path.summary,
                security: path.security,
                response: path.responses,
                operationId: path.operationId,
                method: method.toUpperCase() as 'GET' | 'POST' | 'PUT' | 'DELETE',
            })
        }
    }
    return routes;
}

export function getRouteColorClass(method: string): string {
    return `${method.toLowerCase()}-tag`;
}
