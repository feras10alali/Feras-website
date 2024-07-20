<script>
    import { SignIn } from "@auth/sveltekit/components"
    import { page } from "$app/stores"
    import { redirect } from '@sveltejs/kit';   
    import { signIn } from "@auth/sveltekit/client";
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';



    onMount(() => {
        if ($page.data.session) {
          goto ('/Home');
        }
    });
</script>

    {#if $page.data.session}
        <p></p>
    {:else}
        <div id="main">
            <input type="email">
            <input type="password">
            <SignIn provider="google" signInPage="signin" id="Google"/>
            <div id="Github"><SignIn provider="github" signInPage="signin"/></div>
            <div id="X"><SignIn provider="twitter" signInPage="signin"/></div>
        </div>
    {/if}

<style>
    #main{
        align-items: center;
        justify-content: center;
        text-align: center;
        display: grid;
        grid-column: 4;
    }

    #Google{
        height: 500px;
    }

    #Google #Github #X{
        align-items: center;
        justify-content: center;
        text-align: center;
    }

</style>
  