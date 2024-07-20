import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { S as SignIn } from "../../../chunks/SignIn.js";
import "devalue";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/index.js";
const css = {
  code: "#main.svelte-1yubnsk{align-items:center;justify-content:center;text-align:center;display:grid;grid-column:4}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import { SignIn } from \\"@auth/sveltekit/components\\"\\r\\n    import { page } from \\"$app/stores\\"\\r\\n    import { redirect } from '@sveltejs/kit';   \\r\\n    import { signIn } from \\"@auth/sveltekit/client\\";\\r\\n    import { onMount } from 'svelte';\\r\\n    import { goto } from '$app/navigation';\\r\\n\\r\\n\\r\\n\\r\\n    onMount(() => {\\r\\n        if ($page.data.session) {\\r\\n          goto ('/Home');\\r\\n        }\\r\\n    });\\r\\n<\/script>\\r\\n\\r\\n    {#if $page.data.session}\\r\\n        <p></p>\\r\\n    {:else}\\r\\n        <div id=\\"main\\">\\r\\n            <input type=\\"email\\">\\r\\n            <input type=\\"password\\">\\r\\n            <SignIn provider=\\"google\\" signInPage=\\"signin\\" id=\\"Google\\"/>\\r\\n            <div id=\\"Github\\"><SignIn provider=\\"github\\" signInPage=\\"signin\\"/></div>\\r\\n            <div id=\\"X\\"><SignIn provider=\\"twitter\\" signInPage=\\"signin\\"/></div>\\r\\n        </div>\\r\\n    {/if}\\r\\n\\r\\n<style>\\r\\n    #main{\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        text-align: center;\\r\\n        display: grid;\\r\\n        grid-column: 4;\\r\\n    }\\r\\n\\r\\n    #Google{\\r\\n        height: 500px;\\r\\n    }\\r\\n\\r\\n    #Google #Github #X{\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n</style>\\r\\n  "],"names":[],"mappings":"AA8BI,oBAAK,CACD,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,CACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$page.data.session ? `<p></p>` : `<div id="main" class="svelte-1yubnsk"><input type="email"> <input type="password"> ${validate_component(SignIn, "SignIn").$$render(
    $$result,
    {
      provider: "google",
      signInPage: "signin",
      id: "Google"
    },
    {},
    {}
  )} <div id="Github">${validate_component(SignIn, "SignIn").$$render($$result, { provider: "github", signInPage: "signin" }, {}, {})}</div> <div id="X">${validate_component(SignIn, "SignIn").$$render(
    $$result,
    {
      provider: "twitter",
      signInPage: "signin"
    },
    {},
    {}
  )}</div></div>`}`;
});
export {
  Page as default
};
