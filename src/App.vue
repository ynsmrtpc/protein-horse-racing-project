<script setup>
import { ref, watch } from "vue";
import { useHorsesStore } from "./stores/horses";
import Horse from "./components/Horse/Horse.vue";
import Scoreboard from "./components/LeaderBoard/LeaderBoard.vue";
import TimeCounter from "./components/Counter/TimeCounter.vue";
import RaceResult from "./components/RaceResults/RaceResult.vue";
import { db } from "./firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const startRaceToggle = ref(false);
const baslatBtn = ref("BAŞLAT");
const hiddenButton = ref(true);
const showCounter = ref(0);
const horseColor = ref([]);
const saveDatabase = ref(false);

const horses = useHorsesStore();
horses.horses.forEach((horse) => horseColor.value.push(horse.color));

const addDatabase = async () => {
  try {
    const docRef = await addDoc(collection(db, "results"), {
      horses: horses.horses.map((horse) => horse.name),
      date: new Date().getTime(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
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
  startRaceToggle.value = false;
  saveDatabase.value = false;
};

watch(
  () => saveDatabase.value,
  () => {
    if (saveDatabase.value) {
      addDatabase();
    }
  }
);
</script>

<template>
  <h1 class="header">HORSE RACING</h1>
  <TimeCounter v-if="showCounter > 0"></TimeCounter>
  <template v-else>
    <div class="wrapper">
      <div class="scoreboard">
        <Scoreboard :horseName="horses.horses"></Scoreboard>
      </div>

      <div class="road">
        <template v-for="color in horseColor" :key="color">
          <Horse
            :horseColor="{ color }"
            :startRaceToggle="startRaceToggle"
            v-model:btnName="baslatBtn"
            v-model:hiddenButton="hiddenButton"
            v-model:saveDatabase="saveDatabase"
          ></Horse>
        </template>

        <button v-if="hiddenButton" class="startButton" @click="startRace">
          {{ baslatBtn }}
        </button>
      </div>
    </div>
    <RaceResult></RaceResult>
  </template>
</template>

<style scoped lang="scss">
.header {
  text-align: center;
  margin: 1.5rem;
  letter-spacing: 0.6rem;
  background-image: linear-gradient(
    to left,
    rgba(224, 167, 92, 0.9),
    rgba(165, 163, 168, 0.9),
    rgba(224, 167, 92, 0.7),
    rgba(165, 163, 168, 0.7),
    rgba(224, 167, 92, 0.5),
    rgba(165, 163, 168, 0.5),
    rgba(224, 167, 92, 0.3),
    rgba(165, 163, 168, 0.3)
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
}
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
