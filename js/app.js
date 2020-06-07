import { client_id, client_secret } from "../config";
const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "placeholder";
const client_secret = "placeholder";

searchButton.addEventListener("click", () => {
  console.log("Hello");
  getUsers();
});

const fecthUsers = async (userName) => {
  const res = await fetch(
    `https://api.github.com/users/${userName}?client_id=${client_id}&client_secret=${client_secret}`
  );
  console.log(res);
  const data = await res.json();
  return { data };
};

const getUsers = async () => {
  const res = await fecthUsers(inputValue.value);
  console.log(res);
  nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
  unContainer.innerHTML = `User Name: <span class="main__profile-value">${res.data.login}</span>`;
  reposContainer.innerHTML = `Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;
  urlContainer.innerHTML = `Url: <span class="main__profile-value">${res.data.html_url}</span>`;
};
