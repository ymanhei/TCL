$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#event-name");

  var descInput = $("#event-desc");
  var dateInput = $("#event-dt");
  var catInput = $("#event-cat");
  var locInput = $("#event-loc");
  var limitInput = $("#event-limit");
  var imgurlInput = $("#event-imgurl");

  let the_event = {
    activity: "",
    description: "",
    datetime: "",
    category: "",
    location: "",
    limit: "",
    imgurl: ""
  };

  //location
  //imageurl
  //category logo

  //var authorContainer = $(".author-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  //$(document).on("submit", "#submit-event", handleNewEventSubmit);

  $("#submit-event").click(function() {
    handleNewEventSubmit(event);
    //handleEdit();
  });

  //add delete functionality
  console.log(nameInput.val());
  // Getting the initial list of Authors
  //getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleNewEventSubmit(event) {
    event.preventDefault();
    console.log(nameInput);
    // Don't do anything if the name fields hasn't been filled out
    if (
      !nameInput
        .val()
        .trim()
        .trim()
    ) {
    }

    the_event.activity = nameInput.val().trim();
    the_event.description = descInput.val().trim();
    the_event.datetime = dateInput.val().trim();
    the_event.category = catInput.val().trim();
    the_event.location = locInput.val().trim();
    the_event.limit = limitInput.val().trim();
    the_event.imageUrl = imgurlInput.val().trim();

    //Calling the upsertAuthor function and passing in the value of the name input
    postEvent(the_event);
    console.log(nameInput.val());
    console.log("IMG:    " + imgurlInput.val());
  }

  console.log(nameInput.val());

  // A function for creating an author. Calls getAuthors upon completion
  function postEvent(eventData) {
    console.log(eventData);
    $.post("/api/events", eventData);
  }

  // Function for creating a new list row for authors
  function createAuthorRow(authorData) {
    var newTr = $("<tr>");
    newTr.data("author", authorData);
    newTr.append("<td>" + authorData.name + "</td>");
    if (authorData.Posts) {
      newTr.append("<td> " + authorData.Posts.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append(
      "<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>"
    );
    newTr.append(
      "<td><a href='/cms?author_id=" +
        authorData.id +
        "'>Create a Post</a></td>"
    );
    newTr.append(
      "<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>"
    );
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getEvents() {
    $.get("/api/events", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val();
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList
      .children()
      .not(":last")
      .remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this)
      .parent("td")
      .parent("tr")
      .data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    }).then(getAuthors);
  }

  function populateForm(post) {
    console.log("ji");
    $("#event-name").val(post.activity);
    $("#event-desc").val(post.description);
    $("#event-loc").val(post.location);
    $("#event-dt").val(post.datetime);
    $("#event-cat").val(post.category);
    $("#event-limit").val(post.limit);
    $("event-imgurl").val(post.imgurl);
  }

  function handleEdit() {
    let id = window.location.pathname.split("/").pop();
    console.log("jh");

    $.get("/api/events/" + id, function(data) {
      populateForm(data);
    });

    the_event.id = id;
    console.log(the_event);

    $.ajax({
      method: "PUT",
      url: "/api/events/" + the_event.id,
      data: the_event
    });
  }
});
