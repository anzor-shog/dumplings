<template>
  <b-row id="contact" class="footer">
    <b-col
      xl="4"
      lg="5"
      md="10"
      sm="10"
      offset-xl="2"
      offset-sm="1"
      class="px-0"
    >
      <p class="magistral-md pb-3">Форма обратной связи</p>
      <b-form @submit="onSubmit">
        <b-form-input
          id="input-name"
          v-model="form.name"
          placeholder="Ваше имя*"
          class="inter-md field"
          required
        ></b-form-input>
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          placeholder="Ваш e-mail*"
          class="inter-md field"
          required
        ></b-form-input>
        <b-form-textarea
          id="textarea-comment"
          v-model="form.comment"
          placeholder="Ваше сообщение"
          class="inter-md field"
          rows="6"
          no-resize
        ></b-form-textarea>

        <b-button type="submit" variant="light" class="w-100 py-3 inter-md"
          >Отправить</b-button
        >
      </b-form>
    </b-col>
    <b-col
      xl="3"
      lg="5"
      md="10"
      sm="10"
      offset-lg="0"
      offset-sm="1"
      class="px-0 ml-lg-5"
    >
      <p class="magistral-lg mb-5">
        Пишите <br />
        или звоните нам
      </p>
      <div class="icons-container mb-4">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="/facebook-icon.svg" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/instagram-icon.svg" />
        </a>
      </div>
      <div>
        <a href="tel:89858180707">
          <p class="inter-xl mb-1 font-weight-bold">8 (985) 818-07-07</p>
        </a>
        <p class="inter-xl mb-1 font-weight-bold">foodelitymoscow@gmail.com</p>
        <a href="https://goo.gl/maps/L4jmYNTmcFMbjBrk6" target="_blank">
          <p class="inter-xl mb-1">
            Москва, Проектируемый 3723-й проезд, дом 12, <br />
            строение 2, этаж 1, офис 3
          </p>
        </a>
      </div>
      <div class="inter-md links-container">
        <template v-for="link of links">
          <nuxt-link
            :key="link.id"
            :to="link.anchor"
            :alt="link.text"
            :text="link.text"
          >
            {{ link.text }}
          </nuxt-link>
        </template>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'FooterForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        comment: '',
      },
      links: [
        { id: 1, text: 'Главная', anchor: '#title' },
        { id: 2, text: 'О компании', anchor: '#about' },
        { id: 3, text: 'Принципы Foodelity', anchor: '#foodelity' },
        { id: 4, text: 'Продукция', anchor: '#products' },
      ],
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      // this.$mail.send({
      //   from: 'John Doe',
      //   subject: 'Incredible',
      //   text: 'This is an incredible test message',
      // })
      this.form.name = ''
      this.form.email = ''
      this.form.comment = ''
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@media (min-width: $sm) {
  .links-container {
    display: none;
  }
}
@media (min-width: $md) {
  .links-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.footer {
  position: relative;
  background-color: $dark-green;
  & > div {
    padding: 60px 0;
  }
  form {
    max-width: 480px;
    width: 100%;
    .field {
      background-color: #0a1214;
      border: none;
      padding: 30px;
      &:focus {
        box-shadow: 0 0 0 0.1rem rgb(255 255 255 / 50%) !important;
        color: white;
      }
    }
    #input-name,
    #input-email {
      margin-bottom: 30px;
    }
    #textarea-comment {
      margin-bottom: 50px;
    }
    button {
      color: black;
    }
  }
  .icons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 30px;
  }
  .links-container {
    width: 500px;
    height: 20px;
    margin-top: 140px;
  }
}
</style>
