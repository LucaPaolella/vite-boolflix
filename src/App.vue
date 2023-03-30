<script>
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      console.log('fai la ricerca');
      console.log(this.store.searchkey);

      axios.get(this.store.config.urlMovie, {
        params: {
          api_key: this.store.config.apiKey,
          language: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      }).then((response) => {
        console.log(response);
        this.store.movies = response.data.results;
      })

    }
  }
}

</script>

<template>
  <div>
    <input type="text" placeholder="Cerca Film" v-model="store.searchKey">
    <button @click="search">Cerca</button>
  </div>


  <AppMain @qualcosa="search" />
</template>

<style lang="scss" scoped>
@import "./assets/main.scss";
</style>
