document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggleButton').forEach(btn => {
    btn.addEventListener('click', () => {
      const article = btn.closest('article');
      const content = article.querySelector('.article-content');

      if (content.classList.contains('article-collapsed')) {
        // Développer
        content.classList.remove('article-collapsed');
        btn.textContent = 'Lire moins';
      } else {
        // Réduire
        content.classList.add('article-collapsed');
        btn.textContent = 'Lire plus';

        // Centrer la vue sur le bouton
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});
