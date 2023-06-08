<script lang="ts">
	import { getParameterFieldNames } from "./utils";
    export let parameters: Record<string, any>[]; 
    const parameterFields = getParameterFieldNames(parameters);
</script>

<div class="-m-4 relative overflow-x-auto">
    <table class="w-full text-left text-gray-500 rounded">
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
                    {#each parameterFields as paramField}
                        {#if paramField !== "name"}
                            <td class="px-4 py-2">
                                {#if paramField === "schema"}
                                    {#each Object.keys(parameter.schema) as schemaProperty}
                                        <span class="capitalize font-semibold text-slate-800">{schemaProperty} - </span> {parameter.schema[schemaProperty]}<br>
                                    {/each}
                                {:else}
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