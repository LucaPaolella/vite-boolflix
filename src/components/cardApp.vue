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
        }
    }
}
</script>

<template>
    <article>
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
        <div>{{ getLanguage }}</div>
        <country-flag :country="getLanguage" size="small" />
        <div>{{ info.vote_average }}</div>

    </article>
</template>

