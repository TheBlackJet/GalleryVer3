import { Meteor } from 'meteor/meteor';

import { Images } from '../import/api/images.js';

Meteor.startup(() => {
  // code to run on server at startup
  Images.remove({});
  Images.insert({path : 'Chrysanthemum.jpg', status : 'active'});
  Images.insert({path : 'Desert.jpg', status : ''});
  Images.insert({path : 'Hydrangeas.jpg', status : ''});
  Images.insert({path : 'Jellyfish.jpg', status : ''});

  console.log(Images.find({}).fetch());

  Meteor.publish('Images',
      function (){

          return Images.find({}).fetch();
      }
  );

});
