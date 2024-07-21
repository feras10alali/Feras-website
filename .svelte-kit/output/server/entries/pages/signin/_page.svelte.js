import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../chunks/ssr.js";
import "devalue";
import { p as page } from "../../../chunks/stores.js";
const GithubIcon = "/_app/immutable/assets/github.C8rB9_J8.png";
const css = {
  code: "#signin.svelte-dk48rh{display:block;align-items:center;justify-content:center;text-align:center;grid-column:4}#Github.svelte-dk48rh{text-align:center;justify-content:left;width:304;height:50px;padding:12px 12px 16px 16px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import { SignIn } from \\"@auth/sveltekit/components\\"\\r\\n    import { page } from \\"$app/stores\\"\\r\\n    import { signIn } from \\"@auth/sveltekit/client\\";\\r\\n    import { onMount } from 'svelte';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import GithubIcon from \\"$lib/assets/icons/github.png\\";\\r\\n    \\r\\n\\r\\n    onMount(() => {\\r\\n        if ($page.data.session) {\\r\\n          goto ('/Home');\\r\\n        }\\r\\n    });\\r\\n<\/script>\\r\\n<!DOCTYPE html>\\r\\n\\r\\n\\r\\n    {#if $page.data.session}\\r\\n        <p></p>\\r\\n    {:else}\\r\\n        <div class=\\"position-absolute top-50 start-50 translate-middle\\">\\r\\n            <div id=\\"signin\\">\\r\\n                <div id=\\"providers\\">\\r\\n                    <button on:click={() => signIn(\\"github\\")} id=\\"Github\\"><img src={GithubIcon} alt=\\"Github\\" height=\\"24\\" width=\\"24\\">sign in with github</button>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    {/if}\\r\\n\\r\\n<style>\\r\\n    \\r\\n    #signin{\\r\\n        display: block;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        text-align: center;\\r\\n\\r\\n        grid-column: 4;\\r\\n    }\\r\\n\\r\\n    #Github{\\r\\n        text-align: center;\\r\\n        justify-content: left;\\r\\n        width: 304;\\r\\n        height: 50px;\\r\\n        padding: 12px 12px 16px 16px;\\r\\n    }\\r\\n</style>\\r\\n  "],"names":[],"mappings":"AAgCI,qBAAO,CACH,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAElB,WAAW,CAAE,CACjB,CAEA,qBAAO,CACH,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAC5B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<!DOCTYPE html> ${$page.data.session ? `<p></p>` : `<div class="position-absolute top-50 start-50 translate-middle"><div id="signin" class="svelte-dk48rh"><div id="providers"><button id="Github" class="svelte-dk48rh" data-svelte-h="svelte-1n3icgm"><img${add_attribute("src", GithubIcon, 0)} alt="Github" height="24" width="24">sign in with github</button></div></div></div>`}`;
});
export {
  Page as default
};
