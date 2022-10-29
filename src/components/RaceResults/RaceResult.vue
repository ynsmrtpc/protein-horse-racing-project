<script setup>
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { onMounted, ref } from "vue";

const data = ref([]);

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "results"));
  querySnapshot.forEach((doc) => {
    data.value.push(doc.data().horses);
  });
  return querySnapshot;
};
getData();
console.log(data.value);
</script>

<template>
  <div class="header">
    <h2>OLD RACES</h2>
    <hr />
  </div>
  <div class="list">
    <ol v-for="horse in data" :key="horse.name">
      <li class="list__item" v-for="(name, index) in horse">
        {{ index + 1 }} - {{ name }}
      </li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
.header {
  text-align: center;
  opacity: 0.5;
  hr {
    width: 350px;
    margin: 10px auto;
  }
}
.list {
  display: flex;
  margin: 1rem;
  justify-content: space-around;
  color: #656464a0;

  &__item {
    display: flex;
    border: 1px solid #fafafa;
    border-radius: 4px;
    padding: 0.4rem;
    margin: 0.5rem;
  }
}
</style>
