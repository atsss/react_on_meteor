import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Answers = new Mongo.Collection('answers');

Meteor.methods({
  'answers.insert'(content, question_id) {
    check(content, String);
    check(question_id, String);

    Answers.insert({
      content,
      question_id,
      createdAt: new Date(),
    });
  },
});
