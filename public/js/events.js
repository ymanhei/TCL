$(document).ready(function() {
  var url = window.location.search;
  var dataDetail;
  var eventsResult;
  // var updating = false;
  var eventsContainer = $("#events-container");
  if (url.indexOf("?date=") !== -1) {
    dataDetail = url.split("=")[1];
    console.log(dataDetail);
    getEventsData(dataDetail, "date");
  } else if (url.indexOf("?location=") !== -1) {
    dataDetail = url.split("=")[1];
    console.log(dataDetail);
    getEventsData(dataDetail, "location");
  } else if (url.indexOf("?category=") !== -1) {
    dataDetail = url.split("=")[1];
    console.log(dataDetail);
    getEventsData(dataDetail, "category");
  } else {
    getEventsData();
  }
  function getEventsData(data, type) {
    var queryUrl;
    var typeDetail;
    dataDetail = data || "";
    typeDetail = type || "";

    console.log(typeDetail);
    switch (typeDetail) {
      case "date":
        console.log(dataDetail);
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
      console.log(queryUrl);
      console.log("Events", data);

      if (!data) {
        console.log("here?");
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
    eventsContainer.append(eventsToAdd);
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
});
