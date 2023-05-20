<script lang="ts">
	  
    import { Badge, Select } from "flowbite-svelte";
	  import Content from "$lib/components/Content.svelte";

    export let requestBody: Record<string, any>;
</script>
<div class="bg-white rounded-md p-4">
    <h1 class="title-font text-xl font-bold mb-2">Requests</h1>
    <div class="flex space-x-2">
      {#if requestBody.description } 
        <Badge>Required</Badge>
      {/if}
      <p>{requestBody.description}</p>
    </div>  
    <Content content={requestBody.content}/>
</div>