<script>
import {Country} from "../model/country.entity.js";

export default {
  name: "country-card",
  props: {
    countries: {
      type: Array,
      default: () => []
    },
    country: {
      type: Country,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rows() {
      const list = Array.isArray(this.countries) && this.countries.length ? this.countries
                  : (this.country ? [this.country] : []);
      const result = [];
      for (let i = 0; i < list.length; i++) {
        const c = list[i] || {};
        const displayName = this._displayName(c);
        const key = this._stableKey(c, i, displayName);
        result.push({ key, displayName });
      }
      return result;
    }
  },
  methods: {
    _displayName(c) {
      let nameVal = '';
      if (c && typeof c === 'object') {
        if ('name' in c) {
          const n = c.name;
          if (typeof n === 'string') {
            nameVal = n;
          } else if (n && typeof n === 'object') {
            if ('common' in n && typeof n.common === 'string') {
              nameVal = n.common;
            } else if ('official' in n && typeof n.official === 'string') {
              nameVal = n.official;
            }
          }
        }
        if (!nameVal && 'officialName' in c && typeof c.officialName === 'string') {
          nameVal = c.officialName;
        }
      }
      return nameVal || '';
    },
    _stableKey(c, index, displayName) {
      let k = '';
      if (c && typeof c === 'object') {
        if ('cca3' in c && c.cca3) k = String(c.cca3);
        else if ('ccn3' in c && c.ccn3) k = String(c.ccn3);
        else if ('cca2' in c && c.cca2) k = String(c.cca2);
        else if ('cioc' in c && c.cioc) k = String(c.cioc);
        else if ('fifa' in c && c.fifa) k = String(c.fifa);
      }
      if (!k && displayName) k = String(displayName);
      if (!k) k = 'row';
      return k + '-' + String(index);
    }
  }
}
</script>

<template>
  <div class="country-table-wrapper">
    <table class="country-table" role="table">
      <thead>
        <tr>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td>Loading...</td>
        </tr>
        <tr v-else-if="rows.length === 0">
          <td>No countries available</td>
        </tr>
        <tr v-else v-for="item in rows" :key="item.key">
          <td>{{ item.displayName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.country-table-wrapper {
  width: 100%;
  overflow-x: auto;
}
.country-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0.5rem 0;
}
.country-table th,
.country-table td {
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
}
.country-table thead th {
  background: #f5f5f5;
  color: #333;
}
</style>
