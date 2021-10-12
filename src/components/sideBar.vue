<template>
  <div class="side-bar">
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h4 font-weight-bold primary--text"
            >Ro Learn</v-list-item-title
          >
          <v-list-item-subtitle class="secondary--text"
            >这是你的错题</v-list-item-subtitle
          >
        </v-list-item-content></v-list-item
      >
    </v-list>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item-group color="primary" v-model="selected" mandatory>
        <v-list-item v-for="(item, i) in navItem" :key="i">
          <v-list-item-content>
            <v-list-item-title class="nav-item">
              <v-icon>
                {{ selected === i ? item.iconSele : item.icon }}
              </v-icon>
              <span class="ml-2">{{ item.name }}</span>
            </v-list-item-title></v-list-item-content
          >
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  data() {
    return {
      navItem: [],
      selected: 0,
    };
  },
  created() {
    this.navItem = [
      {
        name: "搜索",
        link: "",
        icon: "mdi-card-search-outline",
        iconSele: "mdi-card-search",
      },
      {
        name: "错题本",
        link: "book",
        icon: "mdi-book-outline",
        iconSele: "mdi-book",
      },
      {
        name: "收藏",
        link: "like",
        icon: "mdi-bookmark-outline",
        iconSele: "mdi-bookmark",
      },
      {
        name: "设置",
        link: "setting",
        icon: "mdi-cog-outline",
        iconSele: "mdi-cog",
      },
    ];
  },
  watch: {
    selected() {},
  },
};
</script>

<style lang='scss'>
.side-bar {
  height: 100%;
  overflow: hidden;

  .nav-item {
    display: flex;
    align-items: center;

    font: {
      weight: 600;
    }
  }
}
</style>