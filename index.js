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
  
}