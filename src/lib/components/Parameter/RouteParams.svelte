<script lang="ts">
    import type { Parameter } from "$lib/utils/types";
	import { getParameterFieldNames } from "./utils";

    export let parameters: Parameter[]; 
    const parameterFields = getParameterFieldNames(parameters);
</script>


<div class="relative overflow-x-auto">
    <table class="w-full text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                {#each parameterFields as paramField}
                    <th scope="col" class="px-4 py-2">
                        {paramField}
                    </th>
                {/each}
            </tr>
        </thead>
        <tbody class="text-xs">
            {#each parameters as parameter}                           
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-4 py-2 ">
                        <div class="text-sm font-semibold text-slate-700"> 
                            {parameter.name}
                        </div>
                        <div class="text-slate-500">
                            {parameter.schema.type}
                            {#if parameter.schema.format}
                                - {parameter.schema.format}
                            {/if}
                        </div>
                    </td>
                    <td class="px-4 py-2">
                        {#if parameter.description}
                            {parameter.description}
                        {/if}
                    </td>
                    <td class="px-4 py-2">
                        {#if parameter.required}
                            <div class="tag">Required</div>
                        {/if}
                        {#if parameter.nullable != undefined && !parameter.nullable}
                            <div class="tag">Not Null</div>
                        {/if}
                    </td>
                    <td class="px-4 py-2">
                        {#if parameter.schema.enum}{parameter.schema.enum} {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>