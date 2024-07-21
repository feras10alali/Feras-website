import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DYJjWgHO.js","_app/immutable/chunks/6.3Z8XxjRC.js","_app/immutable/chunks/index.ruX3qJc0.js"];
export const stylesheets = [];
export const fonts = [];
