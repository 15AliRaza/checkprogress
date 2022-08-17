const nameEl = document.querySelector("#name");
const resultNameEl = document.querySelector("#resultName");
const eduEl = document.getElementById("education");
// console.log(eduEl);
const resultEduEl = document.getElementById("resultEducation");
const myfun = () => {
  resultNameEl.innerHTML = nameEl.value;
  nameEl.value = "";
};

const eduFun = () => {
  resultEduEl.innerHTML = eduEl.value;
  eduEl.value = "";
};

const ul = document.querySelector("ul");
const input = ul.querySelector("input");

let tags = [];

const createTag = () => {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags.forEach((tag) => {
    let tagEl = `<li>${tag} <img src="icons8-close.svg" onclick="removeFun(this,'${tag}')" /></li>`;
    input.insertAdjacentHTML("beforebegin", tagEl);
  });
};

const removeFun = (element, tag) => {
  let index = tags.indexOf(tag);
  // console.log(index);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  element.parentElement.remove();
  // console.log(tags);
  // console.log(element, tag);
};

const addTag = (e) => {
  if (e.key == "Enter") {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (tag.length > 1 && !tags.includes(tag)) {
      tags.push(tag);
      createTag();
      // console.log(tags);
    }
    e.target.value = "";
  }
};

input.addEventListener("keyup", addTag);

const resultSkillEl = document.getElementById("resultSkill");
const skillFun = () => {
  const skillResult = tags.join(", ");
  resultSkillEl.innerHTML = skillResult;

  // console.log(tags);
  tags.length = 0;
  ul.querySelectorAll("li").forEach((li) => li.remove());
};

const expEl = document.getElementById("experience");
const resultExp = document.getElementById("resultExp");

const expFun = () => {
  resultExp.innerHTML = expEl.value;
  expEl.value = "";
};
