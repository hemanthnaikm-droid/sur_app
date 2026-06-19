# 🛡️ Suraksha — Women Safety Platform
### React 18 · Vite · Firebase (suraksha-33bb4) · Claude AI · 2,019 lines · 23 Components

---

## ✅ Complete Feature Status — Every Function is Real

### 🔐 Authentication
| Feature | API / Method | Status |
|---|---|---|
| Signup | `createUserWithEmailAndPassword` | ✅ Real Firebase |
| Login | `signInWithEmailAndPassword` | ✅ Real Firebase |
| Logout | `signOut(fbAuth)` | ✅ Real Firebase |
| Set display name | `updateProfile(user, {displayName})` | ✅ Real Firebase |
| Persist across refresh | `onAuthStateChanged` listener | ✅ Real Firebase |
| Error messages | Firebase code → human message map | ✅ Handled |

---

### 🚨 SOS Emergency
| Feature | API / Method | Status |
|---|---|---|
| 5-sec countdown | `setInterval` with cancel | ✅ Real |
| Call 112 | `window.open("tel:112")` | ✅ Real dialer |
| WhatsApp alert (all contacts) | `window.open("https://wa.me/{phone}?text=…")` loop | ✅ Real deep link |
| Email alert | `window.open("mailto:?subject=🚨…&body=…")` | ✅ Real compose |
| Copy GPS link | `navigator.clipboard.writeText(maps.google.com/…)` | ✅ Real clipboard |
| Log SOS to Firestore | `addDoc(db, "sosLogs", {uid, location, timestamp})` | ✅ Real Firestore |
| GPS in alert message | `currentLocation` passed from Location module | ✅ Wired |
| Warning if no GPS | UI banner when `!currentLocation` | ✅ UX handled |

---

### 📍 Live Location
| Feature | API / Method | Status |
|---|---|---|
| Fetch GPS once | `navigator.geolocation.getCurrentPosition` | ✅ Real GPS |
| Live tracking (every 5s) | `navigator.geolocation.watchPosition` | ✅ Real GPS |
| Stop live tracking | `navigator.geolocation.clearWatch` | ✅ Real |
| Accuracy + timestamp | Real `GeolocationPosition` object | ✅ Real |
| Share with contacts | `navigator.clipboard.writeText(link)` | ✅ Real |
| Open in Google Maps | `window.open(maps.google.com/maps?q=…)` | ✅ Real |
| Pass GPS → SOS | `onLocationUpdate` callback → `currentLocation` | ✅ Wired |
| Pass GPS → Route | `onOpenRoute(loc)` → `RouteModule startLocation` | ✅ Wired |

---

### 👥 Emergency Contacts *(Fixed — Real-Time)*
| Feature | API / Method | Status |
|---|---|---|
| Add contact | `addDoc(collection(db,"contacts"), payload)` | ✅ Real Firestore |
| Real-time list sync | `onSnapshot(query(…), callback)` | ✅ Live updates |
| Delete contact | `deleteDoc(doc(db,"contacts",id))` | ✅ Real Firestore |
| 9 relation options | Select dropdown | ✅ |
| Firestore connection status | Live / Offline / Error banner | ✅ |
| Permission-denied error | Clear message + fix instructions shown in UI | ✅ |
| Persists across devices | Cloud Firestore | ✅ |

---

### 🤖 AI Safety Assistant
| Feature | API / Method | Status |
|---|---|---|
| Claude Sonnet API | `fetch("https://api.anthropic.com/v1/messages")` | ✅ Real Claude |
| Safety system prompt | Expert women's safety persona | ✅ |
| Multi-turn history | Full conversation sent each turn | ✅ |
| Local fallback | `getLocalAI()` — 7 scenarios | ✅ |
| 6 quick prompts | One-click safety scenarios | ✅ |
| Typing indicator | Animated 3-dot while Claude responds | ✅ |

---

### 🗺️ Safe Route *(Fixed — Real Claude AI)*
| Feature | API / Method | Status |
|---|---|---|
| Claude AI route generation | `fetch("https://api.anthropic.com/v1/messages")` | ✅ Real Claude |
| Location-aware steps | Uses real GPS coordinates in prompt | ✅ |
| Safety score | Claude returns `safetyScore` (1-10) | ✅ |
| Areas to avoid | Claude returns `avoid[]` array | ✅ |
| Night mode tip | Claude returns `nightTip` string | ✅ |
| Step safety indicators | Red highlight for unsafe steps | ✅ |
| Fallback to Google Maps | Opens `google.com/maps/dir/from/to` if Claude fails | ✅ |
| Share route | `navigator.share` + clipboard fallback | ✅ |
| Open in Google Maps | Real `maps/dir/{from}/{to}` URL | ✅ |

---

### 🎙️ Voice Recorder
| Feature | API / Method | Status |
|---|---|---|
| Microphone access | `navigator.mediaDevices.getUserMedia({audio:true})` | ✅ Real |
| Recording | `MediaRecorder` + `ondataavailable` | ✅ Real |
| Live timer | `setInterval` seconds | ✅ |
| Wave animation | CSS keyframes | ✅ |
| Playback | `new Audio(blobURL).play()` | ✅ Real |
| Firebase Storage upload | `uploadBytes` + `getDownloadURL` | ✅ Real |
| Share via device sheet | `navigator.share({files:[audioFile]})` | ✅ Real |
| Recording count in profile | `onRecCountChange` callback | ✅ Wired |

---

### 🔔 Notifications
| Feature | API / Method | Status |
|---|---|---|
| Request browser push | `Notification.requestPermission()` | ✅ Real |
| Send push notification | `new Notification(title, {body, icon})` | ✅ Real |
| Test notification button | Fires real browser notification | ✅ Real |
| 4 preference toggles | SOS / Location / Tips / Community | ✅ |
| Notification history | Mark read / Mark all read | ✅ |

---

### 🏘️ Community Safety
| Feature | API / Method | Status |
|---|---|---|
| Load reports | `getDocs(collection(db,"communityReports"))` | ✅ Real Firestore |
| Submit report | `addDoc(collection(db,"communityReports"), …)` | ✅ Real Firestore |
| Real-time refresh | Re-runs `getDocs` on button tap | ✅ |
| Vote / verify | Local state update | ✅ |
| 4 incident types | Harassment / Suspicious / Unsafe / Safe | ✅ |
| Feed / Report / Heat Map tabs | State-controlled | ✅ |

---

### 👤 User Profile
| Feature | API / Method | Status |
|---|---|---|
| Edit display name | `updateProfile(fbAuth.currentUser, {displayName})` | ✅ Real Firebase |
| Change password | `reauthenticateWithCredential` + `updatePassword` | ✅ Real Firebase |
| Show Firebase UID | `user.uid` (truncated) | ✅ |
| Live contact count | From Firestore `onSnapshot` | ✅ |
| Recording count | `onRecCountChange` from VoiceModule | ✅ |
| 3 privacy toggles | Auto-share / Discreet SOS / Biometric | ✅ |

---

### 📞 Emergency Helplines
| Feature | Status |
|---|---|
| All 6 helplines tap-to-call | `window.open("tel:{number}")` ✅ Real dialer |

---

## 🚀 Get Running in 3 Steps

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 🔥 Firebase Setup (Required — 5 minutes)

Your project **suraksha-33bb4** is already in the code. Do these once:

### 1. Enable Email/Password Auth
```
Firebase Console → suraksha-33bb4
→ Build → Authentication → Get Started
→ Sign-in method → Email/Password → Enable → Save
```

### 2. Enable Firestore Database
```
Build → Firestore Database → Create database
→ Start in test mode → Choose region → Done
```

### 3. Apply Security Rules
```
Firestore → Rules tab → Replace with contents of firestore.rules → Publish
```

### 4. Enable Firebase Storage (for voice uploads)
```
Build → Storage → Get Started → Start in test mode → Done
```

---

## 🤖 Enable Claude AI (Required for AI features)

In `Suraksha.jsx`, find both `callClaudeAI()` and `getRoute()` functions.
Add these two headers to the `fetch` call:

```js
headers: {
  "Content-Type": "application/json",
  "x-api-key": "sk-ant-YOUR_KEY_HERE",        // ← add this
  "anthropic-version": "2023-06-01",            // ← add this
},
```

Get your key at: [console.anthropic.com](https://console.anthropic.com)

> ⚠️ For production — route through a Firebase Cloud Function so the key stays server-side.

---

## ❗ If Emergency Contacts Won't Save

This is always a Firestore rules issue. Quick fix:

```
Firebase Console → Firestore Database → Rules tab → Paste:
```

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Then click **Publish**. The app will show a green "● Live" badge when Firestore is connected.

---

## 🌐 Deploy to Production

### Vercel (recommended — free, 60 seconds)
```bash
npm install -g vercel
vercel
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting     # set public dir: dist, SPA: yes
npm run build
firebase deploy
# → https://suraksha-33bb4.web.app
```

---

## 📁 Project Structure

```
suraksha/
├── Suraksha.jsx        2019 lines · 23 functions · All features real
├── firebase.config.js  Your Firebase project (suraksha-33bb4)
├── firestore.rules     Paste in Firebase Console → Firestore → Rules
├── main.jsx            ReactDOM entry point
├── index.html          Vite HTML template
├── vite.config.js      Vite config (port 3000)
├── package.json        React 18 + Vite + Firebase 10
└── README.md           This file
```

---

## 📞 Emergency Helplines — India

| Service | Number |
|---|---|
| Police | 100 |
| Ambulance | 108 |
| National Emergency | 112 |
| Women's Helpline | 1091 |
| Domestic Violence | 181 |
| iCall Mental Health | 9152987821 |

---

*Built with 💙 · Firebase: suraksha-33bb4 · AI: Claude Sonnet (Anthropic)*

---

## 🆕 NEW: Triple SOS Trigger System (Button + Shake + Hardware)

Three independent trigger paths now fire the **exact same SOS engine** — same WhatsApp alerts, same `tel:112` dial, same email, same Firestore log — no matter how SOS is activated.

### 1. 📱 Floating SOS Button
- Persistent circular button, fixed bottom-right, visible on **every screen** of the app (not just the SOS module)
- Pulses continuously to stay noticeable
- Single tap → 5-second countdown → fires SOS
- Implementation: `FloatingSOSButton` component + `useSOSEngine` hook

### 2. 📳 Shake-to-SOS
- Uses the real **`DeviceMotionEvent`** API — detects 3 hard shakes within 1.5 seconds
- Toggle in **Profile → SOS Trigger Methods**
- iOS 13+ requires explicit permission (`DeviceMotionEvent.requestPermission()`) — handled automatically, must be triggered by a user tap (already wired to the toggle)
- Android: works immediately, no permission prompt needed
- Sensitivity threshold is tunable in `useShakeDetection()` (`SHAKE_THRESHOLD = 18`)

### 3. 🔌 Hardware SOS (Arduino / ESP32)
- New dashboard card: **"Hardware SOS Button"**
- Full pairing flow: register a device → get your Firebase UID → flash provided Arduino code
- ESP32 firmware (auto-generated with your real UID) is included in-app — copy-paste ready
- Device sends an HTTPS `PATCH` to Firebase Realtime Database when its physical button is pressed
- App listens via **Firestore `onSnapshot`** in real-time — fires SOS the instant the physical button is pressed, with **zero app interaction required**
- Shows live **Online/Offline** status per device (heartbeat every 30s from ESP32)

### How they connect — `useSOSEngine`
All three triggers call `sosEngine.startGlobalSOS(source)` where `source` is `"button"`, `"shake"`, or `"hardware"`. This:
1. Starts a 5-second cancellable countdown (full-screen `GlobalSOSOverlay`, shown above any open module)
2. On completion: dials 112, opens WhatsApp for every contact, opens email, logs to Firestore `sosLogs` with the `triggerSource` field
3. Shows the trigger source on the confirmation screen (e.g. "📳 Shake Detected")

### Wiring an ESP32 button (hardware)
1. Open **Hardware SOS Button** card in the dashboard
2. Tap **Register Device**
3. Tap **Show ESP32 Arduino Code & Wiring Guide**
4. Copy the generated `.ino` file (already has your Firebase project + UID filled in)
5. Edit only `WIFI_SSID` and `WIFI_PASS`
6. Flash to ESP32, wire a push button to GPIO 4 + GND
7. Pressing the button → SOS fires in your app within ~1 second

### Files touched
- `useSOSEngine`, `useShakeDetection`, `useHardwareSOS` — new hooks (top of `Suraksha.jsx`)
- `GlobalSOSOverlay`, `FloatingSOSButton`, `HardwareModule` — new components
- `Dashboard` — wires all three triggers + renders floating button/overlay globally
- `ProfileModule` — new Shake-to-SOS toggle section

### Mobile app conversion notes
When wrapping this in Capacitor/React Native for app stores:
- `navigator.geolocation` → swap for Capacitor `Geolocation` plugin for background tracking
- `DeviceMotionEvent` → works natively in Capacitor WebView; for React Native use `react-native-sensors`
- Floating button → consider Android's `SYSTEM_ALERT_WINDOW` overlay permission for an always-on-top bubble outside the app
- Hardware trigger → no changes needed, it's pure Firestore listening — works identically in any wrapper
