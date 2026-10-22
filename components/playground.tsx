"use client";

import { useMemo, useState } from "react";
import { BigButton, fieldClass } from "@/components/controls";
import { buildSrcDoc } from "@/lib/preview";
import { getProject } from "@/lib/projects";
import type { Project } from "@/lib/types";

export function Playground({
  projectId,
  onDone,
  showTask = true,
}: {
  projectId: string;
  onDone?: () => void;
  showTask?: boolean;
}) {
  const project = getProject(projectId);
  if (!project) {
    return (
      <p className="rounded-2xl border-4 border-[#7c2d12] bg-[#fff4e0] p-4 leading-snug">
        This practice is missing.
      </p>
    );
  }
  return <PlaygroundEditor project={project} onDone={onDone} showTask={showTask} />;
}

function PlaygroundEditor({
  project,
  onDone,
  showTask,
}: {
  project: Project;
  onDone?: () => void;
  showTask: boolean;
}) {
  const [html, setHtml] = useState(project.html);
  const [css, setCss] = useState(project.css);
  const [js, setJs] = useState(project.js);
  const [confirmReset, setConfirmReset] = useState(false);

  const passed = project.check({ html, css, js });
  const srcDoc = useMemo(() => buildSrcDoc(html, css, js), [html, css, js]);

  function edit(next: { html: string; css: string; js: string }) {
    setHtml(next.html);
    setCss(next.css);
    setJs(next.js);
    if (project.check(next)) onDone?.();
  }

  function reset() {
    setHtml(project.html);
    setCss(project.css);
    setJs(project.js);
    setConfirmReset(false);
  }

  return (
    <div className="flex flex-col gap-4">
      {showTask ? (
        <div className="rounded-2xl border-4 border-foreground bg-[#fff4e0] p-4">
          <p className="font-bold">Your job</p>
          <p className="mt-2 leading-snug">{project.task}</p>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Editor
            label="Words on the page"
            help="This box is HTML. It holds headings, sentences, and buttons."
            value={html}
            onChange={(value) => edit({ html: value, css, js })}
          />
          <Editor
            label="Colors and size"
            help="This box is CSS. It sets the look."
            value={css}
            onChange={(value) => edit({ html, css: value, js })}
          />
          <Editor
            label="What a click does"
            help="This box is JavaScript. It runs when something happens."
            value={js}
            onChange={(value) => edit({ html, css, js: value })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Your page</p>
          <p className="leading-snug">This preview stays inside First Steps. It is not on the internet.</p>
          <iframe
            title="Your page"
            sandbox="allow-scripts"
            srcDoc={srcDoc}
            className="min-h-72 w-full rounded-2xl border-4 border-foreground bg-white"
          />
        </div>
      </div>

      {passed ? (
        <p className="rounded-2xl border-4 border-[#14532d] bg-[#e5f6ea] p-4 leading-snug" role="status">
          {project.success}
        </p>
      ) : (
        <p className="leading-snug">The preview updates while you type. When the job is done, a green note appears.</p>
      )}

      {confirmReset ? (
        <div className="flex flex-col gap-3">
          <p className="font-bold">Put the starter code back? Your edits on this practice will be cleared.</p>
          <BigButton variant="secondary" onClick={reset}>
            Yes, put the starter code back
          </BigButton>
          <BigButton variant="outline" onClick={() => setConfirmReset(false)}>
            No, keep my changes
          </BigButton>
        </div>
      ) : (
        <BigButton variant="outline" onClick={() => setConfirmReset(true)}>
          Start this code over
        </BigButton>
      )}
    </div>
  );
}

function Editor({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <p className="leading-snug">{help}</p>
      <textarea
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        spellCheck={false}
        className={`${fieldClass} min-h-36 font-mono text-[1rem] leading-relaxed`}
      />
    </div>
  );
}
