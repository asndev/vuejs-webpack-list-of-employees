<template>
  <div class="listview">
    <div class="searchContainer">
      <input type="search" id="personSearch" placeholder="Filter ...">
    </div>
    <div id="personContent">
      <router-link
        v-for="person in data"
        :to="{ name: 'employee', params: { id: person.id, person: person } }">
        <card
          v-bind:person='person'>
        </card>
      </router-link>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'listview',
  components: {
    Card
  },
  data () {
    return require('../assets/data.json')
  }
}
</script>

<style>
.listview {
  width: 100%;
  height: 100%;
}

.searchContainer {
  width: 100%;
  overflow: hidden;
}

#personContent {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

#personSearch {
  float: right;
  width: 100%;
  max-width: 300px;
  padding: 6px 12px;
  height: 34px;
  font-size: 14px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}
</style>
