import { Meteor } from "meteor/meteor";
import bcrypt from "bcrypt";

Meteor.startup(() => {
  bcrypt.hash("Foo", bcryptRounds).then(console.log).catch(console.error);
});
