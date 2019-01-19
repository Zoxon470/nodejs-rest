import mongoose from 'mongoose';
import note from '../models/notebookModels.js';

exports.getNote = (req, res) => {
  note.findById(req.params.noteId, (err, note) => {
    if (err) {
      res.send(err);
    }
    res.json(note);
  });
};

exports.getAllNotes = (req, res) => {
  note.find({}, (err, notes) => {
    if (err) {
      res.send(err);
    }
    res.json(notes);
  });
};

exports.createNote = (req, res) => {
  const newNote = new note(req.body);

  newNote.save((err, note) => {
    if (err) {
      res.send(err);
    }
    res.json(note);
  });
};

exports.updateNote = (req, res) => {
  note.findOneAndUpdate({
    _id: req.params.noteId
  }, req.body, (err, note) => {
    if (err) {
      res.send(err);
    }
    res.json(note);
  });
};

exports.deleteNote = (req, res) => {
  note.remove({
    _id: req.params.noteId
  }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: `Note ${req.params.notId} successfully deleted`
    });
  });
};