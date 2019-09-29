((paragraphText: string) => {
  const p: HTMLParagraphElement = document.createElement('p');
  p.innerHTML = paragraphText;
  document.body.appendChild(p);
})('Hello from typescript file');
