const zodiacSigns = { 
    Aries: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Taurus: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Gemini: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Cancer: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Leo: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Virgo: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Libra: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Scorpio: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Sagittarius: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Capricorn: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Aquarius: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
    Pisces: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"]
  }

const zodiacMessageGenerator = (day, month) => {

  const zodiacSymbol = zodiacFinder(day, month)
  const numOfQuotes = zodiacSigns[zodiacSymbol].length
  const messageIndex = Math.floor((Math.random() * numOfQuotes))

  return `Your sign is ${zodiacSymbol}. Listen to these words ${zodiacSigns[zodiacSymbol][messageIndex]}`
}


// Helper methods

const validDate = (month, day) => {
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
  const monthWithThirty = ['april', 'june', 'september', 'november']
  const monthWithThirtyOne = ['january', 'march', 'may', 'july', 'august', 'october', 'december']
  let lowercase_month = month.toLowerCase()
  if (months.includes(month.toLowerCase())) {
    if (lowercase_month === 'february') {
      if (day > 0 && day <= 29) {
        return true
      } else {
        return false
      }
    } else if (monthWithThirty.includes(lowercase_month)) {
      if (day > 0 && day <= 30) {
        return true
      } else {
        return false
      }
    } else if (monthWithThirtyOne.includes(lowercase_month)) {
      if (day > 0 && day <= 31) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}



const zodiacFinder = (day, stringMonth) => {
  let astroSign = ""
  let lowercaseMonth = stringMonth.toLowerCase()

  if (lowercaseMonth === "january") {
    if (day <= 19) {
      astroSign = "Capricorn"
    } else if (day >= 20) {
      astroSign = "Aquarius"
    }
  } else if (lowercaseMonth === "february") {
    if (day <= 19) {
      astroSign = "Aquarius"
    } else if (day >= 20) {
      astroSign = "Pisces"
    }
  } else if (lowercaseMonth === "march") {
    if (day <= 20) {
      astroSign = "Pisces"
    } else if (day >= 21) {
      astroSign = "Aries"
    }
  } else if (lowercaseMonth === "april") {
    if (day <= 20) {
      astroSign = "Aries"
    } else if (day >= 21) {
      astroSign = "Taurus"
    }
  } else if (lowercaseMonth === "may") {
    if (day <= 20) {
      astroSign = "Taurus"
    } else if (day >= 21) {
      astroSign = "Gemini"
    }
  } else if (lowercaseMonth === "june") {
    if (day <= 20) {
      astroSign = "Gemini"
    } else if (day >= 21) {
      astroSign = "Cancer"
    }
  } else if (lowercaseMonth === "july") {
    if (day <= 22) {
      astroSign = "Cancer"
    } else if (day >= 23) {
      astroSign = "Leo"
    }
  } else if (lowercaseMonth === "august") {
    if (day <=22) {
      astroSign = "Leo"
    } else if (day >= 23) {
      astroSign = "Virgo"
    }
  } else if (lowercaseMonth === "september") {
    if (day <= 22) {
      astroSign = "Virgo"
    } else if (day >= 23) {
      astroSign = "Libra"
    }
  } else if (lowercaseMonth === "october") {
    if (day <= 22) {
      astroSign = "Libra"
    } else if (day >= 23) {
      astroSign = "Scorpio"
    }
  } else if (lowercaseMonth === "november") {
    if (day <= 22) {
      astroSign = "Scorpio"
    } else if (day >= 23) {
      astroSign = "Sagittarius"
    }
  } else if (lowercaseMonth === "december") {
    if (day <= 21) {
      astroSign = "Sagittarius"
    } else if (day >= 22) {
      astroSign = "Capricorn"
    }
  }

  return astroSign
}

// // test validDate
//  console.log(validDate("January", 31)) // true
//  console.log(validDate("January", 32)) // false
//  console.log(validDate("february", 29)) // true
//  console.log(validDate("november", 30)) // true
//  console.log(validDate("november", 31)) // false
//  console.log(validDate("July", 0)) // false
//  console.log(validDate("July", -1)) // false


let dayOfBirth = 0
let dayOfMonth = ""

// console.log(zodiacFinder(day, month))
const run = () => {
  let valid

  while (!valid) {
    const prompt = require('prompt-sync')();
    const month = prompt('What month were you born in?');
    console.log(`${month}`);

    const day = prompt('What day were you born in?');
    console.log(Number(day));

    if (validDate(month, day)) {
      valid = true;
      console.log(zodiacMessageGenerator(day, month))
      
    } else {
      valid = false
      console.log('Please enter a valid month ex. "July", "july" and a valid day "01", "24".')
    }
  }
}

console.log(run())
