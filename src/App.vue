<template>
  <div id="app">

    <h1>Web<br>Workers<br>basic<br>example</h1>

    <div class="controls" tabindex="0">
      <form @submit.prevent="qweqwe">
        <div>
          <label for="number1">Multiply number 1: </label>
          <input type="number" id="number1" value="0">
        </div>
        <div>
          <label for="number2">Multiply number 2: </label>
          <input type="number" id="number2" value="0">
        </div>
        <button type="submit" @submit="qweqwe">asdas</button>
      </form>

      <p class="result">Result: 0</p>
    </div>
    <router-view/>

  </div>
</template>


<style lang="scss">

</style>
