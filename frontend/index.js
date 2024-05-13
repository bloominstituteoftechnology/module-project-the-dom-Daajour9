function moduleProject1() {
  const footer = document.querySelector('footer')
  
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div')
  widgets.forEach(widget => {widget.classList.add('widget') 
     
  })


  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
      const randomIdx = Math.floor(Math.random()
 * 10)
      const randomQuote = quote[randomIdx]
      const quote = document.createElement('div')
      const quotetext = randomQuote.quote
      quote.textContent = quoteText 
      document.querySelector('quoteoftheday')
      widget1.appendChild(quote)
      const authorDate = document.createEleement('div')
      const {author, date} = randomQuote
      authorDate.textContent = `${author} in ${date || "an unknown date"} `
      widget1.appendChild(authorDate)

       // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomAdverb1 = adverbs[Math.floor(Math.random() * verbs.length)]
  const randomAdverb2 = adverbsverbs[Math.floor(Math.random() * verbs.length)]
  const randomNoun1 = nouns[Math.floor(Math.random() * verbs.length)]
  const randomNoun2 = nouns[Math.floor(Math.random() * verbs.length)]

  document.querySelector('corporatespeak')
    .textContent `we need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${raandomnoun2} in order to ${randomAdverb2}.`
  
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  const countdownwidget = document.querySelector('.countdown');
  let count = 5;
  const countdown = document.createElement('p');
  countdown.textContent = `T-minus ${count}...`;
  countdownwidget.appendChild(countdown);
  
  setInterval(() => {
    if(count === 1) {
      countdown.textContent = 'Liftoff! 🚀';
    } else {
      count--;
      countdown.textContent = `T-minus ${count}...`;
    }
  }, 1000);
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random() * people.length)];
  const personParagraph = document.createElement('p');
  const year = person.dateOfBirth.split('-')[0];
  
  let sentence = `${person.fname} ${person.lname} was born in ${year} and `;
  
  if (!person.friends.length) {
    sentence += 'has no friends.';
  } else {
    const friends = person.friends.map(friend => `${friend.fname} ${friend.lname}`);
    sentence += `is friends with ${friends.join(', ')}.`;
  }
  
  personParagraph.textContent = sentence;
  document.querySelector('.friends').appendChild(personParagraph);
      




  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
