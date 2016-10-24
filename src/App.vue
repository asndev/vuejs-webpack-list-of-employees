<template>
  <div id="app">
    <header class="header">
      <h1 class="header__title">
        <router-link class="header__link" to="/">
        {{ computedTitle }}
        </router-link>
      </h1>
    </header>
    <main class="main">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {
      title: 'Employees',
      transitionName: 'bounce'
    }
  },
  computed: {
    computedTitle () {
      const person = this.$route.params.person
      if (person) {
        return 'back'
      } else {
        return ''
      }
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth >= fromDepth ? 'bounce' : 'slide-fade'
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

.header {
  width: 100%;
  height: 56px;
  color: #FFF;
  background: #607D8B;
  font-size: 20px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 2px 9px 1px rgba(0, 0, 0, .12), 0 4px 2px -2px rgba(0, 0, 0, .2);
  padding: 16px 16px 0;
  position: relative;
  text-align: left;
  z-index: 1;
}

.header__link {
  text-decoration: none;
  color: #FFF;
}

.header__link:hover {
  text-decoration: underline;
}

.header__title {
  font-size: 20px;
  margin: 0;
}

.main {
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 16px;
  position: relative;
  z-index: 0;
}

.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .6s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.6);
  }
  100% {
    transform: scale(1);
  }
}
</style>
