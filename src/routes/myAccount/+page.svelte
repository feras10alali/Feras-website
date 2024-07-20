<script>
    import { SignOut } from "@auth/sveltekit/components";
    import { page } from "$app/stores";
    import logo from '$lib/assets/Blogo.png';
    import TV from '$lib/assets/oldTV.mp4';
    import noPicture from '$lib/assets/noPicture.jpeg'
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { signOut } from "@auth/sveltekit/client";

    let session = false;

    onMount(() => {
        if (!$page.data.session) {
        goto('/signin');
        }
    }); 
</script>
{#if $page.data.session}
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">courses</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">upcoming</a>
            </li>


            <a class="navbar-brand">
              <img src={logo} alt="">
            </a>

            <li class="nav-item">
              <a class="nav-link" href="#">Discord</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-disabled="true">Social</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" aria-disabled="true">social</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="main">
      {#if $page.data.session.user?.image}
        <img src={$page.data.session.user.image} width="115px" id="droped-avatar">
      {:else}
        <img src={noPicture} width="50px" id="droped-avatar">
      {/if}
      <br>
      <p id="username"><strong>@{$page.data.session.user?.name ?? "User"}</strong></p>
      <br>
    </div>
    <div id="main-1">
      <a id="email">{$page.data.session.user?.email ?? "User"}</a>
      <button id="signout" on:click={signOut}>sign out</button>

    </div>
    
{/if}
<style>
    .body{
      background-color: #070718;
    }

    #main{
        display: grid; 
        justify-content: center;
        grid-row: 4;
        grid-column: 4;
        text-align: center;
        padding-top: 10vh;
        background-color: #070718;
    }

    #main-1{
      display: grid; 
        justify-content: center;
        grid-row: 4;
        grid-column: 4;
        text-align: center;
        background-color: #070718;
    }

    ul{
      align-items: center;
      text-align: center;
      list-style: none;
      padding: 0px;
      margin-bottom: 11px;
    }

    a{
      text-decoration: none;
      color: black;
    }

    #droped-avatar{
      border: 1px solid #a8a8a8;
      border-radius: 50%;
    }

    a:hover{
      cursor: pointer;
    }

    .navbar{
        background-color: #171723;
        padding-right: 1.7%;
    }
    .navbar-brand img{
        height: 75px;
        padding-left: 100px;
        padding-right: 100px;
    }

    .navbar-brand{
        margin-right: 0;
    }

    .navbar-nav{
        align-items: baseline;
    }


    #username, #email{
      margin-top: 2px;
      margin-bottom: 0px;
      color: #dadada;
    }

    #signout{
      margin-top: 50px;
    }
  
    .nav-link{
        padding-left: 30px;
        padding-right: 30px;
        color: #f0f8ff;
        font-size: 1.1em;
        font-weight: 800;
    }

    ::-webkit-scrollbar{
      width: 0.1px;
    }

  </style>
