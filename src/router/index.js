import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Graph from '@/components/Graph'
import Ball from '@/components/Ball'
import draggable from 'vuedraggable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        List: List,
        Graph: Graph,
        Ball: Ball,
        draggable: draggable
      }
    }
  ]
})
