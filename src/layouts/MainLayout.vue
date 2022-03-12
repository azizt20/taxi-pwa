<template>
  <div class="MainLayout">

    <div class="component">
      <router-view/>
    </div>
    <NavigationComponent/>
  </div>
</template>

<script>

import NavigationComponent from "@/components/Nav";
import {createNamespacedHelpers} from "vuex";

const {
  mapActions: mapUserActions,
} = createNamespacedHelpers('user')
const {
  mapActions: mapOrderActions,
} = createNamespacedHelpers('order')
export default {
  name: "MainLayout",
  components: {
    NavigationComponent
  },
  methods: {
    ...mapUserActions({
      getDriver: 'getDriver',
      getCars: 'getCars',
      getColors: 'getColors',
      webSocket: 'webSocket',
    }),
    ...mapOrderActions({
      getStatistic: 'getStatistic'
    })
  },
  mounted() {
    this.getDriver()
    this.getCars()
    this.getColors()
    this.getStatistic()
    this.webSocket()
  }

}
</script>

<style scoped lang="scss">
.MainLayout {
  background: antiquewhite;
  width: 100%;
  height: 100%;

  .component {
    height: calc(100% - 70px);
    padding: 20px;
    overflow-y: scroll;
  }
}


</style>