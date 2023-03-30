<script>
import CountryFlag from "vue-country-flag-next"

export default {
    name: "Card",
    components: {
        CountryFlag
    },
    props: {
        info: Object
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
    }
}
</script>

<template>
    <article>
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
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

