new Vue({
  el: '#app',
  data: {
    firstName: 'Sean',
    lastName: 'Felling'
  },

  methods: {
    getFullName: function() {

      return this.firstName + " " + this.lastName;

    }
  }
});
