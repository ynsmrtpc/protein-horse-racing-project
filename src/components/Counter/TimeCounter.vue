<template>
  <div class="container">
    <span>5</span>
    <span>4</span>
    <span>3</span>
    <span>2</span>
    <span>1</span>
  </div>
</template>

<style scoped lang="scss">
.container {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}

span {
  color: #b97822;
  font-size: 12rem;
  text-align: center;
  transition: all 1.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:nth-child(1) {
    animation: counter_animation 10s infinite ease;
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation: counter_animation 10s infinite ease;
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation: counter_animation 10s infinite ease;
    animation-delay: 2s;
  }
  &:nth-child(4) {
    animation: counter_animation 10s infinite ease;
    animation-delay: 3s;
  }
  &:nth-child(5) {
    animation: counter_animation 10s infinite ease;
    animation-delay: 4s;
  }
}

@keyframes counter_animation {
  0% {
    opacity: 0;
    filter: blur(0.1rem);
  }
  5% {
    opacity: 1;
    filter: blur(0.01rem);
  }
  10% {
    opacity: 1;
    filter: blur(0.01rem);
  }
  20% {
    opacity: 0;
    filter: blur(0.1rem);
  }
  100% {
    opacity: 0;
    filter: blur(0.1rem);
  }
}
</style>
