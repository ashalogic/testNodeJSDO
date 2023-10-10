function main() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  var data = {};
  fetch("https://www.instagram.com/taylorswift/?__a=1&__d=dis", requestOptions)
    .then(async (response) => {
      data = await response.json();
      return {
        headers: { "content-type": "application/json" },
        body: data,
      };
    })
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
exports.main = main;
