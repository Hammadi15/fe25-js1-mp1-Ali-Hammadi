const rowList = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
const oL = document.createElement("ol");
document.body.appendChild(oL);

document.body.appendChild(oL);
// const listItem = document.createElement("li");
// oL.appendChild(listItem);
// listItem.innerText= rowList;
rowList.forEach(function (item) {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  oL.appendChild(listItem);
});

const lowNumLists = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //numb list
const lowNumOl = document.createElement("ol");
document.body.appendChild(lowNumOl);

const HighumLists = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; //numb list
const HighNumOl = document.createElement("ol");
document.body.appendChild(HighNumOl);

const alpahabateLists = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fex",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
]; //numb list
const alpahabateOl = document.createElement("ol");
document.body.appendChild(alpahabateOl);

const lowlistItems = [];
const highlistItems = [];
const alpahabatelistItems = [];



// Create a flex container
const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-around"; // or "space-between"
container.style.width = "100%";
document.body.appendChild(container);

// Append lists into container (not directly to body)
container.appendChild(lowNumOl);
container.appendChild(HighNumOl);
container.appendChild(alpahabateOl);

lowNumOl.style.textAlign = "left";
lowNumOl.style.backgroundColor = "#a8a8f0";
lowNumOl.style.width = "80px";

lowNumOl.style.alignItems = "center";
lowNumOl.style.fontSize = "34px";
(lowNumOl.style.padding = "20px"), "5px", "20px", "5px";

HighNumOl.style.textAlign = "center";
HighNumOl.style.backgroundColor = "#a8a8f0";
HighNumOl.style.width = "80px";

HighNumOl.style.alignItems = "center";
HighNumOl.style.fontSize = "34px";
(HighNumOl.style.padding = "20px"), "5px", "20px", "5px";

//

alpahabateOl.style.textAlign = "center";
alpahabateOl.style.backgroundColor = "#a8a8f0";
alpahabateOl.style.width = "80px";

alpahabateOl.style.alignItems = "center";
alpahabateOl.style.fontSize = "34px";
(alpahabateOl.style.padding = "20px"), "5px", "200px", "5px";

const FirstItmes = oL.children[0];
oL.style.display = "flex";
oL.style.flexDirection = "column";
oL.style.alignItems = "center";
oL.style.color = "#6e6ef7";
oL.style.fontWeight = "bold ";

const firstItem = oL.children[0];
firstItem.style.display = "flex";
firstItem.style.justifyContent = "center";
firstItem.style.alignItems = "center";

firstItem.style.margin = "20px";
firstItem.style.width = "100%"; // makes it taller

firstItem.style.textAlign = "center";
firstItem.style.backgroundColor = "#b6fbb6";

const SecondItme = oL.children[1];
SecondItme.style.display = "flex";
SecondItme.style.justifyContent = "center";
SecondItme.style.alignItems = "center";

SecondItme.style.margin = "20px";
SecondItme.style.width = "100%";
SecondItme.style.height = "40px"; // makes it taller
SecondItme.style.fontSize = "24px";

SecondItme.style.textAlign = "center";
SecondItme.style.backgroundColor = "#b6fbcd";

// ------------Third Item---------------

const thirdItme = oL.children[2];
thirdItme.style.display = "flex";
thirdItme.style.justifyContent = "center";
thirdItme.style.alignItems = "center";

thirdItme.style.margin = "20px";
thirdItme.style.width = "100%";
thirdItme.style.height = "60px"; // makes it taller
thirdItme.style.fontSize = "34px";

thirdItme.style.textAlign = "center";
thirdItme.style.backgroundColor = "#b6fbe4";

// foru

const fourdItme = oL.children[3];
fourdItme.style.display = "flex";
fourdItme.style.justifyContent = "center";
fourdItme.style.alignItems = "center";

fourdItme.style.margin = "20px";
fourdItme.style.width = "100%";
fourdItme.style.height = "80px"; // makes it taller
fourdItme.style.fontSize = "44px";

fourdItme.style.textAlign = "center";
fourdItme.style.backgroundColor = "#b6fbfb";

// five

const fiveItme = oL.children[4];
fiveItme.style.display = "flex";
fiveItme.style.justifyContent = "center";
fiveItme.style.alignItems = "center";

fiveItme.style.margin = "20px";
fiveItme.style.width = "100%";
fiveItme.style.height = "100px"; // makes it taller
fiveItme.style.fontSize = "54px";

fiveItme.style.textAlign = "center";
fiveItme.style.backgroundColor = "#b6e4fb";

// for (let i=0; i<lownumList.length; i++){
// console.log(lownumList)
// }

// lownumoLs
// lownumLists

for (const lownumList of lowNumLists) {
  const lowNumbLi = document.createElement("li");

  console.log(lownumList);
  lowNumbLi.innerText = lownumList;
  lowNumOl.appendChild(lowNumbLi);
  lowNumOl.style.listStyleType = "none";
  lowNumOl.appendChild(lowNumbLi);
  lowlistItems.push(lowNumbLi);
}

for (const HighnumList of HighumLists) {
  const HighNumbLi = document.createElement("li");

  console.log(HighnumList);
  HighNumbLi.innerText = HighnumList;
  HighNumOl.appendChild(HighNumbLi);
  HighNumOl.style.listStyleType = "none";
  HighNumOl.appendChild(HighNumbLi);
  highlistItems.push(HighNumbLi);
}

for (const alpahabateList of alpahabateLists) {
  const alpahabatbLi = document.createElement("li");
  alpahabatbLi.innerText = alpahabateList;
  alpahabateOl.appendChild(alpahabatbLi);
  alpahabateOl.style.listStyleType = "none";
  alpahabateOl.appendChild(alpahabatbLi);
  alpahabatelistItems.push(alpahabatbLi);
}

const lowNumlist1 = lowlistItems[0];
const lowNumlist2 = lowlistItems[1];
const lowNumlist3 = lowlistItems[2];
const lowNumlist4 = lowlistItems[3];
const lowNumlist5 = lowlistItems[4];
const lowNumlist6 = lowlistItems[5];
const lowNumlist7 = lowlistItems[6];
const lowNumlist8 = lowlistItems[7];
const lowNumlist9 = lowlistItems[8];
const lowNumlist10 = lowlistItems[9];

lowNumlist1.style.backgroundColor = "black";
lowNumlist1.style.color = "white";

lowNumlist2.style.backgroundColor = "white";

lowNumlist3.style.backgroundColor = "black";
lowNumlist3.style.color = "white";

lowNumlist4.style.backgroundColor = "white";

lowNumlist5.style.color = "white";

lowNumlist6.style.backgroundColor = "white";

lowNumlist7.style.backgroundColor = "black";
lowNumlist7.style.color = "white";

lowNumlist8.style.backgroundColor = "white";

lowNumlist9.style.backgroundColor = "black";
lowNumlist9.style.color = "white";

lowNumlist10.style.backgroundColor = "white";


const HighNumlist1 = highlistItems[0];
const HighNumlist2 = highlistItems[1];
const HighNumlist3 = highlistItems[2];
const HighNumlist4 = highlistItems[3];
const HighNumlist5 = highlistItems[4];
const HighNumlist6 = highlistItems[5];
const HighNumlist7 = highlistItems[6];
const HighNumlist8 = highlistItems[7];
const HighNumlist9 = highlistItems[8];
const HighNumlist10 = highlistItems[9];


HighNumlist1.style.backgroundColor = "white";

HighNumlist2.style.color = "white";

HighNumlist3.style.backgroundColor = "white";

HighNumlist4.style.backgroundColor = "black";
HighNumlist4.style.color = "white";

HighNumlist5.style.backgroundColor = "white";

HighNumlist6.style.backgroundColor = "black";
HighNumlist6.style.color = "white";

HighNumlist7.style.backgroundColor = "white";

HighNumlist8.style.backgroundColor = "black";
HighNumlist8.style.color = "white";

HighNumlist9.style.backgroundColor = "white";

HighNumlist10.style.backgroundColor = "black";
HighNumlist10.style.color = "white";

//


const alpahabatelist1 = alpahabatelistItems[0];
const alpahabatelist2 = alpahabatelistItems[1];
const alpahabatelist3 = alpahabatelistItems[2];
const alpahabatelist4 = alpahabatelistItems[3];
const alpahabatelist5 = alpahabatelistItems[4];
const alpahabatelist6 = alpahabatelistItems[5];
const alpahabatelist7 = alpahabatelistItems[6];
const alpahabatelist8 = alpahabatelistItems[7];
const alpahabatelist9 = alpahabatelistItems[8];
const alpahabatelist10 = alpahabatelistItems[9];



alpahabatelist1.style.backgroundColor = "black";
alpahabatelist1.style.color = "white";


alpahabatelist2.style.backgroundColor = "white";

alpahabatelist3.style.backgroundColor = "black";
alpahabatelist3.style.color = "white";


alpahabatelist4.style.backgroundColor = "white";

alpahabatelist5.style.backgroundColor = "black"
alpahabatelist5.style.color = "white";

alpahabatelist7.style.backgroundColorgit = "black";
alpahabatelist7.style.color = "white";

alpahabatelist8.style.backgroundColor = "white";

alpahabatelist9.style.backgroundColor = "black";
alpahabatelist9.style.color = "white";




alpahabatelist10.style.backgroundColor = "white";

