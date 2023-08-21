<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import { preFetchLib } from 'hel-micro'
export default {
  name: 'App',
  created() {
    console.log('=======主应用app=========')
  }
}
</script>
