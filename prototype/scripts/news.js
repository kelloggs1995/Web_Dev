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
  addNews(jsondata);
  console.log(jsondata);
});

function addNews(jsondata) {
  var resultsNews = "";
  var arrowSvg =
    '<svg width="24" height="24" viewBox="0 0 24 24"> <path d="M12 4L10.6 5.4L16.2 11L4 11L4 13L16.2 13L10.6 18.6L12 20L20 12L12 4Z" /> </svg>';

  var input = $(".input").val();
  console.log(input);

  for (var i = 0; i < 25; i++) {
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

  /**Pagination */
  /* var items = $(".latest__article");
        var numItems = items.length;
        var perPage = 10;
    
        items.slice(perPage).hide();
    
        $('#pagination-container').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });*/

  /**Search by title */
  $(".input").keyup(function (e) {
    var val = $(this).val();
    filter(val.toLowerCase());
  });

  $("input").on("paste", function () {
    var element = this;
    setTimeout(function () {
      var text = $(element).val().toLowerCase();
      filter(text);
    }, 100);
  });

  function filter(x) {
    var isMatch = false;
    $(".latest__article").each(function (i) {
      var content = $(this).html();

      if (content.toLowerCase().indexOf(x) == -1) {
        $(this).hide();
      } else {
        isMatch = true;
        $(this).show();
      }
    });
  }
}
