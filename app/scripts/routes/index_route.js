Usercrud.IndexRoute = Ember.Route.extend({
    // Automatically re-direct to the users page
    redirect: function(){
        this.transitionTo('users');
    }
});