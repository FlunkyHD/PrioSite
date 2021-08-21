<template>
  <div class="">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="..\assets\logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        Prito
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Nav",
  props: {},
});
</script>


<style>
.test {
  background: #2c6e50;
}
</style>