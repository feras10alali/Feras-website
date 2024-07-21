<script>
    import { SignIn } from "@auth/sveltekit/components"
    import { page } from "$app/stores"
    import { signIn } from "@auth/sveltekit/client";
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import GithubIcon from "$lib/assets/icons/github.png";
    

    onMount(() => {
        if ($page.data.session) {
          goto ('/Home');
        }
    });
</script>
<!DOCTYPE html>


    {#if $page.data.session}
        <p></p>
    {:else}
        <div class="position-absolute top-50 start-50 translate-middle">
            <div id="signin">
                <div id="providers">
                    <button on:click={() => signIn("github")} id="Github"><img src={GithubIcon} alt="Github" height="24" width="24">sign in with github</button>
                </div>
            </div>
        </div>
    {/if}

<style>
    
    #signin{
        display: block;
        align-items: center;
        justify-content: center;
        text-align: center;

        grid-column: 4;
    }

    #Github{
        text-align: center;
        justify-content: left;
        width: 304;
        height: 50px;
        padding: 12px 12px 16px 16px;
    }
</style>
  