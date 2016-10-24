<template>
  <div class="detailsview">
    <h1>{{ $route.params.person.first }} {{ $route.params.person.last }}</h1>
    <h2>{{ $route.params.person.email }}</h2>
  </div>
</template>

<script>
export default {
  name: 'detailsview',
  components: {
  }
}
</script>

<style>
.detailsview {
}
</style>
