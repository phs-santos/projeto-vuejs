import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router';
import { createPinia } from 'pinia';

export function registerPlugins (app) {
  loadFonts()
  app.use(createPinia());
  app.use(vuetify);
  app.use(router);
}
