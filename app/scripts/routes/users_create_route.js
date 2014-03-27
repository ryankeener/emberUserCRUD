Usercrud.UsersCreateRoute = Ember.Route.extend({
/*    model: function () {
        var user = this.store.createRecord('user', {name: 'myName'});
        console.log('creating user: ',user.toJSON());
        return user;
    },*/

    // in this case (the create route), we can reuse the user/edit template
    // associated with the usersCreateController
    renderTemplate: function(){
        this.render('user.edit', {
            controller: 'usersCreate'
        });
    }
});