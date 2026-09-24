/**
 * Villa del Río S.A.S. - Scripts Interactivos
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('show')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });
  }

  // Filter Buttons for Razas & Lotes
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.card-raza, .card-lote');

      cards.forEach(card => {
        if (filterValue === 'todos' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.5s ease forward';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Contact Form WhatsApp Handler
  const whatsappForm = document.getElementById('whatsappForm');
  if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre')?.value.trim();
      const telefono = document.getElementById('telefono')?.value.trim();
      const correo = document.getElementById('correo')?.value.trim();
      const asunto = document.getElementById('asunto')?.value;
      const mensaje = document.getElementById('mensaje')?.value.trim();

      if (!nombre || !telefono || !mensaje) {
        alert('Por favor complete los campos obligatorios (Nombre, Teléfono y Mensaje).');
        return;
      }

      // WhatsApp Phone Number for Villa del Río S.A.S. (Colombian format)
      const phoneNum = '573123456789';

      const formattedText = 
`*NUEVO MENSAJE DE CONTACTO - VILLA DEL RÍO S.A.S.* 🐖
----------------------------------------
📌 *Nombre:* ${nombre}
📞 *Teléfono:* ${telefono}
✉️ *Correo:* ${correo || 'No especificado'}
🏷️ *Asunto / Interés:* ${asunto || 'Consulta General'}

💬 *Mensaje:*
${mensaje}
----------------------------------------
_Enviado desde el sitio web oficial de Villa del Río S.A.S._`;

      const whatsappUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(formattedText)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});

/**
 * Open WhatsApp with custom product/lote query
 */
function cotizarWhatsApp(itemTitle, itemCode) {
  const phoneNum = '573123456789';
  const text = `Hola Villa del Río S.A.S. 🐖, quisiera solicitar más información y cotización sobre: *${itemTitle}* (Ref: ${itemCode}). Quedo atento a su respuesta.`;
  const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
