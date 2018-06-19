var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

function start(){
  10
    connection.query('SELECT * FROM products', function(err, res){
      if(err) throw err;
    
      console.log("View Products")
      console.log('--')
    
      for(var i = 0; i<res.length;i++){
        console.log("ID: " + res[i].item_id + " " + "Product: " + res[i].product_name + " " + "Department: " + res[i].department_name + " " + "Price: " + res[i].price + " " + "QTY: " + res[i].stock_quantity);
        console.log('--')
      }
    
      console.log(' ');
      inquirer.prompt([
        {
          type: "input",
          name: "id",
          message: "What is the product id of the item  you want to buy?",
          validate: function(value){
            if(isNaN(value) === false && parseInt(value) <= res.length && parseInt(value) > 0){
              return true;
            } else{
              return false;
            }
          }
        },
        {
          type: "input",
          name: "quantity",
          message: "How much of the item do you want to buy?",
          validate: function(value){
            if(isNaN(value)){
              return false;
            } else{
              return true;
            }
          }
        }
        ]).then(function(answer){
          
          var itemstoBuy = (answer.id)-1;
          var quantitytoBuy = parseInt(answer.quantity);
          var total = parseFloat(((res[itemstoBuy].price)*quantitytoBuy).toFixed(2));
    
          if(res[itemstoBuy].stock_quantity >= quantitytoBuy){
           
            connection.query("UPDATE products SET ? WHERE ?", [
            {stock_quantity: (res[itemstoBuy].stock_quantity - quantitytoBuy)},
            {item_id: answer.id}
            ], function(err, result){
                if(err) throw err;
                console.log("Thanks for shopping! Your total is $" + total.toFixed(2));
                
            });
    
            connection.query("SELECT * FROM products", function(err, departmentRes){
              if(err) throw err;
              var index;
              for(var i = 0; i < departmentRes.length; i++){
                if(departmentRes[i].department_name === res[itemstoBuy].department_name){
                  index === i;
                }
              }
              
            
              connection.query("UPDATE products SET ? WHERE ?", [
              {stock_quantity: departmentRes[index].stock_quantity + price},
              {department_name: res[itemstoBuy].department_name}
              ], function(err,departmentRes ){
                  if(err) throw err;
                  
              });
            });
    
          } else{
            console.log("Limited stock available!");
          }
    
          shopAgain();
        })
    })
    }
    
  
function shopAgain(){
    inquirer.prompt([{
      type: "confirm",
      name: "reply",
      message: "Do you want to continue shopping?"
      
    }]).then(function(answer){
      if(answer.reply){
        start();
      } else{
        console.log("Bye!");
        start();
       
      }
    });
  }
  
  start();
  