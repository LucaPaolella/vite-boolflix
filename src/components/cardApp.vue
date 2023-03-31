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
        },

        //publicità

        mostraAlert() {
            alert("pubblicità");
        }
    }
}
</script>

<template>
    <article class="card flex">

        <div class="container-img flex">
            <div class="description-container">
                <p class="description">{{ info.overview }}</p>
            </div>
            <img :src="getImageUrl(info.poster_path)" alt="">
        </div>

        <div class="container-info">
            <a href="#" @click="mostraAlert">
                <h3>{{ info.title || info.name }}</h3>
            </a>
            <a href="#">
                <h4>{{ info.original_title || info.original_name }}</h4>
            </a>
        </div>

        <div>
            <country-flag :country="getLanguage" size="small" />
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
        </div>

    </article>
</template>

<style></style>

