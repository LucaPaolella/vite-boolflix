import { reactive } from "vue";

export const store = reactive({
    film: [],
    filmFound: 0,
    searchKey: '',
    searchStatus: ''
})