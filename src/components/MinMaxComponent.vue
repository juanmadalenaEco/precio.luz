<template>
<v-main>
 <v-card 
        elevation="0"
        width="90%">
<v-row>
            <v-col>
                <v-card>
                    <v-card-header>
                        Precio mas bajo de ayer
                    </v-card-header>
                    <v-card-title>
                        <h3 class="red">
                            {{prices[yesterdayMin].value}}
                        </h3>
                    </v-card-title>
                    <v-card-text>
                        <h3>
                            {{yesterdayMin}}:00
                        </h3>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-header>
                        Precio mas bajo de hoy
                    </v-card-header>
                    <v-card-title>
                        <h3 class="red">
                        {{prices[todayMin + 24].value}}
                        </h3>
                    </v-card-title>
                    <v-card-text>
                        <h3>
                            {{todayMin}}:00
                        </h3>
                    </v-card-text>                
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-header>
                        Precio mas alto de ayer
                    </v-card-header>
                    <v-card-title>
                        <h3 class="green">
                        {{prices[todayMax].value}}
                        </h3>
                    </v-card-title>
                    <v-card-text>
                        <h3>
                            {{yesterdayMax}}:00
                        </h3>
                    </v-card-text>               
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-header>
                        Precio mas alto de hoy
                    </v-card-header>
                    <v-card-title>
                        <h3 class="green">
                        {{prices[todayMax + 24].value}}
                        </h3>
                    </v-card-title>       
                    <v-card-text>
                        <h3>
                            {{todayMax}}:00
                        </h3>
                    </v-card-text>         
                </v-card>
            </v-col>
        </v-row>
        </v-card>
</v-main>
</template>

<script>
import { ref } from 'vue'
export default {
name:'MinMaxComponent',
props:['data','today'],
setup(props){
    const prices = ref(props.data.data.included[0].attributes.values)
    const today = new Date(Date.parse(props.today))

    let yesterdayPrices = []
    let todayPrices = []
    
    prices.value.map((el)=>{
        const date = new Date(Date.parse(el.datetime))

        if(date.getDate() === today.getDate()){
            todayPrices = [...todayPrices, el.value]
        }
        else if(date.getDate() < today.getDate()){
            yesterdayPrices = [...yesterdayPrices, el.value]
        }
})
    console.log(todayPrices);
    console.log(yesterdayPrices);
    const yesterdayMax = yesterdayPrices.indexOf(Math.max.apply(null,yesterdayPrices))
    const yesterdayMin = yesterdayPrices.indexOf(Math.min.apply(null,yesterdayPrices))

    const todayMax = todayPrices.indexOf(Math.max.apply(null,todayPrices))
    const todayMin = todayPrices.indexOf(Math.min.apply(null,todayPrices))

    return{
        prices,todayMax,todayMin,yesterdayMax,yesterdayMin
    }
}
}
</script>

<style>
.red{
    color:red;
}
.green{
    color: green;
}
</style>