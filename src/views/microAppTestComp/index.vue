<template>
  <div class="hello">
    <RemoteCompAsyncBetter name="loaded in codesandbox" />
    <!-- <RemoteCompAsyncBetter1 /> -->
  </div>
</template>

<script>
// https://github.com/hel-eco/hel-tpl-remote-vue-comp
import { preFetchLib } from 'hel-micro'

export default {
  name: 'HelloWorld',
  components: {
    RemoteCompAsyncBetter: () => ({
      component: new Promise(async(r, j) => {
        try {
          const mod = await preFetchLib('lib-zhangbb-component')
          console.log('mod===>', mod)
          r(mod.Hamburger)
        } catch (err) {
          j(err)
        }
      })
    })
    // RemoteCompAsyncBetter1: () => ({
    //   component: new Promise(async(r, j) => {
    //     try {
    //       const mod = await preFetchLib('hel-tpl-remote-vue-comps', {
    //         async getSubAppAndItsVersionFn() {
    //           const res = await fetch('https://hel-eco.github.io/hel-tpl-remote-vue-comp/as_v1/hel-meta.json')
    //           const meta = await res.json()
    //           return meta
    //         },
    //         hook: {
    //           beforeAppendAssetNode(passCtx) {
    //             const { url, setAssetUrl } = passCtx
    //             debugger
    //             // https://unpkg.com/remote-vue-project@1.0.6/hel_dist/css/27.aea1e7be.css
    //             // --->
    //             // https://cdn.jsdelivr.net/npm/remote-vue-project@1.0.6/hel_dist/css/27.aea1e7be.css
    //             // const jsdelivrUrl = url.replace('http://localhost:7001/static', 'https://cdn.jsdelivr.net/npm')
    //             const jsdelivrUrl = url.replace('https://hel-eco.github.io/', 'https://cdn.jsdelivr.net/npm')
    //             setAssetUrl(jsdelivrUrl)
    //           }
    //         }
    //       })
    //       r(mod.MicroAppTest)
    //     } catch (err) {
    //       j(err)
    //     }
    //   })
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
