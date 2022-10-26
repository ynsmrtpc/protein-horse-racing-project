import { defineStore } from 'pinia';

export const useHorsesStore = defineStore('horse', {
    state: () => {
        return {
            horses: {
                horse_1: {
                    name: "Kanlı Nigar",
                    color: "maroon",
                },
                horse_2: {
                    name: "Yüz Numaralı Adam",
                    color: "red",
                },
                horse_3: {
                    name: "İnek Şaban",
                    color: "blueviolet",
                },
                horse_4: {
                    name: "Kılıbık",
                    color: "yellow",
                },
                horse_5: {
                    name: "Orta Direk Şaban",
                    color: "green",
                },
                horse_6: {
                    name: "Bekçiler Kralı",
                    color: "fuchsia",
                },
                horse_7: {
                    name: "Üç Kağıtçı",
                    color: "purple",
                },
                horse_8: {
                    name: "Tosun Paşa",
                    color: "olive",
                },
            }
        }
    }
})