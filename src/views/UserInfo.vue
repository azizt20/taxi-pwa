<template>
  <div class="user">
   <div v-if="!swich"> {{ lastName }} {{ firstName }}</div>
    <a-form id="driverInfo">
      <div v-if="swich">Фамилия
        <a-input :disabled="!swich" size="large" v-model="lastName"/>
      </div>

      <div v-if="swich">Имя
        <a-input :disabled="!swich" size="large" v-model="firstName"/>
      </div>

      <div>Оснавной номер телефона
        <a-input :disabled="!swich" size="large" v-model="number1"/>
      </div>

      <div>Второй номер телефона
        <a-input :disabled="!swich" size="large" v-model="number2"/>
      </div>

      <div>Баланс
        <a-input disabled size="large" v-model="balance"/>
      </div>

      <div>Марка машины
        <a-select :disabled="!swich" size="large" v-model="car" placeholder="Выберите цвет">
          <a-select-option v-for="car in cars"
                           :key="car.id"
                           :value="car.id">
            {{ car.name }}
          </a-select-option>
        </a-select>
      </div>

      <div>Цвет машины
        <a-select size="large" :disabled="!swich" v-model="carColor"
                  placeholder="Выберите цвет">
          <a-select-option v-for="color in colors"
                           :key="color.id"
                           :value="color.id">
            {{ color.name }}
          </a-select-option>
        </a-select>
      </div>


      <div>Номер машины
        <a-input :disabled="!swich" size="large" v-model="carNumber"/>
      </div>

      <a-button size="large" @click="changeInfo()">
        <div v-if="swich">
          Сохранить изменения
        </div>
        <div v-if="!swich">
          Изменить данные
        </div>
      </a-button>
      <br>

      <router-link to="reset">
        <a-button size="large">
          Изменить пароль
        </a-button>
      </router-link>

      <div>Техническая поддержка <br>
        <a href="tel:998944099907" class="btn">998944099907</a>
      </div>

      <a-button size="large" @click="logout()">
        Выйти из аккаунта
      </a-button>

    </a-form>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {
  mapActions: mapAuthActions,
} = createNamespacedHelpers('auth')

const {
  mapActions: mapUserActions,
  mapGetters: mapUserGetters,
} = createNamespacedHelpers('user')
export default {
  name: "UserInfo",
  data() {
    return {
      firstName: '',
      lastName: '',
      secondName: '',
      number1: '',
      number2: '',
      balance: '',
      car: '',
      carColor: '',
      carNumber: '',
      swich: false
    }
  },
  methods: {
    ...mapAuthActions({
      logout: 'logout'
    }),
    ...mapUserActions({
      updateInfo: 'putDriverinfo',
      getDriver: 'getDriver',
    }),
    changeInfo() {
      if (this.swich) {
        this.updateInfo({
          first_name: this.firstName,
          last_name: this.lastName,
          second_name: this.secondName,
          phone_number: this.number1,
          phone_number_second: this.number2,
          car_name: this.car,
          car_color: this.carColor,
          car_number: this.carNumber,
        })
      }
      this.swich = !this.swich

    }
  },
  computed: {
    ...mapUserGetters({
      driver: 'getDriverInfo',
      cars: 'getAllCars',
      colors: 'getAllColors',

    })
  },
  mounted() {
    this.getDriver()
    this.firstName = this.driver.first_name
    this.lastName = this.driver.last_name
    this.secondName = this.driver.second_name
    this.number1 = this.driver.phone_number
    this.number2 = this.driver.phone_number_second
    this.car = this.driver.car_name.id
    this.carColor = this.driver.car_color.id
    this.carNumber = this.driver.car_number
    this.balance = this.driver.balance
  },
  watch: {
    driver: function () {
      this.firstName = this.driver.first_name
      this.lastName = this.driver.last_name
      this.secondName = this.driver.second_name
      this.number1 = this.driver.phone_number
      this.number2 = this.driver.phone_number_second
      this.car = this.driver.car_name.id
      this.carColor = this.driver.car_color.id
      this.carNumber = this.driver.car_number
      this.balance = this.driver.balance
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  height: 100%;
  width: 100%;
  font-size: 20px;

  input, .ant-select {
    color: black;
  }
}
</style>