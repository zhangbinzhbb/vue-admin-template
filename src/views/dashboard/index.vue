<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">主界面name: {{ name }} </div> -->
    <asynccomp />
  </div>
</template>

<script>
import { preFetchLib } from 'hel-micro'
import { mapGetters } from 'vuex'
// import commp from 'lib-zhangbb'
// console.log('commp===>', commp)

const enableCustom = !!window.location.port
const fetchOptions = {
  custom: {
    host: 'http://localhost:7001',
    enable: enableCustom
  }
}
export default {
  name: 'Dashboard',
  components: {
    asynccomp: async() => {
      const mod = await preFetchLib('lib-zhangbb', fetchOptions)
      console.log('mod===>', mod)
      return mod.SomeModule
    }
  },
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
