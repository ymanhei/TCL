$(document).ready(function() {
  var url = window.location.search;
  var dataDetail;
  var eventsResult;
  var eventsContainer = $("#events-container");

  var advStart = $(".ex-inputs-start");
  var advEnd = $(".ex-inputs-end");
  var container = $(".ex-inputs-picker");
  var eventsContainer = $("#events-container");
  var formSection = $("#form-section");
  var formWrapper = $("#form-wrapper");

  TinyDatePicker(document.querySelector(".ex-inputs-start"));
  TinyDatePicker(document.querySelector(".ex-inputs-end"));

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
      eventsResult = data || "";
      console.log(eventsResult);
      if (!eventsResult) {
        displayEmpty(type);
      } else {
        initializeEventRows();
      }
    });
  }
  function displayEmpty(type) {
    console.log("here");
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
    var newEventBox = $("<div>");
    newEventBox.css("display", "inline-block !important");
    newEventBox.addClass(
      "event-box col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
    );
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
    var displayDate = moment(event.datetime, "YYYY-MM-DD").format(
      "Do MMMM YYYY"
    );
    newEventCardDate.text(displayDate);

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
      .append(newEventCardDate)
      .append(newEventCardLocation)
      .append(newEventCardCategory)
      .append(newEventCardGroupSize);
    newEventCard.append(newEventCardButtons);
    newEventCardButtons.append(joinEventButton).append(exitEventButton);
    newEventBox.data("eventId", event.id);
    joinEventButton.data("event", event);
    joinEventButton.click(userFormPopup);
    return newEventBox;
  }
  function userFormPopup() {
    console.log("ehh");
    var userForm = $("<div>");
    var largeForm = `
    <form class="needs-validation user-form" novalidate>
    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label for="validationCustom01">First name</label>
        <input type="text" class="form-control" id="fisrtNameBlock" placeholder="First Name" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <label for="validationCustom02">Last name</label>
        <input type="text" class="form-control" id="lastNameBlock" placeholder="Last Name" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <label for="validationCustomUsername">Username</label>
        <div class="input-group">
          <input type="text" class="form-control" id="userNameBlock" aria-describedby="inputGroupPrepend" required>
          <div class="invalid-feedback" id="mobileNumberblock">
            Please Enter Your Mobile Number
          </div>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="validationCustom03">Email</label>
        <input type="text" class="form-control" id="emailBlock" required>
        
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom04">Gender</label>
        <select class="custom-select" id="genderBlock" required>
          <option selected disabled value="">Choose...</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom05">Age</label>
        <input type="text" class="form-control" id="ageBlock" required>
        
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="agreeTCblock" required>
        <label class="form-check-label" for="invalidCheck">
          Authorize use of your personal data within this site
        </label>
      
      </div>
    </div>
    <button class="btn btn-primary submitUserFormButton" type="submit" id="">Submit form</button>
  </form>
    `;

    userForm.append(largeForm);
    userForm.data("user");
    formSection.append(userForm);
    formWrapper.css("visibility", "visible");
  }

});
