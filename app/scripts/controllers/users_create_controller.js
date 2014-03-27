Usercrud.UsersCreateController = Ember.Controller.extend({
    actions: {
        save: function () {

            /*
            var newUser = this.store.createRecord('user', {
                name        : this.get('name'),
                email       : this.get('email'),
                avatarUrl   : this.get('avatarUrl'),
                bio         : this.get('bio'),
                creationDate: new Date()
            });
            */

            var newUser = this.store.createRecord('user', this);
            newUser.set('creationDate', new Date());
            console.log('newUser: ',newUser.toJSON());

            newUser.save();

            // redirects to the user itself
            this.transitionToRoute('user', newUser);
        }
    }
});
