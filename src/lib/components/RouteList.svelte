<script lang="ts">
	import type { MetaRoute } from "$lib/utils/types";
    // import explorerJson from '$lib/data/routesMock.json';
    import explorerJson from '$lib/data/swaggerMock.json';
    import { buildPaths, getRouteColorClass } from '$lib/utils/utils';

    const routes: MetaRoute[] = buildPaths(explorerJson.paths);
</script>

<div class="flex mt-4 space-y-4 flex-col mb-24">
    {#each routes as route}
        <a href="/path/{encodeURIComponent(route.path)}/{route.method.toLocaleLowerCase()}">
            <div class="mx-4 p-4 rounded-md bg-white">
                <div class="flex items-start justify-between">
                    <div class="font-semibold">{route.name}</div>
                    <button class="bg-slate-50 hover:bg-slate-100 rounded-md p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>                          
                    </button>
                </div>
                <div class="flex w-full bg-slate-100 mt-2 text-sm text-slate-600 rounded-sm">
                    <div class="min-w-fit flex items-center {getRouteColorClass(route.method)} rounded-l-sm font-bold border-l-4">
                        <div class="w-16 flex justify-center">
                            {route.method}
                        </div>
                    </div>
                    <div class="pt-1 pb-0.5 px-2 truncate text-ellipsis overflow-hidden rounded-r-sm">
                        <pre><code>{route.path}</code></pre>
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>