"use strict";

const board = document.querySelector("#board");
const colors = [
  "#ADFF2F",
  "#98FB98",
  "#3CB371",
  "#006400",
  "#66CDAA",
  "#008B8B",
  "#40E0D0",
  "#0000CD",
  "#F08080",
  "#C71585",
  "#FF7F50",
  "#FFA500",
  "#FFD700",
  "#EE82EE",
  "#9932CC",
  "#BC8F8F",
  "#800000",
];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px color ${color}, 0 0 10px  ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px color #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
