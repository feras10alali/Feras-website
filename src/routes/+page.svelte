<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { page } from "$app/stores"


  onMount(() => {
        if ($page.data.session) {
          goto ('/Home');
        }
    });
    onMount(() => {
        if (!$page.data.session) {
          goto ('/Home');
        }
    });
</script>