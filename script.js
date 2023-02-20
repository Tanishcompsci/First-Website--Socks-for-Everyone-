  /*
  Name: Tanish Parlapall
  Date: 10/13/20
  */


  var itemCost =[10,15,23];

  function orderNow() {


  var userOrder = "";
  //var for order total
  var orderTotal = 0;
  
  if(document.getElementById('item1').checked){
    userOrder =  userOrder + document.getElementById('item1').value + "\n";
    //price addedd to each product
    orderTotal += itemCost[0];
    
  }
  if(document.getElementById('item2').checked){
    userOrder =  userOrder + document.getElementById('item2').value + "\n";
		orderTotal += itemCost[1];
  }
  
  if(document.getElementById('item3').checked){
    userOrder =  userOrder + document.getElementById('item3').value + "\n";
		orderTotal += itemCost[2];
  }
  if (userOrder === "") {
    alert( "You didn't order anything");
    //if statement, for scenario where the user doesn't choose an item
  }
  else{
    document.getElementById("total").innerHTML = "Your total is $"+ orderTotal;
		alert( "Thank You for ordering \nYou Ordered:\n"+ userOrder +" $" + orderTotal + " is your total.");
    //statement for the item(s) the user orders

  }
}
