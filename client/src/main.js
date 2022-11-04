import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import BaseInput from '@/components/ui/forms/BaseInput.vue';
import BaseButton from '@/components/ui/forms/BaseButton.vue';
import BaseSelect from '@/components/ui/forms/BaseSelect.vue';
import router from '@/router';

import '@/css/main.css';

createApp(App)
  .use(createPinia())
  .use(router)
  .component('BaseInput', BaseInput)
  .component('BaseButton', BaseButton)
  .component('BaseSelect', BaseSelect)
  .mount('#app');
