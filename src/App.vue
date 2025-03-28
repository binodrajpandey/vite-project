<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <main>
    <div class="links">
      <RouterLink class="link" active-class="active" to="/">Home</RouterLink>
      <RouterLink class="link" active-class="active" to="/about"
        >About</RouterLink
      >
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.links {
  padding: 20px;
}

.links .link {
  margin: 0 5px;
}

.active {
  color: green;
}
</style>
