<script lang=ts>
    import hljs from 'highlight.js';
    import json from "highlight.js/lib/languages/json";
    // import 'highlight.js/styles/github.css';
    import 'highlight.js/styles/atom-one-light.css';

    export let code: Record<string, any>;

    hljs.registerLanguage('json', json);
    const highlightedCode = hljs.highlight(JSON.stringify(code, null, 2), {language: 'json'}).value

</script>

<pre><code>{@html highlightedCode}</code></pre>
