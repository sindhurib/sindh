$(document).ready(() => {
  $("#button").click(() => {
    var textArea = $("#tarea").val();
    $("#message").append(textArea);
  });

  $("#message").click(function () {
    let emoji = document.createElement("img");
    emoji.src =
      "https://images.emojiterra.com/google/android-oreo/512px/1f642.png";
    emoji.width = 50;
    emoji.height = 50;
    $(this).replaceWith(emoji);
  });
});