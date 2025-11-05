console.log("Hello, world!");

const Lists = ["row1", "row2", "row3", "row4", "row5"];

for (let i = 0; i < Lists.length; i++) {
  const h1El = document.createElement("h1");
  document.body.appendChild(h1El);
  h1El.innerText = Lists[i];
  h1El.style.fontSize = `${10 * (i + 1)}px`;
  // interpolate hue between 120 (green) and 200 (blue)
  const hueStart = 120;
  const hueEnd = 200;
  const hue = hueStart + ((hueEnd - hueStart) * i) / (Lists.length - 1);
  h1El.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;
}

const NumList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const textList = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];
const divBarBody = document.createElement("div");
const divBarChild = document.createElement("div");

const divBarLowNum = document.createElement("div");
const divBarHighNum = document.createElement("div");
const divBarText = document.createElement("div");

document.body.appendChild(divBarBody);
divBarBody.appendChild(divBarLowNum);

divBarBody.appendChild(divBarHighNum);

divBarBody.appendChild(divBarText);
divBarBody.style.display = "flex";
divBarBody.style.justifyContent = "space-between";

divBarBody.style.paddingTop = "80px";
divBarBody.style.paddingBottom = "80px";

divBarText.style.marginRight = "50px";
divBarLowNum.style.marginLeft = "50px";

divBarBody.style.border = "solid black 1px";

for (let i = 0; i < NumList.length; i++) {
  console.log(NumList[i]);
  const pTag = document.createElement("p");
  pTag.innerText = NumList[i];

  divBarLowNum.appendChild(pTag);
  divBarLowNum.style.backgroundColor = "#a8a8f0";
  divBarLowNum.style.width = "90px";
  divBarLowNum.style.paddingLeft = "20px";
  divBarLowNum.style.paddingRight = "20px";
  divBarLowNum.style.paddingTop = "20px";
  divBarLowNum.style.paddingBottom = "20px";

  pTag.style.height = "40px";
  pTag.style.margin = "0px";
  pTag.style.alignContent = "center";
  pTag.style.alignItems = "center";

  //   divBarChild.style.border = "10px solid #a8a8f0";
  //     divBarChild.style.width = "70px";
  //  pTag.style.margin = "0px"
  //  pTag.style.height = "40px"

  if (i === 0 || i === 2 || i === 6 || i === 8) {
    pTag.style.backgroundColor = "black";
    pTag.style.color = "white";
  } else if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {
    pTag.style.backgroundColor = "white";
  } else if (i === 4) {
    pTag.style.color = "white";
  } else {
    pTag.style.color = "white";
  }
}

//////////

NumList.reverse();

for (let i = 0; i < NumList.length; i++) {
  console.log(NumList[i]);
  const pTag = document.createElement("p");
  pTag.innerText = NumList[i];
  pTag.style.textAlign = "center"

  divBarHighNum.appendChild(pTag);
  divBarHighNum.style.backgroundColor = "#a8a8f0";
  divBarHighNum.style.width = "90px";
  divBarHighNum.style.paddingLeft = "20px";
  divBarHighNum.style.paddingRight = "20px";
  divBarHighNum.style.paddingTop = "20px";
  divBarHighNum.style.paddingBottom = "20px";

  pTag.style.height = "40px";
  pTag.style.margin = "0px";
  pTag.style.alignContent = "center";
  pTag.style.alignItems = "center";

  //   divBarChild.style.border = "10px solid #a8a8f0";
  //     divBarChild.style.width = "70px";
  //  pTag.style.margin = "0px"
  //  pTag.style.height = "40px"

  if (i === 3 || i === 5 || i === 7 || i === 9) {
    pTag.style.backgroundColor = "black";
    pTag.style.color = "white";
  } else if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
    pTag.style.backgroundColor = "white";
  } else if (i === 1) {
    pTag.style.color = "white";
  } else {
    pTag.style.color = "white";
  }
}

///////

for (let i = 0; i < textList.length; i++) {
  console.log(textList[i]);
  const pTag = document.createElement("p");
  pTag.innerText = textList[i];
  pTag.style.textAlign = "right"

  divBarText.appendChild(pTag);
  divBarText.style.backgroundColor = "#a8a8f0";
  divBarText.style.width = "90px";
  divBarText.style.paddingLeft = "20px";
  divBarText.style.paddingRight = "20px";
  divBarText.style.paddingTop = "20px";
  divBarText.style.paddingBottom = "20px";

  pTag.style.height = "40px";
  pTag.style.margin = "0px";
  pTag.style.alignContent = "center";
  pTag.style.alignItems = "center";

  //   divBarChild.style.border = "10px solid #a8a8f0";
  //     divBarChild.style.width = "70px";
  //  pTag.style.margin = "0px"
  //  pTag.style.height = "40px"

  if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
    pTag.style.backgroundColor = "black";
    pTag.style.color = "white";
  } else if (i === 1 || i === 3 || i === 7 || i === 7 || i === 9) {
    pTag.style.backgroundColor = "white";
  } else if (i === 5) {
    pTag.style.color = "black";
  } else {
    pTag.style.color = "white";
  }
}
// for (const List of Lists){
//     L
// }
