<script lang="ts">
    import { Select } from "flowbite-svelte";
	  import HighlightJson from "$lib/components/HighlightJson.svelte";
	  import { getParsedSchemaFromContent } from "$lib/utils/utils";

    export let content: Record<string, any>;

    const formatOptions = Object.keys(content).map((key: string) => { return {name: key, value: key}});
    let selectedFormat = formatOptions[0].value;
</script>

<div class="relative my-2">
  <div class="absolute top-2 right-2">
    <Select items={formatOptions} bind:value={selectedFormat} />
  </div>
  <HighlightJson code={getParsedSchemaFromContent(content, selectedFormat)} />
</div>