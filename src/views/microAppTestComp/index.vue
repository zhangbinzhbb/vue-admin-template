<template>
  <div class="hello">
    <RemoteCompAsyncBetter name="loaded in codesandbox" />
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
          r(mod.MicroAppTest)
        } catch (err) {
          j(err)
        }
      })
    })
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
