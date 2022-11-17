const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

filter.addEventListener("input", (e) => filterData(e.target.value));
getData();
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=1000");
  const { results } = await res.json();
  //   console.log(results[0]);
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("user");

    li.innerHTML = `
                <img
                src="${user.picture.large}"
                alt="${user.name.first}"
                />
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city},${user.location.country}</p>
            </div>`;
    listItems.push(li);
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  console.log(searchTerm);
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
