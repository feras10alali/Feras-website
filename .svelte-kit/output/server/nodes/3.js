

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.0KniVZer.js","_app/immutable/chunks/5.jX7F8vbw.js","_app/immutable/chunks/index.BsNNkGcD.js","_app/immutable/chunks/entry.C1V1UjnN.js","_app/immutable/chunks/stores.XFx3Gozs.js"];
export const stylesheets = ["_app/immutable/assets/3.DfTVkcZh.css"];
export const fonts = [];
