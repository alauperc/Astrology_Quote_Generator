const zodiacSigns = { 
    Aries: ["“Courage is like a muscle. We strengthen it with use.”  Ruth Gordon", "Don't eat the “Courage is not the absence of fear, but rather the judgment that something else is more important than fear.”  Ambrose Redmoon", "“You don’t lead by pointing and telling people some place to go. You lead by going to that place and making a case.”  Ken Kesey", "“Do one thing every day that scares you.” Eleanor Roosevelt"],
    Taurus: ["“I’m not stubborn. My way is just better.” Maya Banks", "“Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.” Henry David Thoreau, Walden", "“If anything is sacred, the human body is sacred.”  Walt Whitman", "“You only have to let the soft animal of your body love what it loves.” Mary Oliver"],
    Gemini: ["“Just as we have two eyes and two feet, duality is part of life.” Carlos Santana", "“Good communication is as stimulating as black coffee, and just as hard to sleep after.” Anne Morrow Lindbergh", "“Don’t be smart. Smart is only a polished version of dumb. Try intelligence. It will surely see you through.” Terry Pratchett", "“Curiosity is the wick in the candle of learning.” William Arthur Ward"],
    Cancer: ["“Ah! There is nothing like staying at home for real comfort.” Jane Austen", "“Home is not where you live, but where they understand you.” Christian Morgenstern", "“I love being nurturing and caring because I love to see other people happy.” Jennifer Hudson", "“A people without the knowledge of their past history, origin and culture is like a tree without roots.“ Marcus Garvey"],
    Leo: ["“Nothing can dim the light which shines from within.” Maya Angelou", "“The shy and the extroverted have this in common — that they both fancy they are the center of attention.” Robert Breault", "“I love living on that stage. Without that, I’d die.” Celia Cruz", "“When we were growing up our parents somehow made it clear that being famous was good. And I mistakenly thought that if I was famous then everyone would love me.”  Ellen DeGeneres"],
    Virgo: ["“Simplicity is the ultimate sophistication.”  Clare Boothe Luce", "“It’s not what you do once in a while, it’s what you do day in and day out that makes the difference.” Jenny Craig", "“Healthy striving is self-focused: “How can I improve?” Perfectionism is other-focused: “What will they think?” Brené Brown", "“In a disordered mind, as in a disordered body, soundness of health is impossible.” Cicero"],
    Libra: ["“Diplomacy is the art of telling people to go to hell in such a way that they ask for directions.” Winston S. Churchill", "“If you just set out to be liked, you would be prepared to compromise on anything at any time, and you would achieve nothing.”  Margaret Thatcher", "“A man can condemn his enemies, but it’s wiser to know them.” Harper Lee", "“The only thing that will redeem mankind is cooperation.” Bertrand Russell"],
    Scorpio: ["“Perhaps it’s the people whose lives have taken sudden new twists – people who have learned to embrace the creative possibilities of change – who stand the best chance of penetrating life’s mysteries.” Hugh Mackay", "“Life isn’t about waiting for the storm to pass…It’s about learning how to dance in the rain.” Vivian Greene", "“Life is either a daring adventure or nothing at all. Security is mostly a superstition. It does not exist in nature.” Helen Keller", "“Everything good I’ve ever gotten in life, I only got because I gave something else up.” Elizabeth Gilbert"],
    Sagittarius: ["“The only question in life is whether or not you are going to answer a hearty ‘Yes!’ to your adventure.” Joseph Campbell", "“Let’s not quibble! I’m the foe of moderation, the champion of excess. If I may lift a line from a die-hard whose identity is lost in the shuffle, “I’d rather be strongly wrong than weakly right.” Tallulah Bankhead", "“Unless one’s philosophy is all-inclusive, nothing can be understood.”  Mary Ritter Beard", "“The quest for freedom, dignity, and the rights of man will never end.” William J. Brennan, Jr."],
    Capricorn: ["“In Iroquois society, leaders are encouraged to remember seven generations in the past and consider seven generations in the future when making decisions that affect the people.”  Wilma Mankiller", "“If you’re someone people count on, particularly in difficult moments, that’s a sign of a life lived honorably.” Rachel Maddow", "“Old people as “elders of the tribe” should be seeking and safe-guarding the survival of the tribe — the larger public interest.”  Maggie Kuhn", "“No one is wise by birth.  Wisdom results from one’s own efforts.”  Krishnamacharya"],
    Aquarius: ["“If we are to achieve a richer culture, rich in contrasting values, we must recognize the whole gamut of human potentialities, and so weave a less arbitrary social fabric, one in which each diverse human gift will find a fitting place.” Margaret Mead", "“Be yourself; everyone else is already taken.” Oscar Wilde", "“Of course, we’re all a mass of contradictions.” Shirley MacLaine", "“My goal is to do something outrageous every day.” Maggie Kuhn"],
    Pisces: ["“Empathy is the most radical of human emotions.” Gloria Steinem", "“If your compassion does not include yourself, it is incomplete.” Jack Kornfield", "“Disillusion comes only to the illusioned. One cannot be disillusioned of what one never put faith in.” Dorothy Thompson", "“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.” Albert Einstein"]
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
