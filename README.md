# 🎾 Tennis Statistics API

Test technique Backend réalisé avec NestJS.

## 🚀 Description

Cette API permet de manipuler des statistiques de joueurs de tennis à partir du fichier JSON fourni dans l'énoncé du test.

L'application a été développée en suivant les bonnes pratiques REST et inclut :

* Architecture modulaire NestJS
* Validation des requêtes
* Gestion des exceptions
* Documentation Swagger
* Déploiement cloud sur Render

## 🛠️ Stack technique

* Node.js
* NestJS
* TypeScript
* Swagger (OpenAPI)
* class-validator
* class-transformer
* Render

## 🌐 Liens

### Application déployée

https://tennis-api-ns20.onrender.com

### Documentation Swagger

https://tennis-api-ns20.onrender.com/swagger

### Repository GitHub

https://github.com/VOTRE_USERNAME/tennis-api

## 📌 Endpoints

### Joueurs

#### Récupérer tous les joueurs

```http
GET /api/v1/players
```

Retourne la liste des joueurs triée du meilleur au moins bon selon leur classement.

#### Récupérer un joueur par ID

```http
GET /api/v1/players/{id}
```

Exemple :

```http
GET /api/v1/players/52
```

#### Ajouter un joueur

```http
POST /api/v1/players
```

## 📊 Statistiques

### Récupérer les statistiques globales

```http
GET /api/v1/stats
```

Retourne :

* Le pays ayant le meilleur ratio de victoires
* L'IMC moyen de tous les joueurs
* La médiane des tailles des joueurs

## ▶️ Installation locale

Installer les dépendances :

```bash
npm install
```

Lancer l'application :

```bash
npm run start:dev
```

Swagger sera disponible à l'adresse :

```txt
http://localhost:3000/swagger
```

## 🧪 Tests

Lancer les tests unitaires :

```bash
npm run test
```

## ⚠️ Persistance des données

Les données proviennent du fichier JSON fourni dans le cadre du test technique.

L'ajout d'un joueur est conservé uniquement en mémoire pendant l'exécution de l'application et n'est pas persisté après le redémarrage du serveur.

## 👨‍💻 Auteur

Ayman Jawadi
