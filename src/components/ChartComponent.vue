<template>
<v-main>
    <v-card width="90%">
    <LineChart :chartData="chartData"/>
    <div class="d-flex flex-column align-center justify-center mt-5">
        <h5>
            Media:
        </h5>
        <h4>{{media}}</h4>
    </div>
    </v-card>
</v-main>
</template>

<script>
import {ref} from 'vue';

import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    name:'ChartComponent',
    components:{ LineChart },
    props:['data'],
    setup(props){
        const values = ref(props.data.data.included[0].attributes.values)
        console.log(values.value);

        let prices = []
        let hours = []

        values.value.map((el)=>{

            let formatDate = new Date(Date.parse(el.datetime))
            
            prices = [...prices, el.value]
            hours = [...hours, `${formatDate.getDate()}/${formatDate.getMonth()+1} ${formatDate.getHours()}:00`]
        })

        const media = (prices.reduce((a,b)=>a+b) / prices.length+1).toFixed(2)
        const chartData = {
        labels: hours,
        datasets: [
            {
            data: prices,
            backgroundColor: ['red'],
            label:'price',
            },
        ],
        }; 
        console.log(media);
        return{
            chartData,media
        }
    }

}
</script>

<style>

</style>