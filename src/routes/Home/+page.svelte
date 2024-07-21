<script>
    import { SignOut } from "@auth/sveltekit/components";
    import { page } from "$app/stores";
    import logo from '$lib/assets/Blogo.png';
    import TV from '$lib/assets/oldTV.mp4';
    import noPicture from '$lib/assets/noPicture.jpeg'
    import { goto } from '$app/navigation';
    import { signOut } from "@auth/sveltekit/client";
    import Header from "../../components/Header.svelte";

    let session = false;
    const account =() =>{
      goto('/myAccount');
    }
//    onMount(() => {
//        if (!$page.data.session) {
//        goto('/signin');
//        }
//    }); 
</script>
<header>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/courses">courses</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/upcoming">upcoming</a>
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
      {#if $page.data.session}
        <!-- dropstart butoon -->
        <div class="btn-group dropstart">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {#if $page.data.session.user?.image}
              <img src={$page.data.session.user.image} width="50px" id="droped-avatar"><br>
            {:else}
              <img src={noPicture} width="50px" id="droped-avatar"><br>
            {/if}
          </button>
          <div class="dropdown-menu">
            {#if $page.data.session.user?.image}
              <img src={$page.data.session.user.image} width="50px" id="droped-avatar"><br>
            {:else}
              <img src={noPicture} width="50px" id="droped-avatar"><br>
            {/if}
            
            <p id="username"><strong>@{$page.data.session.user?.name ?? "User"}</strong></p>
            <hr  id="hr">
            <ul>
              <li class="dropstar" on:click={account}>
                <a>Account</a>
              </li>
              <hr  id="hrul">
              <li on:click={signOut}>
                <a>signOut</a>
              </li>
            </ul>
          </div>
        </div>
      {:else}
        <a href="/signin" id="signin">sign in</a>
      {/if}
  </nav>
</header>
    <div id="oldTV">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video autoplay>
          <source src={TV} type="video/mp4">
        </video>
    </div>
  <div class="card-group">
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>


      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    

    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
<style>
  body{
    width: 100vw;
    margin: 0;
    padding: 0;
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
    border: 1px solid #000000;
    border-radius: 50%;
  }

  #signin{
    padding-top: 1.3px;
    height: 38px;
    width: 75px;
    color: #f0f8ff;
    border: 1.25px solid #f0f8ff;
    margin-right: 25px;
    text-align: center;
    justify-content: center;
    font-size: 1.1em;
    font-weight: 700;
  }

  a:hover{
    cursor: pointer;
  }

  .navbar{
      background-color: #171723;
  }
  .navbar-brand img{
      height: 75px;
      padding-left: 100px;
      padding-right: 100px;
  }

  #oldTV{
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #070718;
  }

  #oldTV video{
    height: 800px;
    margin-left: 50px;
    margin-top: 100px;
  }

  .navbar-brand{
      margin-right: 0;
  }

  .navbar-nav{
      align-items: baseline;
  }

  .dropstart{
      margin-right: 25px;
  }


  .dropstar:hover{
    cursor: pointer;
  }

  .dropdown-menu{
    background-color: #6C757D;
    margin-right: 4.75px;
    align-items: center;
    text-align: center;
    
  }

  #username{
    margin-top: 2px;
    margin-bottom: 0px;

  }

  #hr{
    margin-top: 0px;

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

  #corses{
    width: 100%;
    background-color: #000000;
    display: grid;
    
  }



</style>