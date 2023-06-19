<template>
  <StartPage />
</template>

<script>
// import StartPage from "@/components/LanguageSelector.vue";
import StartPage from "@/components/StartPage.vue";

export default {
  name: "TestView",
  components: {
    StartPage,
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
