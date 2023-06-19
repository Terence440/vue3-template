<template>
  <v-main>
    <div class="parent-container illness-selector">
      <div class="responsive-div illness-selector">
        <v-container style="overflow-x: hidden; height: 770px">
          <v-text-field
            v-model="search"
            label="Search"
            @input="filterItems"
            clearable
            style="width: 80%; margin: auto"
          ></v-text-field>

          <v-row class="my-2">
            <v-col
              v-for="item in filteredItems"
              :key="item.id"
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
                        <v-list-item-title> {{ item.name }} </v-list-item-title>
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
                          {{ item.description }}
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
        </v-container>
        <div class="action allDrugs">
          <div class="action-container" @click="selectGuideMethod">
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
      items: [
        {
          id: 1,
          name: "Item 1",
          description: "This is the description for item 1",
        },
        {
          id: 2,
          name: "Item 2",
          description: "This is the description for item 2",
        },
        {
          id: 3,
          name: "Item 3",
          description: "This is the description for item 3",
        },
        {
          id: 4,
          name: "Item 4",
          description: "This is the description for item 4",
        },
        {
          id: 5,
          name: "Item 5",
          description: "This is the description for item 5",
        },
        {
          id: 3,
          name: "Item 3",
          description: "This is the description for item 3",
        },
        {
          id: 4,
          name: "Item 4",
          description: "This is the description for item 4",
        },
        {
          id: 5,
          name: "Item 5",
          description: "This is the description for item 5",
        },
      ],
      search: "",
    };
  },

  computed: {
    filteredItems() {
      if (!this.search) return this.items;
      const searchLower = this.search.toLowerCase();
      return this.items.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower)
        );
      });
    },
  },

  methods: {
    home() {
      this.$router.push("/");
    },
    ai() {
      this.$router.push("/ai");
    },
    selectGuideMethod() {
      this.$router.push("/guide");
    },
    numItems(itemCount) {
      this.itemsCount += itemCount;
    },
    filterItems() {
      // no need to do anything here, computed property does the filtering
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

.allDrugs {
  position: absolute;
  bottom: 12px;
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
