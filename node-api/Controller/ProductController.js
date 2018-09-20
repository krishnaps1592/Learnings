var express = require('express');
var router = express.Router();
var sql = require('mssql')
var conn = require('../connection/connection');

var routes = function () {
    router.route('/').get(function (req, res) {
        conn.connect().then(function () {
            console.log('came here');
            var sqlQuery = "Select * from Employees";
            var req = new sql.Request(conn);
            req.query(sqlQuery).then(function (records) {
                console.log(res.json(records.recordset));
                res.json(records.recordset);
                conn.close();
            }).catch(function (err) {
                conn.close();
                res.status(400).send(err);
            });

        }).catch(function (err) {
            res.status(400).send(err);
        });
    });

    router.route('/').post(function (req, res) {
        conn.connect().then(function () {
            var transaction = new sql.Transaction(conn);
            transaction.begin().then(function () {
                var request = new sql.Request(transaction);
                console.log(req.body);
                request.input("ProjectName", req.body.ProjectName);
                request.input("ColorName", req.body.ColorName);
                request.input("LabelId", req.body.LabelId);
                request.execute("sp_InsertProjects").then(function () {
                    transaction.commit().then(function () {
                        conn.close();
                        console.log(req.body.ProjectName);
                        console.log(req.body.ColorName);
                        console.log(req.body.LabelId);
                        res.status(200).send('Successful');
                    }).catch(function (err) {
                        res.status(400).send(err);
                    });
                }).catch(function (err) {
                    res.status(400).send(err);
                });
            }).catch(function (err) {
                res.status(400).send(err);
            });
        }).catch(function (err) {
            res.status(400).send(err);
        });
    })

    router.route('/:ProjectName').put(function (req, res) {
        conn.connect().then(function () {
            var request = new sql.Request(conn);
            request.input("ProjectName",req.params.ProjectName);
            console.log(req.params.ProjectName);
            request.execute("sp_UpdateProjects").then(function () {
                conn.close();
                res.status(200).send("success");
            }).catch(function (err) {
                conn.close();
                res.status(400).send(err);
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send(err);
        });
    });

    router.route('/:ProjectName').delete(function (req, res) {
        conn.connect().then(function () {
            var request = new sql.Request(conn);
            request.input("ProjectName",req.params.ProjectName);
            console.log(req.params.ProjectName);
            request.execute("sp_DeleteProjects").then(function () {
                conn.close();
                res.status(200).send("deleted");
            }).catch(function (err) {
                conn.close();
                res.status(400).send(err);
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send(err);
        });
    });

return router;
}

module.exports = routes;