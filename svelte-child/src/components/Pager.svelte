<script>
    import { Route, Link } from 'svelte-routing';
    import Page from './Page.svelte';
    import { onMount, onDestroy } from 'svelte';
    import { globalHistory } from 'svelte-routing/src/history';

    let pathname = window.location.pathname;
    let unsubscribe;

    onMount(() => {
        unsubscribe = globalHistory.listen((arg) => {
            pathname = arg.location.pathname;
        });
    });

    onDestroy(() => {
        unsubscribe();
    });

    $: btnActive1 = pathname === '/page/1';
    $: btnActive2 = pathname === '/page/2';
    $: btnActive3 = pathname === '/page/3';
</script>

<style>
    .Pager {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Pager .Buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .Pager button {
        background-color: unset;
        border: 1px solid black;
    }

    .Pager button.active {
        background-color: yellow;
    }
</style>

<div class="Pager">
    <div class="Buttons">
        <Link to="/page/1">
            <button class:active={ btnActive1 }>Page 1</button>
        </Link>
        <Link to="/page/2">
            <button class:active={ btnActive2 }>Page 2</button>
        </Link>
        <Link to="/page/3">
            <button class:active={ btnActive3 }>Page 3</button>
        </Link>
    </div>
    <div>
        <Route path="/page/:number" component={ Page } />
    </div>
</div>