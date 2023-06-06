import type { Parameter } from "$lib/utils/types";

export function getParameterFieldNames(parameters: Parameter[]): string[] {
    return parameters.reduce((uniqueList: string[], parameter: Parameter) => {
        return [...new Set(...uniqueList, ...Object.keys(parameter))]
    }, ["name", "description", "properties", "enum"]);
}