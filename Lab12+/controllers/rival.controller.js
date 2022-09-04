const { response } = require('express');
const path = require('path');
const Rival = require('../models/rival.model');

exports.getRival = (request, response, next) => {

    Rival.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('rival.ejs'), {
                rivales: rows,
            });
        })
        .catch(err =>{
            console.log(err);
            response.render('error.ejs');
        });
        
};

exports.getNewRival = (request, response, next) => {
    response.render(path.join('nuevo.ejs'));
};

exports.postNewRival = (request, response, next) => {
    const rival = new Rival(request.body.nombre);
    rival.save()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('..','views','rival.ejs'), {
                rivales: rows,
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};
   