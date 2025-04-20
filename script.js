let month = document.getElementById("month");
let day = document.getElementById("day");
let year = document.getElementById("year");
const btn = document.getElementById("btn");

let title = document.getElementsByClassName("title");
let descriptionText = document.getElementsByClassName("description");
let personalityText = document.getElementsByClassName("personality");
let traitLists = document.getElementById("traits");

const target = document.querySelector(".container2");
const img = document.querySelector(".img-container img");

const zodiacAnimals = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const description = [
  "Rat is the 1st animal in the 12-year cycle of the Chinese zodiac, coming after the Pig and before the Ox. Recent years of the Rat include 2020, 2008, 1996, 1984, 1972, 1960, and 1948, with the next Rat year in 2032 (Year of the Water Rat). It corresponds with the first branch of the earthly branch symbol zi.",
  "Ox is the 2nd animal in the 12-year cycle of the Chinese zodiac, coming after the Rat and before the Tiger. Recent years of the Ox include 2021, 2009, 1997, 1985, 1973, 1961, and 1949, with the next Ox year in 2033 (Year of the Water Ox). The Year of the Ox corresponds with the earthly branch symbol chǒu.",
  "Tiger is the 3rd animal in the 12-year cycle of the Chinese zodiac, coming after the Ox and before the Rabbit. Recent years of the Tiger include 2022, 2010, 1998, 1986, 1974, 1962, and 1950, with the next Tiger year in 2034 (Year of the Wood Tiger). The Year of the Tiger corresponds with the earthly branch symbol yín.",
  "Rabbit is the 4th animal in the 12-year cycle of the Chinese zodiac, coming after the Tiger and before the Dragon. Recent years of the Rabbit include 2023, 2011, 1999, 1987, 1975, 1963, and 1951, with the next Rabbit year in 2035 (Year of the Wood Rabbit). The Year of the Rabbit corresponds with the earthly branch symbol zǐ.",
  "Dragon is the 5th animal in the 12-year cycle of the Chinese zodiac, coming after the Rabbit and before the Snake. Recent years of the Dragon include 2012, 2000, 1988, 1976, 1964, and 1952, with the next Dragon year in 2036 (Year of the Fire Dragon). The Year of the Dragon corresponds with the earthly branch symbol chén.",
  "Snake is the 6th animal in the 12-year cycle of the Chinese zodiac, coming after the Dragon and before the Horse. Recent years of the Snake include 2013, 2001, 1989, 1977, 1965, and 1953, with the next Snake year in 2037 (Year of the Fire Snake). The Year of the Snake corresponds with the earthly branch symbol sǐ.",
  "Horse is the 7th animal in the 12-year cycle of the Chinese zodiac, coming after the Snake and before the Goat. Recent years of the Horse include 2014, 2002, 1990, 1978, 1966, and 1954, with the next Horse year in 2038 (Year of the Earth Horse). The Year of the Horse corresponds with the earthly branch symbol wǔ.",
  "Goat is the 8th animal in the 12-year cycle of the Chinese zodiac, coming after the Horse and before the Monkey. Recent years of the Goat include 2015, 2003, 1991, 1979, 1967, and 1955, with the next Goat year in 2039 (Year of the Earth Goat). The Year of the Goat corresponds with the earthly branch symbol wèi.",
  "Monkey is the 9th animal in the 12-year cycle of the Chinese zodiac, coming after the Goat and before the Rooster. Recent years of the Monkey include 2016, 2004, 1992, 1980, 1968, and 1956, with the next Monkey year in 2040 (Year of the Metal Monkey). The Year of the Monkey corresponds with the earthly branch symbol shēn.",
  "Rooster is the 10th animal in the 12-year cycle of the Chinese zodiac, coming after the Monkey and before the Dog. Recent years of the Rooster include 2017, 2005, 1993, 1981, 1969, and 1957, with the next Rooster year in 2041 (Year of the Metal Rooster). The Year of the Rooster corresponds with the earthly branch symbol yǒu.",
  "Dog is the 11th animal in the 12-year cycle of the Chinese zodiac, coming after the Rooster and before the Pig. Recent years of the Dog include 2018, 2006, 1994, 1982, 1970, and 1958, with the next Dog year in 2042 (Year of the Water Dog). The Year of the Dog corresponds with the earthly branch symbol xū.",
  "Pig is the 12th animal in the 12-year cycle of the Chinese zodiac, coming after the Dog and before the Rat. Recent years of the Pig include 2019, 2007, 1995, 1983, 1971, and 1959, with the next Pig year in 2043 (Year of the Water Pig). The Year of the Pig corresponds with the earthly branch symbol hǎi.",
];

const personality = [
  "People born in the Year of the Rat are known for their intelligence, adaptability, and charm. They are quick-witted and resourceful, often finding creative solutions to problems. However, they can also be seen as opportunistic and sometimes overly cautious.",
  "People born in the Year of the Ox are known for their diligence, dependability, and strength. They are hardworking and methodical, often achieving success through perseverance. However, they can also be seen as stubborn and resistant to change.",
  "People born in the Year of the Tiger are known for their bravery, confidence, and competitiveness. They are natural leaders who thrive in challenging situations. However, they can also be seen as impulsive and prone to taking risks.",
  "People born in the Year of the Rabbit are known for their gentleness, compassion, and diplomacy. They are sensitive and empathetic individuals who value harmony in relationships. However, they can also be seen as indecisive and overly cautious.",
  "People born in the Year of the Dragon are known for their charisma, ambition, and enthusiasm. They are natural leaders who inspire others with their vision. However, they can also be seen as arrogant and demanding.",
  "People born in the Year of the Snake are known for their wisdom, intuition, and elegance. They are deep thinkers who value privacy and introspection. However, they can also be seen as secretive and aloof.",
  "People born in the Year of the Horse are known for their energy, enthusiasm, and independence. They are adventurous individuals who thrive on freedom and exploration. However, they can also be seen as restless and easily bored.",
  "People born in the Year of the Goat are known for their creativity, sensitivity, and compassion. They are artistic individuals who value beauty and harmony. However, they can also be seen as indecisive and overly sensitive.",
  "People born in the Year of the Monkey are known for their intelligence, curiosity, and playfulness. They are quick learners who enjoy exploring new ideas and experiences. However, they can also be seen as mischievous and unpredictable.",
  "People born in the Year of the Rooster are known for their confidence, diligence, and resourcefulness. They are hardworking individuals who value honesty and integrity. However, they can also be seen as critical and overly perfectionistic.",
  "People born in the Year of the Dog are known for their loyalty, honesty, and compassion. They are protective individuals who value justice and fairness. However, they can also be seen as stubborn and overly cautious.",
  "People born in the Year of the Pig are known for their generosity, kindness, and sociability. They are warm-hearted individuals who value friendship and family. However, they can also be seen as naive and overly trusting.",
];

const zodiacTraits = {
  Rat: ["Intelligent", "Wise", "Charming", "Calm", "Reserved"],
  Ox: ["Hardworking", "Reliable", "Patient", "Strong", "Quiet"],
  Tiger: ["Brave", "Confident", "Competitive", "Passionate", "Charismatic"],
  Rabbit: ["Gentle", "Kind", "Elegant", "Responsible", "Cautious"],
  Dragon: ["Powerful", "Ambitious", "Energetic", "Charismatic", "Lucky"],
  Snake: ["Mysterious", "Intuitive", "Graceful", "Intelligent", "Private"],
  Horse: ["Active", "Social", "Optimistic", "Hardworking", "Independent"],
  Goat: ["Creative", "Sensitive", "Compassionate", "Gentle", "Artistic"],
  Monkey: ["Clever", "Curious", "Playful", "Inventive", "Adaptable"],
  Rooster: ["Honest", "Observant", "Hardworking", "Confident", "Punctual"],
  Dog: ["Loyal", "Honest", "Friendly", "Responsible", "Protective"],
  Pig: ["Generous", "Diligent", "Compassionate", "Easygoing", "Patient"],
};

function isLeapYear(year) {
  year = parseInt(year);
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function handleClick() {
  let yearValue = year.value;
  let monthValue = month.value;
  let dayValue = day.value;

  const monthDays = {
    January: 31,
    February: isLeapYear(yearValue) ? 29 : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  if (monthValue === "" || dayValue === "" || yearValue === "") {
    alert("Please fill in empty fields.");
    return;
  }

  if (!months.includes(monthValue)) {
    alert("Please enter a valid month.");
    return;
  }

  if (dayValue > 31) {
    alert("Please enter a valid day.");
    return;
  }

  if (yearValue.length < 4) {
    alert("Please enter a valid year.");
    return;
  }

  if (dayValue < 1 || dayValue > monthDays[monthValue]) {
    alert(`Please enter a valid day for ${monthValue}.`);
    return;
  }

  const baseYear = 1900;
  const zodiacIndex = (yearValue - baseYear) % 12;
  const adjustedIndex = zodiacIndex < 0 ? zodiacIndex + 12 : zodiacIndex;
  const zodiacAnimal = zodiacAnimals[adjustedIndex];
  const zodiacDescription = description[adjustedIndex];

  console.log(zodiacAnimal);

  target.style.display = "flex";

  img.src = `/img/${zodiacAnimal}.webp`;

  for (let i = 0; i < title.length; i++) {
    title[i].innerHTML = zodiacAnimal;
  }

  descriptionText[0].innerHTML = zodiacDescription;
  personalityText[0].innerHTML = personality[adjustedIndex];

  traitLists.innerHTML = "";
  zodiacTraits[zodiacAnimal].forEach((trait) => {
    const li = document.createElement("li");
    li.innerHTML = trait;
    traitLists.appendChild(li);
  });

  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth" });
  }, 100);
}
