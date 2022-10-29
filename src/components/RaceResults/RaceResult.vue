<script setup>
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

const data = ref([]);
const showAllScore = ref(false);

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "results"));
  querySnapshot.forEach((doc) => {
    data.value.push(doc.data().horses);
  });
  return querySnapshot;
};
getData();
</script>

<template>
  <div class="header">
    <h2 @click="showAllScore = !showAllScore">OLD RACES</h2>
    <hr />
  </div>

  <div v-if="showAllScore" class="list">
    <ul v-for="(horse, index) in data" :key="horse.name">
      <strong>{{ index + 1 }}. RACE</strong>
      <li class="list__item" v-for="(name, index) in horse">
        {{ index + 1 }} - {{ name }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.header {
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
  hr {
    width: 350px;
    margin: 10px auto;
  }
}
.list {
  display: flex;
  margin: 1rem;
  color: #656464a0;
  flex-flow: row wrap;

  &__item {
    display: block;
    list-style: none;
    border: 1px solid #fafafa;
    border-radius: 4px;
    padding: 0.4rem;
    margin: 0.5rem;
    &:nth-child(2) {
      background-color: rgba(0, 128, 0, 0.4);
      color: #f8f8f8;
    }
  }
}
</style>
