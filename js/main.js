document.addEventListener("DOMContentLoaded", function() {
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    console.log('Formulario enviado'); // Verifica si este mensaje aparece en la consola

    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const image = document.getElementById('image').value || 'img/default.jpg'; // Imagen por defecto

    // Crear un nuevo elemento de comentario
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item', 'mb-3');
    commentItem.innerHTML = `
      <img src="${image}" alt="${name}" class="comment-image" style="width:50px; height:50px;">
      <div class="comment-content">
        <strong>${name}</strong>
        <p>${comment}</p>
      </div>
    `;

    // Agregar el nuevo comentario a la lista
    document.getElementById('comment-list').appendChild(commentItem);

    // Limpiar el formulario
    commentForm.reset();
  });
});

        $(document).ready(function() {
            $('#adModal').modal('show'); // Muestra el modal al cargar la página
        });