<script lang="ts">
    export let parameters: Record<string, any>; 
</script>
<div class="bg-white rounded-md p-4">
    <h1 class="title-font text-xl font-bold my-1">Parameters</h1>
    <div>
        <code>
            {@html JSON.stringify(parameters, null, 4)}
        </code>
    </div>
</div>