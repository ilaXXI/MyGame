# Drapeaux sans hésiter

Un entraînement adaptatif aux drapeaux du monde, jouable directement dans un navigateur.

Le jeu mémorise les résultats dans `localStorage` et ajuste la sélection :

- une erreur augmente le poids du drapeau, pour le faire revenir plus souvent ;
- les bonnes réponses consécutives font progresser sa maîtrise ;
- après quatre bonnes réponses consécutives et une précision suffisante, le drapeau sort de la sélection prioritaire ;
- la progression, le taux de réussite et les drapeaux à revoir restent visibles entre les sessions.

## Lancer le jeu

Ouvrir `index.html` dans un navigateur moderne. Aucun serveur, aucune installation et aucune dépendance ne sont nécessaires.

## Structure

- `index.html` : structure de l’interface ;
- `style.css` : thème visuel responsive ;
- `script.js` : catalogue des drapeaux, sélection pondérée, statistiques et sauvegarde.
