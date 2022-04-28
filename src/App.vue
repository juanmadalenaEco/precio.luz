<template>
  <v-app>
      <HeaderComponent id="header"/>
      <NavigationComponent id="nav"/>
      <ChartComponent :data="data" />
      <PricesComponent :data="data" :today="today"/>
  </v-app>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'

import NavigationComponent from './components/NavigationComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import ChartComponent from './components/ChartComponent.vue'
import PricesComponent from './components/PricesComponent.vue'

export default {
  name: 'App',

  components: {
    HeaderComponent,NavigationComponent,
    PricesComponent,ChartComponent
  },

  setup(){
        
        const today = new Date()
        const yesterday = new Date()
        yesterday.setDate(today.getDate() - 1)

        const data = ref(null);

        axios.get(`https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}T00:00&end_date=${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T23:59&time_trunc=hour&cached=true`)
        .then(res => (data.value = res))
        .catch((err)=>(console.error(err)))
        .finally(()=>(console.log("termino")))

        return{
            today,yesterday,data
        }
  }
}
</script>

<style>
#app {
box-sizing: border-box;
margin: 0;
padding: 0;
}
</style>
