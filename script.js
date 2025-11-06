console.log("Hello, world!");

const lists = ["row1", "row2", "row3", "row4", "row5"];

for (let i = 0; i < lists.length; i++) {
  const h1El = document.createElement("h1");
  document.body.appendChild(h1El);
  h1El.innerText = lists[i];
  h1El.style.fontSize = `${10 * (i + 1)}px`;
  const hueStart = 120;
  const hueEnd = 200;
  const hue = hueStart + ((hueEnd - hueStart) * i) / (lists.length - 1);
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
divBarBody.classList.add("DivBarbody");

divBarLowNum.classList.add("DivBarList");
divBarHighNum.classList.add("DivBarList");
divBarText.classList.add("DivBarList");

for (let i = 0; i < NumList.length; i++) {
  console.log(NumList[i]);
  const pTag = document.createElement("p");
  pTag.innerText = NumList[i];

  divBarLowNum.appendChild(pTag);
  pTag.classList.add("PTag");
  if (i === 4) {
    pTag.style.color = "white";
  } else if (i % 2 === 0) {
    pTag.style.backgroundColor = "black";
    pTag.style.color = "white";
  } else {
    pTag.style.backgroundColor = "white";
    pTag.style.color = "black";
  }
}

NumList.reverse();

for (let i = 0; i < NumList.length; i++) {
  console.log(NumList[i]);
  const pTag = document.createElement("p");
  pTag.innerText = NumList[i];

  divBarHighNum.appendChild(pTag);

  pTag.classList.add("PTag");

  if (i === 1) {
    pTag.style.color = "white";
  } else if (i % 2 === 0) {
    pTag.style.color = "black";
    pTag.style.backgroundColor = "white";
  } else {
    pTag.style.color = "white";

    pTag.style.backgroundColor = "black";
  }
}

for (let i = 0; i < textList.length; i++) {
  console.log(textList[i]);
  const pTag = document.createElement("p");
  pTag.innerText = textList[i];
  pTag.style.textAlign = "right";

  divBarText.appendChild(pTag);

  pTag.classList.add("PTag");

  if (i === 5) {
    pTag.style.background = "none";
  } else if (i % 2 === 0) {
    pTag.style.backgroundColor = "black";
    pTag.style.color = "white";
  } else {
    pTag.style.backgroundColor = "white";
  }
}
