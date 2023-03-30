<script>
export default {
    name: "Card",
    props: {
        info: Object
    }
}
</script>

<template>
    <article>
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
        <div>{{ info.original_language }}</div>
        <div>{{ info.vote_average }}</div>
    </article>
</template>

