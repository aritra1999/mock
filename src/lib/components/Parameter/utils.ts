import type { Parameter } from "$lib/utils/types";

export function getParameterFieldNames(parameters: Record<string, any>[]): string[] {
    return parameters.reduce((uniqueList: string[], parameter: Record<string, any> ) => {
        return [...new Set([...uniqueList, ...Object.keys(parameter)])]
    }, []);
}