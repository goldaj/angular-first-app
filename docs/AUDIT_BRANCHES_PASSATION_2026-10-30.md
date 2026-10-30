# Passation inter-agents : audit GitHub du 30/10/2026

**Objet :** Archive pédagogique Angular 8 ; composants, services, directives et modules. Cette passe consiste en une inspection statique des références Git, PR et documentation GitHub. Aucune commande du projet n'a été exécutée ; un SHA ne prouve pas un test vert. Suivre `AGENTS.md` et `docs/CHATGPT_PROJECT_HISTORY.md` avant modification.

## État des branches
Branche de référence : `master`. 1 branche(s) recensée(s) :
- `master` : `87825ab68f0d6c1bad1d9bb3bebb040d8353cc59` (référence à conserver)

## Pull requests
Aucune pull request enregistrée.

## Analyse critique et risques
Le dépôt est une archive Angular CLI 8.3.12 : ne pas présenter le framework comme maintenu. Vérifier compatibilité Node et npm lockfile, dépendances obsolètes, chemins des composants et tests e2e historiques avant modernisation. Aucun upgrade automatique de dépendances.

## Actions concrètes recommandées au prochain agent
1. Lire docs/ANGULAR_CLI_ORIGINAL.md et docs/CHATGPT_PROJECT_HISTORY.md.
2. Reproduire le build avec une version de Node explicitement compatible dans un environnement isolé.
3. Distinguer lacunes de sécurité des dépendances archivées et changements réellement nécessaires ; concevoir une migration séparée sans altérer le dépôt historique.

## Règles de consolidation
Ne pas déduire qu'une branche est supprimable de son nom, ancienneté ou PR fermée. Avant fusion/nettoyage comparer les SHA et les changements effectifs, identifier les références externes et vérifier les CI. Ne toucher ni aux secrets, ni aux données privées, ni à la production. **Aucune fusion, suppression ou validation de tests effectuée pendant cette passe ; seul ce document est ajouté.**

## Sources
`README.md` (lecture GitHub ; en-tête : # Première application Angular), `AGENTS.md`, référence GitHub `master`, API GitHub des branches et PR, consultées le 30/10/2026. Ce document ne prétend pas reproduire l'historique intégral des conversations.
