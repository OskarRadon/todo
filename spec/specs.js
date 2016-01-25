describe("ToDo", function(){
  it("adds task and notes to the to do list", function(){
  var testToDo = new ToDo ("clean room", "make bed");
  expect (testToDo.task).to.equal("clean room");
  expect (testToDo.note).to.equal("make bed");
  });
});
