<script lang="ts">
	import { getParameterFieldNames } from "./utils";
    import type { Parameter } from "$lib/utils/types";
	import { stringify } from "postcss";

    export let parameters: Record<string, any>[]; 
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
                            {#if parameter.schema}
                                {parameter.schema.type}
                                {#if parameter.schema.format}
                                    - {parameter.schema.format}
                                {/if}
                            {/if}
                        </div>
                    </td>
                    <td class="px-4 py-2">
                        {#if parameter.description}
                            {parameter.description}
                        {/if}
                    </td>
                    {#each parameterFields as paramField}
                        {#if paramField !== "name" && paramField !== "description"}
                            <td class="px-4 py-2">
                                {#if parameter[paramField]}
                                    {parameter[paramField]}
                                {/if}
                            </td>
                        {/if}
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>