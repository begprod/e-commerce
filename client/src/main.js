import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createMetaManager } from 'vue-meta';
import App from '@/App.vue';
import router from '@/router';

import '@/css/main.css';

createApp(App)
  .use(createMetaManager())
  .use(createPinia())
  .use(router)
  .mount('#app');
