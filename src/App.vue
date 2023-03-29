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
      axios.get('https://api.themoviedb.org/3/movie/550?api_key=f18ce2abcd2d9bd622cfeffbe75a5d26', {
        params: {
          name: store.searchKey,
          status: store.searchStatus
        }
      })
        .then((response) => {
          console.log(response);
          this.store.film = response.data.results;
          this.store.filmFound = response.data.results.length;
        })
        .catch((error) => {
          console.log(error);
          this.store.characters = [];
          this.store.charactersFound = 0;
        })
    }
  },
  created() {
    this.search();
  }
}

</script>

<template>
  <AppMain @qualcosa="search" />
</template>

<style lang="scss" scoped>
@import "./assets/main.scss";
</style>
