import { defineStore } from 'pinia';

export const useHorsesStore = defineStore('horse', {
    state: () => {
        return {
            horses: [
                {
                    name: "Kanlı Nigar",
                    color: "maroon",
                    road: null
                },
                {
                    name: "Yüz Numaralı Adam",
                    color: "red",
                    road: null
                },
                {
                    name: "İnek Şaban",
                    color: "blueviolet",
                    road: null
                },
                {
                    name: "Kılıbık",
                    color: "yellow",
                    road: null
                },
                {
                    name: "Orta Direk Şaban",
                    color: "green",
                    road: null
                },
                {
                    name: "Bekçiler Kralı",
                    color: "fuchsia",
                    road: null
                },
                {
                    name: "Üç Kağıtçı",
                    color: "purple",
                    road: null
                },
                {
                    name: "Tosun Paşa",
                    color: "olive",
                    road: null
                },
            ]
        }
    },
    getters: {
        updateRoad: (state) => {
            return state.name
        }
    }
})