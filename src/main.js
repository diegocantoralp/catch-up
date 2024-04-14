import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeValue from "primevue/config"

//Application Theme
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

//Icons
import 'primeicons/primeicons.css';

//PrimeFlex Support
import 'primeflex/primeflex.css';
import Card from 'primevue/card';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";

const app = createApp(App);
app.use(PrimeValue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button',Button)
    .component('pv-selectbutton',SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar',Avatar)
    .component('pv-menu',Menu)
    .component('pv-menubar' , Menubar)
    .component('pv-toolbar', Toolbar)

//Application Component Mount
app.mount('#app');



createApp(App).mount('#app')
