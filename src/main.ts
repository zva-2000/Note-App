import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import './assets/scss/main.scss'

import { clickOutside } from '@/CustomDirectives/ClickOutside.ts';

createApp(App).mount('#app')

// App.directive('clickOutside', clickOutside);