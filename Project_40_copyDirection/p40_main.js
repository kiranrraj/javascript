
let btn_copy = document.querySelector('.btn1');
const text = document.querySelector(".direction");
let showDirection = () => {
  let selectionObj = window.getSelection();
  let range = document.createRange();
  if( selectionObj.anchorNode == null || selectionObj.focusNode == null){
    text.innerText = "User does not selected any text";
    selectionObj.removeAllRanges();
    return;
  }
  range.setStart(selectionObj.anchorNode, selectionObj.anchorOffset);
  range.setEnd(selectionObj.focusNode, selectionObj.focusOffset);
  text.innerText = range.collapsed ? "Backward" : "Forward";
  selectionObj.removeAllRanges();
};

btn_copy.addEventListener('click', showDirection);