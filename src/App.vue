<script>
import axios from 'axios';
import { store } from './store';
import cardApp from './components/cardApp.vue';

alert("pubblicità");

export default {
  name: 'App',
  components: {
    cardApp,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      //console.log('fai la ricerca');
      console.log(this.store.searchkey);

      //movie
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

      //serie tv
      axios.get(this.store.config.urlTvShows, {
        params: {
          api_key: this.store.config.apiKey,
          language: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      }).then((responseTv) => {
        console.log(responseTv);
        this.store.tv = responseTv.data.results;
      })
    },


  },
  computed: {
    results() {
      return [...this.store.movies, ...this.store.tv]
    }
  }
}

</script>

<template>
  <header class="flex">

    <div class="container-titolo flex">
      <h1>BOOLFLIX</h1>
      <h2>a PirateStreaming project</h2>
    </div>

    <div class="container-search">
      <input type="text" placeholder="Cerca" v-model="store.searchKey">
      <button @click="search">Avvia la ricerca</button>
    </div>
  </header>

  <main>

    <div class="container-main">
      <ul>
        <li v-for="result in results">
          <cardApp :info="result" />
        </li>
      </ul>
    </div>


  </main>

  <footer class="flex">
    <div class="pubblicità flex">
      <h2>Pubblicità</h2>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "./assets/main.scss";
</style>
