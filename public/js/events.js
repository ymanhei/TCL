$(document).ready(function() {
/*
THIS IS TIAN'S VERSION CAN YOU PLEASE HAVE A LOOK AS DEALING WITH THE NEXT THREE BUTTONS CAN BE BUILT UPON THESE

  var url = window.location.search;

  var dataDetail;
  var eventsResult;
  // var updating = false;
  var eventsContainer = $("#events-container");

  if (url.indexOf("?date=") !== -1) {
    dataDetail = url.split("=")[1];
    getEventsData(dataDetail, "date");
  } else if (url.indexOf("?location=") !== -1) {
    dataDetail = url.split("=")[1];
    getEventsData(dataDetail, "location");
  } else if (url.indexOf("?category=") !== -1) {
    dataDetail = url.split("=")[1];
    getEventsData(dataDetail, "category");
  } else {
    getEventsData();
  }

  function getEventsData(data, type) {
    var queryUrl;
    var typeDetail;
    dataDetail = data || "";
    typeDetail = type || "";

    switch (typeDetail) {
      case "date":
        queryUrl = "/?date=" + dataDetail;
        break;
      case "location":
        queryUrl = "/?location=" + dataDetail;
        break;
      case "category":
        queryUrl = "/?category=" + dataDetail;
        break;
      case "":
        queryUrl = "";
        break;
    }

    $.get("/api/events" + queryUrl, function(data) {
      console.log("Events", data);
      eventsResult = data;
      if (!eventsResult || !eventsResult.lengths) {
        displayEmpty(type);
      } else {
        initializeEventRows();
      }
    });
  }

  function displayEmpty(type) {
    var partial = "";
    if (type) {
      partial = "For This " + type;
    }
    var noEventsMessage = $("<h2>");
    noEventsMessage.css({
      "text-align": "center",
      "margin-top": "50px",
      "font-family": "'Oswald', sans-serif"
    });
    noEventsMessage.html(
      `Unfortunately There Are No Events Found ${partial}, Please Try Other Searches From <a href="/">Here</a>.`
    );
    eventsContainer.append(noEventsMessage);
  }

  function initializeEventRows() {
    eventsContainer.empty();

    var eventsToAdd = [];

    for (let i = 0; i < eventsResult.length; i++) {
      eventsToAdd.push(createEachEvent(eventsResult[i]));
    }

    eventsContainer.append(eventsToAdda);
  }

  function createEachEvent(event) {
    var eventsContainer = $("#events-container");
    var newEventBox = $("<div>");
    newEventBox.css("display", "inline-block !important");
    newEventBox.addClass("event-box col-12 col-md-6 col-lg-4 col-xl-3");
    var newEventCard = $("<div>");
    newEventCard.addClass("card");

    var newEventCardHeader = $("<div>");
    newEventCardHeader.addClass("card-header");
    newEventCardHeader.text(event.activity);
    var newEventCardImage = $("<img>");
    newEventCardImage.addClass("card-img");
    newEventCardImage.attr("src", event.imageUrl);
    var newEventCardDescription = $("<div>");
    newEventCardDescription.addClass("card-body");
    var descriptionText = $("<p>");
    descriptionText.addClass("card-text");
    descriptionText.text(event.description);
    var newEventCardDetailList = $("<ul>");
    newEventCardDetailList.addClass("list-group list-group-flush");
    var newEventCardDate = $("<li>");
    newEventCardDate.addClass("list-group-item");
    newEventCardDate.text(event.date);
    var newEventCardLocation = $("<li>");
    newEventCardLocation.addClass("list-group-item");
    newEventCardLocation.text(event.location);
    var newEventCardCategory = $("<li>");
    newEventCardCategory.addClass("list-group-item");
    newEventCardCategory.text(event.category);
    var newEventCardGroupSize = $("<li>");
    newEventCardGroupSize.addClass("list-group-item");
    var newEventCardButtons = $("<div>");
    newEventCardButtons.addClass("card-body");
    var joinEventButton = $("<button>");
    joinEventButton.addClass("btn btn-primary btn-lg").text("JOIN");

    var exitEventButton = $("<button>");
    exitEventButton.addClass("btn btn-warning btn-lg").text("EXIT");

    newEventBox.append(newEventCard);
    newEventCard
      .append(newEventCardHeader)
      .append(newEventCardImage)
      .append(newEventCardDescription);
    newEventCardDescription.append(descriptionText);
    newEventCard.append(newEventCardDetailList);
    newEventCardDetailList
      .append(newEventCardLocation)
      .append(newEventCardCategory)
      .append(newEventCardGroupSize);
    newEventCard.append(newEventCardButtons);
    newEventCardButtons.append(joinEventButton).append(exitEventButton);
    return newEventBox;
  }

*/
  
  
  // BELOW ARE LACHLAN'S VERSION WHICH I HAVE NOT TOUCHED//
  
  var blogContainer = $(".blog-container");

  $.get("/api/events", function(data) {
    console.log("Events", data);
    posts = data;

    posts.push(
      {
        activity: "mountain biking",
        category: "outdoors",
        description:
          "riding down rocks and cliffs and stuff with big ting bikes",
        location: "Austin",
        datetime: "2020-01-19T09:00:00.000Z",
        limit: 5
      },
      {
        activity: "mountain climbing",
        category: "outdoors",
        description:
          "falling down rocks and cliffs and stuff with big ting packs",
        location: "Perth",
        datetime: "2020-01-19T09:00:00.000Z",
        limit: 3
      }
    );

    if (!posts || !posts.length) {
      //displayEmpty(author);
    } else {
      initializeRows();
    }
  });

  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    blogContainer.empty();

    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
      var divvy = $("<div>");
      postsToAdd.push(divvy);
      divvy.append("<br>");
    }
    blogContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var formattedDate = new Date(post.datetime);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newPostCard = $("<div>");

    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<h5>");
    var newPostAuthor = $("<h5>");
    newPostAuthor.text(post.location);
    newPostAuthor.css({
      "margin-top": "10px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.activity + "\n");
    newPostBody.text(post.description);
    newPostDate.text(formattedDate);
    newPostDate.css({
      "margin-top": "10px"
    });

    newPostTitle.append(newPostDate);
    // newPostCardHeading.append(deleteBtn);
    // newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostAuthor);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }

});
