<template>
  <div id="app">
    <AdminTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AdminTable from "./components/AdminTable/index.vue";

export default defineComponent({
  name: "App",
  components: {
    AdminTable,
  },
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #f4f2ff;
  min-height: 100vh;
  padding: 16px;
  box-sizing: border-box;
}
</style>
