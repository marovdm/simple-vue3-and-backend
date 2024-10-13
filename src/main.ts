
import AppLink from '@/components/Link.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import createHttpPlugin from './plugins/http'
import createApi, { ApiInjectKey } from './api'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
const pinia = createPinia();

app.use(router)
app.use(pinia)
app.component('AppLink', AppLink)


const http = createHttpPlugin('http://localhost:3000/');
const api = createApi(http);

app.provide(ApiInjectKey, api);

app.mount('#app')

