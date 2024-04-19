import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import PrimeVue from "primevue/config";
import Toolbar from "primevue/toolbar";
import 'primeflex/primeflex.css';
import Card from "primevue/card";
const app= createApp(App);

app.use(PrimeVue, { ripple: true })
    .component('pv-toolbar',Toolbar)//Importante para que funcione PrimeVue
    .component('pv-card', Card)

app.mount('#app')