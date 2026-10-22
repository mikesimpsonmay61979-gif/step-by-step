import type { Lesson } from "../types";
import { explain, no, practice, quiz, yes } from "./build";

export const codingLessons: Lesson[] = [
  {
    id: "three-parts",
    trackId: "coding",
    title: "Three parts of a webpage",
    summary: "Words, look, and actions. You will meet each one.",
    minutes: 6,
    steps: [
      explain(
        "A page is instructions",
        [
          "A webpage is instructions the browser follows. You do not need to memorize them. You need to know there are three kinds.",
          "HTML is the words and the parts, such as a heading or a button. CSS is the look, such as color and size. JavaScript is the action, such as what a click does.",
        ],
        "blocks",
        "Words, look, action. When you wonder where a change goes, ask which of those three it is.",
        ["html", "css", "javascript", "browser"],
      ),
      explain(
        "You will see them in boxes",
        [
          "In the practice, each kind has its own box. The preview is the page those boxes build.",
          "The preview stays inside First Steps. It is not published on the internet.",
        ],
        "page",
        "Change a box, then look at the preview. That loop is the whole skill.",
        ["preview", "code"],
        {
          label: "A heading in HTML",
          code: "<h1>Hello</h1>",
        },
      ),
      practice(
        "Which part is it?",
        "Three short rounds. Pick the part that does the job on the card.",
        "Words on the page are HTML. Color and size are CSS. A click that changes something is JavaScript.",
        {
          kind: "rounds",
          rounds: [
            {
              prompt: "Which part is this?",
              sample: "<h1>Hello</h1> puts a big heading on the page.",
              choices: ["HTML", "CSS", "JavaScript"],
              answer: "HTML",
              feedback: "HTML holds the words. The marks <h1> and </h1> make a heading.",
            },
            {
              prompt: "Which part is this?",
              sample: "Make the heading blue.",
              choices: ["HTML", "CSS", "JavaScript"],
              answer: "CSS",
              feedback: "CSS sets the look. Blue is a look.",
            },
            {
              prompt: "Which part is this?",
              sample: "When the button is clicked, add 1 to the score.",
              choices: ["HTML", "CSS", "JavaScript"],
              answer: "JavaScript",
              feedback: "JavaScript is the action. A click that changes a number is an action.",
            },
          ],
          success: "You can sort the three parts. The next lessons let you edit each one.",
        },
      ),
      quiz("What is HTML for?", "It is the words and the parts people see.", [
        no("It is the password for the website.", "Not quite. HTML is not a password."),
        yes("It holds the words and parts, like headings and buttons.", "Yes. The words of the page live in HTML."),
        no("It only sets the color.", "Not quite. Color is CSS. HTML is the content."),
      ]),
      quiz("What is CSS for?", "Think of paint, size, and space.", [
        yes("The look: colors, size, and space.", "Yes. CSS is how the page looks."),
        no("Sending email.", "Not quite. CSS does not send email."),
        no("The words of the heading.", "Not quite. The words are HTML. CSS can color those words."),
      ]),
      quiz("What is JavaScript for?", "Think of what happens after a click.", [
        no("Choosing the paper size for a printer only.", "Not quite. That is not the job in these lessons."),
        no("Storing files in a folder.", "Not quite. Folders hold files. JavaScript runs actions on a page."),
        yes("Actions, such as adding 1 when a button is clicked.", "Yes. JavaScript is what the page does."),
      ]),
    ],
  },
  {
    id: "about-you",
    trackId: "coding",
    title: "A page about you",
    summary: "Change the heading to your own name and see it in the preview.",
    minutes: 8,
    steps: [
      explain(
        "The heading is between two marks",
        [
          "A big heading uses two marks: <h1> at the start and </h1> at the end. The slash means the heading stops there.",
          "The words between those marks are what people read. Change the words. Leave the marks.",
        ],
        "page",
        "Find Your Name. It sits between <h1> and </h1>. Type your name in that spot.",
        ["heading", "html"],
        { label: "The marks stay. The words change.", code: "<h1>Your Name</h1>" },
      ),
      explain(
        "The preview is your page",
        [
          "When you change the words box, the preview updates. If it does not, click outside the box once so the change can settle.",
          "A line that starts with <p> is a paragraph, an ordinary sentence. You can change those words too.",
        ],
        "page",
        "You only need to replace Your Name for this practice. The sentences are yours if you want them.",
        ["preview"],
      ),
      practice(
        "Put your name on the page",
        "The practice below is a tiny webpage. Change Your Name to your name. Nothing here is published.",
        "In the top box, replace Your Name and leave <h1> and </h1> in place. Look at the preview for the new heading.",
        { kind: "code", projectId: "about-me" },
      ),
      quiz("Where do the heading words go?", "They sit in the middle of the heading marks.", [
        yes("Between <h1> and </h1>.", "Yes. Those marks wrap the heading."),
        no("Inside the address bar of the browser.", "Not quite. The address bar is for website addresses. The heading words go in the HTML box."),
        no("After the slash in </h1>, outside the marks.", "Not quite. Words outside the marks are not the heading."),
      ]),
      quiz("What does the slash in </h1> mean?", "The slash closes what <h1> opened.", [
        no("It deletes the page.", "Not quite. The slash ends the heading. It does not delete the page."),
        yes("It marks the end of the heading.", "Yes. </h1> means the heading stops here."),
        no("It sends the page to a friend.", "Not quite. Nothing is sent. The slash only closes the heading."),
      ]),
      quiz("What is the preview?", "It is the page built from your boxes.", [
        no("A folder of old emails.", "Not quite. The preview is the webpage you are making."),
        no("The place you type a password.", "Not quite. Do not put a password in these boxes."),
        yes("A live look at the page your code makes.", "Yes. Change the code, and the preview changes too."),
      ]),
    ],
  },
  {
    id: "colors",
    trackId: "coding",
    title: "Change the colors",
    summary: "CSS sets the look. One word can recolor a heading.",
    minutes: 7,
    steps: [
      explain(
        "A rule has a target and a change",
        [
          "A CSS rule names what you want to change, then lists the changes inside curly braces { }.",
          "h1 { color: navy; } means: for the heading, set the color to navy.",
        ],
        "palette",
        "Find the word color. The word after the colon is the color name.",
        ["css", "heading"],
        { label: "A color rule", code: "h1 {\n  color: navy;\n}" },
      ),
      explain(
        "Color words the browser already knows",
        [
          "You can try tomato, green, purple, or brown. The browser knows many color words.",
          "Keep the colon and the semicolon. They are part of the sentence. color: tomato; is a complete line.",
        ],
        "palette",
        "Change navy to one new color word. Do not delete the line.",
        ["css"],
      ),
      practice(
        "Recolor the heading",
        "In the look box, replace navy with another color word. Watch the preview.",
        "The look box is the middle one. The line to edit says color: navy. Try tomato or green.",
        { kind: "code", projectId: "colors" },
      ),
      quiz("Which box holds the color rule?", "Color is a look, not the words and not the click.", [
        no("The words box, HTML.", "Not quite. HTML holds the words. The color rule is CSS."),
        yes("The look box, CSS.", "Yes. color: navy lives in CSS."),
        no("The actions box, JavaScript.", "Not quite. JavaScript is for actions like clicks."),
      ]),
      quiz("In color: navy; what is navy?", "It comes after the colon.", [
        yes("The color name.", "Yes. You can replace it with another color word."),
        no("The heading text people read.", "Not quite. The readable heading is in HTML. navy is a color."),
        no("A password.", "Not quite. It is only a color name."),
      ]),
      quiz("You want the heading to be green. Which line fits?", "Keep the same shape. Change the color word.", [
        no("green <h1>", "Not quite. That mixes a color word into the HTML marks."),
        no("click green", "Not quite. A click is an action. Color is a look."),
        yes("color: green;", "Yes. That line sets the color to green."),
      ]),
    ],
  },
  {
    id: "counter",
    trackId: "coding",
    title: "A button that counts",
    summary: "A click can add 1 and show the new number.",
    minutes: 8,
    steps: [
      explain(
        "A number with a name",
        [
          "let score = 0 makes a number called score and starts it at 0.",
          "When the button is clicked, the line score = score + 1 replaces score with the old score plus one.",
        ],
        "counter",
        "Find score = score + 1. That is the line that counts.",
        ["javascript", "button"],
        { label: "Add one", code: "score = score + 1;" },
      ),
      explain(
        "Show the new number",
        [
          "The page has a button and a line that says Score: 0. JavaScript finds them by their names.",
          "After the number changes, scoreText.textContent puts the new score back on the page so you can see it.",
        ],
        "counter",
        "The button in the preview is the real button. The words on it come from the HTML box.",
        ["javascript", "html"],
      ),
      practice(
        "Change the button words",
        "Change Click me to Add one. Then press the button in the preview. The score should go up.",
        "The words Click me are in the top box, between the button marks. In the preview, press the button after you rename it.",
        { kind: "code", projectId: "counter" },
      ),
      quiz("What does let score = 0 do?", "It creates the number the button will change.", [
        no("It sends an email with the score.", "Not quite. Nothing is sent. It only makes a number in the page."),
        yes("It makes a number named score, starting at 0.", "Yes. Later lines can add to that number."),
        no("It paints the page navy.", "Not quite. Color would be a CSS rule. This line is JavaScript."),
      ]),
      quiz("What does score = score + 1 do?", "It runs when the button is clicked.", [
        yes("It adds 1 to score.", "Yes. Each click can run that line again."),
        no("It closes the browser.", "Not quite. It only changes the number."),
        no("It deletes the button.", "Not quite. The button stays. The number changes."),
      ]),
      quiz("Why change the button words in the HTML box?", "The label people read is content.", [
        no("Because CSS is not allowed to contain letters.", "Not quite. CSS can contain words, but the button label is HTML."),
        no("Because the preview cannot show buttons.", "Not quite. The preview can show the button. Press it."),
        yes("Because the words on the button are HTML.", "Yes. Change them between the button marks."),
      ]),
    ],
  },
  {
    id: "tiny-game",
    trackId: "coding",
    title: "A tiny game",
    summary: "Tap a star. Then make each tap worth 2 points.",
    minutes: 8,
    steps: [
      explain(
        "A game can be one button",
        [
          "A game does not need to be large. A button that keeps score is already a game.",
          "This one shows a star. Each tap adds points. The score line updates.",
        ],
        "star",
        "Tap the star in the preview first, before you change anything. Watch the score.",
        ["button", "javascript"],
      ),
      explain(
        "Change the points",
        [
          "The line score = score + 1 means one point per tap.",
          "If you change 1 to 2, each tap is worth two points. The rest of the game can stay the same.",
        ],
        "star",
        "Only the number after the plus sign needs to change.",
        ["javascript"],
        { label: "Two points", code: "score = score + 2;" },
      ),
      practice(
        "Make a tap worth 2",
        "Change score + 1 to score + 2. Tap the star in the preview and watch the score jump by 2.",
        "In the actions box, find + 1 and make it + 2. Then use the star in the preview, not the code box.",
        { kind: "code", projectId: "tiny-game" },
      ),
      quiz("Before any edit, what does one tap add?", "Look at the starter line score = score + 1.", [
        yes("1 point.", "Yes. The starter adds 1."),
        no("10 points.", "Not quite. Nothing in the starter says 10."),
        no("It closes the page.", "Not quite. A tap adds to the score."),
      ]),
      quiz("How do you make each tap worth 2?", "One number changes.", [
        no("Delete the whole page.", "Not quite. Keep the game. Change the number that is added."),
        yes("Change score + 1 to score + 2.", "Yes. The 2 is the new point value."),
        no("Type the points into the address bar.", "Not quite. The change goes in the actions box."),
      ]),
      quiz("Where do you tap to play?", "The preview is the game. The code box is the instructions.", [
        no("On the word function in the code.", "Not quite. That word is an instruction. It is not the star."),
        no("On the text-size buttons.", "Not quite. Those change letter size for the lesson, not the score."),
        yes("On the star in the preview.", "Yes. The preview is the running game."),
      ]),
    ],
  },
  {
    id: "fix-mistake",
    trackId: "coding",
    title: "Fix one small mistake",
    summary: "A wrong name stops the button. Make the names match.",
    minutes: 7,
    steps: [
      explain(
        "Code is picky about names",
        [
          "If a button is named start, the action has to look for start. A close spelling does not count.",
          "strat and start are different names. The computer does not guess which one you meant.",
        ],
        "bug",
        "Read the name on the button, then read the name in the action. They must be the same letters.",
        ["code", "button"],
      ),
      explain(
        "The preview will say so",
        [
          "When the names do not match, the action cannot find the button. The preview shows a short note about the snag.",
          "Change strat to start. Press the Start button in the preview. The note on the page should change to You fixed it.",
        ],
        "bug",
        "You are looking for the misspelled word strat in the actions box.",
        ["preview", "javascript"],
        { label: "The name to find", code: 'document.getElementById("start")' },
      ),
      practice(
        "Match the name",
        "The button is called start. The action looks for strat. Fix the spelling, then press Start in the preview.",
        "In the actions box, replace strat with start. Leave the quotes around the word.",
        { kind: "code", projectId: "fix-mistake" },
      ),
      quiz("Why did the starter button fail?", "The two names were not the same.", [
        no("Because buttons cannot be clicked.", "Not quite. Buttons can be clicked when the names match."),
        yes("The action looked for strat, but the button is named start.", "Yes. One wrong letter is enough to miss."),
        no("Because the heading was too big.", "Not quite. The heading size was not the problem."),
      ]),
      quiz("What spelling does the action need?", "Copy the button's name exactly.", [
        no("strat", "Not quite. That is the mistake."),
        no("Start button please", "Not quite. The name is the single word inside the quotes."),
        yes("start", "Yes. Same letters as the button id."),
      ]),
      quiz("After the names match, how do you know it worked?", "Use the preview, not only the code.", [
        yes("Press Start in the preview. The page says You fixed it.", "Yes. The running page is the test."),
        no("The computer sends you an email.", "Not quite. Watch the preview instead."),
        no("The lesson deletes itself.", "Not quite. The lesson stays. The button starts working."),
      ]),
    ],
  },
];
