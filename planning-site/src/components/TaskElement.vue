<template>
  <div class="shadow-none p-3 mb-5 bg-light rounded">
    <h4>{{ this.TaskItem.Name }}</h4>
  </div>
</template>



<script land="ts">
import { defineComponent } from "vue";
import { Task, TaskList } from "../types/index";
export default defineComponent({
  name: "TaskElement",
  props: {
    TaskItem: Task,
  },
});
</script>


<style>
</style>
