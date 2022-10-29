# Horse Racing App

## [LIVE](https://protein-horse-racing-project.vercel.app)

![Screenshot 2022-10-30 at 00 43 56](https://user-images.githubusercontent.com/31772115/198853487-03541d30-86b9-4fd4-bbe1-64a89303a367.png)

![Screenshot 2022-10-30 at 00 45 31](https://user-images.githubusercontent.com/31772115/198853565-cfbc6ea8-8dc4-4182-bc4a-b3e48a0d4376.png)

![Screenshot 2022-10-30 at 00 45 57](https://user-images.githubusercontent.com/31772115/198853579-f098a875-12ef-4d26-8e86-68d6f1a6e9af.png)

## Usage 

```bash
import { useHorsesStore } from "./stores/horses";
import Horse from "./components/Horse/Horse.vue";
import Scoreboard from "./components/LeaderBoard/LeaderBoard.vue";
import TimeCounter from "./components/Counter/TimeCounter.vue";
import RaceResult from "./components/RaceResults/RaceResult.vue";
import { db } from "./firebase/firebase";
```

```bash
  <TimeCounter v-if="showCounter > 0"></TimeCounter>
  <Scoreboard :horseName="horses.horses"></Scoreboard>
  <Horse
    :horseColor="{ color }"
    :startRaceToggle="startRaceToggle"
    v-model:btnName="baslatBtn"
    v-model:hiddenButton="hiddenButton"
    v-model:saveDatabase="saveDatabase"
  ></Horse>
  <RaceResult></RaceResult>
```

### Props

| Prop          | Type    | 
| ------------- | ------- | 
| horseColor    | Object  |
| startRaceToggle| Boolean  |


### Emits

| Prop          | Type    | 
| ------------- | ------- | 
| btnName    | String  |
| hiddenButton| Boolean  |
| saveDatabase| Boolean  |

