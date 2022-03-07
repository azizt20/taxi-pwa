<template>
<div class="forgot-password">
  <a-form
      id="forgor"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
  >
  <a-form-item>
    <a-label>Логин
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
    </a-label>
  </a-form-item>
    <a-form-item>
      <a-label>Пароль
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
      </a-label>
    </a-form-item>
    <a-form-item>
      <a-label>Пароль
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
      </a-label>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
export default {
  name: "ForgotPassword"
}
</script>

<style scoped>
.forgot-password{
  width: 100%;
}

</style>