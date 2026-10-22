import type { Lesson } from "../types";
import { explain, no, practice, quiz, yes } from "./build";

export const shineLessons: Lesson[] = [
  {
    id: "add-picture",
    trackId: "shine",
    title: "Add a picture",
    summary: "Put a picture on the page and describe it in a few plain words.",
    minutes: 7,
    steps: [
      explain(
        "A picture is a mark named img",
        [
          "HTML can show a picture. The mark is img. It does not need a closing mark.",
          "src is where the picture lives. In this practice the picture is already there. You will describe it.",
        ],
        "page",
        "Look for the letters img. That mark is the picture.",
        ["html", "picture"],
        { label: "A picture mark", code: '<img src="garden.jpg" alt="Yellow flowers">' },
      ),
      explain(
        "Alt text is for people who cannot see the picture",
        [
          "alt is short for alternative. The words in alt tell what the picture shows.",
          "A screen reader reads those words out loud. They also show if the picture does not load.",
        ],
        "page",
        "alt words should say what is in the picture. Empty alt quotes do not help.",
        ["alt-text"],
        { label: "Describe the picture", code: 'alt="A yellow card"' },
      ),
      practice(
        "Describe the picture",
        "The page already has a yellow picture. The alt quotes are empty. Type a short description inside them.",
        'Find alt="". Put words between the quotes, such as A yellow card. Leave the img mark in place.',
        { kind: "code", projectId: "add-picture" },
      ),
      quiz("What is the img mark for?", "It is the picture, not the color and not the click.", [
        no("It sets the page color.", "Not quite. Color is CSS. img is the picture."),
        yes("It puts a picture on the page.", "Yes. The img mark is how HTML shows a picture."),
        no("It sends an email.", "Not quite. img does not send anything."),
      ]),
      quiz("What belongs in alt?", "Think of someone who cannot see the picture.", [
        yes("A short description of the picture.", "Yes. Those words stand in for the picture."),
        no("Your password.", "Not quite. Never put a password in a page."),
        no("The page background color.", "Not quite. Color is CSS. alt describes the picture."),
      ]),
      quiz("The picture is a red mug. Which alt fits?", "Say what a person would see.", [
        no('alt=""', "Not quite. Empty quotes do not describe the mug."),
        no('alt="click here"', "Not quite. That does not say what the picture shows."),
        yes('alt="A red mug"', "Yes. Those words match the picture."),
      ]),
    ],
  },
  {
    id: "add-link",
    trackId: "shine",
    title: "Add a link",
    summary: "Make words that open another page, and open that page in a new tab.",
    minutes: 7,
    steps: [
      explain(
        "A link uses the a mark",
        [
          "The letter a means anchor. Words between <a> and </a> are the words people click.",
          "href is the address the link opens. It looks like a website address.",
        ],
        "browser",
        "The clickable words sit between <a> and </a>. href holds the address.",
        ["link", "website", "html"],
        { label: "A link", code: '<a href="https://example.com">Example page</a>' },
      ),
      explain(
        "A new tab keeps your page open",
        [
          "target=\"_blank\" tells the browser to open the link in a new tab.",
          "Your page stays where it is. The other page opens beside it.",
        ],
        "browser",
        "Add target=\"_blank\" inside the opening <a> mark, next to href.",
        ["browser", "link"],
        {
          label: "Open in a new tab",
          code: '<a href="https://example.com" target="_blank">Example page</a>',
        },
      ),
      practice(
        "Open the link in a new tab",
        "The practice page has a link to Example page. Add target=\"_blank\" so a click would open a new tab.",
        'In the words box, the link starts with <a href="https://example.com">. Add target="_blank" before the >.',
        { kind: "code", projectId: "add-link" },
      ),
      quiz("What does href hold?", "It is the place the link goes.", [
        yes("The address the link opens.", "Yes. href is the address."),
        no("The color of the words.", "Not quite. Color is CSS. href is the address."),
        no("A password.", "Not quite. Do not put a password in a link."),
      ]),
      quiz("Where do the clickable words go?", "They are what a person reads and clicks.", [
        no("Inside the address bar only.", "Not quite. The address bar is the browser. The words go in the HTML."),
        no("After </a>, outside the marks.", "Not quite. Words outside the marks are not the link."),
        yes("Between <a> and </a>.", "Yes. Those marks wrap the words people click."),
      ]),
      quiz('What does target="_blank" do?', "Your page should stay put.", [
        no("It deletes the page.", "Not quite. It only chooses where the new page opens."),
        yes("It opens the link in a new tab.", "Yes. The page you were on stays open."),
        no("It makes the words bigger.", "Not quite. Size is CSS. This line is about the tab."),
      ]),
    ],
  },
  {
    id: "page-colors",
    trackId: "shine",
    title: "Change colors with CSS",
    summary: "Set the page background with a color word in the look box.",
    minutes: 7,
    steps: [
      explain(
        "The page background is a CSS line",
        [
          "You already recolored a heading. The whole page has a color too. That line starts with background.",
          "background: white; paints the page white. The word after the colon is the color.",
        ],
        "palette",
        "Find background in the look box. The color word comes after the colon.",
        ["css"],
        { label: "Paint the page", code: "body {\n  background: white;\n}" },
      ),
      explain(
        "Try a color word the browser knows",
        [
          "wheat, lightblue, and honeydew are color words. The browser already knows them.",
          "Keep the colon and the semicolon. Change only the color word.",
        ],
        "palette",
        "Replace white with wheat. Leave the rest of the line.",
        ["css"],
      ),
      practice(
        "Paint the page",
        "In the look box, change background: white to another color word. Watch the preview.",
        "The line says background: white. Try wheat or lightblue. Keep the colon and the semicolon.",
        { kind: "code", projectId: "page-colors" },
      ),
      quiz("Which box holds background?", "A background is a look.", [
        no("The words box, HTML.", "Not quite. HTML holds the words. The paint is CSS."),
        yes("The look box, CSS.", "Yes. background lives in CSS."),
        no("The actions box, JavaScript.", "Not quite. JavaScript is for clicks and other actions."),
      ]),
      quiz("In background: wheat; what is wheat?", "It comes after the colon.", [
        yes("The color name.", "Yes. You can swap it for another color word."),
        no("The heading people read.", "Not quite. The heading words are in HTML."),
        no("A link address.", "Not quite. A link address is href. wheat is a color."),
      ]),
      quiz("You want a light blue page. Which line fits?", "Keep the same shape. Change the color word.", [
        no("<h1> lightblue", "Not quite. That puts a color word in the heading."),
        no("click lightblue", "Not quite. A click is an action. This change is a look."),
        yes("background: lightblue;", "Yes. That line paints the page."),
      ]),
    ],
  },
  {
    id: "fonts",
    trackId: "shine",
    title: "Change the font and the size",
    summary: "Choose the letter style, then make the heading larger.",
    minutes: 7,
    steps: [
      explain(
        "font-family is the letter style",
        [
          "A font is the shape of the letters. sans-serif is a plain style with no little feet on the letters.",
          "font-family: sans-serif; sets that style for the words inside body.",
        ],
        "page",
        "Find font-family in the look box. That line chooses the letter style.",
        ["font", "css"],
        { label: "A plain letter style", code: "body {\n  font-family: sans-serif;\n}" },
      ),
      explain(
        "font-size is how big the letters are",
        [
          "font-size: 24px; means the letters are 24 pixels tall. A pixel is one tiny dot on the screen.",
          "A bigger number makes bigger letters. 40px is larger than 24px.",
        ],
        "page",
        "The heading rule starts with h1. Change 24px to 40px on the font-size line inside that rule.",
        ["font", "heading"],
        { label: "A larger heading", code: "h1 {\n  font-size: 40px;\n}" },
      ),
      practice(
        "Make the heading larger",
        "In the look box, change the heading size from 24px to 40px. The preview heading should grow.",
        "Look under h1 for font-size: 24px. Replace 24px with 40px. Leave the body size as it is.",
        { kind: "code", projectId: "fonts" },
      ),
      quiz("What does font-family choose?", "Think of the shape of the letters.", [
        no("The picture on the page.", "Not quite. A picture is the img mark."),
        no("The address of a link.", "Not quite. A link address is href."),
        yes("The style of the letters.", "Yes. font-family is the letter style."),
      ]),
      quiz("What does a bigger font-size number do?", "24px and 40px are both sizes.", [
        yes("It makes the letters larger.", "Yes. 40px is taller than 24px."),
        no("It opens a new tab.", "Not quite. A new tab comes from target=\"_blank\"."),
        no("It hides the page.", "Not quite. The size only changes the letters."),
      ]),
      quiz("You want a bigger heading. Which line fits inside h1?", "Change the size, not the words.", [
        no("href: 40px;", "Not quite. href is a link address, not a size."),
        yes("font-size: 40px;", "Yes. That line makes the heading letters larger."),
        no("alt: 40px;", "Not quite. alt describes a picture."),
      ]),
    ],
  },
  {
    id: "phone-fit",
    trackId: "shine",
    title: "Fit a phone screen",
    summary: "Keep the page and the picture from spilling off a small screen.",
    minutes: 8,
    steps: [
      explain(
        "A phone screen is narrow",
        [
          "A phone shows a narrow slice of a page. A picture with a fixed wide size can stick out past the edge.",
          "The viewport is that visible slice. A line in the page head can tell the phone to use its real width. First Steps already adds that line in the preview.",
        ],
        "browser",
        "A fixed width like 600px can be wider than a phone. The next step swaps that for a flexible size.",
        ["viewport", "picture", "browser"],
        {
          label: "The viewport line",
          code: '<meta name="viewport" content="width=device-width, initial-scale=1">',
        },
      ),
      explain(
        "Let the picture shrink",
        [
          "max-width: 100%; means the picture can be smaller than its file, but not wider than the page.",
          "height: auto; keeps the picture from looking stretched when the width changes.",
        ],
        "browser",
        "In the look box, replace width: 600px with max-width: 100% and add height: auto.",
        ["css", "picture"],
        { label: "A picture that fits", code: "img {\n  max-width: 100%;\n  height: auto;\n}" },
      ),
      practice(
        "Let the picture fit",
        "The picture is locked at 600 pixels wide. Change that rule so the picture can shrink to the page.",
        "Under img, remove width: 600px. Use max-width: 100%; and height: auto; instead.",
        { kind: "code", projectId: "phone-fit" },
      ),
      quiz("What is the viewport?", "It is about the screen, not the password.", [
        yes("The visible size of the screen.", "Yes. A phone viewport is narrow."),
        no("The words inside alt.", "Not quite. alt describes a picture. The viewport is the screen size."),
        no("A folder on the computer.", "Not quite. A folder holds files. The viewport is the screen."),
      ]),
      quiz("Why use max-width: 100% on a picture?", "Think of a narrow phone.", [
        no("It sends the picture by email.", "Not quite. It only limits the width."),
        yes("So the picture stays inside the page width.", "Yes. It will not stick out past the edge."),
        no("It opens a new tab.", "Not quite. A new tab is target=\"_blank\"."),
      ]),
      quiz("What does height: auto do for a picture?", "The width may change. The shape should stay natural.", [
        no("It deletes the picture.", "Not quite. The picture stays. The height follows the width."),
        no("It sets the background color.", "Not quite. Background color is a different line."),
        yes("It keeps the picture from looking stretched.", "Yes. The height follows the picture’s own shape."),
      ]),
    ],
  },
  {
    id: "shine-recap",
    trackId: "shine",
    title: "Look at what you built",
    summary: "See the picture, the link, the colors, and the size together on one page.",
    minutes: 6,
    steps: [
      explain(
        "One page can hold every skill",
        [
          "The practice page has a picture with alt text, a link that asks for a new tab, a background color, a plain font, and a picture that can shrink.",
          "You made each of those in the lessons before this one.",
        ],
        "star",
        "Look at the preview first. Then find the heading words in the top box.",
        ["picture", "link", "css", "font"],
      ),
      explain(
        "Finishing earns a badge",
        [
          "Change the heading to My shining page. That is the last edit in this track.",
          "When you finish this lesson, you earn the Shining page badge. It shows on your progress page.",
        ],
        "star",
        "The heading sits between <h1> and </h1>. Replace the words. Leave the marks.",
        ["heading", "preview"],
      ),
      practice(
        "Name the page",
        "The preview already shows your picture, link, color, and size. Change the heading to My shining page.",
        "In the words box, replace the words between <h1> and </h1> with My shining page.",
        { kind: "code", projectId: "shine-recap" },
      ),
      quiz("Which mark puts a picture on the page?", "You used it when you described the yellow card.", [
        no("<a>", "Not quite. The a mark is a link."),
        yes("<img>", "Yes. img is the picture."),
        no("font-size", "Not quite. font-size changes letters. It is CSS."),
      ]),
      quiz("Which line opens a link in a new tab?", "Your own page stays open.", [
        yes('target="_blank"', "Yes. That opens the other page in a new tab."),
        no("background: wheat;", "Not quite. That line paints the page."),
        no("font-family: sans-serif;", "Not quite. That line picks a letter style."),
      ]),
      quiz("What does the Shining page badge mean?", "It is for this whole track.", [
        no("You shared your password.", "Not quite. You do not share a password to earn a badge."),
        no("You finished only the first computer lesson.", "Not quite. This badge is for the shine lessons."),
        yes("You finished every Make Your Page Shine lesson.", "Yes. The badge is the check for this track."),
      ]),
    ],
  },
];
