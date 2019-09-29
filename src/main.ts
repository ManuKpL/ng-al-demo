(function appendTestParagraph(paragraphText: string) {
  const p = document.createElement('p');
  p.innerHTML = paragraphText;

  document.body.appendChild(p);
})('Hello from typescript with webpack');
