const myVueInstance = new Vue({
    el: '#app',
    data() {
      return {
        courseName: 'Название курса',
        userName: 'Дорогой друг'
      }
    },
    template: '<div>{{ courseName }} - {{ userName }}</div>'
  })