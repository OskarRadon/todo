function ToDo (task, note){
  this.task = task;
  this.note = note;
}

function resetFields() {
  $("input#new-task").val("");
  $("input#new-note").val("");
}

$(document).ready(function(){
  $("form#new-list").submit(function(event){
    event.preventDefault();

    var task = $("input#new-task").val();
    var note = $("input#new-note").val();
    var newToDo = new ToDo(task, note);

    $("ul#finaltask").append("<li><span class='output'>" + newToDo.task + "</span></li>");

    resetFields();

    $("#delete").last().click(function(){
      $("#show-list").hide();

    });

    $(".output").last().click(function() {
      $("#show-list").show();
      $("#show-list h2").text(newToDo.task);
      $(".notes").text(newToDo.note);
    });
  });
});
