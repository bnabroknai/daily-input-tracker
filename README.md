# daily-input-tracker
A daily mess and nutritional intake tool to assist in keeping accurate Daily Values PWA - Deployment & Setup Guide
What You Built
A production-grade PWA (Progressive Web App) for elderly medication and health
tracking. It’s:
Installable on iPhone to home screen
Offline-first - works without internet
Persistent - saves everything locally
Accessible - large text, voice reading, haptic feedback
Resilient - automatic backup/export, medication reminders
Deployment Options
Option 1: GitHub Pages (Easiest, Free)
1. Create a GitHub account (if you don’t have one)
2. Create a new repository called daily-values
3. Upload these 3 files to the repository:
index.html
manifest.json
sw.js
4. Go to Settings → Pages → set source to “main branch”
5. Your app will be at: https://yourusername.github.io/daily-values/
Share this link with your grandma.
Option 2: Netlify (Also Free, Very Easy)
1. Go to netlify.com
2. 3. 4. Drag & drop your 3 files into the browser
Your app gets a live URL instantly
Netlify auto-deploys when you update files
Option 3: Your Own Server
If you have web hosting:
1. Upload the 3 files to your server’s root directory
2. Ensure HTTPS is enabled (required for PWA)
3. Access via your domain
How Your Grandma Installs It
On iPhone (Any iOS 14+):
1. Open the app URL in Safari
2. Tap Share button (bottom center)
3. Tap “Add to Home Screen”
4. Name it “Daily Values”
5. Tap Add
6. Icon appears on home screen
7. Tap to open
That’s it. Now she has a native-feeling app icon.
Key Features Explained
Today’s Summary (Top Card)
Meds taken count
Sodium tracker
Blood pressure & heart rate
All at a glance
Medications
Add to Today: Quick-add individual meds
Edit Library: Set up recurring meds that auto-load daily
Lisinopril, Metformin, Aspirin come pre-loaded (edit these!)
Reminders: When medication time arrives, fullscreen prompt appears
Checkboxes: Mark as taken with big tap targets
Medication Library Best Practice
Set this up ONCE with all her regular medications and times. Then every new day, they
auto-load automatically.
Example:
Lisinopril (10mg) at 8:00 AM
Metformin (500mg) at 8:00 AM
Aspirin (81mg) at 8:00 PM
Sodium Tracking
Pre-loaded common foods with estimated sodium
Custom add for any food
Shows if she’s over 1,500mg/day goal
“What If” simulator for decision support
Blood Pressure & Heart Rate
One-tap save
Shows in today’s summary
7-day history view
Breathing Tool
4-count box breathing
Calming animation
Good for anxiety or feeling off
Voice Reading
Tap “Read Today’s Summary” button
App reads stats aloud
Great accessibility feature
Emergency Contacts
Store doctor, daughter, etc.
One-tap visible if needed
Important info in one place
Backup & Export
Export: Creates downloadable .json file (share with doctor)
Import: Restore from previous backup if needed
Setup Checklist for Your Grandma
Before you hand it over:
1. Edit Medication Library
Remove the placeholder meds
Add her actual medications with exact names, dosages, times
Go to “Edit Medication Library” button
2. Add Emergency Contacts
Doctor name + phone
Daughter/son name + phone
Preferred hospital or clinic
3. Show Her How To:
Check off medications as taken
Log blood pressure/heart rate
Use the breathing tool
Use voice reading
Export data for doctor
4. Test a Medication Reminder
Set one med time to 5 minutes from now
Let her see the big fullscreen prompt
Show her the YES button and haptic feedback
Technical Details (For You)
Data Storage
All data stored in browser’s localStorage:
dailyValues - daily tracking data
medicationLibrary - recurring medications
emergencyContacts - emergency info
Each day automatically creates a new entry. Data persists across:
App closing/opening
Phone restart
Browser refresh
Data is NOT sent to any server (fully private).
Offline Support
Service worker caches the entire app. Works perfectly offline:
Medications visible
Data saves to localStorage
Reminders still trigger (browser-based)
Notifications work on iOS 16.4+
Reminders
Medication reminder logic:
1. Check each medication’s scheduled time
2. When time arrives, show fullscreen modal
3. Big YES button to mark as taken
4. Snooze option (5 min)
5. Haptic feedback on success
On iOS, notifications require:
App installed to home screen
User granted notification permission
iOS 16.4+ for best support
Security
No passwords needed
No account login
Data stays on her phone
No cloud sync (privacy first, but can add later)
Future Enhancements
Once this is working well, you could add:
1. Cloud Backup (Firebase/Supabase)
Auto-sync to cloud
Access from multiple devices
Doctor can view read-only dashboard
2. Apple Health Integration
Import heart rate from Apple Watch
Import steps
Export to Apple Health
3. Real watchOS App
Medication quick-tap on watch
Complication showing next med time
Requires Xcode + Swift (bigger project)
4. Caregiver Dashboard
Family member can see compliance
Receive alerts if meds missed
Requires backend server
5. AI Food Lookup
Barcode scanner for sodium info
Photo recognition of meals
Requires Claude API integration
6. Doctor Integration
Shareable link to view data
Generate PDF reports
Appointment reminders
Troubleshooting
“App won’t install to home screen”
Make sure you’re using Safari (not Chrome)
Make sure it’s HTTPS (required for PWA)
Try on iOS 14+
“Reminders not showing”
Check notification permissions (Settings → Daily Values)
Make sure app is installed to home screen
Check time format is correct (HH:MM, like 08:00)
“Data disappeared”
Check if you cleared Safari cache/history
Try importing from backup .json file
Data is stored per browser/app installation
“Breathing circle not animating”
Disable any Safari reduce-motion settings
Try in a different browser
Some older devices may have animation issues
For Financial Sustainability
If you want to monetize this:
1. Freemium version - basic tracking free, premium has:
Cloud sync
Doctor sharing
Apple Health integration
Caregiver dashboard
2. Subscription model - $2-5/month for premium
3. White-label for clinics - customize for specific practices
4. Integrate Claude API - add AI food recognition/recommendations
To implement these, you’d need:
Backend server (Node.js, Python, etc.)
Database (Firebase, PostgreSQL, etc.)
Payment processor (Stripe, etc.)
Claude API for AI features
Start with the PWA working well for your grandma. Once it’s proven, THEN build
monetization.
Questions?
Key things to remember:
The app is self-contained in those 3 files
It works offline
All data stays on her phone
Responsive design works on any iOS device
No backend needed for basic version
Good luck! This is genuinely solid work for elderly care.

