<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
  // You can add actual submission logic here (e.g. fetch or axios)
}
</script>


<template>
  <section class="contact-wrapper">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Navn</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="subject">Emne</label>
        <input type="text" id="subject" v-model="form.subject" required />
      </div>

      <div class="form-group">
        <label for="message">Besked</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>

      <button type="submit" class="send-button">Send</button>
    </form>
  </section>
</template>


<style scoped>
.contact-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  padding: 30px;
  flex: 1;
}

.contact-form {
  max-width: 700px;
  width: 100%;
  flex: 1;
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #384127;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  color: #384127;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 1rem;
}

.send-button {
  background-color: #384127;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #8e9d7f;
}


</style>
