<template>
  <Drugs />
</template>

<script>
import Drugs from "@/components/DrugsSelector.vue";

export default {
  name: "AIView",
  components: {
    Drugs,
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}
</style>
