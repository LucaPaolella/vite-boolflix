<script>
//import { store } from './store';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
}

</script>

<template>
  <AppMain />
</template>

<style lang="scss" scoped>
@import "./assets/main.scss";
</style>
