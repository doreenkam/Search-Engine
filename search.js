$("#form").submit(function (e) {
  e.preventDefault();

  const query = $("#searchBar").val();

  let result = "";

  const API_KEY = "2e7be22910e430ce2ffdcd70806b67cc";

  // Search functionality using jQuery:

  const url = `http://api.serpstack.com/search?access_key=${API_KEY}&query=${query}`;

  $.get(url, function (data) {
    $("#result").html("");

    console.log(data);

    data.organic_results.forEach((res) => {
      result = `
      <div style="margin: 50px;">
              <a target="_blank" style="color: blue;" href="${res.url}">${res.url}</a>
              <h6 style="font-size: 20px;">${res.title}</h6><br><p>${res.snippet}</p>
      </div>`;

      $("#result").append(result);
    });
  });
});
