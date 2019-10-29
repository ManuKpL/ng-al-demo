# Communication depuis le composant enfant

## Avant l'exercice

- `git status`
- si status pas clean, commit les changements ou les supprimer
- `git fetch origin`
- `git checkout 4-communication-from-child`
- `git checkout -b <my-branch-name>`

## Requirements

- au click sur le composant thumbnail et toggle de la propriété `isSelected` (voir exercice #3), envoyer un événement (`Ouput` et `EventEmitter`) depuis le composant enfant (thumbnail) vers le composant parent (liste)
- lire l'événement dans le composant parent et compter le nombre de composants enfants sélectionnés (utiliser `ViewChildren`)
- créer une nouvelle propriété sur le composant de `HousesListComponent` pour stocker un message d'information sur le nombre de composants enfants sélectionnés
- utiliser le template ci-dessous pour la mise en forme du message (composant `InfoComponent` présent dans le module `SharedModule`)
- (bonus: afficher un message différent si une seule maison est sélectionnée; singulier vs pluriel)

## Ressources

### Template

```HTML
<sw-info>
  <!-- CONTENT GOES HERE -->
</sw-info>
```
