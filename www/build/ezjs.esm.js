import { b as bootstrapLazy } from './index-4a2da18d.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-712b4214.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["loader-circle",[[1,"loader-circle"]]],["my-backdrop",[[1,"my-backdrop"]]],["my-dropdown",[[0,"my-dropdown",{"name":[1],"toggle":[32]}]]],["my-model",[[1,"my-model",{"text":[1]}]]],["my-nav",[[1,"my-nav"]]],["product-card",[[1,"product-card",{"badge":[1],"img":[1],"category":[1],"item":[1],"description":[1],"price":[1]}]]],["progress-bar",[[1,"progress-bar",{"progress":[1]}]]]], options);
});
