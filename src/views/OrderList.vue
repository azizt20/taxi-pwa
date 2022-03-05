<template>
  <div>
    <h1>Web<br>Workers<br>basic<br>example</h1>

    <div class="controls" tabindex="0">
      <form>
        <div>
          <label for="number1">Multiply number 1: </label>
          <input type="text" id="number1" value="0">
        </div>
        <div>
          <label for="number2">Multiply number 2: </label>
          <input type="text" id="number2" value="0">
        </div>
      </form>

      <p class="result">Result: 0</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList"
}

const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
  const myWorker = new Worker("../worker.js");

  first.onchange = function() {
    myWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  second.onchange = function() {
    myWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}
</script>

<style scoped>

</style>