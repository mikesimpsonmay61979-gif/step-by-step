import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "about-me",
    title: "A page about you",
    blurb: "Change the heading to your own name.",
    task: "Replace the words Your Name with your name. You can change the other sentences too.",
    hint: "The big title sits between <h1> and </h1>. Leave those marks. Change only the words in the middle.",
    success: "The heading is yours now. The preview shows the new name.",
    html: `<h1>Your Name</h1>
<p>I live in a city.</p>
<p>One thing I like: quiet mornings.</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 24px;
  background: #fff8f0;
  color: #1c140c;
}
h1 {
  color: #0e2a47;
}`,
    js: `// Actions come in a later lesson.`,
    check: ({ html }) =>
      /<h1>\s*[^<]{2,}\s*<\/h1>/.test(html) && !/your name/i.test(html),
  },
  {
    id: "colors",
    title: "Change the colors",
    blurb: "Give the heading a new color.",
    task: "In the look box, change the word navy to another color word, such as tomato or green.",
    hint: "Find the line that says color: navy. Replace navy. Keep the colon and the semicolon.",
    success: "The heading color changed. Look at the preview.",
    html: `<h1>Hello</h1>
<p>This line stays in the normal color.</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 24px;
}
h1 {
  color: navy;
}`,
    js: `// This lesson is about color, so this box can stay as it is.`,
    check: ({ css }) => /color\s*:\s*(?!navy\b)[a-zA-Z#]/.test(css),
  },
  {
    id: "counter",
    title: "A button that counts",
    blurb: "Make the button say Add one, then click it in the preview.",
    task: "Change the button words from Click me to Add one. Then press the button in the preview. The score goes up by 1 each time.",
    hint: "The button words are in the top box, between the button marks. The line score = score + 1 is what adds one.",
    success: "The button now says Add one. Each click adds 1 to the score.",
    html: `<h1>Count</h1>
<button id="counter">Click me</button>
<p id="score">Score: 0</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 24px;
  background: #fff8f0;
}
button {
  font-size: 28px;
  padding: 16px 24px;
}`,
    js: `let score = 0;
const button = document.getElementById("counter");
const scoreText = document.getElementById("score");
button.addEventListener("click", () => {
  score = score + 1;
  scoreText.textContent = "Score: " + score;
});`,
    check: ({ html }) => html.includes("Add one") && !html.includes("Click me"),
  },
  {
    id: "tiny-game",
    title: "A tiny game",
    blurb: "Make each tap worth 2 points.",
    task: "In the actions box, change score + 1 to score + 2. Then tap the star in the preview.",
    hint: "Find the line that says score = score + 1. Change only the 1 to a 2.",
    success: "Each tap is worth 2 points now.",
    html: `<h1>Star tap</h1>
<button id="star">★ Tap the star</button>
<p id="score">Score: 0</p>`,
    css: `body {
  font-family: sans-serif;
  text-align: center;
  padding: 24px;
  background: #fff8f0;
}
#star {
  font-size: 40px;
  padding: 20px 28px;
  background: #fde68a;
}`,
    js: `let score = 0;
const star = document.getElementById("star");
const scoreText = document.getElementById("score");
star.addEventListener("click", () => {
  score = score + 1;
  scoreText.textContent = "Score: " + score;
});`,
    check: ({ js }) => /score\s*=\s*score\s*\+\s*2/.test(js),
  },
  {
    id: "fix-mistake",
    title: "Fix one small mistake",
    blurb: "The button name is spelled wrong. Fix it.",
    task: 'The button is named start, but the action looks for strat. Change strat to start. Then press Start in the preview.',
    hint: 'Look in the actions box for the word strat. It should match the button name start. Spelling has to match exactly.',
    success: "The names match. The button can run.",
    html: `<h1>Click the button</h1>
<button id="start">Start</button>
<p id="note">Waiting.</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 24px;
  background: #fff8f0;
}
button {
  font-size: 28px;
  padding: 16px 24px;
}`,
    js: `const button = document.getElementById("strat");
const note = document.getElementById("note");
button.addEventListener("click", () => {
  note.textContent = "You fixed it.";
});`,
    check: ({ js }) =>
      /getElementById\(\s*["']start["']\s*\)/.test(js) && !js.includes("strat"),
  },
  {
    id: "add-picture",
    title: "Add a picture",
    blurb: "Describe the yellow picture in a few words.",
    task: 'The picture is already on the page. Type a short description inside alt="".',
    hint: 'Find alt="". Put words between the quotes, such as A yellow card.',
    success: "The picture now has words that describe it.",
    html: `<h1>My page</h1>
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100'%3E%3Crect width='160' height='100' rx='12' fill='%23fde68a'/%3E%3C/svg%3E" alt="">
<p>A picture sits under the heading.</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 24px;
  background: #fff8f0;
  color: #1c140c;
}`,
    js: `// This lesson is about the picture, so this box can stay as it is.`,
    check: ({ html }) => /alt\s*=\s*["'][^"']{3,}["']/.test(html),
  },
  {
    id: "add-link",
    title: "Add a link",
    blurb: "Make the link open in a new tab.",
    task: 'Add target="_blank" to the link so a click opens a new tab.',
    hint: 'The link starts with <a href="https://example.com">. Add target="_blank" before the >.',
    success: "The link is set to open in a new tab.",
    html: `<h1>Places I like</h1>
<p>A practice link:</p>
<a href="https://example.com">Example page</a>`,
    css: `body {
  font-family: sans-serif;
  padding: 24px;
  background: #fff8f0;
  color: #1c140c;
}
a {
  font-size: 24px;
}`,
    js: `// This lesson is about the link, so this box can stay as it is.`,
    check: ({ html }) => /target\s*=\s*["']_blank["']/i.test(html),
  },
  {
    id: "page-colors",
    title: "Change colors with CSS",
    blurb: "Paint the page background a new color.",
    task: "Change background: white to another color word, such as wheat or lightblue.",
    hint: "Find background: white in the look box. Replace white. Keep the colon and the semicolon.",
    success: "The page background changed. Look at the preview.",
    html: `<h1>Hello</h1>
<p>The page color comes from the look box.</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 24px;
  background: white;
  color: #1c140c;
}`,
    js: `// This lesson is about color, so this box can stay as it is.`,
    check: ({ css }) => /background\s*:\s*(?!white\b)[a-zA-Z#]/.test(css),
  },
  {
    id: "fonts",
    title: "Change the font and the size",
    blurb: "Make the heading letters larger.",
    task: "Under h1, change font-size: 24px to font-size: 40px.",
    hint: "The heading rule starts with h1. Change only the 24px on that font-size line.",
    success: "The heading is larger now.",
    html: `<h1>Hello</h1>
<p>This sentence keeps the body size.</p>`,
    css: `body {
  font-family: sans-serif;
  font-size: 18px;
  padding: 24px;
  background: #fff8f0;
  color: #1c140c;
}
h1 {
  font-size: 24px;
}`,
    js: `// This lesson is about letters, so this box can stay as it is.`,
    check: ({ css }) => /h1\s*\{[^}]*font-size\s*:\s*40px/.test(css),
  },
  {
    id: "phone-fit",
    title: "Fit a phone screen",
    blurb: "Let the wide picture shrink to the page.",
    task: "Replace width: 600px with max-width: 100% and height: auto.",
    hint: "Look under img. Remove the 600px width. Add max-width: 100%; and height: auto;.",
    success: "The picture can shrink to fit the page.",
    html: `<h1>On a phone</h1>
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='120'%3E%3Crect width='600' height='120' fill='%23bfdbfe'/%3E%3C/svg%3E" alt="A wide blue card">
<p>This picture should stay on the page.</p>`,
    css: `body {
  font-family: sans-serif;
  padding: 16px;
  background: #fff8f0;
  color: #1c140c;
}
img {
  width: 600px;
}`,
    js: `// This lesson is about fitting a phone, so this box can stay as it is.`,
    check: ({ css }) =>
      /max-width\s*:\s*100%/.test(css) &&
      /height\s*:\s*auto/.test(css) &&
      !/width\s*:\s*600px/.test(css),
  },
  {
    id: "shine-recap",
    title: "Look at what you built",
    blurb: "Name the page you put together.",
    task: "Change the heading words to My shining page.",
    hint: "The heading sits between <h1> and </h1>. Replace the words. Leave the marks.",
    success: "The heading says My shining page. This page holds the skills from the track.",
    html: `<h1>My page</h1>
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100'%3E%3Crect width='160' height='100' rx='12' fill='%23fde68a'/%3E%3C/svg%3E" alt="A yellow card">
<p><a href="https://example.com" target="_blank">Example page</a></p>`,
    css: `body {
  font-family: sans-serif;
  font-size: 20px;
  background: wheat;
  color: #1c140c;
  padding: 16px;
  max-width: 40rem;
}
img {
  max-width: 100%;
  height: auto;
}`,
    js: `// You already learned the pieces. This box can stay as it is.`,
    check: ({ html }) => /<h1>\s*My shining page\s*<\/h1>/i.test(html),
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
