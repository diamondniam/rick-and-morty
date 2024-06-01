import { defineStore } from "pinia";
import axios from "axios";
import filter from "../components/Filter.vue";

export const Api = defineStore("api", {
    state: () => ({
        endpoint: 'https://rickandmortyapi.com/api/character/',
        cards: [],
        pagesQuantity: 0,
        pageNumber: 1,
        filterName: '',
        filterStatus: ''
    }),
    actions: {
        setFilters(filterName, filterStatus) {
            this.filterName = filterName
            this.filterStatus = filterStatus
        },
        increasePageNumber() {
            if (this.pageNumber < this.pagesQuantity) {
                this.pageNumber += 1;
            }
        },
        decreasePageNumber() {
            if (this.pageNumber > 1) {
                this.pageNumber -= 1;
            }
        },
        resetPageNumber() {
            this.pageNumber = 1;
        },
        async getData() {
            try {
                const response = await axios.get(`${this.endpoint}?page=${this.pageNumber + this.filterName + this.filterStatus}`)
                return response.data
            } catch (error) {
                console.error('Произошла ошибка: ', error)
            }
        }
    }
})