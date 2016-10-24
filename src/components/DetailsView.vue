<template>
  <div class="detailsview">
    <img src="../assets/profile/1.jpg">
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

.detailsview img {
  border-radius: 50%;
}
</style>
