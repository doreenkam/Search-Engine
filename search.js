$("#form").submit(function (e) {
  e.preventDefault();

  const query = $("#searchBar").val();

  let result = "";

  const API_KEY = "2e7be22910e430ce2ffdcd70806b67cc";

  const url = `http://api.serpstack.com/search?access_key=${API_KEY}&query=${query}`;

  $.get(url, function (data) {
    console.log(data);

    data.organic_results.forEach((res) => {
      result = `
              <h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a>
              <p>${res.snippet}</p>`;

      $("#result").append(result);
    });
  });
});
