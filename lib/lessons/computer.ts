import type { Lesson } from "../types";
import { explain, no, practice, quiz, yes } from "./build";

export const computerLessons: Lesson[] = [
  {
    id: "pointer",
    trackId: "computer",
    title: "Moving the pointer",
    summary: "Move the arrow, then click or tap once.",
    minutes: 5,
    steps: [
      explain(
        "The pointer",
        [
          "The pointer is the small arrow on the screen. It shows the spot you are aiming at.",
          "On a desk computer, you move a mouse. On a laptop, you may slide one finger on a touchpad. On a phone or tablet, your finger is the pointer.",
        ],
        "pointer",
        "Look for the arrow. Move the mouse, or slide your finger, and watch the arrow move with you.",
        ["pointer", "mouse", "touchpad"],
      ),
      explain(
        "A click",
        [
          "A click means press once and let go. On a mouse, use the left button.",
          "On a phone or tablet, a tap is the same idea. Touch the screen lightly, one time.",
        ],
        "click",
        "You do not need to press hard. One gentle press is a click. On a phone, one gentle tap.",
        ["click", "tap"],
      ),
      practice(
        "Try a click",
        "Click the green button once. On a touch screen, tap it once.",
        "Put the pointer on the green button. Press the left mouse button once, or tap the button with your finger.",
        {
          kind: "click",
          button: "Yes, I can click this",
          success: "You did it. That press is a click.",
        },
      ),
      quiz("What does a click do?", "A click is how you choose. It is not the off switch.", [
        yes("It chooses something on the screen.", "Yes. A click tells the computer, I want this."),
        no("It turns the computer off.", "Not quite. A click does not turn the computer off. A click chooses something on the screen."),
        no("It deletes your files.", "Not quite. A normal click does not delete your files."),
      ]),
      quiz("On a phone, what is most like a click?", "Think of a light touch, one time.", [
        no("Shaking the phone.", "Not quite. You do not need to shake the phone. A light tap is enough."),
        yes("A tap.", "Yes. A tap on a phone is like a click on a mouse."),
        no("Covering the whole screen with your hand.", "Not quite. Covering the screen does not choose a button. Tap the button itself."),
      ]),
      quiz("Which mouse button is used for a normal click?", "The everyday click is the button on the left.", [
        no("The right button.", "Not quite. The right button opens extra choices. For a normal click, use the left button."),
        no("The scroll wheel.", "Not quite. The wheel moves the page up and down. The left button does the click."),
        yes("The left button.", "Yes. The left button is the everyday click."),
      ]),
    ],
  },
  {
    id: "typing",
    trackId: "computer",
    title: "Typing words",
    summary: "Use the keys, the space bar, and Backspace.",
    minutes: 5,
    steps: [
      explain(
        "The keyboard",
        [
          "The keyboard is how you write on a computer. Each key is one letter, number, or mark.",
          "You do not need to press hard. A light press is enough. If a letter repeats, you are holding the key down.",
        ],
        "keyboard",
        "Find the letter keys in the middle. Press one key and let go.",
        ["keyboard"],
      ),
      explain(
        "Spaces and fixes",
        [
          "The long key at the bottom is the space bar. It makes a gap between words.",
          "Backspace removes the last letter you typed. It often shows a left arrow. It is a useful key. Everyone needs it.",
        ],
        "keyboard",
        "Space bar makes a gap. Backspace removes the last letter. Both are normal tools.",
        ["space-bar", "backspace"],
      ),
      practice(
        "Type your name",
        "Type your first name in the box. Two letters is enough. This name stays on this screen. It is not sent anywhere.",
        "Click in the box first so the cursor is there. Then press the letter keys. If a letter is wrong, press Backspace.",
        {
          kind: "type",
          prompt: "Your first name",
          placeholder: "Type here",
          button: "That is my name",
          min: 2,
          success: "You typed it. The keyboard is working for you.",
        },
      ),
      quiz("What does the space bar do?", "It is the long key. It does not type a letter.", [
        no("It deletes the whole line.", "Not quite. The space bar does not delete. It makes a gap."),
        yes("It makes a gap between words.", "Yes. One press of the space bar makes one gap."),
        no("It turns the sound off.", "Not quite. The space bar is for gaps between words."),
      ]),
      quiz("What does Backspace do?", "Look for a key with a left arrow. It fixes the last letter.", [
        yes("It removes the last letter you typed.", "Yes. Backspace is how you fix a small typing mistake."),
        no("It saves your work.", "Not quite. Backspace does not save. It removes the last letter."),
        no("It adds a space.", "Not quite. The space bar adds a space. Backspace removes."),
      ]),
      quiz("How hard should you press a key?", "The keys only need a light touch.", [
        no("As hard as you can.", "Not quite. A hard press is not needed, and it can make a letter repeat."),
        no("Hold the key down for three seconds.", "Not quite. A long hold can repeat the letter. Press and let go."),
        yes("A light press, then let go.", "Yes. Press once and lift your finger."),
      ]),
    ],
  },
  {
    id: "files",
    trackId: "computer",
    title: "Files and folders",
    summary: "A file is one saved thing. A folder holds files.",
    minutes: 6,
    steps: [
      explain(
        "A file is one thing",
        [
          "A file is one saved thing. A letter, a photo, and a song are all files.",
          "A file stays where you saved it until you move it or delete it.",
        ],
        "folder",
        "Think of a paper on a desk. That one paper is like a file.",
        ["file"],
      ),
      explain(
        "A folder holds files",
        [
          "A folder is a container. It keeps related files together, like a folder in a drawer.",
          "On many computers you open a folder with a double-click: two quick clicks. On a phone, one tap often opens it. This practice uses one click, so you can learn the idea first.",
        ],
        "folder",
        "Open the container first. Then open the thing inside it.",
        ["folder", "double-click"],
      ),
      practice(
        "Open a file",
        "Open the Letters folder. Then open the file called Note to Sam.",
        "Click the folder once. When it opens, click the note. You are looking for the words inside the file.",
        {
          kind: "open",
          folder: "Letters",
          file: "Note to Sam",
          note: "Hello Sam. Lunch is at noon.",
          success: "You opened the folder, then the file. That is how files are found.",
        },
      ),
      quiz("What is a file?", "One saved thing, not the container.", [
        yes("One saved thing, such as a letter or a photo.", "Yes. A file is one item you saved."),
        no("A box that holds many things.", "Not quite. The box is a folder. A file is one thing inside."),
        no("The button that turns the screen off.", "Not quite. A file is something you saved, like a letter or a photo."),
      ]),
      quiz("What is a folder for?", "It keeps related files together.", [
        no("It deletes old emails.", "Not quite. A folder does not delete by itself. It holds files."),
        no("It types letters for you.", "Not quite. A folder does not type. It stores files."),
        yes("It holds files so you can find them.", "Yes. A folder is a container for files."),
      ]),
      quiz("What is a double-click?", "Two clicks, quickly, on many desk computers.", [
        no("Holding the mouse still for a minute.", "Not quite. A double-click is two quick clicks, not a long wait."),
        yes("Two quick clicks in a row.", "Yes. On many computers, a double-click opens a file or folder."),
        no("Turning the mouse upside down.", "Not quite. Keep the mouse on the desk. Click the left button twice, quickly."),
      ]),
    ],
  },
  {
    id: "browser",
    trackId: "computer",
    title: "Opening a website",
    summary: "A browser opens websites. A link moves you to another page.",
    minutes: 6,
    steps: [
      explain(
        "The browser",
        [
          "A browser is the program that opens websites. Chrome, Edge, Safari, and Firefox are browsers.",
          "You only need the one already on your computer or phone. It is the window you use to read the news, watch a video, or open web email.",
        ],
        "browser",
        "If you are looking at a website, you are already in a browser.",
        ["browser", "website"],
      ),
      explain(
        "The address and the link",
        [
          "The address bar is the long box at the top. A website address goes there, like a street address for a page.",
          "A link is words or a picture you click to go somewhere else. Links are often blue or underlined.",
        ],
        "browser",
        "The long box at the top is the address. Underlined or blue words are often a link.",
        ["address-bar", "link"],
      ),
      practice(
        "Follow a link",
        "This is a practice browser. It does not open the real internet. Click the link that says Weather today.",
        "The link is the underlined words. Click those words once. The practice page should change.",
        {
          kind: "browser",
          startTitle: "Today",
          startText: "Here is the home page. The forecast is one click away.",
          link: "Weather today",
          pageTitle: "Weather",
          pageText: "It is sunny and 72 degrees.",
          success: "You used a link. The address changed, and a new page opened.",
        },
      ),
      quiz("What is a browser for?", "It is the program that shows websites.", [
        no("It prints paper by itself.", "Not quite. A browser opens websites. Printing is a separate step."),
        yes("It opens websites.", "Yes. Chrome, Edge, Safari, and Firefox are browsers."),
        no("It is a folder for photos.", "Not quite. Photos can sit in a folder. A browser opens websites."),
      ]),
      quiz("What is the address bar?", "Look at the top of the browser window.", [
        yes("The long box where a website address goes.", "Yes. You can type an address there, or watch it change when you click a link."),
        no("The key that makes a space.", "Not quite. That key is the space bar. The address bar is on the screen."),
        no("A folder on the desktop.", "Not quite. The address bar is the long box at the top of the browser."),
      ]),
      quiz("What happens when you click a link?", "A link is a door to another page.", [
        no("The computer turns off.", "Not quite. A link does not turn the computer off."),
        no("Every file is deleted.", "Not quite. A link opens another page. It does not delete your files."),
        yes("You go to another page.", "Yes. That is what a link is for."),
      ]),
    ],
  },
  {
    id: "email",
    trackId: "computer",
    title: "Sending an email",
    summary: "An email needs a person, a subject, and a message.",
    minutes: 6,
    steps: [
      explain(
        "A letter on the internet",
        [
          "Email is a letter that travels on the internet. It waits in the other person's mailbox until they open it.",
          "An email address is the name of a mailbox. It has an @ sign. A pretend example is sam@email.com.",
        ],
        "mail",
        "Look for the @ sign. That mark is part of an email address.",
        ["email", "email-address"],
      ),
      explain(
        "The three parts",
        [
          "To is the address of the person. Subject is a short title, so they know what the letter is about before they open it.",
          "Then you write the message. This practice does not send a real email. Nothing leaves this device.",
        ],
        "mail",
        "You need who it is for, a short title, and the message itself.",
        ["subject"],
      ),
      practice(
        "Write a practice email",
        "Fill in To, Subject, and a short message. Then press Send. This stays on the practice screen.",
        "The To line needs an @ sign, like sam@email.com. The subject can be a few words, such as Hello. Then type a short message.",
        { kind: "email", success: "You filled in a practice email. A real send works the same way, after you check the address." },
      ),
      quiz("What does the @ sign mean in an email address?", "It sits in the middle of an address, like sam@email.com.", [
        no("It means the message is urgent.", "Not quite. Urgent is not what @ means. It is part of the address."),
        yes("It is part of the mailbox name.", "Yes. An email address has an @ sign in it."),
        no("It deletes the message.", "Not quite. The @ sign is part of the address. It does not delete anything."),
      ]),
      quiz("What is the subject for?", "It is the short title, not the whole letter.", [
        yes("It tells the reader what the email is about.", "Yes. A clear subject helps the other person."),
        no("It stores your password.", "Not quite. Never put a password in the subject or the message."),
        no("It turns on the printer.", "Not quite. The subject is the title of the email."),
      ]),
      quiz("A stranger sends a file you did not expect. What is the safer choice?", "Surprise files are a common trick. The next lesson goes further.", [
        no("Open it right away.", "Not quite. An unexpected file can be a trick. Slow down."),
        no("Reply with your password so they can explain.", "Not quite. Do not send a password in email."),
        yes("Do not open it. Ask someone you trust if you are unsure.", "Yes. Leave unexpected files closed until a person you trust can look with you."),
      ]),
    ],
  },
  {
    id: "scams",
    trackId: "computer",
    title: "Staying safe from scams",
    summary: "A scam tries to rush you into giving away a secret.",
    minutes: 6,
    steps: [
      explain(
        "A scam is a trick",
        [
          "A scam is a message, call, or page that tries to steal money, a password, or private details.",
          "The sender may use a real company name. Names can be copied. The name alone does not make a message safe.",
        ],
        "shield",
        "If a message wants a secret or your money, stop. Looking is free. Sending the secret is the danger.",
        ["scam"],
      ),
      explain(
        "Slow down",
        [
          "Common tricks: they rush you, they scare you, or they ask for a password or a code.",
          "A safe next step is to stop. Ask a person you trust. Or open the company yourself by typing the address, or call the number on your card. Do not use the phone number in the surprise message.",
        ],
        "shield",
        "Rush plus a secret is a warning. You are allowed to wait.",
        ["password", "link"],
      ),
      practice(
        "Spot the scam",
        "Read the three messages. Choose the one that is a scam.",
        "Look for a rush, a threat, and a request for your password. A normal note from family does not ask for that.",
        {
          kind: "choose",
          prompt: "Which message is a scam?",
          options: [
            {
              text: "Mom: I will be home at 6.",
              detail: "A plain family note.",
              correct: false,
              feedback: "Not quite. This one does not ask for money or a password.",
            },
            {
              text: "Your package is at the post office. Bring photo ID when you pick it up.",
              detail: "No link. No password.",
              correct: false,
              feedback: "Not quite. Picking up a package with ID is a normal request. It does not ask you to type a password.",
            },
            {
              text: "Your bank: click here in 10 minutes or we lock your money. Reply with your password.",
              detail: "Rush, threat, and a password.",
              correct: true,
              feedback: "Yes. A real bank does not ask you to send your password, and it does not give you 10 minutes to obey.",
            },
          ],
          success: "You spotted the scam. The clues were the rush, the threat, and the password.",
        },
      ),
      quiz("Someone you do not know asks for your password. What do you do?", "A password is a secret. Real companies do not ask you to send it.", [
        yes("Do not send it.", "Yes. Keep the password to yourself."),
        no("Send it if they used a company name.", "Not quite. A company name can be copied. Do not send the password."),
        no("Send half of it.", "Not quite. Do not send any of it."),
      ]),
      quiz('A message says "Act now" and includes a surprise link. What is a safer first step?', "You can wait. Urgency is a tool scams use.", [
        no("Click the link before it expires.", "Not quite. The rush is part of the trick. Do not use that link."),
        yes("Stop, and check a way you already trust.", "Yes. Ask someone you trust, or go to the company yourself without that link."),
        no("Forward it to all your contacts.", "Not quite. Forwarding can spread the trick. Stop instead."),
      ]),
      quiz("A message uses a bank's name. Does that make it safe?", "Look at what it asks you to do, not only the name.", [
        no("Yes. A company name cannot be faked.", "Not quite. Names and logos can be copied."),
        no("Yes, if the letters are big.", "Not quite. Big letters do not make a message safe."),
        yes("No. The name can be copied. Read what it asks for.", "Yes. If it wants a password or rushes you, treat it as a scam until you check."),
      ]),
    ],
  },
  {
    id: "passwords",
    trackId: "computer",
    title: "Passwords you can remember",
    summary: "Use a few random words, and keep email's password special.",
    minutes: 6,
    steps: [
      explain(
        "A secret that proves it is you",
        [
          "A password proves it is you. Do not use your name, your birthday, or the word password.",
          "Those are the first guesses. A stranger should not be able to build your password from things they know about you.",
        ],
        "key",
        "If a stranger could guess it from your life story, pick something else.",
        ["password"],
      ),
      explain(
        "A few words",
        [
          "A passphrase is a password made of words. Three or four random words are strong and easier to remember than a jumble.",
          "Use a different password for email than for shops. If a shop is broken into, your email can still be safe. A notebook kept at home is a fair place to write them down. A note on the screen is not.",
        ],
        "key",
        "Pick words that do not make a sentence about you. Write them in a notebook at home if you need to.",
        ["passphrase"],
      ),
      practice(
        "Build a passphrase",
        "Pick three words. They do not need to make a sentence. Random is better.",
        "Tap three different words. They will line up in a box. That line is a practice password. It is not saved.",
        {
          kind: "passphrase",
          words: ["yellow", "river", "bicycle", "garden", "moon", "toast"],
          success: "That is a passphrase. Three random words are a solid start.",
        },
      ),
      quiz("Why use a different password for email?", "Email can be used to reset other accounts.", [
        no("Because email only allows one-letter passwords.", "Not quite. Email can use a long passphrase. The reason to make it different is safety."),
        yes("If another site is stolen, your email can still be safe.", "Yes. Email is the key to many other accounts, so it deserves its own password."),
        no("Because the same password is always stronger.", "Not quite. Reusing one password means one theft opens many doors."),
      ]),
      quiz("Which password is stronger?", "Random words beat a famous word plus a number.", [
        no("password123", "Not quite. That is one of the first passwords a thief tries."),
        yes("apple train window", "Yes. Three unrelated words are much harder to guess than password123."),
        no("Your first name and birth year", "Not quite. People who know you, or can look you up, can guess that."),
      ]),
      quiz("Where is a safer place to write a password down?", "Keep it off the screen and out of your messages.", [
        no("On a sticky note on the screen.", "Not quite. Anyone at the computer can read that note."),
        no("In an email to yourself.", "Not quite. If someone gets into that mailbox, they get the password too."),
        yes("In a notebook you keep at home.", "Yes. A home notebook is a practical choice. A password app is fine too, if someone helps you set it up."),
      ]),
    ],
  },
];
