import { Meteor } from "meteor/meteor";
import bcrypt from "bcrypt";

Meteor.startup(() => {
  bcrypt.hash("Foo", 10).then(console.log).catch(console.error);
});
