<template>
  <v-navigation-drawer permanent rail app clipped>
      <v-list nav>
          <v-list-item class="" prepend-icon="mdi-chart-box-outline" title="" value="chart">
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="" prepend-icon="mdi-currency-usd" title="" value="prices">
          </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    name:'NavigationComponent'
}
</script>

<style>

</style>