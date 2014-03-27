Ember.Handlebars.helper('dateFromNow', function(date){
    return moment(date).fromNow();
});

// For data that could change we need to use a bound helper
Ember.Handlebars.registerBoundHelper('dateFromNowBound', function(date){
    return moment(date).fromNow();
});