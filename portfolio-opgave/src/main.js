import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css'; // or whatever the correct name is


createApp(App).use(router).mount('#app');
