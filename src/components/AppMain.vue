<script>
export default {
    name: 'Main',
    /*components: {
        CharacterSearch,
        CharacterList
    },*/
    methods: {
        handleSearch() {
            console.log('ho ascoltato questo evento');
            this.$emit('qualcosa');
        }
    }
}
</script>

<template></template>