import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DSkytNUg.js","_app/immutable/chunks/5.jX7F8vbw.js","_app/immutable/chunks/index.BsNNkGcD.js"];
export const stylesheets = [];
export const fonts = [];
