# Firebase Setup Instructions

   ## 1. Enable Authentication

   1. Go to the [Firebase Console](https://console.firebase.google.com/).
   2. Select your project.
   3. In the left sidebar, click on "Authentication".
   4. Click on the "Sign-in method" tab.
   5. Enable "Email/Password" authentication:
      - Click on "Email/Password".
      - Toggle the switch to enable it.
      - Click "Save".

   ## 2. Set up Firestore Database

   1. In the left sidebar of the Firebase Console, click on "Firestore Database".
   2. Click "Create database" if you haven't already.
   3. Choose "Start in production mode" and select a location closest to your users.
   4. Click "Enable".

   ## 3. Configure Firestore Rules

   1. In the Firestore Database section, click on the "Rules" tab.
   2. Replace the existing rules with the following:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /expenses/{expenseId} {
         allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
         allow create: if request.auth != null;
       }
     }
   }
   ```

   3. Click "Publish" to apply the new rules.

   ## 4. Update Firebase Configuration

   1. In the Firebase Console, go to Project Settings (gear icon near "Project Overview").
   2. Scroll down to "Your apps" section and select your web app.
   3. Copy the Firebase configuration object.
   4. Update the `firebaseConfig` in your `src/firebase.ts` file with this configuration.

   After completing these steps, your Firebase project should be properly configured for your financial tracker application.