<template>
  <div class="forgot-password">
    <a-form
        id="forgor"
        :form="form"
        class="login-form"
        @submit="registrSubmit"
        v-if="!getStatuss"
    >
      <a-form-item>
        <div>Логин
          <a-input size="large"
                   v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Пожалуйста введитье номер телефона!' }] },
        ]"
                   type="number"
                   placeholder="Номер телефона"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </div>
      </a-form-item>
      <a-form-item>
        <div>Пароль
          <a-input size="large"
                   v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Пожалуйста введитье пароль!' }] },
        ]"
                   type="password"
                   placeholder="Пароль"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </div>
      </a-form-item>
      <a-form-item>
        <div>Пароль
          <a-input size="large"
                   v-decorator="[
          'password2',
          { rules: [{ required: true, message: 'Пожалуйста введитье пароль еще раз!' }] },
        ]"
                   type="password"
                   placeholder="Пароль"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </div>
      </a-form-item>
      <div class="text-center">
        <a-button type="primary" size="large" clas="mx-auto" html-type="submit">
          Отправить код для подтверждения
        </a-button>
      </div>
    </a-form>
    <a-form
        id="forgor"
        :form="form"
        class="login-form"
        @submit="confirmSubmit"
        v-if="getStatuss"
    >
      <a-form-item>
        <div><b>{{ value.username }}</b> <br>
          Введите код с смс подтвердения
          <a-input size="large"
                   v-decorator="[
          'code',
          { rules: [{ required: true, message: 'Пожалуйста введитье номер телефона!' }] },
        ]"
                   type="number"
                   placeholder="Номер телефона"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </div>


      </a-form-item>
      <a-form-item>

        <div class="text-center">
          <a-button type="primary" size="large" html-type="submit">Подтвердить</a-button>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button @click="registration(value)">
          Отправить повторно
        </a-button>
        <a-button @click="setStatus(false)">
          Другой номер телефона
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>


<script>

import {createNamespacedHelpers} from "vuex";

const {
  mapActions: mapRegActions,
  mapGetters: mapRegGetters,
  mapMutations: mapRegMutations,
} = createNamespacedHelpers('reg')

export default {
  name: "Registration-page",
  data() {
    return {
      value: ''
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  methods: {
    ...mapRegActions({
      registration: "registration",
      confirm: "confirm",
    }),
    registrSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          if (values.password === values.password2) {
            this.registration(values)
            this.value = values
          } else alert('Пароли не совпадают')
        }
      });
    },
    confirmSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          if (values.password === values.password2) {
            this.confirm(values)
          } else alert('Пароли не совпадают')
        }
      });
    },
    ...mapRegMutations({
      setStatus: 'SET_STATUS'
    })
  },
  computed: {
    ...mapRegGetters({
      getStatuss: 'getStatuss'
    })
  }
}
</script>

<style scoped>

</style>