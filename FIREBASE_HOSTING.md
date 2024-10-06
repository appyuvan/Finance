# Deploying to Firebase Hosting

   Follow these steps to deploy your Financial Tracker app to Firebase Hosting:

   1. Install the Firebase CLI globally (if not already installed):
      ```
      npm install -g firebase-tools
      ```

   2. Login to Firebase:
      ```
      firebase login
      ```

   3. Initialize Firebase in your project directory:
      ```
      firebase init
      ```
      - Select "Hosting: Configure files for Firebase Hosting"
      - Choose "Use an existing project" and select your Firebase project
      - Use "build" as your public directory
      - Configure as a single-page app: Yes
      - Set up automatic builds and deploys with GitHub: No (unless you want to set this up)

   4. Deploy your application:
      ```
      npm run deploy
      ```

   After deployment, Firebase will provide you with a hosting URL where your app is live.

   Note: Make sure your Firebase configuration in `src/firebase.ts` is up to date and contains the correct values for your Firebase project.