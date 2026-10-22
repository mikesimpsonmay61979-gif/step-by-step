import assert from "node:assert/strict";
import test from "node:test";
import { badgeList } from "./badges";
import { glossary, glossaryById } from "./glossary";
import { getLesson, lessons, lessonsIn, quizCount, tracks } from "./lessons";
import { getProject } from "./projects";
import { currentStreak, prevDay } from "./streak";

test("streak counts today and yesterday, and stops at a gap", () => {
  assert.equal(currentStreak([], "2026-10-15"), 0);
  assert.equal(currentStreak(["2026-10-15"], "2026-10-15"), 1);
  assert.equal(currentStreak(["2026-10-14", "2026-10-15"], "2026-10-15"), 2);
  assert.equal(currentStreak(["2026-10-14"], "2026-10-15"), 1);
  assert.equal(currentStreak(["2026-10-13"], "2026-10-15"), 0);
  assert.equal(currentStreak(["2026-10-12", "2026-10-13", "2026-10-15"], "2026-10-15"), 1);
});

test("prevDay crosses a month boundary", () => {
  assert.equal(prevDay("2026-03-01"), "2026-02-28");
  assert.equal(prevDay("2024-03-01"), "2024-02-29");
});

test("each track has at least 5 complete lessons", () => {
  for (const track of tracks) {
    const list = lessonsIn(track.id);
    assert.ok(list.length >= 5, track.id);
    for (const lesson of list) {
      const quizzes = lesson.steps.filter((step) => step.type === "quiz");
      const tries = lesson.steps.filter((step) => step.type === "try");
      const explains = lesson.steps.filter((step) => step.type === "explain");
      assert.equal(quizzes.length, 3, lesson.id);
      assert.equal(quizCount(lesson), 3);
      assert.equal(tries.length, 1, lesson.id);
      assert.ok(explains.length >= 1, lesson.id);
      assert.ok(lesson.summary.length > 20, lesson.id);
      for (const step of lesson.steps) {
        assert.ok(step.hint.length > 10, lesson.id);
        if (step.type === "explain") {
          for (const word of step.words ?? []) {
            assert.ok(glossaryById(word), `${lesson.id} missing word ${word}`);
          }
        }
        if (step.type === "quiz") {
          assert.equal(step.choices.length, 3, lesson.id);
          assert.equal(step.choices.filter((choice) => choice.correct).length, 1, lesson.id);
        }
        if (step.type === "try" && step.practice.kind === "code") {
          assert.ok(getProject(step.practice.projectId), step.practice.projectId);
        }
      }
    }
  }
});

test("lesson lookup and glossary are usable", () => {
  assert.ok(getLesson("computer", "pointer"));
  assert.equal(lessons.length, 25);
  assert.equal(lessonsIn("shine").length, 6);
  assert.equal(new Set(glossary.map((entry) => entry.id)).size, glossary.length);
  for (const entry of glossary) {
    assert.ok(entry.say.length > 20);
    assert.ok(entry.example.length > 10);
  }
});

test("badges turn on from plain counts", () => {
  const empty = badgeList({
    completedIds: [],
    trackIds: {
      computer: ["computer:pointer"],
      asking: ["asking:what-helper"],
      coding: ["coding:three-parts"],
      shine: ["shine:add-picture"],
    },
    perfectQuiz: false,
    streak: 0,
    days: 0,
  });
  assert.equal(empty.every((badge) => !badge.earned), true);

  const some = badgeList({
    completedIds: ["computer:pointer"],
    trackIds: {
      computer: ["computer:pointer"],
      asking: ["asking:what-helper"],
      coding: ["coding:three-parts"],
      shine: ["shine:add-picture"],
    },
    perfectQuiz: true,
    streak: 3,
    days: 2,
  });
  const earned = new Set(some.filter((badge) => badge.earned).map((badge) => badge.id));
  assert.ok(earned.has("first-step"));
  assert.ok(earned.has("computer"));
  assert.ok(earned.has("careful-reader"));
  assert.ok(earned.has("three-days"));
  assert.ok(earned.has("welcome-back"));
  assert.equal(earned.has("whole-path"), false);
});
