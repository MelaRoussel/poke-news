# Poke News #
Application de lecture de News sur Pokemon via [L'API NewsApi](https://newsapi.org/). 
J'ai choisi cette api car le sujet était une api de news et qu'elle me permettait de rechercher sur le keyword 
"pokemon". Mon idée de base était de partir sur PokeApi mais je trouvais que faire une appli de news sur pokemon était 
un bon compromis 😄

### Pour Installer le projet: 
- Lancer `yarn` ou `npm install`
- Run `yarn start`

### Se connecter sur l'appli
Il faut utiliser les combinaison suivante 
- Name: Mela 
- Mot de passe : PokeNews

ou

- Name: Dernier Cri
- Mot de passe: SpecialUser

### Dev
J'ai fait le dev sur windows n'ayant pas de mac a dispo.

J'ai commencé avec le serveur car c'est là où j'étais le moins à l'aise, voire pas du tout a l'aise, car je n'ai pas
de compétences suffisante côté back-end pour faire quelque chose de propre. 
Mais heureusement que NodeJS reste du JS car ça m'a permis de faire le mini algo pour vérifier le bon Nom/Mot de passe
et renvoyer une réponse 401 si ce n'est pas le cas et 200 si c'est bon avec le name dans la response.


Côté front le projet est monté avec expo car j'en avais déjà entendu parler en bien via certains collègues.

Après quelque temps de mise en place j'ai choisi la version expo with splashscreen example car j'en avais crée un sur
illustrator.
J'ai utilisé react-navigation afin de gérer la navigation de l'app. 

Au début je voulais utiliser le material-ui-kit qui était fourni mais comme j'avais une idée assez précise du design 
que je voulais, ça ne collait pas forcément, j'ai donc par la suite supprimer les dépendances et le code qui allait
avec. Et j'ai mis le style que je voulais à mes composants.


### Les 4 écrans, choses à améliorer, problèmes rencontrés
- **Page d'accueil** : Simple Welcome screen avec un bouton pour aller vers le login. Il serait bien d'avoir la 
    possibilité de créer un compte (mais pour ça il faut le back qui va avec 😜 )
  
  
- **Login**: On retrouve le Logo pikachu du SplashScreen, un champ pour le nom, un champ mot de passe
    et le bouton pour se connecter. Comme je l'ai dit je n'avais pas de mac, ni d'iphone pendant mon dev 😅
    ce qui fait que j'ai dû dev sur android et après avoir buildé un artifact ios et l'avoir mis dans un simulateur je me 
    suis rendu compte que le clavier cache les inputs, j'ai donc utilisé `react-native-keyboard-aware-scroll-view` 
    pour éviter le souci. 
  
    J'ai fait une mini gestion d'erreur suivant ce que renvois le serveur. Il serait bien de faire
    une vraie gestion des erreurs avec vérification des champs de texte, et aussi crypter le mot de passe. Et rajouter
    la persistance de l'utilisateur pour qu'il n'ait pas à se reconnecter à chaque ouverture de l'app.
  

- **Page des News** : Quand on arrive sur cette page, c'est en fait le composant Home qui choisit son rendu suivant s'il a
    un utilisateur ou pas car je ne voulais pas que l'utilisateur puisse revenir sur la page de login alors qu'il est 
    déjà passé par là.
  
    J'affiche la liste des articles récupérés de l'API (100 articles par page) via la FlatList de `react-native`,
    il manque une pagination ou un lazyloading qui afficherait les autres articles j'ai vu que l'API permettais
    de passer le numéro de la page en paramètres.
  
    On peut cliquer n'importe ou sur l'article ou sur le bouton "Read more" (J'ai mis ce bouton car j'avais peur que
    l'utilisateur ne comprenne pas qu'on puisse cliquer dessus).
    
    Il manque aussi une gestion d'erreur si l'api ne répond pas dans l'état actuel on affichera juste une page blanche...
  

- **Page Article** : Affichage de la data de l'article, j'ai formaté la date grâce à `moment` pour afficher en lettres
    la date. Et pour le lien vers l'article j'ai hésité a utiliser une `webview` avec le site de l'article mais
    je me suis ravisée en utilisant `Linking` de `react-native` car je me suis dit que l'utilisateur comprendrais pas
    pourquoi il doit cliquer deux fois sur un bouton pour voir l'article alors qu'il est toujours sur l'app. 
    Je ne voulais pas qu'il y ait de confusion pour l'utilisateur. 
  
    Pour la page de l'article, on pourrait rajouter un formatage sur le contenu afin d'enlever le [+nb de caractères]
    pour remplacer par des '...' ou alors mettre le lien vers l'article à cet endroit-là! 
    
    J'ai mis un bouton au lieu d'un lien histoire de garder une cohérence côté design. Un designer aurait sûrement de meilleures idées
    que moi mais j'en avais pas sous la main 😆

### Problematique liée a l'api
Vous le savez surement APINews dispose d'une limite de 100 requêtes pour 24h si je ne me trompe pas, j'ai donc fait
mon dev avec un mock que j'ai retiré par la suite.  

### Ou sont les TU ?
J'avais peur de ne pas avoir le temps et j'ai donc pris la difficile décision de partir sans TU car c'est une petite
appli et heureusement car je peux toujours les rajouter par la suite! Si j'avais mis des tests en place j'aurais
utilisé `Jest` car c'est ce que j'utilise au quotidien.  

### Le mot de la fin
J'espère que cette petite appli qui n'est certes pas parfaite vous plaira autant qu'elle me plaît à moi! 
Dans tous les cas je me suis bien amusée à la faire et même s'il manque des choses je suis plutôt contente du résultat!

