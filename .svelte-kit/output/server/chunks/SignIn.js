import { c as create_ssr_component, d as compute_rest_props, f as spread, g as escape_attribute_value, h as escape_object, i as add_attribute, j as each, e as escape } from "./ssr.js";
import "devalue";
import "./stores.js";
const SignIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["className", "provider", "signInPage", "options", "authorizationParams"]);
  let { className = "" } = $$props;
  let { provider = "" } = $$props;
  let { signInPage = "signin" } = $$props;
  let { options = void 0 } = $$props;
  let { authorizationParams = void 0 } = $$props;
  const callbackUrl = options instanceof FormData ? options.get("redirectTo") : options?.redirectTo;
  const redirect = options instanceof FormData ? options.get("redirect") : options?.redirectTo;
  const authorizationParamsInputs = authorizationParams ? typeof authorizationParams === "string" && authorizationParams ? new URLSearchParams(authorizationParams) : authorizationParams : void 0;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.provider === void 0 && $$bindings.provider && provider !== void 0) $$bindings.provider(provider);
  if ($$props.signInPage === void 0 && $$bindings.signInPage && signInPage !== void 0) $$bindings.signInPage(signInPage);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.authorizationParams === void 0 && $$bindings.authorizationParams && authorizationParams !== void 0) $$bindings.authorizationParams(authorizationParams);
  return `<form${spread(
    [
      { method: "POST" },
      {
        action: escape_attribute_value(`/${signInPage}`)
      },
      {
        class: escape_attribute_value(`signInButton ${className}`)
      },
      escape_object($$restProps)
    ],
    {}
  )}><input type="hidden" name="providerId"${add_attribute("value", provider, 0)}> ${callbackUrl ? `<input type="hidden" name="callbackUrl"${add_attribute("value", callbackUrl, 0)}>` : ``} ${redirect ? `<input type="hidden" name="redirect"${add_attribute("value", redirect, 0)}>` : ``} ${authorizationParamsInputs ? `${each(Object.entries(authorizationParamsInputs), ([key, value]) => {
    return `<input type="hidden"${add_attribute("name", `authorizationParams-${key}`, 0)}${add_attribute("value", value, 0)}>`;
  })}` : ``} ${provider === "credentials" ? `${slots.credentials ? slots.credentials({}) : ``}` : ``}  ${provider === "email" || provider === "sendgrid" || provider === "resend" ? `${slots.email ? slots.email({}) : ` <label class="section-header"${add_attribute("for", `input-email-for-${provider}-provider`, 0)}>Email</label> <input id="input-email-for-email-provider" type="email" name="email" placeholder="email@example.com" required> `}` : ``} <button type="submit">${slots.submitButton ? slots.submitButton({}) : `Signin${escape(provider ? ` with ${provider}` : "")}`}</button></form>`;
});
export {
  SignIn as S
};
