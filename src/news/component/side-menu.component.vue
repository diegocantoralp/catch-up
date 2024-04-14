<script>
import {NewsApiService} from "../model/services/news-api.service.js";

export default {
  name: "side-menu",
  props: {visible: Boolean},
  data() {
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created(){
    this.newsApi.getSources()
      .then(response => {
        this.sources = response.data.sources;
        this.sources.forEach(source => source.urlToLogo = this.newsApi.getUrlToLogo(source));
        console.log(`data: ${response.data.sources}`);
        })
      .catch(error => {
        this.errors.push(error);
      });
  },
  methods: {
    onSourceSelected(source){
      this.$emit('source-selected', source);
    },
    isAvailable(){
      return this.isAvailable();
    }
  }
}
</script>

<template>
 <pv-sidebar v-bind:visible="visible">
    <div slot="header">
      <h4>News sources</h4>
    </div>
    <div slot="content">
      <ul class="list-group">
        <li class="list-group-item" v-for="source in sources" v-on:click="onSourceSelected(source)">
          <img v-bind:src="source.urlToLogo" alt="logo" class="logo">
          <span>{{ source.name }}</span>
        </li>
      </ul>
    </div>
 </pv-sidebar>
</template>
