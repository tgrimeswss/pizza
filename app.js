function init() {
  var uniqueToppings = [];//Toppings array of ingredients
  var toppingsObject = [];//Toppings object storing the topping counter and topping name
  for(var i = 0; i < ptoppings.length; i++) {//For every topping object
    for (var x = 0; x < ptoppings[i].toppings.length; x++) {//For every actual topping in the topping object
      if (uniqueToppings.includes(ptoppings[i].toppings[x]) === false) {//If the selected topping is not included in the uniqueToppings array, then...
        uniqueToppings.push(ptoppings[i].toppings[x]);//add the damn topping to our unique list
        toppingsObject[ptoppings[i].toppings[x]] = 1;//create an object for it
      } else if (uniqueToppings.includes(ptoppings[i].toppings[x]) === true) {//If the topping IS in the uniqueTopping array, then...
        toppingsObject[ptoppings[i].toppings[x]] = toppingsObject[ptoppings[i].toppings[x]] + 1;//Add that topping to the object as a count for toppings
      }
    }
  }

  (function sortIt() {
    var sortable = [];//Create an array to sort the toppingsObject
    for (var x in toppingsObject) {//For every property in toppingsObject...
      sortable.push([x, toppingsObject[x]]);//push the newly sorted property into sortable
    }
    sortable.sort(function(a, b) {//Function to sort toppings
        return b[1]-a[1];
    });

    function showIt(ratings) {//Argument refers to the top 20 sorted toppings
      for (var i = 0; i < ratings; i++) {//For every topping from 0 - 20
        $('.content').append('<li class="listElements">'+ sortable[i][0]  + ' - ' + sortable[i][1] +'</li>');//Append the list element with appropriate data
      }
      console.log(sortable);//Log it to the console
    }
    showIt(20);//Initiate sorting
  })()
}

init();//Initiate the whole process
