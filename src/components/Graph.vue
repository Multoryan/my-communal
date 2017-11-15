<template>
  <div class="graph">
    <canvas id="graph" @click="toggleGraph()"></canvas>
    <h6 class="hint">Клик по графику изменит его тип</h6>
  </div>
</template>

<script>
  export default {
    name: 'Graph',
    data () {
      return {
        values: [5, 10, 7, 11, 5, 13, 10, 5, 11, 5, 12, 8],
        typeGraph: true
      }
    },
    mounted: function () {
      this.drawAxes()
      this.buildSquare()
    },
    methods: {
      buildSquare: function () {
        this.clearCanvas()
        this.drawAxes()
        const canvas = document.getElementById('graph')
        let ctx = canvas.getContext('2d')
        const widthColumn = 10
        const spaceColumn = 5
        const size = 10
        let position = spaceColumn
        var grd = ctx.createLinearGradient(0, 0, 0, 200)
        grd.addColorStop(1, '#1e88e5')
        grd.addColorStop(0, '#0d47a1')
        ctx.fillStyle = grd
        this.values.forEach((item) => {
          ctx.fillRect(position + spaceColumn, canvas.height - size * item, widthColumn, canvas.height)
          position = position + spaceColumn + size
        })
      },
      buildLine: function () {
        this.clearCanvas()
        this.drawAxes()
        const canvas = document.getElementById('graph')
        let ctx = canvas.getContext('2d')
        ctx.fillStyle = '#0d47a1'

        const spaceColumn = 15
        const size = 10
        let position = spaceColumn

        this.values.forEach((item, index) => {
          if (index) ctx.lineTo(position + spaceColumn, canvas.height - size * item)
          else { ctx.moveTo(position + spaceColumn, canvas.height - size * item) }
          position = position + spaceColumn
        })
        ctx.stroke()
      },
      drawAxes: function () {
        const canvas = document.getElementById('graph')
        let ctx = canvas.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, canvas.height)
        ctx.lineTo(canvas.width, canvas.height)
        ctx.stroke()
      },
      toggleGraph: function () {
        this.typeGraph = !this.typeGraph
        if (this.typeGraph) this.buildSquare()
        else { this.buildLine() }
      },
      clearCanvas: function () {
        const canvas = document.getElementById('graph')
        let ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
  }
</script>

<style scoped>
#graph{
  display: block;
  margin: 10px auto;
  cursor: pointer;
}
.hint{
  text-align: center;
}
</style>
