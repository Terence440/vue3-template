<template>
  <Guide />
</template>

<script>
import Guide from "@/components/GuideSelector.vue";

export default {
  name: "TestView",
  components: {
    Guide,
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
