var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      recipes: [
        { name: '',
          time: '',
          statusName: false,
          statusTime: false },
          { name: '',
          time: '',
          statusName: false,
          statusTime: false },
          { name: '',
          time: '',
          statusName: false,
          statusTime: false },   
      ]
    },

    methods: {
      addRecipe: function(event) {
        this.recipes.push({name: '',
        time: '',
        statusName: false,
        statusTime: false
      });
      }
    }

  })
