$(document).ready(function() {
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
