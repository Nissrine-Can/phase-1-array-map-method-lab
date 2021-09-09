const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*function capitalizeString(str) {
  return str.split(' ').map(function(word) {
    return (word[0].toUpperCase() + word.slice(1));
      }).join(' ');
}*/



const titleCased = (tutotials) => {
  const tutsWords = tutorials.map(string => string.split(' '));

  const tutsCap = [];

      for (const el of tutsWords) {
        const tutsWordCap = (el.map (word => word[0].toUpperCase() + word.slice(1)).join(" "));
        tutsCap.push(tutsWordCap);
      }
      return tutsCap;
}

titleCased;








