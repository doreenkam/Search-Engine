$("#form").submit(function (e) {
  e.preventDefault();

  const query = $("#searchBar").val();

  let result = "";

  const API_KEY = "2e7be22910e430ce2ffdcd70806b67cc";

  const url = `http://api.serpstack.com/search?access_key=${API_KEY}&query=${query}`;

  $.get(url, function (data) {
    $("#result").html("");

    console.log(data);

    data.organic_results.forEach((res) => {
      result = `
      <div class="container">
              <h6>${res.title}</h6><br>
              <a target="_blank" style="color: blue;" href="${res.url}">${res.url}</a>
              <p>${res.displayed_url} ${res.domain} ${res.snippet}</p>
              </div>`;

      $("#result").append(result);
    });
  });
});
