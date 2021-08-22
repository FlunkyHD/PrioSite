<template>
  <div>
    <h1 @click="AddTask()">Epic</h1>
    <p>{{ this.TaskList.ListOfTasks }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task, TaskList } from "../types/index";

export default defineComponent({
  name: "PrioritizeTasksTab",
  props: {},
  data() {
    return {
      TaskList: {} as TaskList,
    };
  },
  mounted(): void {
    this.TaskList.ListOfTasks = new Array<Task>();
  },

  methods: {
    AddTask() {
      const test: Task = {
        Name: "Billy",
        Value: 5,
      };
      this.TaskList.ListOfTasks.push(test);
    },
  },
});
</script>


<style>
</style>