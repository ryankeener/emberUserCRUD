Usercrud.UserController = Ember.ObjectController.extend({
  actions: {
    edit: function(){
      this.transitionToRoute('user.edit');
    },
    delete: function () {
        this.toggleProperty('deleteMode');
    },
    confirmDelete: function () {
          // this tells Ember-Data to delete the current user
          this.get('model').deleteRecord();
          this.get('model').save();
          this.set('deleteMode',false);
          // then transition to the users route
          this.transitionToRoute('users');
    },
    cancelDelete: function () {
          this.set('deleteMode',false);
    }
  }
});