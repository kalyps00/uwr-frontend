const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const capitalizeSentence = (str) => {
  return str.split(" ").map(capitalize).join(" ");
};
console.log(capitalizeSentence("alice"));
console.log(capitalizeSentence("alice in wonderland"));
