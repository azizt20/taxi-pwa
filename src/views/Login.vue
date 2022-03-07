<template>
  <div class="Login">
    <router-link to="add"></router-link>
    <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
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

        <a-button type="primary" html-type="submit" class="login-form-button">
          Войти
        </a-button>
        <a-button type="danger" ghost class="login-form-forgot mt-3">
          <router-link to="registration">
            Зарегистрировать
          </router-link>

        </a-button>
        <a-button type="danger" ghost class="mt-3" href="">
          <router-link to="forgot">
            Забыли пароль?
          </router-link>
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>

import {createNamespacedHelpers} from "vuex";

const {
  mapActions: mapAuthActions,
} = createNamespacedHelpers('auth')
export default {
  name: "Login-page",
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  mounted() {
    this.logout()
  },
  methods: {
    ...mapAuthActions({
      login: "login",
      logout: "logout"
    }),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {

        if (!err) {
          console.log('Received values of form: ', values);
          this.login(values)
              .then(() => {
                this.$router.push({name: 'order'})
              })
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>