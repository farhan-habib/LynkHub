export const validateForm = (params) => {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Deez Nuts");
        return false;
    }
}
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
