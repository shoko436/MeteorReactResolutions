Meteor.methods({ 
  addResolution: function(resolution) { 
    check(resolution, String);

    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorized');
    }

    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },

  toggleResolution: function(resolution) {
    check(resolution, Object);

    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error('not-authorized');
    }
    
    Resolutions.update(resolution._id, {
      $set: { complete: !resolution.complete}
    });
  },

  deleteResolution: function(resolution) {
    check(resolution, Object);

    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error('not-authorized');
    }
    
    Resolutions.remove(resolution._id);
  }
});