<template>
  <div class="parent-container guidance-selector">
    <div class="responsive-div guidance-selector">
      <div class="selection">
        <div class="guidance-container" @click="allDrugs">
          <p>Fast</p>
        </div>
        <div class="guidance-container ai" @click="ai">
          <p>AI</p>
        </div>
      </div>
      <div class="action guidance" @click="home">
        <div class="action-container">
          <h1>&lt; Previous</h1>
        </div>
        <div class="action-container">
          <h1>Next &gt;</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    },
    ai() {
      this.$router.push("/ai");
    },
    allDrugs() {
      this.$router.push("/all");
    },
  },
};
</script>

<style>
.responsive-div.guidance-selector {
  justify-content: center;
}

.selection {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  justify-content: space-around;
}

.guidance-container {
  background-color: #eeeeee;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  place-content: center;
}

.action.guidance {
  position: relative;
  top: 265px;
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
