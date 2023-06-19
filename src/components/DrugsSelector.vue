<template>
  <v-main>
    <div class="parent-container illness-selector">
      <div class="responsive-div illness-selector">
        <v-row
          style="
            width: 100%;
            align-items: center;
            text-align: -webkit-center;
            top: 10px;
            position: relative;
          "
        >
          <v-col cols="7" style="text-align-last: right">
            <h1>Illness Type</h1>
          </v-col>
          <v-col cols="5">
            <v-card
              height="180"
              width="180"
              outlined
              style="border-radius: 50%"
            ></v-card>
          </v-col>
        </v-row>
        <v-row class="my-2" style="margin: 5px; overflow-x: hidden">
          <v-col
            v-for="(item, i) in numbers"
            :key="i"
            cols="6"
            style="text-align: -webkit-center"
          >
            <v-card style="border-radius: 20px">
              <v-row class="ma-1">
                <v-col cols="12" md="6">
                  <v-card
                    height="180"
                    width="180"
                    variant="tonal"
                    style="border-radius: 50%"
                  ></v-card>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="d-flex justify-center align-center"
                >
                  <v-list-item class="drug-details-list">
                    <v-list-item-content>
                      <v-list-item-title> {{ i }} item </v-list-item-title>
                      <v-card-text
                        class="drug-details"
                        style="
                          display: -webkit-box;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 4;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          text-align: left;
                          width: 170px;
                        "
                      >
                        Symptomatic relief of fever & pain i.e. headaches,
                        toothache, backache, rheumatic and muscle pains and
                        period pain.
                      </v-card-text>
                      <v-icon @click="numItems(-1)">mdi-minus</v-icon>
                      <span>{{ itemsCount }}</span>
                      <v-icon @click="numItems(1)">mdi-plus</v-icon>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <div class="action illness">
          <div class="action-container" @click="ai">
            <h1>&lt; Previous</h1>
          </div>
          <div class="action-container" @click="selectGuideMethod">
            <h1>Next &gt;</h1>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      numbers: Array.from(Array(20).keys()),
      itemsCount: 0,
    };
  },

  methods: {
    home() {
      this.$router.push("/");
    },
    ai() {
      this.$router.push("/ai");
    },
    numItems(itemCount) {
      this.itemsCount += itemCount;
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

.drug-details-list {
  padding: 0;
}

.counter-container {
  height: 75px;
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

@media screen and (max-width: 960px) {
  .v-card-text.drug-details {
    width: 300px !important;
  }
}

@media screen and (max-width: 760px) {
  .v-card-text.drug-details {
    width: 200px !important;
  }
}
</style>
