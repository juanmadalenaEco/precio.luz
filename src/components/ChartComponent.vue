<template>
<v-main>
    <v-card width="90%">
    <LineChart :chartData="chartData"/>
    <div class="d-flex flex-column align-center justify-center mt-5">
        <h5>
            Media:
        </h5>
        <h4>{{media[0]}}</h4>
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
    props:['data','today','yesterday'],
    setup(props){
        const values = ref(props.data.data.included[0].attributes.values)
        let prices = []
        let hours = []
        
        const today = ref(props.today);
        const yesterday = ref(props.yesterday);

        console.log(today.value);
        console.log(yesterday.value);
        values.value.map((el)=>{
            let formatDate = new Date(Date.parse(el.datetime))
            if(yesterday.value < formatDate && formatDate > today.value){
            
            prices = [...prices, el.value]
            hours = [...hours, `${formatDate.getDate()}/${formatDate.getMonth()+1} ${formatDate.getHours()}:00`]

            }
        })

        let media=[]
        for (let i = 0; i < prices.length; i++) {
            media = [...media, (prices.reduce((a,b)=>a+b)/prices.length).toFixed(2)]            
        }

        const chartData = {
        labels: hours,
        datasets: [
            {
            data: prices,
            backgroundColor: 'blue',
            label:'price',
            borderColor:'blue',
            },
            {
            data: media,
            backgroundColor:'red',
            label:'media',
            borderColor:'red',
            pointStyle:'circle',
            pointRadius:0,
            pointHoverRadius:0,
            }
        ],
        }; 
        return{
            chartData,media
        }
    }

}
</script>

<style>

</style>