var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(names[i]);

  if (firstLetter.toLowerCase() === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
