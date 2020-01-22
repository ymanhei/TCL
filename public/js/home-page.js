$(document).ready(function() {
  $("#date-section").hide();
  $("#location-section").hide();
  $("#category-section").hide();

  // $(window).scroll(function() {
  //   var height = $(window).scrollTop();
  //   if (height > 100) {
  //     $(".closeBtn").fadeIn();
  //   } else {
  //     $(".closeBtn").fadeOut();
  //   }
  // });

  $("#date-button").click(() => {
    $("#date-section").toggle();
    $("#location-section").hide();
    $("#category-section").hide();
  });
  $("#b1").click(() => {
    $("#date-section").hide();
  });

  $("#location-button").click(() => {
    $("#location-section").toggle();
    $("#date-section").hide();
    $("#category-section").hide();
  });
  $("#b2").click(() => {
    $("#location-section").hide();
  });

  $("#category-button").click(() => {
    $("#category-section").toggle();
    $("#date-section").hide();
    $("#location-section").hide();
  });
  $("#b3").click(() => {
    $("#category-section").hide();
  });

  var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
      allow_single_deselect: true
    },
    ".chosen-select-no-single": {
      disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
      no_results_text: "Oops, No Events Found!"
    },
    ".chosen-select-width": {
      width: "95%"
    }
  };

  for (var selector in config) {
    $(selector).chosen(config[selector]);
  }

  // Form validation
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    var questionLenghts = $(".chosen-select").length;
    console.log(questionLenghts);
    for (var i = 0; i < questionLenghts; i++) {
      if (
        $(".chosen-select")
          .eq(i)
          .val() === ""
      ) {
        isValid = false;
      }
    }
    return isValid;
  }

  $("#category-select").on("change", function() {
    //alert( this.value );
    window.location.href =
      "events/?category=" + $("#category-select option:selected").text();
  });

  $(".chosen-search input").on("change", function() {
    //alert( this.value );
    window.location.href =
      "events/?location=" + $(".chosen-search input").val();
  });

  $("#date-confirm-button").on("click", function() {
    //alert( this.value );
    window.location.href =
      "events/?date=" +
      moment($(".date-example").val(), "MM-DD-YYYY").format("YYYY-MM-DD");
  });
});

/* global moment */

//   // blogContainer holds all of our posts
//   var blogContainer = $(".blog-container");
//   var postCategorySelect = $("#category");
//   // Click events for the edit and delete buttons
//   $(document).on("click", "button.delete", handlePostDelete);
//   $(document).on("click", "button.edit", handlePostEdit);
//   // Variable to hold our posts
//   var posts;

//   // The code below handles the case where we want to get blog posts for a specific author
//   // Looks for a query param in the url for author_id
//   var url = window.location.search;
//   var authorId;
//   if (url.indexOf("?author_id=") !== -1) {
//     authorId = url.split("=")[1];
//     getPosts(authorId);
//   }
//   // If there's no authorId we just get all posts as usual
//   else {
//     getPosts();
//   }

//   // This function grabs posts from the database and updates the view
//   function getPosts(author) {
//     authorId = author || "";
//     if (authorId) {
//       authorId = "/?author_id=" + authorId;
//     }
//     $.get("/api/posts" + authorId, function(data) {
//       console.log("Posts", data);
//       posts = data;
//       if (!posts || !posts.length) {
//         displayEmpty(author);
//       }
//       else {
//         initializeRows();
//       }
//     });
//   }

//   // This function does an API call to delete posts
//   function deletePost(id) {
//     $.ajax({
//       method: "DELETE",
//       url: "/api/posts/" + id
//     })
//       .then(function() {
//         getPosts(postCategorySelect.val());
//       });
//   }

//   // InitializeRows handles appending all of our constructed post HTML inside blogContainer
//   function initializeRows() {
//     blogContainer.empty();
//     var postsToAdd = [];
//     for (var i = 0; i < posts.length; i++) {
//       postsToAdd.push(createNewRow(posts[i]));
//     }
//     blogContainer.append(postsToAdd);
//   }

//   // This function constructs a post's HTML
//   function createNewRow(post) {
//     var formattedDate = new Date(post.createdAt);
//     formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//     var newPostCard = $("<div>");
//     newPostCard.addClass("card");
//     var newPostCardHeading = $("<div>");
//     newPostCardHeading.addClass("card-header");
//     var deleteBtn = $("<button>");
//     deleteBtn.text("x");
//     deleteBtn.addClass("delete btn btn-danger");
//     var editBtn = $("<button>");
//     editBtn.text("EDIT");
//     editBtn.addClass("edit btn btn-info");
//     var newPostTitle = $("<h2>");
//     var newPostDate = $("<small>");
//     var newPostAuthor = $("<h5>");
//     newPostAuthor.text("Written by: " + post.Author.name);
//     newPostAuthor.css({
//       float: "right",
//       color: "blue",
//       "margin-top":
//       "-10px"
//     });
//     var newPostCardBody = $("<div>");
//     newPostCardBody.addClass("card-body");
//     var newPostBody = $("<p>");
//     newPostTitle.text(post.title + " ");
//     newPostBody.text(post.body);
//     newPostDate.text(formattedDate);
//     newPostTitle.append(newPostDate);
//     newPostCardHeading.append(deleteBtn);
//     newPostCardHeading.append(editBtn);
//     newPostCardHeading.append(newPostTitle);
//     newPostCardHeading.append(newPostAuthor);
//     newPostCardBody.append(newPostBody);
//     newPostCard.append(newPostCardHeading);
//     newPostCard.append(newPostCardBody);
//     newPostCard.data("post", post);
//     return newPostCard;
//   }

//   // This function figures out which post we want to delete and then calls deletePost
//   function handlePostDelete() {
//     var currentPost = $(this)
//       .parent()
//       .parent()
//       .data("post");
//     deletePost(currentPost.id);
//   }

//   // This function figures out which post we want to edit and takes it to the appropriate url
//   function handlePostEdit() {
//     var currentPost = $(this)
//       .parent()
//       .parent()
//       .data("post");
//     window.location.href = "/cms?post_id=" + currentPost.id;
//   }

//   // This function displays a message when there are no posts
//   function displayEmpty(id) {
//     var query = window.location.search;
//     var partial = "";
//     if (id) {
//       partial = " for Author #" + id;
//     }
//     blogContainer.empty();
//     var messageH2 = $("<h2>");
//     messageH2.css({ "text-align": "center", "margin-top": "50px" });
//     messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
//     "'>here</a> in order to get started.");
//     blogContainer.append(messageH2);
//   }

// })
