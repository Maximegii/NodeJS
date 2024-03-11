# NodeJS
Java script est un language de scripting pour les navigateurs, NodeJS permet d'éxecuter du JS en dehors d'un navigateur

pour initialiser un projet node on tape la commande 
```sh
npm init
```

Pour installer une dépendance de développement on utilise la commande
 ```bash  
npm install <nom-de-la-dependance>
```

## Script avec JS
### Variables JS
let et cons permette de définir des variables 

par exemple const test = "hello world"
ou let test = "hello world" = désigne l'opérateur d'assignation 

On peut utiliser aussi var pour les variable globale

### Fonctions JS
````sh 
//La syntaxe de base 
function auCarre (x) {
    return x*x;
}

//La syntaxe fléchée 
const auCarre = (x) => {return x * x;
}
//Si la fonction ne contient qu'une seule instruction, on peut omettre les accolades et le return 

const auCarre = x => x * x;

()=>{}
````

### Modules
En JS, un module est un morceau de code réutilisable qui peut etre exporté d'un fichier et importé dans un autre fichier, permettant ainsi de partager des variables, des fonctions, des classes etc... 

Il existe deux syntaxes pour les imports/export en JS :

- La syntaxe commonJS (utilisée dans Node.js)
- La syntaxe ES6+ (utilisée dans les navigateurs), on parle du format ESM (ECMAScript Modules)