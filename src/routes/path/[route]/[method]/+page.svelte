<script lang="ts">
    import { page } from '$app/stores'
	  import RouteParams from '$lib/components/Parameter/RouteParams.svelte';
	  import RouteRequest from '$lib/components/Request/RouteRequest.svelte';
	  import RouteResponse from '$lib/components/Response/RouteResponse.svelte';
    import explorerJson from '$lib/data/swaggerMock.json';
	  import { getRouteColorClass } from '$lib/utils/utils';
	import { Accordion, AccordionItem } from 'flowbite-svelte';

    $: pathDetails = (explorerJson.paths as Record<string, any>)[$page.params.route][$page.params.method];
   
</script>

<div class="flex flex-col space-y-6 mb-20">
  <div class="bg-white rounded-md p-4">
    <h1 class="title-font text-3xl font-bold mb-4">{pathDetails.summary}</h1>

    
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

    {#if pathDetails.description !== undefined }
      <p class="text-slate-600 my-2">{pathDetails.description}</p>
    {/if}
    
  </div>
  
  {#if pathDetails.requestBody !== undefined }
    <Accordion class="bg-white rounded-md">
      <AccordionItem activeClasses="border-none bg-blue-600 text-white rounded-md" inactiveClasses="border-none rounded-md">
        <span slot="header">Requests</span>
        <div slot="arrowup">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>        
        </div>
        <span slot="arrowdown">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>        
        </span>    
        <div class="bg-white rounded-md">
          <RouteRequest requestBody={pathDetails.requestBody}/>
        </div>
      </AccordionItem>
    </Accordion>
  {/if}  

  {#if pathDetails.parameters !== undefined }
    <Accordion class="bg-white rounded-md">
      <AccordionItem activeClasses="border-none bg-blue-600 text-white rounded-md" inactiveClasses="border-none rounded-md">
        <span slot="header">Parameters</span>
        <div slot="arrowup">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>        
        </div>
        <span slot="arrowdown">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>        
        </span>
        <div class="bg-white rounded-md">
          <RouteParams parameters={pathDetails.parameters}/>
        </div>
      </AccordionItem>
    </Accordion>
  {/if}

  {#if pathDetails.responses !== undefined }
    <Accordion class="bg-white rounded-md"> 
      <AccordionItem activeClasses="rounded-md border-none bg-blue-600 text-white" inactiveClasses="border-none rounded-md">
        <span slot="header">Response</span>
        <div slot="arrowup">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>        
        </div>
        <span slot="arrowdown">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>        
        </span>
        <div class="bg-white rounded-md">
          <RouteResponse responses={pathDetails.responses} />
        </div>
      </AccordionItem>
    </Accordion>
  {/if}
    
</div>

