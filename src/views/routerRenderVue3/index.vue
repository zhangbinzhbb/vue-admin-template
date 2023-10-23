<template>
  <div>
    <div id="routerRender" />
    <RemoteCompAsyncBetter />
  </div>
</template>

<script>
import Vue from 'vue'
// https://github.com/hel-eco/hel-tpl-remote-vue-comp
import { preFetchLib } from 'hel-micro'
import router from '@/router'
import App from '@/App'
// 本地联调
const enableCustom = !!window.location.port
const fetchOptions = {
  custom: {
    host: 'http://localhost:7002',
    enable: enableCustom,
    /**
     * defaut: false
     * 是否跳过获取 hel-meta.json 的获取步骤，true：跳过，false：不跳过
     * 当用户设定 custom.host 配置时，hel-micro 采取总是相信该 host 存在一个 hel-meta.json 文件并尝试去获取
     * 如获取失败时再去解析该 host 对应的首页并现场解析出 hel-meta.json 数据
     * 因此获取动作可能会报一个 404 not found 符合预期的行为，用户可设定 skipFetchHelMeta 为 true 跳过此步骤
     * 但建议加载线上模块时（非本地联调时），保持 skipFetchHelMeta 为 false 比较好，有利于提高模块加载速度（ 无html解析hel-meta.json过程 ）
     */
    skipFetchHelMeta: true
  }
}
export default {
  name: 'HelloWorld',
  components: {
    // better way, see doc: https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html
    RemoteCompAsyncBetter: () => ({
      component: new Promise(async(r, j) => {
        try {
          const mod = await preFetchLib('hel-tpl-remote-vue3-comps-ts', fetchOptions)
          console.log('mod11222===>', mod)
          const App = mod.App
          const app = mod.Export(App, 'routerRender')
          r(app)
        } catch (err) {
          j(err)
        }
      })
    })
  }
}
</script>
