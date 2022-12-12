$(document).ready(() => {

//random number generator function
const randomNGen = () => {
  const random = Math.floor(Math.random() * 1000000);
  return random;
};
//random number generator function

$(".btn").on("click", () => {
  $("#number").text(randomNGen());
});


});
