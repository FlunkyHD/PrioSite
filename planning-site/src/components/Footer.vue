<template>
  <footer class="text-center text-white" style="background-color: #f1f1f1">
    <!-- Grid container -->
    <div class="container pt-2">
      <!-- Section: Social media -->
      <section class="mb-2">
        <!-- Linkedin -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.linkedin.com/in/morten-j%C3%B8rgensen-8205961a2/"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-linkedin">
            <img
              src="..\assets\Linkedin.png"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt="" /></i
        ></a>
        <!-- Github -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://github.com/FlunkyHD"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-github">
            <img
              src="..\assets\GitHub.png"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt="" /></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
      class="text-center text-dark p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2021 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">www.com</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>



<script land="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  props: {},
});
</script>


<style>
</style>
