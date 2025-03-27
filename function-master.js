//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  const arrayOfKeys = Object.keys(object);
  return arrayOfKeys.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  let values = Object.values(object);
  values.forEach(function (value) {
    if (typeof value !== "string") {
      const index = values.indexOf(value);
      values.splice(index, 1);
    }
  });
  return values.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  if (Array.isArray(collection)) {
    return "array";
  } else {
    return "object";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  var output = "";
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      output += string[i].toUpperCase();
    } else {
      if (string[i - 1] === " ") {
        output += string[i].toUpperCase();
      } else {
        output += string[i];
      }
    }
  }
  return output;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var output = "";
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      output += string[i].toUpperCase();
    } else {
      if (string[i - 1] === " ") {
        output += string[i].toUpperCase();
      } else {
        output += string[i];
      }
    }
  }
  return output;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  const name = capitalizeWord(object.name);
  return `Welcome ${name}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  const name = capitalizeWord(object.name);
  const species = capitalizeWord(object.species);
  return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  const noises = object.noises;
  if (noises != undefined) {
    if (noises.length > 0) {
      return object.noises.join(" ");
    } else {
      return "there are no noises";
    }
  } else {
    return "there are no noises";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
  object.friends.push(name);
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  const hasFriends = Object.keys(object).includes("friends");
  if (hasFriends) {
    return object.friends.includes(name);
  } else {
    return hasFriends;
  }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  let everyoneElse = [];
  let friends = [];
  let nonFriends = [];
  array.forEach((person) => {
    if (person.name !== name) {
      everyoneElse.push(person.name);
    } else {
      friends = person.friends;
    }
  });
  everyoneElse.forEach((one) => {
    if (!friends.includes(one)) {
      nonFriends.push(one);
    }
  });
  console.log(everyoneElse);
  console.log(friends);
  return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    array.forEach((key) => delete object[key]);
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let newArray = [];
    array.forEach((element) => {
        if(!newArray.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.objectValues = objectValues;
  module.exports.keysToString = keysToString;
  module.exports.valuesToString = valuesToString;
  module.exports.arrayOrObject = arrayOrObject;
  module.exports.capitalizeWord = capitalizeWord;
  module.exports.capitalizeAllWords = capitalizeAllWords;
  module.exports.welcomeMessage = welcomeMessage;
  module.exports.profileInfo = profileInfo;
  module.exports.maybeNoises = maybeNoises;
  module.exports.hasWord = hasWord;
  module.exports.addFriend = addFriend;
  module.exports.isFriend = isFriend;
  module.exports.nonFriends = nonFriends;
  module.exports.updateObject = updateObject;
  module.exports.removeProperties = removeProperties;
  module.exports.dedup = dedup;
}
