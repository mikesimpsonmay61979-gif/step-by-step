import type { Lesson } from "../types";
import { explain, no, practice, quiz, yes } from "./build";

export const askingLessons: Lesson[] = [
  {
    id: "what-helper",
    trackId: "asking",
    title: "What an AI helper is",
    summary: "A helper is a program that writes answers. It can be wrong.",
    minutes: 5,
    steps: [
      explain(
        "A program, not a person",
        [
          "An AI helper is a program. You type words. It writes a reply. ChatGPT, Claude, Gemini, and helpers built into phones all work this way.",
          "There is no person on the other end reading your question as it arrives.",
        ],
        "helper",
        "If you can type a question into a box and it writes back, that is a helper. It is software.",
        ["ai-helper"],
      ),
      explain(
        "It can be wrong",
        [
          "The helper guesses a helpful reply from patterns in text. It can sound sure and still be wrong.",
          "You decide what to trust. If the topic is health, money, or the law, also ask a person who is trained for that.",
        ],
        "check",
        "A calm, tidy answer can still have a wrong fact. You are allowed to doubt it.",
        ["ai-helper"],
      ),
      practice(
        "Pick the true sentence",
        "Choose the sentence that fits what a helper really is.",
        "Ask yourself: is someone sitting there typing, or is a program writing a reply that might be wrong?",
        {
          kind: "choose",
          prompt: "Which sentence is true?",
          options: [
            {
              text: "An AI helper is a person at another computer, typing back to you.",
              correct: false,
              feedback: "Not quite. No person has to be there. The reply is written by a program.",
            },
            {
              text: "An AI helper is a program. It writes an answer, and it can be wrong.",
              correct: true,
              feedback: "Yes. It writes a reply. You still need to check anything that matters.",
            },
            {
              text: "An AI helper can only answer if the question is about computers.",
              correct: false,
              feedback: "Not quite. You can ask about dinners, letters, and many ordinary things. It can still be wrong.",
            },
          ],
          success: "You have the main idea. It is a program, and you stay in charge of what to trust.",
        },
      ),
      quiz("Who writes the helper's reply?", "Think of software, not a pen pal.", [
        no("A staff person who sees your question right away.", "Not quite. The reply is produced by the program."),
        yes("The program.", "Yes. You type. The program writes back."),
        no("Your email app, every time.", "Not quite. Email is a mailbox. A helper is a separate kind of program."),
      ]),
      quiz("The helper sounds very sure. What does that mean?", "Tone is not the same as truth.", [
        no("The answer must be right.", "Not quite. A sure tone can still sit on a wrong fact."),
        no("You should never ask again.", "Not quite. You can ask again, and you can check the answer."),
        yes("It can still be wrong. Check what matters.", "Yes. Confidence is not proof."),
      ]),
      quiz("When should you also ask a trained person?", "Some topics are too important for a program alone.", [
        yes("When it is about health, money, or the law.", "Yes. Use the helper for a draft or a list of questions, then ask a trained person."),
        no("Only when the helper refuses to type.", "Not quite. Even a fluent answer can be wrong on a serious topic."),
        no("Never. The helper replaces doctors and banks.", "Not quite. It does not replace a trained person."),
      ]),
    ],
  },
  {
    id: "clear-ask",
    trackId: "asking",
    title: "Ask one clear question",
    summary: "Say what you want to walk away with.",
    minutes: 5,
    steps: [
      explain(
        "Vague asks get vague answers",
        [
          "Tell me about food is a huge topic. The helper has to guess what you want.",
          "Give me 3 easy dinners I can cook in 30 minutes asks for a result you can use.",
        ],
        "question",
        "Picture the thing you want in your hands at the end: a list, a short note, or three ideas.",
        ["ai-helper"],
      ),
      explain(
        "One ask at a time",
        [
          "One question is easier to check than five questions packed into one box.",
          "If you need something else after, ask a second time. You can say: Make those dinners cheaper, or, Use ingredients I already named.",
        ],
        "question",
        "Finish one small ask. Read it. Then ask the next thing.",
      ),
      practice(
        "Choose the clearer ask",
        "Two people want dinner ideas. Pick the ask that tells the helper what to produce.",
        "Look for a number, a time, or a kind of result. Food alone is too wide.",
        {
          kind: "choose",
          prompt: "Which ask is clearer?",
          options: [
            {
              text: "Tell me about food.",
              correct: false,
              feedback: "Not quite. That could mean history, shopping, or recipes. The helper has to guess.",
            },
            {
              text: "Give me 3 easy dinners that take about 30 minutes.",
              correct: true,
              feedback: "Yes. It says how many, and it says they should be quick.",
            },
            {
              text: "Food???",
              correct: false,
              feedback: "Not quite. Question marks do not add details. Say what you want back.",
            },
          ],
          success: "A clear ask names the result. Three dinners. About 30 minutes.",
        },
      ),
      quiz("What makes an ask clearer?", "Add the result you want, not just the topic.", [
        yes("Saying what you want back, such as 3 ideas or a short note.", "Yes. The helper can aim at that result."),
        no("Using as few words as possible, even if the topic is huge.", "Not quite. Short is fine. Missing details are not."),
        no("Typing in all capital letters.", "Not quite. Capitals do not add meaning. Details do."),
      ]),
      quiz("You have three things you want. What is a good way to ask?", "You can have a conversation. It does not all fit in one breath.", [
        no("Put all three jobs in one long paragraph and hope.", "Not quite. One job at a time is easier to check."),
        yes("Ask for the first thing. Read the answer. Then ask for the next.", "Yes. You stay in charge of each step."),
        no("Ask only with one word.", "Not quite. One word brings back a guess. One clear job is better."),
      ]),
      quiz('Which follow-up fits after you already have 3 dinner ideas?', "Point at the answer you already got.", [
        no("Start over and say only the word cooking.", "Not quite. You would throw away the useful part."),
        no("Who are you, really?", "Not quite. That does not improve the dinners."),
        yes("Make those 3 dinners cheaper.", "Yes. It points at the list you have and names the change."),
      ]),
    ],
  },
  {
    id: "add-details",
    trackId: "asking",
    title: "Add the details that matter",
    summary: "Who it is for, how long, and the limits.",
    minutes: 6,
    steps: [
      explain(
        "Details are context",
        [
          "Context means the facts that shape the answer. Who it is for. How long it should be. What tone you want.",
          "Write a text is thin. Write a short, kind text to my neighbor. Say I found their cat. Keep it under 4 lines is something the helper can draft.",
        ],
        "details",
        "Add who, what happened, and how long. Leave out secrets. The next lessons cover privacy.",
        ["ai-helper"],
      ),
      explain(
        "You can add details in pieces",
        [
          "You do not have to write a perfect paragraph. A few extra facts are enough.",
          "If the draft is too long, say: Shorter. If the tone is wrong, say: Kinder, or, More formal.",
        ],
        "details",
        "After the first draft, you may correct it the way you would correct a person who missed a detail.",
      ),
      practice(
        "Build a better ask",
        "Start with Write a text. Add at least two details. Watch the ask grow under the buttons.",
        "Tap the details that matter. Two is enough for this practice. You can tap a button again to remove it.",
        {
          kind: "chips",
          prompt: "Add details to this thin ask.",
          vague: "Write a text.",
          chips: [
            { label: "To my neighbor", line: "It is to my neighbor." },
            { label: "About their cat", line: "Say I found their cat." },
            { label: "Kind and short", line: "Keep the tone kind." },
            { label: "Under 4 lines", line: "Keep it under 4 lines." },
          ],
          need: 2,
          success: "Those details give the helper a real job. You can add them in any order.",
        },
      ),
      quiz("Which detail helps a birthday note the most?", "The helper cannot see your friend. You have to say what matters.", [
        no("The brand of your computer.", "Not quite. The computer brand does not change the note."),
        yes("That your friend likes gardens, and the note should be short.", "Yes. Now the helper knows the person and the length."),
        no("Your password, so the note can be personal.", "Not quite. A password does not belong in a helper. A hobby is a better detail."),
      ]),
      quiz("The draft is too long. What can you type next?", "You can correct the last answer.", [
        yes("Shorter, please. Keep it to 4 lines.", "Yes. Name the limit."),
        no("Start a brand new topic and never mention the draft.", "Not quite. Point at the draft you want changed."),
        no("Nothing. The first draft cannot be changed.", "Not quite. You can ask for a change."),
      ]),
      quiz("What is a useful way to think about details?", "Who, what, and how long cover most everyday asks.", [
        no("Add every fact you know, including private numbers.", "Not quite. Add the facts that shape the writing. Leave private numbers out."),
        no("Details only matter for computer questions.", "Not quite. A letter, a list, and a recipe all get better with details."),
        yes("Say who it is for, what it is about, and any limit like length.", "Yes. Those three details prevent a lot of guessing."),
      ]),
    ],
  },
  {
    id: "check-answer",
    trackId: "asking",
    title: "Check the answer",
    summary: "Read slowly. Test the numbers. Ask again if needed.",
    minutes: 6,
    steps: [
      explain(
        "Read it like a letter from a stranger",
        [
          "Read the answer slowly. Ask: Does this match what I already know? Are the names and numbers right?",
          "You can type: I am not sure that is right. Try again. Or: Show that in simpler words.",
        ],
        "check",
        "Pick one fact and test it. A time, a price, a name, or a count is a good test.",
        ["ai-helper"],
      ),
      explain(
        "Important topics need a person",
        [
          "A helper can draft a question for your doctor. It should not be the doctor.",
          "Same for a bank, a lawyer, or a tax form. Use the draft as a starting point, then check the source that is allowed to decide.",
        ],
        "check",
        "If a wrong answer would cost money or health, check it outside the helper too.",
      ),
      practice(
        "Find the bad number",
        "The helper said this: There are 100 minutes in an hour, so half an hour is 50 minutes. What is the useful response?",
        "You already know how long an hour is. Trust that. The helper can miscount.",
        {
          kind: "choose",
          prompt: "What should you do with that answer?",
          options: [
            {
              text: "Trust it, because it sounds sure.",
              correct: false,
              feedback: "Not quite. A sure tone does not fix a wrong number.",
            },
            {
              text: "Notice the number is wrong. An hour has 60 minutes.",
              correct: true,
              feedback: "Yes. You caught it. You can tell the helper: An hour has 60 minutes. Please redo that.",
            },
            {
              text: "Stop using helpers forever.",
              correct: false,
              feedback: "Not quite. One bad number does not ruin the tool. Check the parts that matter, and ask again.",
            },
          ],
          success: "You checked a number you already knew. That habit catches a lot of mistakes.",
        },
      ),
      quiz("What is a good thing to check first?", "Pick a fact you can test.", [
        no("The font the answer used.", "Not quite. The look of the letters is not the fact."),
        yes("Numbers, names, and anything you already know.", "Yes. Those are easier to catch than a smooth sentence."),
        no("Whether the answer is long. Long means true.", "Not quite. A long answer can still be wrong."),
      ]),
      quiz("You think one sentence is wrong. What can you type?", "You can push back. The helper does not get offended.", [
        yes("I think that fact is wrong. Please try again.", "Yes. Say what you doubt."),
        no("You are a bad person.", "Not quite. Insults do not fix the fact. Name the problem instead."),
        no("Nothing. The first answer is final.", "Not quite. You can ask again."),
      ]),
      quiz("A helper drafts a note about a medicine dose. What else do you do?", "Doses are a health decision.", [
        no("Take the dose because the writing was tidy.", "Not quite. Do not take a dose from a helper."),
        no("Post the dose online to see who agrees.", "Not quite. That shares private health news and still may be wrong."),
        yes("Check with a doctor or pharmacist before you act.", "Yes. The draft can help you write questions. The trained person decides."),
      ]),
    ],
  },
  {
    id: "keep-private",
    trackId: "asking",
    title: "Keep private things private",
    summary: "Do not type passwords, bank numbers, or someone else's secrets.",
    minutes: 6,
    steps: [
      explain(
        "Some words should never go in the box",
        [
          "Do not type passwords, bank numbers, or medical record numbers into a helper.",
          "Do not paste someone else's private letter unless they said you may. A helper is not a locked drawer in your house.",
        ],
        "lock",
        "If you would not shout it across a shop, do not paste it into the helper.",
        ["password", "ai-helper"],
      ),
      explain(
        "A made-up example is safer",
        [
          "You can still get help. Change the private parts. Say my neighbor instead of their full name, address, and phone number.",
          "A card for a friend who likes gardens is fine. The friend's home address is not needed for that card.",
        ],
        "lock",
        "Keep the shape of the problem. Remove the secrets.",
      ),
      practice(
        "Sort what you can type",
        "For each line, choose OK to type or Keep private. All three need the right choice.",
        "Passwords and bank numbers stay private. A general request, with no secrets in it, is OK.",
        {
          kind: "sort",
          prompt: "Would you type this into a helper?",
          items: [
            {
              text: "Give me ideas for a birthday card for a friend who likes gardens.",
              private: false,
              why: "This ask has no password, no address, and no account number. It is OK to type.",
            },
            {
              text: "My password is BlueDog22.",
              private: true,
              why: "A password stays out of the helper, out of email, and off sticky notes on the screen.",
            },
            {
              text: "Here is my bank account number: 123456789.",
              private: true,
              why: "A bank number is a secret. The helper does not need it to help you write.",
            },
          ],
          success: "You kept the secrets out and left a normal ask in. That is the split to remember.",
        },
      ),
      quiz("Which of these is OK to type into a helper?", "Look for a task, not a secret.", [
        no("The password for your email.", "Not quite. A password never goes in the box."),
        yes("Please draft a kind note about a lost cat. Do not use a real address.", "Yes. The task is clear, and the secret is left out."),
        no("A photo of your debit card, front and back.", "Not quite. Card numbers are secrets. Do not upload them."),
      ]),
      quiz("You want help replying to a friend's private letter. What is the safer ask?", "Ask about the kind of reply, not the friend's private words, unless they agreed.", [
        yes("Help me write a short, kind reply. I will add the personal details myself.", "Yes. You keep their private words out of the box."),
        no("Here is their whole letter, home address, and phone number. Rewrite it.", "Not quite. That hands over someone else's private details."),
        no("Guess my friend's password so I can answer from their account.", "Not quite. Never ask a helper to get into someone else's account."),
      ]),
      quiz("Why leave secrets out?", "The helper is a program you do not fully control.", [
        no("Because the helper cannot read numbers.", "Not quite. It can read numbers. That is why you should not give it secret ones."),
        no("Because short messages are always public anyway.", "Not quite. The point is choice. You choose not to share secrets."),
        yes("Because a password or bank number does not belong in that box.", "Yes. Get help with the writing. Keep the secret at home."),
      ]),
    ],
  },
  {
    id: "small-steps",
    trackId: "asking",
    title: "Break a big job into small asks",
    summary: "One small result, then the next.",
    minutes: 6,
    steps: [
      explain(
        "Big jobs stall",
        [
          "Plan my whole move is too big. The answer will be vague, and it will be hard to check.",
          "A smaller ask has a finish line: Make a list of 8 things to pack in the first box.",
        ],
        "steps",
        "If you cannot tell when the answer is done, the ask is probably too big.",
      ),
      explain(
        "You are the manager",
        [
          "After the list looks right, ask the next small thing: Turn that list into a shopping list for boxes and tape.",
          "You can stop between asks. Your place in these lessons is saved. A helper chat may not be, so copy anything you want to keep into a note on your device.",
        ],
        "steps",
        "Finish one piece. Save what you want. Then ask for the next piece.",
        ["file"],
      ),
      practice(
        "Pick the first small step",
        "The big job is: I want to email my doctor about an appointment. Choose the first ask that is small enough.",
        "A first step should produce one short piece of writing you can read in a minute. It should not ask for anyone's password.",
        {
          kind: "choose",
          prompt: "Which first ask is the right size?",
          options: [
            {
              text: "Write my whole life story and my doctor's password.",
              correct: false,
              feedback: "Not quite. That is too big, and a password does not belong there.",
            },
            {
              text: "Write a short, polite email asking for an appointment. I will add the date and my name.",
              correct: true,
              feedback: "Yes. One short email. You add the private details yourself, outside the helper if you prefer.",
            },
            {
              text: "Handle my entire medical life from now on.",
              correct: false,
              feedback: "Not quite. There is no finish line, and health decisions belong with your doctor.",
            },
          ],
          success: "You picked a job with a finish line: one short email.",
        },
      ),
      quiz("Which ask is small enough to check?", "You should be able to read the result and say done or not done.", [
        yes("List 8 things to pack in the first box.", "Yes. Eight things. One box. You can count them."),
        no("Plan the rest of my life.", "Not quite. That has no finish line."),
        no("Fix everything in my house.", "Not quite. Break that into one room, then one task."),
      ]),
      quiz("You liked the packing list. What is a sensible next ask?", "Use the result you already have.", [
        no("Forget the list and ask about the history of cardboard.", "Not quite. Stay with the job you started."),
        yes("Turn that list into a short shopping list for boxes and tape.", "Yes. It is the next small piece."),
        no("Ask the helper to charge your credit card for the tape.", "Not quite. Do not hand a helper your card or your payment."),
      ]),
      quiz("Why keep a copy of an answer you liked?", "A chat box is not the same as a file you control.", [
        no("Because the helper will mail it to your family by itself.", "Not quite. It will not do that on its own, and it should not have their addresses unless you typed them."),
        yes("Because you may want the words later, in a note that stays on your device.", "Yes. Copy the useful part into a note or a document you can find again."),
        no("Because a copied answer becomes legally binding.", "Not quite. A copy is just for you. It is not a contract."),
      ]),
    ],
  },
];
