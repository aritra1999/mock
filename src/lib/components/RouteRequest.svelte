<script lang="ts">	  
    import { Badge } from "flowbite-svelte";
	  import Content from "$lib/components/Content.svelte";
    export let requestBody: Record<string, any>;

</script>

<div class="flex space-x-2">
  {#if requestBody.description } 
    <Badge>Required</Badge>
  {/if}
  <p>{requestBody.description}</p>
</div>  
<Content content={requestBody.content}/>
