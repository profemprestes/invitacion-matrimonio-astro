import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Ct7UOA68.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_DmXobP94.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///G:/01-Galia/Nueva%20carpeta/invitacion-matrimonio-astro/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.18_rollup@4.40.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.6Ssp1IGe.js"}],"styles":[{"type":"external","src":"/_astro/index.B3timFQY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.18_rollup@4.40.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-manifest":"manifest_9qDUHJGc.mjs","@/components/Loader.jsx":"_astro/Loader.CwAaNDnC.js","@/components/AsistenciaModal.jsx":"_astro/AsistenciaModal.CnmNTAQM.js","@/components/CardParty.jsx":"_astro/CardParty.CWjVAkrk.js","@/components/ControlMusic.jsx":"_astro/ControlMusic.pS8K55MQ.js","@astrojs/react/client.js":"_astro/client.B_NlgfYn.js","/astro/hoisted.js?q=0":"_astro/hoisted.6Ssp1IGe.js","G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/node_modules/.pnpm/@nextui-org+dom-animation@2_f2b7463d3719ffb95dfb90d169dd63b7/node_modules/@nextui-org/dom-animation/dist/index.mjs":"_astro/index.DB1IPcs2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/parisienne-latin-ext-400-normal.WJ67AmXs.woff2","/_astro/parisienne-latin-400-normal.21gANpEP.woff2","/_astro/rubik-arabic-wght-normal.B1cAZTnW.woff2","/_astro/rubik-hebrew-wght-normal.ByHZ5yRs.woff2","/_astro/rubik-cyrillic-wght-normal.B2b851D6.woff2","/_astro/rubik-latin-wght-normal.CfpeRlx2.woff2","/_astro/raleway-cyrillic-ext-wght-normal.Dc5xu4We.woff2","/_astro/rubik-cyrillic-ext-wght-normal.CmWdqlJJ.woff2","/_astro/raleway-cyrillic-wght-normal.CqKTn0sv.woff2","/_astro/raleway-vietnamese-wght-normal.wikBsL6_.woff2","/_astro/raleway-latin-wght-normal.B0Bc4KU0.woff2","/_astro/rubik-latin-ext-wght-normal.dLedyG89.woff2","/_astro/raleway-latin-ext-wght-normal.Dm8rnUUK.woff2","/_astro/parisienne-latin-ext-400-normal.BbpcLVCZ.woff","/_astro/parisienne-latin-400-normal.Pmk_HDfx.woff","/_astro/index.B3timFQY.css","/arrow_down.gif","/camera.gif","/cancion-fondo.mp3","/celebration.gif","/ceremonia.gif","/daisy.svg","/divider.png","/dress-code.gif","/Encuesta Usuario Final (1).pdf","/favicon.png","/favicon.svg","/heard-loading.gif","/heard-message.gif","/hero.svg","/hero.webp","/hero1.svg","/hero2.webp","/hero3.svg","/hero5.svg","/hero6.svg","/hero7.svg","/herogalia.zip","/love-heart.gif","/mark_close.svg","/mark_open.svg","/music.gif","/tips.gif","/photos/novia.jpg","/photos/novia.webp","/photos/noviav2.webp","/photos/novio.jpg","/_astro/AsistenciaModal.CnmNTAQM.js","/_astro/CardParty.CWjVAkrk.js","/_astro/client.B_NlgfYn.js","/_astro/ControlMusic.pS8K55MQ.js","/_astro/hoisted.6Ssp1IGe.js","/_astro/index.CZlPm10g.js","/_astro/index.DaFbeeSK.js","/_astro/index.DB1IPcs2.js","/_astro/index.esm.DOIeKjNB.js","/_astro/jsx-runtime.CYiYLu1p.js","/_astro/Loader.CwAaNDnC.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"gQ0o3UBpRXBLjHDlD8S6Roty17afH0H9DrFc71aA4Bo=","experimentalEnvGetSecretEnabled":false});

export { manifest };
