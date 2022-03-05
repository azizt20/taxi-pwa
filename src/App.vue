<template>
  <div id="app">
    <button id="qwe" >sadasd</button>
    <router-view/>

  </div>
</template>

<script>
const btn = document.getElementById('#qwe')
btn.addEventListener('click', function () {
   Notification.requestPermission();
  // wait for permission
})
</script>

<style lang="scss">

</style>
