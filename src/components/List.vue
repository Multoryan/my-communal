<template>
  <div class="list">
    <draggable v-model="listOfElements" :options="{draggable:'.list__item'}" @update='saveChange' @start="drag=true" @end="drag=false">
      <div v-for="(element, index) in listOfElements"  :key='index' class="list__item"  @dblclick="rename(index)">
        <label v-if="element.notEditing">{{element.text}}</label>
        <input v-else type='text' class="list__input" v-focus v-model='listOfElements[index].text' @blur='rename(index)' />
      </div>
    </draggable>
    <h6>Двойной клик на элементе позволит его отредактировать</h6>
    <h6>При потере фокуса внутри поля элемент сохранится</h6>
    <h6>Перемещайте элемент для ручной сортировки</h6>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'List',
  data () {
    return {
      // Свойство notEditing к какждому элементу позволяет не проводить одновременное редактирование
      // всех элементов сразу и отрисовывать каждому свое поле ввода
      listOfElements: [{
        text: 'Первый элемент',
        notEditing: true
      },
      {
        text: 'Второй элемент',
        notEditing: true
      },
      {
        text: 'Третий элемент',
        notEditing: true
      },
      {
        text: 'Четвертый элемент',
        notEditing: true
      },
      {
        text: 'Пятый элемент',
        notEditing: true
      }]
    }
  },
  directives: {
    focus: {
      // определение директивы автофокуса
      inserted: function (el) {
        el.focus()
      }
    }
  },
  components: {
    draggable
  },
  mounted: function () {
    if (localStorage.getItem('length')) {
      this.listOfElements = []
      for (let i = localStorage.getItem('length') - 1; i >= 0; i--) {
        this.listOfElements.unshift({text: localStorage.getItem(i), notEditing: true})
      }
    }
  },
  methods: {
    rename: function (index) {
      this.listOfElements[index].notEditing = !this.listOfElements[index].notEditing
      this.saveChange()
    },
    saveChange: function () {
      // Просто очищаем все хранилище, так как нужных нам данных кроме списка там нет
      localStorage.clear()
      this.listOfElements.forEach((item, index) => {
        localStorage.setItem(index, item.text)
      })
      // Указание длины необходимо, если будут другие записи в локальном хранилище
      localStorage.setItem('length', this.listOfElements.length)
    }
  }
}
</script>

<style scoped>
.list{
  margin: 10px auto;
  width: 200px;
}
.list__item{
  padding: 10px;
  width: 100%;
  cursor: pointer;
}
.list__input{
  font-size: 12pt;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 5px;
  outline: none;
}
</style>
