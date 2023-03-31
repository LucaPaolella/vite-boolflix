<script>
import CountryFlag from "vue-country-flag-next"

export default {
    name: "Card",
    components: {
        CountryFlag
    },
    props: {
        info: Object,
    },
    computed: {
        getLanguage() {
            switch (this.info.original_language) {
                case "en":
                    return "gb";
                case "he":
                    return "il";

                default:
                    return this.info.original_language;
            }
        },
        getVote() {
            return Math.ceil(this.info.vote_average / 2)
        }
    },
    methods: {
        getImageUrl(path) {
            if (!path) {
                return 'https://via.placeholder.com/150x225?text=No+Image';
            }
            return `https://image.tmdb.org/t/p/w200${path}`;
        }
    }
}
</script>

<template>
    <article>
        <h3>{{ info.title || info.name }}</h3>
        <h4>{{ info.original_title || info.original_name }}</h4>
        <img :src="getImageUrl(info.poster_path)" alt="">
        <!--<div>{{ getLanguage }}</div>-->
        <country-flag :country="getLanguage" size="small" />
        <!--<div>{{ getVote }}</div>-->
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />

    </article>
</template>

<style>
.fa-star {
    color: orange;
}
</style>

