document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos HTML
    const counterDisplay = document.getElementById('counter');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Inicializar el valor del contador desde el almacenamiento local si existe, o 0
    let count = localStorage.getItem('stardewCounter') ? parseInt(localStorage.getItem('stardewCounter')) : 0;
    counterDisplay.textContent = count; // Mostrar el valor inicial

    // Función para actualizar el contador y guardarlo
    function updateCounter(newValue) {
        count = newValue;
        counterDisplay.textContent = count;
        localStorage.setItem('stardewCounter', count); // Guardar en el almacenamiento local
    }

    // Event listener para el botón de sumar
    increaseBtn.addEventListener('click', () => {
        updateCounter(count + 1);
        playClickAnimation(increaseBtn); // Llama a la función de animación
    });

    // Event listener para el botón de restar
    decreaseBtn.addEventListener('click', () => {
        updateCounter(count - 1);
        playClickAnimation(decreaseBtn); // Llama a la función de animación
    });

    // Event listener para el botón de reiniciar
    resetBtn.addEventListener('click', () => {
        updateCounter(0);
        playClickAnimation(resetBtn); // Llama a la función de animación
    });

    // Función para activar la animación de clic en un botón
    function playClickAnimation(buttonElement) {
        // La animación ':active' del CSS ya maneja el efecto visual de "presionado"
        // Este es un ejemplo para una animación si quisieras una adicional con JS
        // Por ejemplo, podrías hacer un pequeño 'pop' o cambio de color temporal
        
        // No se necesita JS adicional para la animación de click si el CSS :active es suficiente.
        // Las animaciones de `transform` y `box-shadow` en `:active` ya dan un buen feedback.
    }
});