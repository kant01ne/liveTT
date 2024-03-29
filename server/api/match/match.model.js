'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MatchSchema = new Schema({
  name: String,
  body: String,
  ligue: String,
  poule: String,
  journee: Number,
  division: String,
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
  date: Date,
  games: [{type: Schema.Types.ObjectId, ref:'Game'}],
  comments: [{type: Schema.Types.ObjectId, ref:'Comment'}],
  team: {
    dom: {type: Schema.Types.ObjectId, ref:'Team'},
  	ext: {type: Schema.Types.ObjectId, ref:'Team'}
  },
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
  active: { type: Boolean, default: false }
});


/**
 * Validations
 */

// Validate empty username
MatchSchema
  .path('name')
  .validate(function(name) {
    return name.length;
  }, 'Match name cannot be blank');

// Validate empty username
MatchSchema
  .path('division')
  .validate(function(division) {
    return division.length;
  }, 'Match division cannot be blank');


module.exports = mongoose.model('Match', MatchSchema);