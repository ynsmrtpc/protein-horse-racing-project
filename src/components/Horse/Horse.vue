<script setup>
import { ref, computed } from "vue";

const props = defineProps(["horseColor", "start"]);

const start = ref(1);
const speed = ref(0);

const speedHandler = (min, max) => {
  speed.value = setInterval(() => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, 1000);
  if (start >= 100) {
    clearInterval(speed.value);
  }
  return speed.value;
};

// const speed = computed(() => {
//   return speedHandler(20, 40);
// });

const startHandler = () => {
  const timer = setInterval(() => {
    start.value += 0.1;
    if (start.value >= 100) {
      clearInterval(timer);
    }
  }, (100 - speed) * 2);
};
startHandler();
</script>

<template>
  {{ speed }}
  <div class="road">
    <div class="horse" :style="{ left: start + '%' }">
      <div
        class="horse__svg"
        :style="{ backgroundColor: props.horseColor.color }"
      ></div>

      <small class="horse__speed">{{ speed }}</small>
    </div>
    <div class="road__line"></div>
    <div class="road__end"></div>
  </div>
</template>

<style scoped lang="scss">
.road {
  position: relative;
  background-color: #e0a75c;
  width: 75vw;
  height: 40px;
  padding: 5px;
  margin: 10px 0;
  background-image: url();
  &__line {
    position: absolute;
    padding: 1px;
    min-height: 100%;
    left: 40px;
    background-color: #fafafa;
    top: 0;
  }
  &__end {
    position: absolute;
    padding: 1px;
    min-height: 100%;
    left: 100%;
    background-color: rgba(0, 0, 0, 0.275);
    top: 0;
    width: 55px;
  }
}
.horse {
  position: absolute;
  width: 1px;
  &__svg {
    -webkit-mask: url(../../assets/horse.svg) no-repeat center;
    mask: url(../../assets/horse.svg) no-repeat center;
    padding: 15px;
    padding-left: 25px;
    z-index: 999;
    position: absolute;
    width: 0px;
  }
  &__speed {
    all: initial;
    color: #8b8b8b;
    font-size: 10px;
    font-weight: bold;
  }
}
</style>
