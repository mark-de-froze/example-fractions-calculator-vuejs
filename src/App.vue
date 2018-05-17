<template>
  <div id="app" class="app">
    <a href="https://github.com/mark-de-froze/example-fractions-calculator-vuejs"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png" alt="Fork me on GitHub"></a>
    <ul class="app-nav">
      <router-link tag="li" :to="{ name: 'index'}"><a>Index</a></router-link>
      <router-link tag="li" :to="{ name: 'history'}"><a>History</a></router-link>
    </ul>
    <div class="app-content flex-center">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <div class="app-footer">
      <span>Made with love and creative by <a href="http://markdefroze.com/">Mark de Froze</a> © 2017</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

body {
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
}

.app-nav {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  list-style: none;
  margin: 0;
  padding: 0;

  background-color: #fff;
}

.app-nav > li {
  display: inline-block;
  padding: 30px;
  font-size: 20px;
}

.app-nav li > a {
  color: #90a9d2;
  text-decoration: none;
}
.app-nav li > a:hover {
  color: #f4cbc7;
}

.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.app-content {
  flex: 1;
  width: 500px;
  margin: 0 auto;
}
.app-footer {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
