/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         MAGIZH ILLAM — FIREBASE CONFIGURATION            ║
 * ║                                                          ║
 * ║  THIS IS THE ONLY FILE YOU NEED TO EDIT.                 ║
 * ║                                                          ║
 * ║  How to get your config:                                 ║
 * ║  1. Go to console.firebase.google.com                    ║
 * ║  2. Open your project → ⚙️ Project Settings              ║
 * ║  3. Scroll to "Your apps" → click your web app           ║
 * ║  4. Copy each value from the firebaseConfig block below  ║
 * ║  5. Save this file and push to GitHub — that's it!       ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAWfyuyz0ZKjMZTvnW-Bq5pERytfAeaYfo",
  authDomain:        "magizh-illam.firebaseapp.com",
  databaseURL:       "https://magizh-illam-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "magizh-illam",
  storageBucket:     "magizh-illam.firebasestorage.app",
  messagingSenderId: "164681565069",
  appId:             "1:164681565069:web:4fe82e514d12b0601a73c4"
};

/**
 * ── APP PASSWORDS ──────────────────────────────────────────
 * member → shared with all family members
 * admin  → keep private, full edit access
 */
const APP_PASSWORDS = {
  member: "Vizha@2026",
  admin:  "Magizh@2022"
};

/**
 * ── DATABASE PATH ──────────────────────────────────────────
 * All data is stored under this key in your Firebase DB.
 * Change it if you want to run multiple events in the same
 * Firebase project. e.g. "events/wedding2026"
 */
const DB_ROOT = "magizh-illam";
