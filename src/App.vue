<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";

export default {
  computed: {
    layout() {
      const layoutType = this.$route.meta.layout || 'main'
      return `${layoutType}-layout`
    }
  },
  components: {
    MainLayout, EmptyLayout
  }
}
</script>

<style lang="scss">
#app{
  height: 100vh;
  border: 1px black solid;
}
</style>


