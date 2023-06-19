<template>
  <div class="parent-container">
    <div class="responsive-div">
      <div class="logo">
        <div class="logo-container">
          <img alt="Your Logo" class="logo" src="@/assets/logo.png" />
        </div>
        <div class="logo-title">
          <h1 class="title">Your Title Here</h1>
        </div>
      </div>
      <div class="logo2-container">
        <div class="selector">
          <div class="logo-container">
            <img alt="Your Logo" class="logo2" src="@/assets/logo.png" />
            <h1 class="title">Name</h1>
          </div>
          <div class="logo-container">
            <img alt="Your Logo" class="logo2" src="@/assets/logo.png" />
            <h1 class="title">Name</h1>
          </div>
          <div class="logo-container">
            <img alt="Your Logo" class="logo2" src="@/assets/logo.png" />
            <h1 class="title">Name</h1>
          </div>
          <div class="logo-container">
            <img alt="Your Logo" class="logo2" src="@/assets/logo.png" />
            <h1 class="title">Name</h1>
          </div>
        </div>
      </div>
      <div class="action">
        <div class="action-container">
          <h1>&lt; Previous</h1>
        </div>
        <div class="action-container" @click="selectGuideMethod">
          <h1>Next &gt;</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectGuideMethod() {
      this.$router.push("/guide");
    },
  },
};
</script>

<style>
.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 16px);
}

.responsive-div {
  width: 860px;
  height: calc(100% - 40px);
  background-color: gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.selector {
  display: flex;
  margin: 0 30px;
}

.logo-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.logo-title {
  text-align-last: center;
}

.logo2-container {
  margin-top: 120px;
}

.logo2 {
  width: 75%;
  align-self: center;
  text-align-last: center;
}

.title {
  text-align: center;
}

.action {
  height: 100px;
  width: calc(100% - 30px);
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
}

@media screen and (max-width: 768px) {
  .parent-container {
    height: calc(100vh - 50px); /* Remove fixed height on smaller screens */
  }

  .responsive-div {
    width: 90%; /* Set full width on smaller screens */
    max-width: none; /* Remove max-width on smaller screens */
  }
}
</style>
