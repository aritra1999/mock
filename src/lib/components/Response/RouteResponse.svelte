<script lang="ts">
	import Content from "$lib/components/Content.svelte";
    export let responses: Record<string, any>;
</script>

<div class="flex flex-col space-y-4">
    {#each Object.entries(responses) as [status, details]}
        <div class="rounded-md">
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

