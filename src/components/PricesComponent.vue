<template>
<v-main>
    <h2>{{data.data}}</h2>
</v-main>
</template>

<script>
import { ref } from 'vue'
export default {
name:'PricesComponent',
props:['data'],
setup(props){
    const prices = ref(props.data)
    return{
        prices
    }
}
}
</script>

<style>

</style>