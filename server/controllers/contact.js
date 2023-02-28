let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let Contact = require('../models/contacts');

//we want to display the contactList
module.exports.displayContactList = (req, res, next) => {
    if (!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
           //console.log(ContactList);

           //const sortedContactList = contactList.sort(function (a, b) {
                // if (a.name.toLowerCase() < b.name.toLowerCase()) {
                //     return -1;
                // }
                // if (a.name.toLowerCase() > b.name.toLowerCase()) {
                //     return 1;
                // }
                // return 0;
                // });
            const sortedContactList = contactList.sort((a, b) => a.name.localeCompare(b.name))
            res.render('contact/list', { title: 'Business Contacts List View', ContactList:sortedContactList,displayName:req.user?req.user.displayName:'' });
        }
    });
}
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add',{title:'Add Contact',displayName:req.user?req.user.displayName:''})
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
       
    });
    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('contact/edit', { title: 'Edit Contact', contact: contactToEdit,displayName:req.user?req.user.displayName:'' });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });
    console.log('req.body.number' , req.body)
    Contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //console.log(contactList);
            res.redirect('/contactList');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}