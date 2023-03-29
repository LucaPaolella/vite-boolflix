import { reactive } from "vue";

export const store = reactive({
    characters: [],
    charactersFound: 0,
    searchKey: '',
    searchStatus: ''
})