let input_box = document.querySelector("#input_box");
let table = document.querySelector("tbody");
let add_input_to_output_btn = document.querySelector("#add_input_btn");

add_input_to_output_btn.addEventListener("click", () => {
  if (input_box.value.trim() === "") {
    alert("Cannot Process: Empty Input Box, Try Adding Something!");
    return;
  }
  // Creating table_child and it's content
  let table_child = document.createElement("tr");
  table_child.className = "table_child";
  table_child.innerHTML =
    "<td><input type='text' id='output_box' readonly maxlength='20' /></td><td><div class='crud_operation_container'><button id='edit_btn'>EDIT</button><button id='del_btn'>DEL</button></div></td>";
  table.append(table_child);

  // Table child Variables
  let output_box = table_child.querySelector("#output_box");
  let edit_btn = table_child.querySelector("#edit_btn");
  let del_btn = table_child.querySelector("#del_btn");
  //Added input_box value in the output_box
  output_box.value = input_box.value;
  input_box.value = "";

  edit_btn.addEventListener("click", () => {
    // Enable editing by removing readonly
    output_box.style.backgroundColor = "white";
    output_box.style.border = "1px black solid";
    output_box.readOnly = false; // Correct property name
    edit_btn.textContent = "SAVE";
    edit_btn.style.backgroundColor = "green";

    // Change behavior to save the content when the button is clicked again
    edit_btn.addEventListener(
      "click",
      () => {
        output_box.style.backgroundColor = "transparent";
        output_box.style.border = "none";
        output_box.readOnly = true; // Set back to readonly
        edit_btn.textContent = "EDIT";
        edit_btn.style.backgroundColor = "";
      },
      { once: true }
    );
  });

  // Remove the table_child container when delete button is clicked
  del_btn.addEventListener("click", () => {
    table_child.remove();
  });
});
