// CONTROLLER FOR COMMENTS (CRUD FUNCTIONALITY)

let Comment = require('../models/Comment');
let createDate = require('../scripts/date');

module.exports = {
  get: (data, cb) => {
    Comment.find(
      {
        _headlineId: data._id
      },
      cb
    );
  },

  save: (data, cb) => {
    let newNote = {
      _headlineId: data._id,
      date: createDate(),
      commentText: data.commentText
    };

    Comment.create(newNote, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
        cb(doc);
      }
    });
  },

  delete: (data, cb) => {
    Note.collection.remove(
      {
        _id: data._id
      },
      cb
    );
  }
};
