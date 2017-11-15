<template>
  <div class="ball">
    <div class="ball__container">
      <div id="ball"></div>
      <button @click="togglePlay()" class="start">{{msg}}</button>
      <h6>Scroll управляет скоростью анимации</h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Ball',
    data () {
      return {
        isAnimate: false,
        speed: 2,
        msg: 'Пуск'
      }
    },
    mounted: function () {
      // Обработчик события на колесо мыши
      document.addEventListener('mousewheel', this.changeSpeed)
    },
    methods: {
      togglePlay: function () {
        this.isAnimate = !this.isAnimate
        this.msg = this.isAnimate ? 'Пауза' : 'Пуск'
        let type
        if (this.isAnimate) type = 'running'
        else type = 'paused'
        document.getElementById('ball').style.animationDuration = this.speed + 's'
        document.getElementById('ball').style.animationPlayState = type
      },
      changeSpeed: function (e) {
        // В зависимости от знака deltaY определяем увеличивать или уменьшать скорость
        if (e.deltaY > 0) this.speed += 1
        if (e.deltaY < 0 && this.speed > 1) this.speed -= 1
        document.getElementById('ball').style.animationDuration = this.speed + 's'
      }
    }
  }
</script>

<style scoped>
@keyframes jump {
  0% { top: 0%; left: 0%}
  25% { top: -50%; }
  50% { top: 0%; }
  75% { top: -50%; }
  100% { top: 0; left: 50%}
}
.start{
  float: right;
  padding: 10px;
  margin: 30px;
}
#ball {
  position: absolute;
  animation: jump infinite;
  animation-timing-function: linear;
  animation-play-state: paused;
  width: 50px;
  height: 50px;
  margin-top: 500px;
  background-color: #2196F3;
  border: 1px solid;
  border-radius: 50%;
}
.ball__container{
  width: 100%;
  height: 100%;
}
</style>
