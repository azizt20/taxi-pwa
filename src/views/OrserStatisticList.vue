<template>
  <div class="statictic">
    сегодня : {{getStatistic.today}}
    <br>
    неделя : {{getStatistic.week}}
    <br>
    месяц : {{getStatistic.month}}
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {
  mapActions: mapOrderActions,
  mapGetters: mapOrderGetters,
} = createNamespacedHelpers('order')
export default {
  name: "OrderStatisticList",
  mounted() {
    this.statistic()
  },
  methods: {
    ...mapOrderActions({
      statistic: 'getStatistic',
    })
  },
  computed: {
    ...mapOrderGetters({
      getStatistic: 'getOrdersStatistic'
    })
  }
}
</script>

<style scoped>

</style>