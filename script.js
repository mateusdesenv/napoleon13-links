const shareButton = document.querySelector('.share');
shareButton.addEventListener('click', async () => {
  if (navigator.share) {
    await navigator.share({ title: 'Napoleon13', url: window.location.href });
    return;
  }
  await navigator.clipboard.writeText(window.location.href);
  shareButton.textContent = '✓';
  window.setTimeout(() => { shareButton.textContent = '↗'; }, 1800);
});
