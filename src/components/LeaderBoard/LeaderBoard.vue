<script setup>
const props = defineProps(["horseName"]);
</script>

<template>
  <div class="scoreboard">
    <ul v-for="horse in props.horseName" class="scoreboard__list">
      <div :style="{ backgroundColor: horse.color }" class="horse_icon"></div>
      <li :style="{ color: horse.color }" class="scoreboard__name">
        {{ horse.name }}
      </li>
      <strong>#</strong>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.scoreboard {
  margin: 0.6rem;
  color: #6c7e6c;

  &__list {
    border: 0.1rem solid #f0f8ff;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0.6rem;
    width: 25vw;
  }
}
.horse_icon {
  -webkit-mask: url(../../assets/horse.svg) no-repeat center;
  mask: url(../../assets/horse.svg) no-repeat center;
  padding: 15px;
}
</style>
