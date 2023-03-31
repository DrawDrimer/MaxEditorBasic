document.addEventListener("DOMContentLoaded", function() {
  const saveButton = document.querySelector("#save");

  saveButton.addEventListener("click", function() {
    const textarea = document.querySelector("#file");
    const a = document.createElement('a');
    a.href = 'data:text/json;charset=utf-8,' + textarea.value;
    a.download = 'newfile.txt';
    a.click();
  });
  const newButton = document.querySelector("#new");

  newButton.addEventListener("click", function() {
    const textarea = document.querySelector("#file");

    textarea.value = "";
  });
});
