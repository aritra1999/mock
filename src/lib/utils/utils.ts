import type { MetaRoute } from '$lib/utils/types';
import routesJson from '$lib/data/routesMock.json';
import { error } from '@sveltejs/kit';
// import routesJson from '$lib/data/routesMock.json';

export function buildPaths(paths: Record<string, any>): MetaRoute[] {
	const routes: MetaRoute[] = [];

	for (const [key, value] of Object.entries(paths)) {
		for (const [method, route] of Object.entries(value)) {
			const path = route as Record<string, any>;
			routes.push({
				path: key,
				tags: path.tags,
				name: path.summary,
				security: path.security,
				response: path.responses,
				operationId: path.operationId,
				method: method.toUpperCase() as 'GET' | 'POST' | 'PUT' | 'DELETE'
			});
		}
	}
	return routes;
}

export function getRouteColorClass(method: string): string {
	return `${method.toLowerCase()}-tag`;
}

export function parseSchema(schema: Record<string, any>): Record<string, any> {
	
	if (schema['$ref']) {
		const refPath: string[] = schema['$ref'].split('/');
		return buildSchemaFromRef(refPath[3]);
	} else if (schema.items && schema.items['$ref']) {
		const refPath: string[] = schema.items['$ref'].split('/');
		return buildSchemaFromRef(refPath[3]);
	} 


	return schema;
}

function buildSchemaFromRef(schemaName: string) {
	const components: Record<string, any> = routesJson.components;
	const schema = components.schemas[schemaName];

	if (!schema) throw new Error(`Schema '${schemaName}' not found in components.`);

	const result = { ...schema };

	if (schema.properties) {
		result.properties = {};
		for (const propName in schema.properties) {
			if (schema.properties[propName]) {
				const propSchema = schema.properties[propName];
				if (propSchema.$ref) {
					const refSchemaName = propSchema.$ref.replace('#/components/schemas/', '');
					result.properties[propName] = buildSchemaFromRef(refSchemaName);
				} else {
					result.properties[propName] = propSchema;
				}
			}
		}
	}

	return result;
}

export function getParsedSchemaFromContent(content: Record<string, any> , selectedFormat: string): Record<string, any> {
	let schema: Record<string, any> = {};
	try {
		schema = content[selectedFormat].schema;
	} catch(error) {
		console.log(error);
	}
	return parseSchema(schema); 
}
