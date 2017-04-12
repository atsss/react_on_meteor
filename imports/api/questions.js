import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Questions = new Mongo.Collection('questions');

Meteor.methods({
  'questions.insert'(content) {
    check(content, String);

    Questions.insert({
      content,
      createdAt: new Date(),
    });
  },
  'questions.remove'(id) {
    check(id, String);

    Questions.remove({_id: id});
  },
});
