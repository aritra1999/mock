import type { MetaRoute } from '$lib/utils/types';
import routesJson from '$lib/data/routes.json';

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

export function buildRequestSchema(requestSchema: Record<string, any>): Record<string, any> {
	let parsedRequestSchema: Record<string, string[][]> = {};
	for (const [format, schema] of Object.entries(requestSchema)) {
		console.log(format, schema);
		if (schema['schema'].hasOwnProperty('$ref')) {
			const refPath: string[] = schema['schema']['$ref'].split('/');
			return buildSchemaFromRef(refPath[3]);
		} else {
			console.log('no ref');
		}
		parsedRequestSchema[format] = [['hello', 'world']];
	}

	return {
		'application/json': [
			['hello', 'world'],
			['this', 'test']
		]
	};
}

function buildSchemaFromRef(schemaName: string) {
	const components: Record<string, any> = routesJson.components;
	const schema = components.schemas[schemaName];

	if (!schema) {
		throw new Error(`Schema '${schemaName}' not found in components.`);
	}

	const result = { ...schema };

	// Check if the schema has properties
	if (schema.properties) {
		result.properties = {};

		for (const propName in schema.properties) {
			if (schema.properties.hasOwnProperty(propName)) {
				const propSchema = schema.properties[propName];

				// If the property has a $ref, recursively build the referenced schema
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
