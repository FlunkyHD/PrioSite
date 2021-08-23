<template>
  <div>
    <h3>Create your priorized task list</h3>
    <input type="text" name="Task" id="TaskField" v-model="task" />
    <input type="button" value="Submit Task" @click="AddTask(task)" />
    <div class="container">
      <div class="row row-eq-height">
        <div
          class="col-lg-2 col-md-2 col-sm-12 row-eq-height"
          v-for="CreatedTask in TaskList.ListOfTasks"
          :key="CreatedTask.ID"
        >
          <TaskElement :TaskItem="CreatedTask" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task, TaskList } from "../types/index";
import TaskElement from "./TaskElement.vue";

export default defineComponent({
  name: "PrioritizeTasksTab",
  props: {},
  components: {
    TaskElement,
  },
  data() {
    return {
      TaskList: {} as TaskList,
      TestTask: { ID: 69, Name: "Billy", Value: 0 } as Task,
    };
  },
  created(): void {
    this.TaskList.ListOfTasks = new Array<Task>();
  },

  methods: {
    AddTask(TaskInput: string) {
      const NewTask: Task = {
        ID: Math.floor(Math.random() * 100000),
        Name: TaskInput,
        Value: 0,
      };
      this.TaskList.ListOfTasks.push(NewTask);
      console.log(this.TaskList.ListOfTasks);
    },
  },
});
</script>


<style>
button {
  margin-bottom: 1%;
  margin-top: 1%;
}
</style>