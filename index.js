function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

// Remove unnecessary if statements

function logShout(string){
  var stringUppercase = string
  if (stringUppercase.toUpperCase() === stringUppercase){
    console.log(stringUppercase)
  }else{
  stringUppercase = stringUppercase.toUpperCase()
  console.log(stringUppercase)
  }
}

function logWhisper(string){
    var stringLowercase = string
  if (stringLowercase.toLowerCase() === stringLowercase){
    console.log(stringLowercase)
  }else{
  stringLowercase = stringLowercase.toLowerCase()
  console.log(stringLowercase)
  }
}

function sayHiToGrandma(string){
    var message = string
    if (message === message.toLowerCase()){
      return "I can't hear you!"
    }else if (message === message.toUpperCase()) {
      return "YES INDEED!"
    }else if (message === "I love you, Grandma.") {
      return "I love you, too."
    }else{
      // Do nothing
    }
}