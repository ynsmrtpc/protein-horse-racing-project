<script setup>
import { ref } from "vue";
import Horse from "./components/Horse/Horse.vue";
import Skorboard from "./components/LeaderBoard/LeaderBoard.vue";

const startRaceToggle = ref(false);
const baslatBtn = ref("BAŞLAT");
const hiddenButton = ref(true);
const showCounter = ref(0);

const horses = {
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
};

const startRace = () => {
  showCounter.value = 5;
  const counterTime = setInterval(function () {
    if (showCounter.value <= 0) {
      clearInterval(counterTime);
    }
    showCounter.value = showCounter.value - 1;
  }, 1000);
  setTimeout(() => {
    hiddenButton.value = false;
    startRaceToggle.value = true;
    showCounter.value = 0;
  }, 5000);
};
</script>

<template>
  <strong v-if="showCounter > 0">{{ showCounter }}</strong>
  <div class="wrapper">
    <div class="scoreboard">
      <Skorboard :horseName="horses"></Skorboard>
    </div>
    <div class="road">
      <template v-for="color in horses">
        <Horse
          :horseColor="{ color }"
          :startRaceToggle="startRaceToggle"
          v-model:btnName="baslatBtn"
          v-model:hiddenButton="hiddenButton"
        ></Horse>
      </template>
      <button v-if="hiddenButton" class="startButton" @click="startRace">
        {{ baslatBtn }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
}
.scoreboard {
  display: grid;
  justify-content: center;
  width: auto;
}
.road {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
}

.startButton {
  padding: 0.6rem 1.2rem;
  background-color: #e0a75c;
  color: #fafafa;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1.5rem;
  &:active {
    border: 1px solid #fafafa;
    outline: none;
  }
}
</style>
