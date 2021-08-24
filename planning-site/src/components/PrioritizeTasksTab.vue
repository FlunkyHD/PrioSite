<template>
  <div>
    <h3>Create your priorized task list</h3>

    <div class="container" v-if="!this.DoneCreatingTasks">
      <input type="text" name="Task" id="TaskField" v-model="task" />
      <input type="button" value="Submit Task" @click="AddTask(task)" />
      <div class="row row-eq-height">
        <div
          class="col-lg-2 col-md-2 col-sm-12 row-eq-height"
          v-for="CreatedTask in TaskList.ListOfTasks"
          :key="CreatedTask.ID"
        >
          <TaskElement :TaskItem="CreatedTask" />
        </div>
      </div>
      <button
        v-if="this.TaskList.ListOfTasks.length > 1 && !this.DoneCreatingTasks"
        @click="
          this.DoneCreatingTasks = true;
          this.CreateWeigthedList();
        "
      >
        Prioritize your tasks
      </button>
    </div>

    <div class="container" v-if="this.DoneCreatingTasks">
      <div class="row row-eq-height">
        <div
          class="col-lg-6 col-md-6 col-sm-12 row-eq-height"
          v-for="WeightOfTask in WeightList.ListOfCompareTasks"
          :key="WeightOfTask.ID"
        >
          <WeightTasks
            :TaskToCompare="WeightOfTask"
            @update="TaskWeighted($event)"
          />
        </div>
      </div>
    </div>
    <div class="container" v-if="this.DoneCreatingTasks">
      <div class="row row-eq-height">
        <h2>Your list:</h2>
        <div
          class="col-lg-12 col-md-12 col-sm-12 row-eq-height"
          v-for="Task in TaskList.ListOfTasks"
          :key="Task.Value"
        >
          <div class="shadow-none p-3 mb-3 bg-light rounded">
            <h3>{{ Task.Name }} (Weight {{ Task.Value }})</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task, TaskList, TaskCompare, TaskCompareList } from "../types/index";
import TaskElement from "./TaskElement.vue";
import WeightTasks from "./WeightTasks.vue";

export default defineComponent({
  name: "PrioritizeTasksTab",
  props: {},
  components: {
    TaskElement,
    WeightTasks,
  },
  data() {
    return {
      TaskList: {} as TaskList,
      TestTask: { ID: 69, Name: "Billy", Value: 0 } as Task,
      WeightList: {} as TaskCompareList,
      DoneCreatingTasks: false,
    };
  },
  created(): void {
    this.TaskList.ListOfTasks = new Array<Task>();
    this.WeightList.ListOfCompareTasks = new Array<TaskCompare>();
  },

  methods: {
    AddTask(TaskInput: string) {
      const NewTask: Task = {
        ID: Math.floor(Math.random() * 100000),
        Name: TaskInput,
        Value: 0,
      };
      this.TaskList.ListOfTasks.push(NewTask);
    },
    CreateWeigthedList() {
      for (let i = 0; i < this.TaskList.ListOfTasks.length; i++) {
        for (let j = 0; j < this.TaskList.ListOfTasks.length; j++) {
          if (
            this.TaskList.ListOfTasks[i].Name ===
            this.TaskList.ListOfTasks[j].Name
          ) {
            continue;
          } else if (
            0 <
            this.WeightList.ListOfCompareTasks.filter(
              (task) =>
                task.FirstTask.Name === this.TaskList.ListOfTasks[j].Name &&
                task.SecondTask.Name === this.TaskList.ListOfTasks[i].Name
            ).length
          ) {
            continue;
          } else {
            const WeightedTask: TaskCompare = {
              FirstTask: this.TaskList.ListOfTasks[i],
              SecondTask: this.TaskList.ListOfTasks[j],
            };
            this.WeightList.ListOfCompareTasks.push(WeightedTask);
          }
        }
      }
    },
    TaskWeighted(NameOfTask: string) {
      for (let i = 0; i < this.TaskList.ListOfTasks.length; i++) {
        if (this.TaskList.ListOfTasks[i].Name === NameOfTask) {
          this.TaskList.ListOfTasks[i].Value++;
          this.BubbleSortList();
          break;
        }
      }
    },
    BubbleSortList() {
      for (let i = 0; i < this.TaskList.ListOfTasks.length - 1; i++) {
        for (let j = 0; j < this.TaskList.ListOfTasks.length - i - 1; j++) {
          if (
            this.TaskList.ListOfTasks[j].Value <
            this.TaskList.ListOfTasks[j + 1].Value
          ) {
            let temp = this.TaskList.ListOfTasks[j];
            this.TaskList.ListOfTasks[j] = this.TaskList.ListOfTasks[j + 1];
            this.TaskList.ListOfTasks[j + 1] = temp;
          }
        }
      }
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