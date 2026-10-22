import type { GlossaryEntry } from "./types";

export const glossary: GlossaryEntry[] = [
  {
    id: "address-bar",
    word: "Address bar",
    say: "The long box at the top of a browser. You can type a website address there.",
    example: "The address bar is where example.com would go.",
  },
  {
    id: "ai-helper",
    word: "AI helper",
    say: "A program that writes an answer when you type a question. It is not a person. It can be wrong.",
    example: "You can ask an AI helper for a short shopping list.",
  },
  {
    id: "backspace",
    word: "Backspace",
    say: "The key that removes the last letter you typed. It often shows a left arrow.",
    example: "If you mistype a name, press Backspace and try the letter again.",
  },
  {
    id: "browser",
    word: "Browser",
    say: "The program that opens websites. Chrome, Edge, Safari, and Firefox are browsers.",
    example: "You use a browser to read the news or open email on the web.",
  },
  {
    id: "button",
    word: "Button",
    say: "A spot on the screen you click or tap to make something happen.",
    example: "The Send button sends the email after you write it.",
  },
  {
    id: "click",
    word: "Click",
    say: "A quick press on a mouse button, usually the left one. Then you let go.",
    example: "Click the green button one time.",
  },
  {
    id: "code",
    word: "Code",
    say: "Instructions you type for the computer. A webpage is made from code.",
    example: "You change the code, and the practice page changes with it.",
  },
  {
    id: "css",
    word: "CSS",
    say: "The part of a webpage that sets the look: colors, size, and space.",
    example: "CSS can make a heading blue.",
  },
  {
    id: "double-click",
    word: "Double-click",
    say: "Two quick clicks in a row. On many computers, that is how you open a file or folder.",
    example: "Double-click the folder named Letters to open it.",
  },
  {
    id: "email",
    word: "Email",
    say: "A letter that travels on the internet.",
    example: "You can email a short note to a friend.",
  },
  {
    id: "email-address",
    word: "Email address",
    say: "The name of someone's mailbox. It has an @ sign, like sam@email.com.",
    example: "Type the email address in the To box.",
  },
  {
    id: "file",
    word: "File",
    say: "One saved thing, such as a letter, a photo, or a song.",
    example: "Note to Sam is a file inside the Letters folder.",
  },
  {
    id: "folder",
    word: "Folder",
    say: "A container that holds files. It keeps related things together.",
    example: "Put all the letters in one folder.",
  },
  {
    id: "heading",
    word: "Heading",
    say: "A big title line on a page. In a webpage, a heading often sits inside <h1> and </h1>.",
    example: "The heading of your page can be your name.",
  },
  {
    id: "html",
    word: "HTML",
    say: "The part of a webpage that holds the words and the parts, like headings and buttons.",
    example: "HTML is where you type the sentence people will read.",
  },
  {
    id: "javascript",
    word: "JavaScript",
    say: "The part of a webpage that makes actions happen, such as adding 1 when a button is clicked.",
    example: "JavaScript can keep the score in a tiny game.",
  },
  {
    id: "keyboard",
    word: "Keyboard",
    say: "The set of keys you press to type letters, numbers, and spaces.",
    example: "The keyboard has a long space bar at the bottom.",
  },
  {
    id: "link",
    word: "Link",
    say: "Words or a picture you click to go to another page. Links are often blue or underlined.",
    example: "Click the Weather today link to open that page.",
  },
  {
    id: "mouse",
    word: "Mouse",
    say: "A small device you move on the desk to move the pointer on the screen.",
    example: "Slide the mouse until the pointer is on the button.",
  },
  {
    id: "passphrase",
    word: "Passphrase",
    say: "A password made of a few words. Random words are easier to remember than a jumble of symbols.",
    example: "yellow river bicycle is a passphrase.",
  },
  {
    id: "password",
    word: "Password",
    say: "A secret you type to show it is you. Do not share it in email or with a helper.",
    example: "Your email password should be different from your shopping password.",
  },
  {
    id: "pointer",
    word: "Pointer",
    say: "The arrow on the screen. It shows the spot you are aiming at.",
    example: "Move the pointer onto the button before you click.",
  },
  {
    id: "preview",
    word: "Preview",
    say: "A live look at your webpage while you type. It updates when the code changes.",
    example: "The preview shows your name after you type it in the heading.",
  },
  {
    id: "scam",
    word: "Scam",
    say: "A trick that tries to steal money, a password, or private details.",
    example: "A message that rushes you and asks for your password is a scam.",
  },
  {
    id: "space-bar",
    word: "Space bar",
    say: "The long key at the bottom of the keyboard. It makes a gap between words.",
    example: "Press the space bar once between your first name and last name.",
  },
  {
    id: "subject",
    word: "Subject",
    say: "The short title of an email. It tells the reader what the letter is about.",
    example: "A subject can be Lunch on Friday.",
  },
  {
    id: "tap",
    word: "Tap",
    say: "A light touch on a phone or tablet screen. A tap is like a click.",
    example: "Tap the green button one time.",
  },
  {
    id: "touchpad",
    word: "Touchpad",
    say: "The flat rectangle on a laptop, below the keys. You slide a finger on it to move the pointer.",
    example: "Slide one finger on the touchpad to move the arrow.",
  },
  {
    id: "alt-text",
    word: "Alt text",
    say: "Words that describe a picture for someone who cannot see it. They also show if the picture does not load.",
    example: 'alt="A red mug" tells people the picture is a red mug.',
  },
  {
    id: "font",
    word: "Font",
    say: "The style of the letters on a page. Some fonts are plain. Some look like handwriting.",
    example: "sans-serif is a plain font with no little feet on the letters.",
  },
  {
    id: "picture",
    word: "Picture",
    say: "An image on a page. In HTML, a picture uses the img mark.",
    example: "A picture of yellow flowers can sit under the heading.",
  },
  {
    id: "viewport",
    word: "Viewport",
    say: "The size of the screen the page is shown on. A phone viewport is narrow.",
    example: "A wide picture can spill past a phone viewport.",
  },
  {
    id: "website",
    word: "Website",
    say: "Pages on the internet. You open a website in a browser.",
    example: "A weather website shows the forecast.",
  },
];

export function glossaryById(id: string): GlossaryEntry | undefined {
  return glossary.find((entry) => entry.id === id);
}
