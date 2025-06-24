# 🏡 TP React – “Locations de rêve” façon Airbnb

## 🎯 Objectifs pédagogiques

* Créer un composant réutilisable avec **props**,
* Afficher dynamiquement une **liste de cartes** à partir d’un tableau d’objets,
* Utiliser un peu de **CSS moderne** (flex, ombres, bordures arrondies),
* Gérer les fichiers d’un petit projet React.

---

## 📸 Résultat attendu

Une **grille d’annonces de logements** façon Airbnb, avec :

* Une **image** (liée à chaque hébergement),
* Un **titre** (ex. : “Loft cosy à Paris”),
* Un **lieu** et un **prix par nuit**,
* Une **mise en page responsive et soignée**.

![image](MaquetteRBnB.png)

---

## 🧰 Technologies

* React avec Vite
* TypeScript (optionnel)
* CSS ou Tailwind (au choix, ici on part sur du CSS de base)

---

## 📝 Consignes

### 1. Crée la structure du projet

```bash
pnpm create vite my-airbnb-clone --template react
cd my-airbnb-clone
pnpm install
pnpm run dev
```

### 2. Arborescence à respecter

```
src/
├── components/
│   └── RentalCard.tsx
├── data/
│   └── rentals.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

### 3. Les données (dans `rentals.ts`)

```ts
export const rentals = [
  {
    id: 1,
    title: "Loft lumineux à Paris",
    location: "Paris, France",
    price: 120,
    image: "https://source.unsplash.com/400x300/?apartment,paris"
  },
  {
    id: 2,
    title: "Cabane dans les bois",
    location: "Annecy, France",
    price: 90,
    image: "https://source.unsplash.com/400x300/?cabin,forest"
  },
  {
    id: 3,
    title: "Villa avec piscine",
    location: "Nice, France",
    price: 250,
    image: "https://source.unsplash.com/400x300/?villa,pool"
  }
]
```






 