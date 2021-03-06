/*global Ember*/
Usercrud.User = DS.Model.extend({
    name: DS.attr('string'),

    email: DS.attr('string'),

    bio: DS.attr('string'),

    avatarUrl: DS.attr('string'),

    creationDate: DS.attr('date')
});

// delete below here if you do not want fixtures
Usercrud.User.FIXTURES = [

    {
        id: 1,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
        creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
    }, {
        id: 2,
        name: 'John David',
        email: 'john@david.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
        creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
    }
  
];
