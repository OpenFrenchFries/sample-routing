<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>Greetings</h1>
<p>Hello {@html data.username}</p>