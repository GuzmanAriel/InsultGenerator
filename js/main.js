/// array with four different body parts

var randomBodyParts = ['head', 'arm', 'leg', 'feet'];

var randomAdjectives = ['big', 'clumsy', 'creepy', 'funny'];

var randomWords = ['house', 'garbage', 'dog', 'thing'];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

var randomWord = randomWords[Math.floor(Math.random() * 3)];


console.log(randomBodyPart);
console.log(randomAdjective);
console.log(randomWord);


console.log('Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord);