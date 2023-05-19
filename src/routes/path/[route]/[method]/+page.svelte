<script lang="ts">
    import { page } from '$app/stores'
    import explorerJson from '$lib/data/routes.json';
	  import { getRouteColorClass, buildRequestSchema } from '$lib/utils/utils';
    import { Badge, Button, Chevron, Label, Select } from 'flowbite-svelte';

    $: pathDetails = (explorerJson.paths as Record<string, any>)[$page.params.route][$page.params.method];
    $: requestSchema = pathDetails.requestBody != undefined ? buildRequestSchema(pathDetails.requestBody.content) : undefined;
    $: parameters = pathDetails.parameters;
    $: responses = pathDetails.responses;

    let requestFormatOptions: {name: string, value: string}[];
    let selectedRequestFormat: string;

    $: if (requestSchema != undefined) {
      console.log(requestSchema);
      requestFormatOptions = Object.keys(requestSchema).map((key: string) => { return {name: key, value: key}});
      selectedRequestFormat = requestFormatOptions[0].value;
    }
</script>

<div class="flex flex-col space-y-6">
  <div class="bg-white rounded-md p-4">
    <h1 class="title-font text-3xl font-bold">{pathDetails.summary}</h1>

    {#if pathDetails.description !== undefined }
      <p class="text-slate-600">{pathDetails.description}</p>
    {/if}
    
    <div class="flex w-full bg-slate-100 mt-2 text-sm text-slate-600 rounded-sm">
      <div class="min-w-fit flex items-center {getRouteColorClass($page.params.method)} rounded-l-sm font-bold border-l-4">
        <div class="w-16 flex justify-center">
            {$page.params.method}
        </div>
      </div>
      <div class="pt-1 pb-0.5 px-2 truncate text-ellipsis overflow-hidden rounded-r-sm">
        <pre><code>{$page.params.route}</code></pre>
      </div>
    </div>
  </div>
  
  {#if requestSchema !== undefined }
    <div class="bg-white rounded-md p-4">
      <div class="flex items-center justify-between">
        <h1 class="title-font text-xl font-bold my-1">Requests</h1>
        <Select class="w-fit" items={requestFormatOptions} bind:value={selectedRequestFormat} />
      </div>
      <div class="flex space-x-2">
        {#if pathDetails.requestBody.description } 
          <Badge>Required</Badge>
        {/if}
        <p>{pathDetails.requestBody.description}</p>
      </div>  
      
    </div>
  {/if}

  {#if parameters !== undefined }
  <div class="bg-white rounded-md p-4">
    <h1 class="title-font text-xl font-bold my-1">Parameters</h1>
  </div>
  {/if}

  {#if responses !== undefined }
  <div class="bg-white rounded-md p-4">
    <h1 class="title-font text-xl font-bold my-1">Response</h1>
  </div>
  {/if}
  
</div>

<!-- <div>
  {#each Object.entries(pathDetails.responses) as [status, details]}
    {status}, {details}
  {/each}
</div> -->
