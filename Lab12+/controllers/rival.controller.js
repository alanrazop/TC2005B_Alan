const path = require('path');
const Rival = require('../models/rival.model');

exports.getRival = (request, response, next) => {

    Rival.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('rival.ejs'), {
                rivales: rows,
                isLoggedIn: request.session.isLoggedIn,
            });
        })
        .catch(err =>{
            console.log(err);
            response.render('error.ejs');
        });
        
};

exports.getNewRival = (request, response, next) => {
    response.render(path.join('nuevo.ejs'), {
        isLoggedIn: request.session.isLoggedIn,
        rival: "",
    });
};

exports.postNewRival = (request, response, next) => {
    const rival = new Rival(request.body.nombre);
    rival.save()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('..','views','rival.ejs'), {
                rivales: rows,
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });
};

exports.getEditRival = (request, response, next) => {

    Rival.fetchOne(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows[0]);
        if (rows.length > 0) {
            response.render(path.join('nuevo.ejs'), {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                rival: rows[0]
            });
        }
        else {
            console.log('No existe el id del rival');
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        }
         
    })
    .catch(err => {
        console.log(err)
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    }) 
};

exports.postEditRival = (request, response, next) => {

    Rival.fetchOne(request.body.id)
        .then(([rows, fieldData]) => {
            rows[0].nombre = request.body.nombre;
            Rival.saveEdit(rows[0])
                .then(() => {
                    response.redirect('/rivales');
                })
                .catch(err => {
                    console.log(err);
                    response.render('error.ejs', {
                        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                    });
                });
        })
        .catch(err => {
        console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
    });
};