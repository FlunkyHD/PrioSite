<template>
  <div>
    <Header />
    <Nav />
  </div>
  <div>
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="selected = tab"
      :class="['tab-btn', { active: selected === tab }]"
    >
      {{ tab }}
    </button>
    <component :is="selected" class="tab"> </component>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

import PlanningBoardTab from "./components/PlanningBoardTab.vue";
import PrioritizeTasksTab from "./components/PrioritizeTasksTab.vue";

export default defineComponent({
  name: "App",
  data: function () {
    return {
      tabs: ["PrioritizeTasksTab", "PlanningBoardTab", "xD"],
      selected: "PrioritizeTasksTab",
    };
  },
  components: {
    Nav,
    Footer,
    PlanningBoardTab,
    PrioritizeTasksTab,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
