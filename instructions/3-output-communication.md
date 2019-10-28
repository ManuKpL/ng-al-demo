# Communication depuis le composant enfant

## Avant l'exercice

- `git status`
- si status pas clean, commit les changements ou les supprimer
- `git fetch origin`
- `git checkout 3-output-communication`
- `git checkout -b <my-branch-name>`

## Requirements

- créer une nouvelle valeur sur le composant de liste des maisons pour stocker le slogan de la maison sélectionnée
- utiliser le template ci-dessous pour la mise en forme
- au clic sur le composant thumbnail, envoyer le slogan (`words`) de la maison vers son parent (liste)
- lire l'événements depuis le composant parent et associer la donnée reçue et le template pour afficher l'information au dessus de la liste des maisons

## Ressources

### Template

```HTML
<div id="words" class="padded spaced bg-secondary">
  <!-- CONTENT GOES HERE -->
</div>
```

### Style

```SCSS
div#words {
  color: white;
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  position: relative;

  &::after, &::before {
    position: absolute;
    font-size: 4.5rem;
    content: "\"";
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
  }

  &::before {
    left: .5rem;
    top: 0;
  }
  &::after {
    right: 1rem;
    bottom: 0;
    line-height: 1rem;
  }
}
```

### Data

```JSON
[
  {
    "id": 229,
    "name": "House Lannister of Casterly Rock",
    "region": "The Westerlands",
    "coatOfArms": "A gold lion, on a crimson field",
    "words": "Hear Me Roar!",
    "seat": "Casterly Rock",
    "imagePath": "https://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/1200px-House_Lannister.svg.png"
  },
  {
    "id": 362,
    "name": "House Stark of Winterfell",
    "region": "The North",
    "coatOfArms": "A running grey direwolf, on an ice-white field",
    "words": "Winter is Coming",
    "seat": "Winterfell",
    "imagePath": "https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG"
  },
  {
    "id": 395,
    "name": "House Tully of Riverrun",
    "region": "The Riverlands",
    "coatOfArms": "A leaping silver trout on a field of blue and mud red",
    "words": "Family, Duty, Honor",
    "seat": "Riverrun",
    "imagePath": "https://vignette.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG"
  },
]
```
