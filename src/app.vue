<script>
import CountryCard from "./country/components/country-list.component.vue";
import {RestCountryApi} from "./country/services/rest-country-api.service.js";
import {Country} from "./country/model/country.entity.js";
import FooterContent from "./public/components/footer-content.component.vue";
import ToolbarContent from "./public/components/toolbar-content.component.vue";

export default {
  name: "app",
  components: {ToolbarContent, FooterContent, CountryCard},
  data() {
    return {
      country:null,
      countryAPI: new RestCountryApi()
    }
  },
  created() {
    this.buildCountry();
  },
  methods: {
    buildCountry() {
      this.countryAPI.getCountry().then(response => {
        const countryData = response.data[0]; // Asegúrate de que estás accediendo al primer elemento del array de respuesta.



        // Crear la instancia de Country con los datos adecuados
        this.country = new Country(
            countryData.name.common,
            countryData.name.official,
            countryData.capital ? countryData.capital[0] : 'No capital', // Manejo seguro de capital
            countryData.region,
            countryData.subregion,
            countryData.area,
            countryData.population,
            countryData.flags.svg, // Usar el enlace SVG de la bandera
            countryData.coatOfArms.svg // Usar el enlace SVG del escudo de armas
        );
      }).catch(e => console.error(e));
    }
  }
}
</script>

<template>
  <toolbar-content></toolbar-content>
  <country-card v-if="country" :country="country"></country-card>
  <footer-content></footer-content>
</template>