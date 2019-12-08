const createStory = data => {
  // saving our token
  const apiToken = data.token;
  // removing the token from the data
  delete data.token;
  // removing any empty values
  Object.keys(data).map(key => {
    if (!data[key]) {
      delete data[key];
    }
  });

  // creating headers for our request
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("token", apiToken);

  fetch(`https://muniz.dev/honors-api/v1/stories`, {
    method: "POST", // GET, POST, DELETE, ETC
    mode: "cors",
    cache: "no-cache",
    headers: myHeaders,
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
    .then(response => response.json())
    .then(json => {
      // working with the output area to display the data
      let output = document.getElementById("loading");
      output.innerHTML = "";
      document.getElementById("loading").style.display = "block";
      Object.keys(json).map(key => {
        if (key !== "res") {
          output.innerHTML += `<h4>${key} : ${json[key]}</h4>`;
        } else {
          Object.keys(json.res).map(key => {
            output.innerHTML += `<h4>res.${key} : ${json.res[key]}</h4>`;
          });
        }
      });
    });
};

const getInputValue = name => {
  form = document.forms[0];
  return form[name].value;
};

const submitForm = e => {
  e.preventDefault();
  document.forms[0].style.display = "none";
  document.getElementById("loading").style.display = "flex";

  const data = {
    token: getInputValue("token"),
    name: getInputValue("name"),
    description: getInputValue("description"),
    priority: getInputValue("priority"),
    dependency: getInputValue("dependency"),
    "time-size": getInputValue("time-size"),
    "epic-id": getInputValue("epic-id")
  };

  createStory(data);
};

const setup = () => {
  // hide loader
  document.getElementById("loading").style.display = "none";
  // event listener
  document.forms[0].addEventListener("submit", submitForm);
};

window.onload = setup;
