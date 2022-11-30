var connection = require('../connection');
  
function Product() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
          con.query('select * from products', function(err, result) {
            con.release();
            return res.send(result);
          });
        });
      };

      this.create = function(field_data, res) {
        
        connection.acquire(function(err, con) {
          con.query('insert into products set ?', [field_data], function(err, result) {
            con.release();
            if (err) {
              //  res.send({status: 1, message: 'Product creation failed'}).json(err);
              throw err;
            } else  {
               res.send({status: 0, message: 'Product created successfully'});
               
            }
          });
        });
      };


      this.update = function(field_data, res) {
        connection.acquire(function(err, con) {
          con.query('update products set ? where id = ?', [field_data, field_data.id], function(err, result) {
            con.release();
            if (err) {
              return res.send({status: 1, message: 'Product update failed'});
            } else {
              return res.send({status: 0, message: 'Product updated successfully'});
            }
          });
        });
      };


      this.read = function(id, res) {
        connection.acquire(function(err, con) {
          con.query('select * from products where id=?', [id], function(err, result) {
            con.release();
            return res.send(result);
          });
        });
      };

      this.delete = function(id, res) {
        connection.acquire(function(err, con) {
          con.query('delete from products where id = ?', [id], function(err, result) {
            con.release();
            if (err) {
              return  res.send({status: 1, message: 'Failed to delete'});
            } else {
              return res.send({status: 0, message: 'Deleted successfully'});
            }
          });
        });
      };
}
module.exports = new Product();