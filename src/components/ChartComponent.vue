<template>
<v-main>

    <LineChart :chartData="chartData"/>

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
            prices = [...prices, el.value]
            hours = [...hours, el.datetime]
        })


        const chartData = {
        labels: hours,
        datasets: [
            {
            data: prices,
            backgroundColor: ['red'],

            },
        ],
        }; 

        return{
            chartData
        }
    }

}
</script>

<style>

</style>