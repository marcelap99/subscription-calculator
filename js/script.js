
var subTypeElement = document.querySelector("#subscription");
// console.log(subTypeElement);
var subDurationElement = document.querySelector("#months");
// console.log(subDurationElement);
var result = document.querySelector(".result");
// console.log(result);
var subType = "Basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  // console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  // console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "Standard") {
    monthlyCost = 7;
  } else if (subType === "Premium") {
    monthlyCost = 10;
  }

  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for ${total}.`;
  console.log("I've been called");
};
