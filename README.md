# step-by-step

First Steps helps adults learn the computer at their own pace. The words are plain. The type is large. Each screen asks for one thing.

Michael started it because he is a beginner too.

No account. No paid API key. Progress stays in the browser on this device.

## What you can do

- **Computer basics.** The pointer, typing, files and folders, the browser, email, scams, and passwords.
- **Asking an AI helper.** What a helper is, how to ask for one clear thing, how to add details, how to check an answer, what to keep private, and how to break a big job into small asks.
- **Make a small webpage.** An in-browser practice page for HTML, CSS, and JavaScript. Guided projects: a page about you, a button that counts, and a tiny game, plus color and a spelling fix.
- **Make Your Page Shine.** Six more lessons: a picture with alt text, a link that opens in a new tab, page colors, font and text size, a layout that fits a phone, and a recap. Finishing that track earns the Shining page badge.
- **Each lesson** has a short explanation, a practice, and a 3-question quiz with friendly feedback. Finishing adds a checkmark.
- **Read aloud** on every lesson screen, using the browser’s Web Speech API. No key required.
- **I’m stuck** opens a hint for the screen you are on. On a practice, you can skip it from that panel.
- **Text size** is Large, Larger, or Largest. Larger is the default. The choice is saved on this device.
- **Progress** shows lessons finished, a day streak, and badges.
- **Word list** explains the harder words in plain English.
- **Installable.** A web app manifest and a service worker let you add First Steps to a home screen after it is served over HTTPS.

There are 7 computer lessons, 6 helper lessons, 6 webpage lessons, and 6 Make Your Page Shine lessons. That is 25 lessons.

## Run it on your computer

You need Node.js 22.

```bash
npm install
npm run dev
```

Open the address that Next.js prints, usually [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm test
npm run lint
npm run build
npm start
```

## Put it on Vercel (free)

The Hobby plan is enough. This app needs no environment variables, no API keys, and no database.

Import [vercel.com/new](https://vercel.com/new) and choose this GitHub repository. Use these settings. Leave anything not listed at the Vercel default.

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | `./` |
| Node.js Version | 22.x |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | leave empty |
| Environment Variables | none |

Do not set an output folder such as `public` or `out`. Next.js on Vercel serves the build itself. `package.json` already asks for Node `22.x`, which matches Next.js 16.

Deploy. Vercel gives you HTTPS. On a phone, use the browser menu and choose **Add to Home Screen**. On a computer, use the install icon in the address bar if the browser offers it.

## A possible paid tier, later

This is an idea only. It is not built, and the free app is the whole course.

**First Steps Plus** could add, for people who want it:

- A scheduled call with a person when a lesson is not enough
- A way for one trusted family member to see progress, only if both people agree
- A printed large-type booklet of the same lessons

The lessons, the read-aloud button, the quizzes, and the webpage practice stay free. No account is required to learn.
