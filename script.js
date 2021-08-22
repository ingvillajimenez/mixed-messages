//  Gets a number from 0 to num - 1
const generateRandomNumber = (num) => Math.floor(Math.random() * num);

const colectiveWisdom = {
  signInfo: ["moon", "sun", "star", "comet"],
  fortuneOutput: [
    "terrible luck",
    "bad luck",
    "ok luck",
    "good luck",
    "great luck",
  ],
  advice: ["play more", "trust no one", "enjoy life", "have fun"],
};

// Store the "wisdom" in an array
const personalWisdom = [];

// Iterate over the object
for (let prop in colectiveWisdom) {
  const messageComponentLength = colectiveWisdom[prop].length;
  const indexNumber = generateRandomNumber(messageComponentLength);
  // Use the object`s properties to customize the message being added to personalWisdom
  switch (prop) {
    case "signInfo":
      personalWisdom.push(
        `Your sign is ${colectiveWisdom[prop][indexNumber]}.`
      );
      break;
    case "fortuneOutput":
      personalWisdom.push(
        `You are having ${colectiveWisdom[prop][indexNumber]}.`
      );
      break;
    case "advice":
      personalWisdom.push(
        `You should: "${colectiveWisdom[prop][indexNumber]}"`
      );
      break;
    default:
      personalWisdom.push("There is not enough info.");
      break;
  }
}

const generateMessage = (windom) => {
  const formatedMessage = windom.join("\n");
  console.log(formatedMessage);
};

generateMessage(personalWisdom);
