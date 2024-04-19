<script>
import {Country} from "../model/country.entity.js";

export default {
  name: "country-card",
  props:{country:Country}
}
</script>

<template>
<pv-card class="md:max-h-300rem m-1">
  <template #header>
    <img class="m-2" alt="flag Peru" :src="country.flag">
  </template>
  <template #title>
    <h1>{{country.name}}</h1>
    </template>
  <template #content>
    <p class="m-0">
      <span class="flex align-items-center justify-content-center mr-2 xl:flex-column">
        <ul>Capital: {{country.capital}}</ul>
        <ul>Region: {{country.region}}</ul>
        <ul>Subregion: {{country.subregion}}</ul>
        <ul>Population: {{country.population}}</ul>
        <ul>Area: {{country.area}}</ul>
      </span>
    </p>
  </template>
  <template #footer>
    <img alt="shield of Peru" :src="country.coatOfArms">
    </template>
</pv-card>
</template>

<style scoped>
img{
  width:50%;
  height:50%;
}
</style>