import { createApp } from 'vue';
// import './style.css'
import App from './App.vue';

import './assets/scss/main.scss';

import { clickOutside } from '@/CustomDirectives/ClickOutside.ts';

const app = createApp(App);
app.mount('#app');
app.directive('clickOutside', clickOutside);
