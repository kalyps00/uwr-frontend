const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const capitalizeSentence = (str) => {
  const words = str.split(" ");
  const capitalizedWords = words.map(capitalize);
  return capitalizedWords.join(" ");
};
console.log(capitalizeSentence("alice"));
console.log(capitalizeSentence("alice in wonderland"));
