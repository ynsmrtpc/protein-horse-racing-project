<script setup>
import { ref } from "vue";
import Horse from "./components/Horse/Horse.vue";

const startRace = ref(true);

const colors = [
  "black",
  "red",
  "blueviolet",
  "yellow",
  "green",
  "white",
  "purple",
  "brown",
];
</script>

<template>
  <div class="road">
    <template v-if="startRace">
      <template v-for="color in colors">
        <Horse :horseColor="{ color }"></Horse>
      </template>
    </template>
    <button class="startButton" @click="startRace = true">BAŞLAT</button>
  </div>
</template>

<style scoped lang="scss">
.road {
  display: flex;
  flex-direction: column;
  align-items: center;
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
