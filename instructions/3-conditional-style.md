# Application de style conditionnelle

## Avant l'exercice

- `git status`
- si status pas clean, commit les changements ou les supprimer
- `git fetch origin`
- `git checkout 4-conditional-style`
- `git checkout -b <my-branch-name>`

## Requirements

Sur le composant `HouseThumbnailComponent`
- ajouter le style ci-dessous
- ajouter une propriété publique `isSelected` (type: `boolean`, default: `false`)
- ajouter une méthode publique `toggleSelect` qui modifie la valeur de la propriété `isSelected`
- lier cette méthode au template ('container') au moyen d'un binding sur l'événement 'click'
- conditionner l'ajouter à la div 'container' de la class 'selected' à la valeur de la propriété `isSelected`

## Ressources

### Style

```SCSS
@import '../assets/variables'; // placer en haut de fichier

.selected::after {
  content: '✓';
  position: absolute;
  padding: 5px;
  color: white;
  right: 5px;
  top: 5px;
  background-color: $sw-primary;
  width: 10px;
  line-height: 10px;
  border-radius: 50%;
  border: 1px solid;
}
```
