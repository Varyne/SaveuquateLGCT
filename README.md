# SaveuquateLGCT
TP Saveuquate API Rest

## Doc
Pour lancer la génération de la documentation des routes:  
`npm run doc`  
Lancer `index.html` du dossier `docs` dans votre navigateur favori !

## API
### Available data
 - nom de jeune fille du chaton 
 - Sa couleur 
 - Sa qualité n°1 (obligatoire) 
 - Sa qualité n°2 (facultatif ou en cours d’acquisition) 
 - Son principal défaut 
 - Sa marque phare de croquettes 
 - La disponibilité de l’article.
 
### Available resources
 - la consultation des chatons à adopter, 
 - des chatons déjà adoptés
 - la modification de la disponibilité du chaton à l’adoption (notez qu’on ne peut pas «désadopter»un chaton une fois celui-ci refourgué à une famille d’accueil)
 - si un autre talent a été développé depuis la création de la fiche initiale, il faut pouvoir le rajouter,
 
### Available routes
- GET /api/1.0/kittens
- GET /api/1.0/kittens/adopt
- GET /api/1.0/kittens/adopted
- POST /api/1.0/kittens
- PUT /api/1.0/kittens/:id/adopted
- PUT /api/1.0/kittens/:id/addtalent

### Response format
 La réponse se fera en json. Le xml sera verbalisé
 
## Client spec
 Parce qu’on est fiers au sein du collectif « Un Chat Suffit », on veut que ces chats adoptés apparaissent en haut de la liste des chats à adopter, afin de susciter le bon exemple.