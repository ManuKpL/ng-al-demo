# Communication de composants

## Avant l'exercice

- `git status`
- si status pas clean, commit les changements ou les supprimer
- `git fetch origin`
- `git checkout 2-communicating-components`
- `git checkout -b <my-branch-name>`

## Requirements

- créer un composant de `List` dans le dossier `houses`
- remplacer dans le template de la page d'accueil le composant `Thumbnail` de l'exercice #1 par le nouveau composant
- utiliser comme template du composant le `html` ci-dessous
- utiliser comme style du composant le `scss` ci-dessous
- déclarer une propriété dans le nouveau composant `List` pour stocker _en dur_ les données `json` ci-dessous
- utiliser dans la zone _'CONTENT GOES HERE'_ le composant créé lors de l'exercice #1 autant de fois que nécessaire pour afficher tous les objets dans la liste de données (avec `*ngFor`)
- passer les données du nouveau composant (parent) vers celui de l'exercice #1 (enfant) via un `Input`
- supprimer les données de l'exercice #1 dans le nouveau composant et utiliser celles ci-dessous

## Ressources

### Template

```HTML
<section>
  <!-- CONTENT GOES HERE -->
</section>
```

### Style

```SCSS
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  grid-auto-rows: 250px;
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
