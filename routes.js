var product = require('./Models/product');
  
module.exports = {
  configure: function(app) {
    app.get('/getAllProducts/', function(req, res) {
        product.get(res);
    });
     
    app.get('/Product/read/:id/', function(req, res) {
        product.read(res);
    });
 
    app.post('/Product/create', function(req, res) {
        product.create(req.body, res);
    });
  
    app.put('/Product/update', function(req, res) {
        product.update(req.body, res);
    });
  
    app.delete('/Product/delete/:id/', function(req, res) {
        product.delete(req.params.id, res);
    });
  }
};