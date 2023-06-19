<template>
  <v-main>
    <div class="parent-container illness-selector">
      <div class="responsive-div illness-selector">
        <h1>Select Your Illness</h1>
        <v-row class="my-2" style="margin: 5px; overflow-x: hidden">
          <v-col
            v-for="(item, i) in numbers"
            :key="i"
            cols="12"
            sm="6"
            md="3"
            style="text-align: -webkit-center"
          >
            <v-card
              height="180"
              width="180"
              outlined
              style="border-radius: 50%"
            >
              <v-list-item>
                <v-list-item-title> {{ i }} item </v-list-item-title>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <div class="action illness">
          <div class="action-container" @click="selectGuide">
            <h1>&lt; Previous</h1>
          </div>
          <div class="action-container" @click="selectDrugs">
            <h1>Next &gt;</h1>
          </div>
        </div>
        <!--        <div class="illness-container">-->
        <!--          <div class="illness-types" v-for="i in numbers" :key="i">-->
        <!--            <div class="type">{{ i }}</div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      numbers: Array.from(Array(20).keys()),
    };
  },

  methods: {
    selectGuide() {
      this.$router.push("/guide");
    },
    selectDrugs() {
      this.$router.push("/drugs");
    },
  },
};
</script>

<style>
.responsive-div.illness-selector {
  justify-content: initial;
}

h1 {
  font-size: 56px;
  color: #f2f2f2;
}

.action.illness {
  width: 100%;
}

.action.illness h1 {
  font-size: 36px;
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
