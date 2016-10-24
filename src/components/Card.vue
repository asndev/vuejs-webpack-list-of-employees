<template>
  <div class="card">
    <img src="../assets/profile/1.jpg" class="card__profile">
    <h2>{{ person.first }} {{ person.last }}</h2>
    <h4>{{ person.email }}</h4>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['person'],
  data () {
    return {
      first: 'Bob',
      last: 'Ross',
      email: 'omg@omg.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  float: left;
  margin: 7px;
  width: 260px;
  height: 350px;
  position: relative;
  perspective: 500px;
  will-change: transform;

  background: #444;
  color: #FFF;
}

.card h2,
.card h4 {
  margin: 0;
}

.card__profile {
  width: 100%;
}
</style>
