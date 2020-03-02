// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';
import {
  Header, Button, MenuItem, MenuItemGroup, Submenu, RadioButton, RadioGroup, Menu, Aside,
  Main, Container, Table, TableColumn, Col, Card, Row, Form, FormItem
} from 'element-ui';

Vue.use(FormItem);
Vue.use(Form);
Vue.use(Header);
Vue.use(Row);
Vue.use(Card);
Vue.use(Button);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Menu);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Container);
Vue.use(TableColumn);
Vue.use(Table);
Vue.use(Col);

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
};

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
