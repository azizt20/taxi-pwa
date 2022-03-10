<template>
  <div class="Nav">
    <a-button class="element" @click="orders">
      orders
    </a-button>
    <a-button class="element" @click="history">
      history
    </a-button>
    <a-button class="element" @click="statistic">
      statistic
    </a-button>
    <a-button class="element" @click="user">
      user
    </a-button>
  </div>
</template>

<script>
export default {
  name: "Navigation-component",
  methods: {
    orders() {
      this.$router.push('/')
    },
    history() {
      this.$router.push('history')
    },
    statistic() {
      this.$router.push('statistic')
    },
    user() {
      this.$router.push('user')
    },
  }
}
</script>

<style scoped lang="scss">
.Nav {
  height: 70px;
  width: 100%;
  background: yellow;
  display: flex;

  .element {
    width: 25% !important;
    height: 100% !important;
  }
}
</style>