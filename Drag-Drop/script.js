document.querySelectorAll('.draggable').forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  const draggedElement = document.getElementById(data);
  draggedElement.parentNode.removeChild(draggedElement);
}