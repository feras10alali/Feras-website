import * as server from '../entries/pages/signin/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signin/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.m5tOVWfF.js","_app/immutable/chunks/6.3Z8XxjRC.js","_app/immutable/chunks/index.ruX3qJc0.js","_app/immutable/chunks/entry.B93WCNDX.js","_app/immutable/chunks/stores.B9cgTbae.js","_app/immutable/chunks/client.CDuZTxnV.js"];
export const stylesheets = ["_app/immutable/assets/5.Ct_M38ah.css"];
export const fonts = [];
