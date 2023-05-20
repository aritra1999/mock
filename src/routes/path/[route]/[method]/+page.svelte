<script lang="ts">
    import { page } from '$app/stores'
	  import RouteParams from '$lib/components/RouteParams.svelte';
	  import RouteRequest from '$lib/components/RouteRequest.svelte';
	  import RouteResponse from '$lib/components/RouteResponse.svelte';
    import explorerJson from '$lib/data/routes.json';
	  import { getRouteColorClass } from '$lib/utils/utils';

    $: pathDetails = (explorerJson.paths as Record<string, any>)[$page.params.route][$page.params.method];
   
</script>

<div class="flex flex-col space-y-6 mb-20">
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
  
  {#if pathDetails.requestBody !== undefined }
    <RouteRequest requestBody={pathDetails.requestBody}/>
  {/if}

  {#if pathDetails.parameters !== undefined }
    <RouteParams parameters={pathDetails.parameters}/>
  {/if}

  {#if pathDetails.responses !== undefined }
    <RouteResponse responses={pathDetails.responses} />
  {/if}
  
</div>

