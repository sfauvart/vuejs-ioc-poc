# api-multi-impl

WIP

## Description

- Avoir de l'inversion de contrôle (IoC) via un container disponible dans toute l'App

Même si il s'agit ici d'une app utilisant VueJS, je souhaites que cette partie ne soit pas spécifique uniquement à VueJS.

Via un simple
```
import container from 'ioc-container'
```
il est possible d'avoir accès à n'importe quels services de l'app.

**-> il reste du travail car normalement chaque service doit pouvoir s'appeler mutuellement.**

- Choisir l'implémentation d'un service

Généralement fait via le pattern strategy, ici il est réalisé grâce aux alias via webpack.
Dans le fichier `vue.config.js` on retrouve un exemple concret avec `api-impl`.
Via un fichier `.env.xxxx` il est possible de choisir entre une implémentation REST ou bouchonné Mock.
L'avantage de cette technique est que le choix est fait au build, donc le code mock n'est pas dans la version minifié pour la production.
Inconvénient, il faut relancer `npm run serve` si on change la valeur dans `.env`

## TODO

- plus de service (logger, ???)
- Exemple pour du test
- ???

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
ou
```
npm run serve-prod
```


### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
