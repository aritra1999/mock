<script lang="ts">
	import Content from "$lib/components/Content.svelte";
    export let responses: Record<string, any>;
</script>


<div class="bg-white rounded-md p-4">
    <h1 class="title-font text-xl font-bold mb-2">Response</h1>
    <div class="flex flex-col space-y-4">
        {#each Object.entries(responses) as [status, details]}
            <div class="bg-slate-100 p-4 rounded-md">
                <div class="flex items-center space-x-2">
                    <h3 class="font-semibold">{status}</h3>
                    {#if details.description}<p class=""> - {details.description}</p>{/if}
                </div>
                {#if details.content}
                    <Content content={details.content} />
                {/if}
            </div>
        {/each}
    </div>
</div>
