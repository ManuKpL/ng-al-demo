import './styles.scss';

(function appendTestParagraph(paragraphText: string) {
  const p = document.createElement('p');
  p.innerHTML = paragraphText;

  document.body.appendChild(p);
})('Hello from dev server');
