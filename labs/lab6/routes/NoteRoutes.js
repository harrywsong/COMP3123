const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    const note = new noteModel({
        noteTitle: req.body.content.noteTitle,
        noteDescription: req.body.content.noteDescription,
        priority: req.body.content.priority,
        dateAdded: req.body.content.dateAdded,
        dateUpdated: req.body.content.dateUpdated
    });
    
    await note.save();
    res.send(note);
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async (req, res) => {
    //TODO - Write your code here to returns all note
    const notes = await noteModel.find();
    res.send(notes);
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    const note = await noteModel.findById(req.params.noteId);
    res.send(note);
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    const note = await noteModel.findByIdAndUpdate(req.params.noteId, {
        noteTitle: req.body.content.noteTitle,
        noteDescription: req.body.content.noteDescription,
        priority: req.body.content.priority,
        dateUpdated: req.body.content.dateUpdated
    }, { new: true });
    
    res.send(note);
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    const note = await noteModel.findByIdAndDelete(req.params.noteId);
    res.send(note);
});


module.exports = noteRoutes;
