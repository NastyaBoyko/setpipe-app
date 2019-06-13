
var  bodyParser = require('body-parser');
var data = require('../data/pipes.json');
var categs = require('../data/categories.json');
var fs = require('fs');
var ejs = require('ejs');

var urlencodedparser = bodyParser.urlencoded({extended:true});

module.exports = function(app){

  app.get('/', function(req,res){
    res.render('index',{categories:categs});
  });

  app.get('/catalog', function(req,res){
    res.render('catalog',{pipes:data, categories:categs});
  });

  app.get('/catalog/:id', function(req,res){
    const id = req.params.id;
    res.render('one-item',{pipe:data[id-1], pipes:data});
  });

  app.post('/catalog', urlencodedparser, function(req,res){
    //console.log(req.body.selectedCategotyID);
    var selectedCategoryID = ++req.body.selectedCategotyID;
    var selected_pipes = [];
    console.log(selectedCategoryID);
    for (var i = 0; i < data.length; i++) {
      console.log("obj " + i + ": category number = " + data[i].category);
      if (data[i].category == selectedCategoryID) {
        console.log(data[i]);
        selected_pipes.push(data[i]);
      }
    }
    // if(selected_pipes.length == 0) res.render({message:'В категории шлангов не найдено.', categories:categs});
    // else res.render("catalog",{pipes:selected_pipes, categories:categs});
    // else {
      // var file = fs.readFile('./views/catalog.ejs', function(err,templ) {
      //   var pipes_template = ejs.compile(file, { client: true });
      //   const html = pipes_template({pipes: selected_pipes});
      //   console.log(html);
      // });
      res.render("catalog",{pipes:selected_pipes, categories:categs});
    // }

  });

  // app.post('/todo',urlencodedparser, function(req,res){
  //   data.push(req.body);
  //   res.json(data);
  // });

  // app.delete('/todo/:item', function(req,res){
  //   data = data.filter(function(todo){
  //     return todo.item.replace(/ /g, '-') !== req.params.item;
  //   });
  //   res.json(data);
  // });
};
