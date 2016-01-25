function ToDo (task, note){
  this.task = task;
  this.note = note;
}

function resetFields() {
  $("input#new-task").val("");
  $("textarea#new-note").val("");
}

$(document).ready(function(){
  $("form#new-list").submit(function(event){
    event.preventDefault();

    var task = $("input#new-task").val();
    var note = $("textarea#new-note").val();
    var newToDo = new ToDo(task, note);

    $("ul#finaltask").append("<li><h3>" + newToDo.task + "</h3><p>" + newToDo.note + "</p></li>");

    resetFields();

    $("ul#finaltask li").last().click(function() {
      $(this).toggleClass("strikethru");
      return false;
    });
  });
});
