import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage';
import LivingPayment from '@/components/function/LivingPayment';
import MainTain from '@/components/function/MainTain';
import HouseRent from '@/components/function/HouseRent';
import ParkingSpace from '@/components/function/ParkingSpace';
import ResidentDetail from "@/components/function/ResidentDetail";
import MessageBoard from '@/components/function/MessageBoard';
import DutyRoom from '@/components/function/DutyRoom';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      children: [
        {path: '/', name: 'ResidentDetail', component: ResidentDetail},
        {path: 'LivingPayment', name: 'LivingPayment', component: LivingPayment},
        {path: 'ResidentDetail', name: 'ResidentDetail', component: ResidentDetail},
        {path: 'Maintain', name: 'Maintain', component: MainTain},
        {path: 'HouseRent', name: 'HouseRent', component: HouseRent},
        {path: 'ParkingSpace', name: 'ParkingSpace', component: ParkingSpace},
        {path: 'MessageBoard', name: 'MessageBoard', component: MessageBoard},
        {path: 'DutyRoom', name: 'DutyRoom', component: DutyRoom},
      ]
    }
  ]
})
