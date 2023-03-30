import { reactive } from "vue";

export const store = reactive({
    config: {
        urlMovie: 'https://api.themoviedb.org/3/search/movie',
        apiKey: 'f18ce2abcd2d9bd622cfeffbe75a5d26',
        defaultLang: 'it-IT',
    },
    movies: [],
    searchkey: ''

})