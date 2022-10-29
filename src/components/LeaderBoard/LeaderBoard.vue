<script setup>
import { useHorsesStore } from "../../stores/horses";

const props = defineProps(["horseName"]);
const horses = useHorsesStore();
</script>

<template>
  <div class="scoreboard">
    <ul class="scoreboard__list">
      <li
        v-for="(horse, index) in horses.roadInfo"
        :style="{ color: horse.color }"
        class="scoreboard__name"
        :key="horse.name"
      >
        <div :style="{ backgroundColor: horse.color }" class="horse_icon"></div>
        {{ horse.name }}
        <strong class="sort">#{{ index + 1 }}</strong>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.scoreboard {
  margin: 0.6rem;
  color: #6c7e6c;
  &__name {
    display: flex;
    justify-content: space-between;
    border: 0.1rem solid #f0f8ff;
    list-style: none;
    padding: 0.6rem;
  }
  &__list {
    width: 25vw;
  }
}
.horse_icon {
  -webkit-mask: url(../../assets/horse.svg) no-repeat center;
  mask: url(../../assets/horse.svg) no-repeat center;
  padding: 15px;
}

.sort {
  color: #6c7e6c;
}
</style>
