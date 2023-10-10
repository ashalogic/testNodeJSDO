function main(args) {
  let name = args.name || "stranger";
  let greeting = "Hello " + name + "!";
  console.log(greeting);
  return { body: greeting };
}

function getUserProfile() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  var data = {};
  fetch("https://www.instagram.com/taylorswift/?__a=1&__d=dis", requestOptions)
    .then((response) => {
      data = response.text();
    })
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return data;
}

exports.main = main;
exports.getUserProfile = getUserProfile;
