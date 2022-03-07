<template>
  <div class="EmptyLayout">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "EmptyLayout",
}
</script>

<style scoped>
.EmptyLayout{
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>