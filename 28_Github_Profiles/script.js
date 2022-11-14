const APIURL = `https://api.github.com/users/`;
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("NO profile with this user name");
    }
  }
}
async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
    console.log(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}
function createErrorCard(msg) {
  const cardHTML = `<div class = "card">
  <h1>${msg}</h1> 
  </div>`;
  main.innerHTML = cardHTML;
}
function createUserCard(user) {
  const cardHTML = `
  <div class="card">
  <div>
    <img
      src="${user.avatar_url}"
      alt=""
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>
      ${user.bio}
    </p>
    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
       
    </div>
  </div>
</div>`;
  console.log(cardHTML);
  main.innerHTML = cardHTML;
}
function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerHTML = repo.name;
    reposEl.appendChild(repoEl);
    // console.log(repo);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
  }
});
/*
{
  "login": "Feroz455",
  "id": 61631664,
  "node_id": "MDQ6VXNlcjYxNjMxNjY0",
  "avatar_url": "https://avatars.githubusercontent.com/u/61631664?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Feroz455",
  "html_url": "https://github.com/Feroz455",
  "followers_url": "https://api.github.com/users/Feroz455/followers",
  "following_url": "https://api.github.com/users/Feroz455/following{/other_user}",
  "gists_url": "https://api.github.com/users/Feroz455/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Feroz455/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Feroz455/subscriptions",
  "organizations_url": "https://api.github.com/users/Feroz455/orgs",
  "repos_url": "https://api.github.com/users/Feroz455/repos",
  "events_url": "https://api.github.com/users/Feroz455/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Feroz455/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sayyid Mohammad Firoz Mahmud",
  "company": "Supersonic",
  "blog": "",
  "location": "Dhaka, Bangladesh",
  "email": null,
  "hireable": null,
  "bio": "Full stack web developer, specializing in mostly JS, but also write  C, C++, PHP and some other stuff",
  "twitter_username": "firoz___mahmud",
  "public_repos": 18,
  "public_gists": 2,
  "followers": 2,
  "following": 6,
  "created_at": "2020-02-29T18:02:45Z",
  "updated_at": "2022-11-14T11:38:09Z"
}
*/
