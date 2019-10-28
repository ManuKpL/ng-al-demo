# Créer un composant

## Avant l'exercice

- `git status`
- si status pas clean, commit les changements ou les supprimer
- `git fetch origin`
- `git checkout 1-creating-a-component`
- `git checkout -b <my-branch-name>`

## Requirements

- créer un composant dans le dossier `houses`
- utiliser le template et le style ci-dessous pour la mise en forme
- utiliser les données ci-dessous pour les liées dans le template aux endroit prévus (`img`, `h3`, `p`)
- ajouter le composant créé dans le module des maisons `HouseModule`
- ajouter le composant créé dans l'application à l'emplacement du template prévu dans le `HomeComponent`
- (bonus: associer le nom de la maison au texte alternatif de l'image)

## Ressources

### Template

```HTML
<div class="container">
  <img>
  <div class="content">
    <h3>NAME</h3>
    <p>Region</p>
  </div>
</div>
```

### Style

```SCSS
:host {
  display: grid;
}

.container {
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    .content {
      transform: unset;
    }
    img {
      transform: scale(1.02);
      filter: unset;
    }
  }

  .content, img {
    transition: all ease-in-out .3s;
  }

  .content {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 1rem;
    padding: 1rem;
    background-color: #22222285;
    transform: translateY(100%);
    h3, p {
      margin: 0;
    }
  }

  img {
    width: 100%;
    filter: grayscale(1);
  }
}
```

### Data

```JSON
{
  "id": 229,
  "name": "House Lannister of Casterly Rock",
  "region": "The Westerlands",
  "coatOfArms": "A gold lion, on a crimson field",
  "words": "Hear Me Roar!",
  "seat": "Casterly Rock",
  "imagePath": "https://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/1200px-House_Lannister.svg.png"
}
```
