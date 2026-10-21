# Le Chronoscope

L'histoire de France de Clovis à 1789, en jeu. Site installable (PWA) : récits, dialogues, fiches, quiz, frises, flashcards, généalogies, arène entre amis avec défis et notifications.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html`, `app.js` | Le jeu |
| `shim.js` | Le pont avec Supabase : comptes, sauvegarde, arène, notifications |
| `config.js` | Adresse du projet Supabase et clés **publiques** |
| `sw.js`, `manifest.webmanifest`, `icons/` | Installation sur l'écran d'accueil, hors ligne, notifications |
| `supabase/schema.sql` | Tables et règles d'accès de la base |
| `supabase/functions/notify-duel/` | Fonction qui envoie la notification d'un défi personnel |

## Mise en route (une seule fois)

1. **Base de données** : Supabase, SQL Editor, New query, coller `supabase/schema.sql`, Run.
2. **Connexion par code** : Authentication, Emails (Templates), « Magic Link » : remplacer le contenu par un message contenant `{{ .Token }}` (le code à 6 chiffres).
3. **Adresse du site** : Authentication, URL Configuration, Site URL = adresse GitHub Pages du site.
4. **Fonction de notification** : Edge Functions, Deploy a new function, Via editor, nom `notify-duel`, coller `supabase/functions/notify-duel/index.ts`. Dans les réglages de la fonction, désactiver « Verify JWT ».
5. **Secrets** : Edge Functions, Secrets : ajouter `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`, `WEBHOOK_SECRET` (valeurs fournies à part, jamais dans ce dépôt).
6. **Déclencheur** : Database, Webhooks, Create : table `docs`, événement Insert, type Supabase Edge Function `notify-duel`, en-tête HTTP `x-webhook-secret` = la valeur de `WEBHOOK_SECRET`.
7. **Publication** : GitHub, Settings, Pages, Deploy from branch `main`, dossier `/ (root)`.

## Sécurité

- `config.js` ne contient que des valeurs publiques (adresse du projet, clé `anon`, clé VAPID publique).
- La clé `service_role` et la clé VAPID privée ne vont **jamais** dans ce dépôt.
- Les règles de `schema.sql` : chacun lit le classement et les défis, n'écrit que ses propres documents, et sa progression reste privée.
