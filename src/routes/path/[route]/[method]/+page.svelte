<script lang="ts">
  import { page } from '$app/stores'
  import { TabItem, Tabs } from 'flowbite-svelte';
  import explorerJson from '$lib/data/swaggerMock.json';
  import { getRouteColorClass } from '$lib/utils/utils';
  import RouteParams from '$lib/components/Parameter/RouteParams.svelte';
  import RouteRequest from '$lib/components/Request/RouteRequest.svelte';
  import RouteResponse from '$lib/components/Response/RouteResponse.svelte';

  $: routeDetails = (explorerJson.paths as Record<string, any>)[$page.params.route][$page.params.method];   
</script>

<div class="flex flex-col space-y-6 mb-20">
  <div class="bg-white rounded-md py-4 px-6 shadow">
    <h1 class="title-font text-2xl font-bold mb-4">{routeDetails.summary}</h1>
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
    {#if routeDetails.description !== undefined }
      <p class="text-slate-600 my-2">{routeDetails.description}</p>
    {/if}
  </div>
  
  <div class="p-2 bg-white rounded-lg shadow">
    <Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow">
      {#if routeDetails.parameters !== undefined }
        <TabItem class="w-full" open>
          <span slot="title">Parameters</span>
          <RouteParams parameters={routeDetails.parameters} />
        </TabItem>
      {/if}
      {#if routeDetails.requestBody !== undefined }
        <TabItem class="w-full" open>
          <span slot="title">Request</span>
          <RouteRequest requestBody={routeDetails.requestBody} />
        </TabItem>
      {/if}    
      {#if routeDetails.responses !== undefined }
        <TabItem class="w-full">
          <span slot="title">Response</span>
          <RouteResponse responses={routeDetails.responses} />
        </TabItem>
      {/if}
      <TabItem class="w-full">
        <span slot="title">Execute</span>
        <p>Execute!</p>
      </TabItem>
    </Tabs>
  </div>
</div>

