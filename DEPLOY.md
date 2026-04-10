# Deploy to Firebase Hosting (Next.js + Web Frameworks)

Deploy steps:

1. Install Firebase CLI globally:

   ```bash
   npm install -g firebase-tools
   ```

2. Log in:

   ```bash
   firebase login
   ```

3. Enable Web Frameworks (experimental):

   ```bash
   firebase experiments:enable webframeworks
   ```

4. Initialize Hosting and link a Firebase project. When prompted, choose **Hosting** and the **Next.js** framework. If you already have `firebase.json`, you can accept merges or keep this repo’s `hosting.source` / `frameworksBackend` settings.

   ```bash
   firebase init hosting
   ```

5. Deploy:

   ```bash
   firebase deploy --only hosting
   ```

   Equivalent:

   ```bash
   npm run deploy
   ```

**Project config:** `firebase.json` uses `hosting.source: "."` and optional `frameworksBackend.region` for SSR / server features. Trailing slashes are enabled in `next.config.mjs` via `trailingSlash: true`. Billing on the Firebase project may be required when Cloud Functions are created (e.g. Image Optimization or dynamic routes).
