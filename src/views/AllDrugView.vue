<template>
  <AllDrugs />
</template>

<script>
import AllDrugs from "@/components/AllDrugsSelector.vue";

export default {
  name: "AIView",
  components: {
    AllDrugs,
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
