import Vue from 'vue'
import { preFetchLib, bindVueRuntime } from 'hel-micro'

bindVueRuntime({ Vue })

// const fetchOptions = {
//   async getSubAppAndItsVersionFn() {
//     const res = await fetch(
//       "https://hel-eco.github.io/hel-tpl-remote-vue-comp/as_v1/hel-meta.json"
//     );
//     const meta = await res.json();
//     console.log("meta", meta);
//     return meta;
//   }
// };

// 本地联调
// const enableCustom = !!window.location.port
// const fetchOptions = {
//   custom: {
//     host: 'http://localhost:7001',
//     enable: enableCustom
//   }
// }

async function main() {
  // console.log('fetchOptions:', fetchOptions)
  // from unpkg by default
  // see https://unpkg.com/hel-tpl-remote-vue-comps@1.1.3/hel_dist/index.html
  // await preFetchLib("hel-tpl-remote-vue-comps");

  // from user custom deploy location
  // see https://hel-eco.github.io/hel-tpl-remote-vue-comp/index.html
  // await preFetchLib('lib-zhangbb', fetchOptions)

  await import('./loadApp')
}

main().catch(console.error)
