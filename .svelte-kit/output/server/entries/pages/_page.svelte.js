import { c as create_ssr_component, d as compute_rest_props, f as spread, g as escape_attribute_value, h as escape_object, i as add_attribute, b as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { S as SignIn } from "../../chunks/SignIn.js";
import "devalue";
import { p as page } from "../../chunks/stores.js";
const SignOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["className", "options", "signOutPage"]);
  let { className = "" } = $$props;
  let { options = void 0 } = $$props;
  let { signOutPage = "signout" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.signOutPage === void 0 && $$bindings.signOutPage && signOutPage !== void 0) $$bindings.signOutPage(signOutPage);
  return `<form${spread(
    [
      { method: "POST" },
      {
        action: escape_attribute_value(`/${signOutPage}`)
      },
      {
        class: escape_attribute_value(`signOutButton ${className}`)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${options ? `${options?.redirect ? `<input type="hidden" name="redirect"${add_attribute("value", options.redirect, 0)}>` : ``} ${options?.redirectTo ? `<input type="hidden" name="redirectTo"${add_attribute("value", options.redirectTo, 0)}>` : ``}` : ``} <button type="submit">${slots.submitButton ? slots.submitButton({}) : `Sign Out`}</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 data-svelte-h="svelte-h639cv">SvelteKit Auth Example</h1> <div>${$page.data.session ? `${$page.data.session.user?.image ? `<img${add_attribute("src", $page.data.session.user.image, 0)} class="avatar" alt="User Avatar">` : ``} <span class="signedInText"><small data-svelte-h="svelte-qavuiv">Signed in as</small><br> <strong>${escape($page.data.session.user?.name ?? "User")}</strong></span> ${validate_component(SignOut, "SignOut").$$render($$result, {}, {}, {
    submitButton: () => {
      return `<div slot="submitButton" class="buttonPrimary" data-svelte-h="svelte-1tbj6zn">Sign out</div>`;
    }
  })}` : `<span class="notSignedInText" data-svelte-h="svelte-zm114h">You are not signed in</span> ${validate_component(SignIn, "SignIn").$$render($$result, { provider: "github", signInPage: "signin" }, {}, {})} ${validate_component(SignIn, "SignIn").$$render($$result, { provider: "google", signInPage: "signin" }, {}, {})} ${validate_component(SignIn, "SignIn").$$render(
    $$result,
    {
      provider: "twitter",
      signInPage: "signin"
    },
    {},
    {}
  )}`}</div>`;
});
export {
  Page as default
};
