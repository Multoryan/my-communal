<template>
  <div id="app">
    <div class="menu">
      <nav class="menu__container">
        <div class="menu__item" @click="current = 'List'">Работа со списком</div>
        <div class="menu__item" @click="current = 'Graph'">Построение графика</div>
        <div class="menu__item" @click="current = 'Ball'">Прыгающий шарик</div>
      </nav>
    </div>
    <transition name="fade" mode="out-in">
      <router-view :name='current' />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // С помощью current осуществляется переход по страницам
      current: 'List'
    }
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: Ubuntu, SegoeUI, sans-serif;
}
.menu{
  background-color: #03a9f4;
  width: 100%;
  height: 50px;
}
.menu__container{
  float: right;
}
.menu__item{
  float: left;
  padding: 16px;
  cursor: pointer;
}
.menu__item:hover{
  background-color: #eee;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0
}
</style>
