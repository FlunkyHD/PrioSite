<template>
  <div class="border" v-if="!Weighted">
    <div class="shadow-none p-3 mb-3 bg-light rounded">
      <h4
        @click="
          this.passClickEvent(TaskToCompare.FirstTask.Name);
          this.Weighted = true;
        "
      >
        {{ TaskToCompare.FirstTask.Name }}
      </h4>
    </div>
    <div class="shadow-none p-3 mb-3 bg-light rounded">
      <h4
        @click="
          this.passClickEvent(TaskToCompare.SecondTask.Name);
          this.Weighted = true;
        "
      >
        {{ TaskToCompare.SecondTask.Name }}
      </h4>
    </div>
  </div>
</template>



<script land="ts">
import { defineComponent } from "vue";
import { TaskCompare } from "../types/index";
export default defineComponent({
  name: "WeightTasks",
  props: {
    TaskToCompare: TaskCompare,
  },
  data() {
    return {
      Weighted: false,
    };
  },
  methods: {
    passClickEvent(WeightTask) {
      this.$emit("update", WeightTask);
    },
  },
});
</script>


<style>
.border {
  border-style: double;
}
</style>
