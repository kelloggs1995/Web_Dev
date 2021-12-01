const url = {
  async: true,
  crossDomain: true,
  url: "https://free-news.p.rapidapi.com/v1/search?q=natural%20disaster&lang=en",
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-news.p.rapidapi.com",
    "x-rapidapi-key": "08f569eefbmsh4b2008211be1177p107acdjsn83cad4d4495c",
  },
};
$.getJSON(url, function (jsondata) {
  console.log(jsondata);
  addNews(jsondata);
});

function addNews(jsondata) {
  var resultsTop = "";
  var resultsHeadline = "";
  var resultsNews = "";
  var arrowSvg =
    '<svg width="24" height="24" viewBox="0 0 24 24"> <path d="M12 4L10.6 5.4L16.2 11L4 11L4 13L16.2 13L10.6 18.6L12 20L20 12L12 4Z" /> </svg>';

  for (var i = 0; i < 2; i++) {
    var img = jsondata.articles[i].media;
    var title = jsondata.articles[i].title;
    var date = jsondata.articles[i].published_date_precision;
    var link = jsondata.articles[i].link;

    var dateString = new Date(date);
    var year = dateString.getFullYear();
    var month = dateString.getMonth() + 1;
    var dt = dateString.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    if (img == null) {
      img = "assets/img/image-not-found.png";
    }

    resultsTop +=
      '<article class="headline__article">' +
      '<img class="article__img" src= "' +
      img +
      '">' +
      '<div class="article__content">' +
      '<h3 class="article__title">' +
      title +
      "</h3>" +
      '<p class="article__date">Published on ' +
      dt +
      "-" +
      month +
      "-" +
      year +
      "</p>" +
      '<a class="article__btn" href="' +
      link +
      '">Read more' +
      arrowSvg +
      "</a>" +
      "</div>" +
      "</article>";
  }

  $("#topArticle").html(resultsTop);

  for (var i = 2; i < 6; i++) {
    var img = jsondata.articles[i].media;
    var title = jsondata.articles[i].title;
    var date = jsondata.articles[i].published_date_precision;
    var link = jsondata.articles[i].link;

    if (img == null) {
      img = "assets/img/image-not-found.png";
    }

    resultsHeadline +=
      '<article class="headline__article">' +
      '<img class="article__img" src= "' +
      img +
      '">' +
      '<div class="article__content">' +
      '<h3 class="article__title">' +
      title +
      "</h3>" +
      '<p class="article__date">Published on ' +
      dt +
      "-" +
      month +
      "-" +
      year +
      "</p>" +
      '<a class="article__btn" href="' +
      link +
      '">Read more' +
      arrowSvg +
      "</a>" +
      "</div>" +
      "</article>";
  }

  $("#headlineArticle").html(resultsHeadline);

  for (var i = 6; i < 11; i++) {
    var img = jsondata.articles[i].media;
    var title = jsondata.articles[i].title;
    var date = jsondata.articles[i].published_date_precision;
    var link = jsondata.articles[i].link;

    if (img == null) {
      img = "assets/img/image-not-found.png";
    }

    resultsNews +=
      '<article class="latest__article">' +
      '<img class="article__img" src= "' +
      img +
      '">' +
      '<div class="article__content">' +
      '<h3 class="article__title">' +
      title +
      "</h3>" +
      '<p class="article__date">Published on ' +
      dt +
      "-" +
      month +
      "-" +
      year +
      "</p>" +
      '<a class="article__btn" href="' +
      link +
      '">Read more' +
      arrowSvg +
      "</a>" +
      "</div>" +
      "</article>";
  }

  $("#resultsNews").html(resultsNews);
}
