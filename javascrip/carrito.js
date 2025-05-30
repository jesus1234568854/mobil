

const botones = document.querySelectorAll('.btn-add-cart');
const whatsappBtn = document.getElementById('whatsappBtn');

// Array para almacenar productos del carrito
let carrito = [];

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const nombre = boton.getAttribute('data-nombre');
    const precio = parseInt(boton.getAttribute('data-precio'));
    
    const nuevoProducto = { nombre, precio };
    carrito.push(nuevoProducto);

    // Almacenamos el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert("✅ Producto agregado correctamente.");


    // Mostrar botón de WhatsApp
    whatsappBtn.style.display = 'inline-block';
  });
});

whatsappBtn.addEventListener('click', () => {
  // Construir el mensaje con los productos del carrito
  let mensaje = '¡Hola! Quiero comprar los siguientes productos:\n\n';
  carrito.forEach(producto => {
    mensaje += `${producto.nombre} - $${producto.precio.toLocaleString()}\n`;
  });

  // Total del carrito
  let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
  mensaje += `\nTotal: $${total.toLocaleString()}`;

  // Enlace para WhatsApp
  const numeroWhatsApp = '573043691090'; // Tu número de WhatsApp con prefijo de Colombia
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  // Abrir WhatsApp con el mensaje
  window.open(urlWhatsApp, '_blank');
});