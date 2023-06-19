<template>
  <AI />
</template>

<script>
// import StartPage from "@/components/LanguageSelector.vue";
import AI from "@/components/IllnessSelector.vue";

export default {
  name: "AIView",
  components: {
    AI,
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
