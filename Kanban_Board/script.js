let draggedItem = null;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    draggedItem = event.target;
}

function drop(event) {
    event.preventDefault();
    const dropzone = event.target.closest('.column');
    dropzone.appendChild(draggedItem);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const details = card.querySelector('.card-details');
            details.classList.toggle('show');
        });
    });
});


function addNewCard() {
    $('#addCardModal').modal('show');
}
//função clicar
document.getElementById('add-card-btn').addEventListener('click', addNewCard);


// salvar
document.getElementById('save-card-btn').addEventListener('click', function() {
    const columnId = document.getElementById('columnId').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const deadline = document.getElementById('deadline').value;


    addCard(columnId, priority, description, deadline);


// Fechar o modal após salvar
    $('#addCardModal').modal('hide');
});

//estrutura card
function addCard(columnId, priority, description, deadline) {
    const column = document.getElementById(columnId);
    const card = document.createElement('div');
    card.classList.add('card');
    card.draggable = true;
    card.addEventListener('dragstart', drag);
   
    card.innerHTML = `
        <div class="card-header">
            <button type="button" class="close" aria-label="Close" onclick="deleteCard(this)">
                <span aria-hidden="true">&times;</span>
            </button>
            
            <strong>Prioridade:</strong> ${priority} <br>
            <strong>Descrição:</strong> ${description} <br>
            <strong>Prazo:</strong> ${deadline} <br>
        </div>
        <div class="card-body">
            <!-- Conteúdo do Card -->
        </div>
    `;
    column.appendChild(card);
}

function deleteCard(button) {
    const card = button.closest('.card');
    card.remove();
}

// Exemplo de uso:
addCard('todo', 'High', 'Finish project', '2024-05-01');
addCard('in-progress', 'Medium', 'Review code', '2024-05-02');
addCard('done', 'Low', 'Test application', '2024-05-03');

