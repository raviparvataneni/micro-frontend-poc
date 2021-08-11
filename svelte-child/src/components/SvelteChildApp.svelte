<script>
    import { Router } from 'svelte-routing';
    import Pager from './Pager.svelte';
    import GlobalRouting from './GlobalRouter.svelte';
</script>

<style>
    .SvelteChild {
        border: 1px solid black;
    }

    .SvelteChild > h1 {
        background-color: yellow;
    }
</style>

<div class="SvelteChild">
    <h1>Svelte Child</h1>
    <Router>
        <GlobalRouting />
        <Pager />
    </Router>
</div>