var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL   || 'postgres://localhost:5432/message_board';
//+ "?ssl=true"

router.route('/').post(function (req, res) {
                    console.log(req.body);
                    pg.connect(connectionString,function (err, client, done) {
                      var query = 'INSERT INTO messages (name, message, date) VALUES($1, $2, $3)';
                      client.query(query,[req.body.name, req.body.message, req.body.date], function (err, result) {
                        if (err) {
                          console.log('error sending data', err);
                          res.send(false);
                        }
                        console.log(result);
                        res.send(result);
                      });
                      done();
                    });
                  })
                  .get(function (req, res) {
                    var results = [],
                        query;
                    pg.connect(connectionString, function (err, client, done) {
                      query = client.query('SELECT name, message, date, id FROM messages');
                      query.on('row', function (row) {
                        results.push(row);
                      });
                      query.on('end', function () {
                        client.end();
                        res.json(results);
                      });
                    });
                  });


  router.delete('/:id',function (req,res) {

                    console.log(req.params.id);
                    var queryString = 'DELETE from messages where id = $1';
                    pg.connect(connectionString,function (err, client, done) {
                        client.query(queryString, [req.params.id],function (err, result) {
                          if (err){
                            console.log('error on delete', err);
                            res.send(false);
                          }else{
                            res.send(true);
                          }
                        });
                    });

                  });

module.exports = router;
