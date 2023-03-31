import { reactive } from "vue";

export const store = reactive({
    config: {
        urlApi: 'https://api.themoviedb.org/3',
        urlMovie: 'https://api.themoviedb.org/3/search/movie',
        urlTvShows: 'https://api.themoviedb.org/3/search/tv',
        apiKey: 'f18ce2abcd2d9bd622cfeffbe75a5d26',
        defaultLang: 'it-IT',
    },
    movies: [],
    tv: [],
    searchkey: ''

})