// const zodiacSigns = { 
//     Aries: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Taurus: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Gemini: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Cancer: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Leo: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Virgo: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Libra: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Scorpio: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Sagittarius: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Capricorn: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Aquarius: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"],
//     Pisces: ["Keep it going", "Don't eat the butter", "Listen to your feet", "Never say never, say pudding"]
//   }

// const zodiacMessageGenerator = (day, month) => {
//   let zodiacSymbol = zodiacFinder(day, month)

//   let messageIndex = Math.floor((Math.random * zodiacSigns[zodiacSymbol].length) + 1)

//   return `Your sign is ${zodiacSymbol}. Listen to these words ${zodiacSigns[zodiacSymbol][messageIndex]}`
// }


// Helper methods

const zodiacFinder = (day, stringMonth) => {
  let astroSign = ""

  if (stringMonth === "January") {
    if (day <= 19) {
      astroSign = "Capricorn"
    } else if (day >= 20) {
      astroSign = "Aquarius"
    }
  } else if (stringMonth === "February") {
    if (day <= 19) {
      astroSign = "Aquarius"
    } else if (day >= 20) {
      astroSign = "Pisces"
    }
  } else if (stringMonth === "March") {
    if (day <= 20) {
      astroSign = "Pisces"
    } else if (day >= 21) {
      astroSign = "Aries"
    }
  } else if (stringMonth === "April") {
    if (day <= 20) {
      astroSign = "Aries"
    } else if (day >= 21) {
      astroSign = "Taurus"
    }
  } else if (stringMonth === "May") {
    if (day <= 20) {
      astroSign = "Taurus"
    } else if (day >= 21) {
      astroSign = "Gemini"
    }
  } else if (stringMonth === "June") {
    if (day <= 20) {
      astroSign = "Gemini"
    } else if (day >= 21) {
      astroSign = "Cancer"
    }
  } else if (stringMonth === "July") {
    if (day <= 22) {
      astroSign = "Cancer"
    } else if (day >= 23) {
      astroSign = "Leo"
    }
  } else if (stringMonth === "August") {
    if (day <=22) {
      astroSign = "Leo"
    } else if (day >= 23) {
      astroSign = "Virgo"
    }
  } else if (stringMonth === "September") {
    if (day <= 22) {
      astroSign = "Virgo"
    } else if (day >= 23) {
      astroSign = "Libra"
    }
  } else if (stringMonth === "October") {
    if (day <= 22) {
      astroSign = "Libra"
    } else if (day >= 23) {
      astroSign = "Scorpio"
    }
  } else if (stringMonth === "November") {
    if (day <= 22) {
      astroSign = "Scorpio"
    } else if (day >= 23) {
      astroSign = "Sagittarius"
    }
  } else if (stringMonth === "December") {
    if (day <= 21) {
      astroSign = "Sagittarius"
    } else if (day >= 22) {
      astroSign = "Capricorn"
    }
  }

  return astroSign
}


console.log(zodiacFinder(24, "September"))