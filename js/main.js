//Arrays


var shoppingList = ['apples', 'pizza', 'chicken', 'mushrooms', 'oranges', 'beef'];

shoppingList.unshift('crackers');

shoppingList.push('grapes');

//remove items

shoppingList.pop();

shoppingList.shift();

console.log(shoppingList);

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

var colors2 = ['purple', 'navy', 'pink'];

var allColors = colors.concat(colors2);

console.log(allColors);

var reverseColors = allColors.reverse();
console.log(reverseColors);

var sortColors = allColors.sort();
console.log(sortColors);

var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];

var winter = weather.slice(0, 5);

console.log(winter);

var summer = weather.slice(5);
console.log(summer);