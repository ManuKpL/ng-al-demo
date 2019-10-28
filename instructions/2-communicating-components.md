# Communication de composants

## Avant l'exercice

- `git status`
- si status pas clean, commit les changements ou les supprimer
- `git fetch origin`
- `git checkout 2-communicating-components`
- `git checkout -b <my-branch-name>`

## Requirements

- créer un composant de liste dans le dossier `houses`
- utiliser le template et le style ci-dessous pour la mise en forme
- supprimer les données de l'exercice #1 dans le nouveau composant et utiliser celles ci-dessous
- afficher dans le template le composant créé lors de l'exercice #1 autant de fois que nécessaire pour afficher tous les objets dans la liste de données (sans dupliquer le code)
- passer les données du nouveau composant (parent) vers celui de l'exercice #1 (enfant)

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
