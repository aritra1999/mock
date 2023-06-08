<script lang=ts>
    import hljs from 'highlight.js';
    import json from "highlight.js/lib/languages/json";
    // import 'highlight.js/styles/github.css';
    import 'highlight.js/styles/atom-one-light.css';

    export let code: Record<string, any>;

    hljs.registerLanguage('json', json);
    const highlightedCode = hljs.highlight(JSON.stringify(code, null, 2), {language: 'json'}).value

</script>
<div class="p-2 bg-slate-100 rounded-md">
    <pre class="break-words"><code>{@html highlightedCode}</code></pre>
</div>
