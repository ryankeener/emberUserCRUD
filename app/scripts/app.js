var Usercrud = window.Usercrud = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

console.log('Starting userCRUD!');
if(typeof _ !== 'undefined') { console.log('underscore') } else { console.log('no underscore')}
console.log('last: '+_.last([1,2,3,4]));
