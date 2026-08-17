---
layout: ../../layouts/project.astro
title: Personal Knowledge System
description: A living AI orchestration layer that spans work, ventures, and life, built to compound over time and free up the work that actually matters.
status: active
category: personal
startDate: "2024"
tags: ["Claude Code", "AI Agents", "Obsidian", "n8n", "Postgres", "Self-hosted"]
---

This is the system I built to replace the team I used to assemble by hand. It spans three contexts, work, ventures, and life, and it runs on one architecture: capture everything, process it, store it in one place, synthesize it into something readable, and retrieve it at the lowest cost that answers the question. The map below is that architecture, current as of the last verified date at the bottom.

<figure class="pka-hero-figure">
  <img src="/assets/images/pka-system-architecture.webp" loading="lazy" width="1536" height="1024" alt="Architecture map of the PKA system, running left to right through five numbered stages. Capture: Granola meeting notes, Drive _INBOX drops, YouTube playlists, the Telegram bot Kip, /venture-research, scratch-today.md and capture_thought. Process: the n8n pipeline, digest mining, /ingest, /panning-for-gold and vault import. Store: three knowledge folders (work, ventures, life) over a Postgres brain running OpenBrain and pgvector, holding facts and entities, relationships, embeddings, full text and metadata. Synthesize: entity extraction, the wiki compiler, content briefs and 122 compiled entity pages. Retrieve: pka_retrieve.py manifest search at zero tokens, MEMORY.md, semantic search via MCP, and hot.md. Below, an infrastructure strip covers the local Windows workstation, the Hostinger VPS running Docker and Caddy, and a retrieval ladder that escalates from hot.md through manifest search to semantic search and entity pages. A feedback loop runs from retrieval back to the brain.">
  <figcaption>
    The whole system on one page. Source of truth is <code>PKA-ARCHITECTURE.md</code>; the map is re-verified whenever the architecture changes.
  </figcaption>
</figure>

<style>
  .pka-diagram { font-family: "Roboto", sans-serif; }
  .pka-node {
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .pka-node:hover { transform: translateY(-2px); }
  .pka-node.selected {
    box-shadow: 0 0 0 2px rgb(139 92 246);
    transform: translateY(-2px);
  }
  .pka-detail { transition: opacity 0.2s ease, max-height 0.3s ease; }
  .pka-connector line { stroke-dasharray: 4 3; animation: dash 20s linear infinite; }
  @keyframes dash { to { stroke-dashoffset: -100; } }
</style>

<div class="not-prose pka-diagram my-10">

  <!-- Context row -->
  <p class="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-400 dark:text-neutral-500 text-center mb-4">Three contexts, one orchestration layer</p>
  <div class="flex gap-3 justify-center mb-2">
    <button class="pka-node flex-1 max-w-[168px] p-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-white dark:bg-neutral-900 text-left" data-context="work" onclick="selectContext(this)">
      <div class="text-[10px] font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-1">Work</div>
      <div class="text-sm font-semibold text-neutral-800 dark:text-neutral-200">NACC · UW</div>
      <div class="text-[11px] text-neutral-500 mt-1">Research, comms, directory</div>
    </button>
    <button class="pka-node flex-1 max-w-[168px] p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-white dark:bg-neutral-900 text-left" data-context="ventures" onclick="selectContext(this)">
      <div class="text-[10px] font-semibold tracking-widest uppercase text-amber-500 dark:text-amber-400 mb-1">Ventures</div>
      <div class="text-sm font-semibold text-neutral-800 dark:text-neutral-200">9 Projects</div>
      <div class="text-[11px] text-neutral-500 mt-1">Apps, sites, content engine</div>
    </button>
    <button class="pka-node flex-1 max-w-[168px] p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-neutral-900 text-left" data-context="life" onclick="selectContext(this)">
      <div class="text-[10px] font-semibold tracking-widest uppercase text-emerald-500 dark:text-emerald-400 mb-1">Life</div>
      <div class="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Personal</div>
      <div class="text-[11px] text-neutral-500 mt-1">Family, finances, health</div>
    </button>
  </div>

  <!-- Connectors down to center -->
  <div class="flex justify-center">
    <svg class="pka-connector w-full max-w-[540px] h-8 overflow-visible" viewBox="0 0 540 32" fill="none">
      <line x1="90" y1="0" x2="270" y2="32" stroke="rgb(167 139 250)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="270" y2="32" stroke="rgb(251 191 36)" stroke-width="1.5"/>
      <line x1="450" y1="0" x2="270" y2="32" stroke="rgb(52 211 153)" stroke-width="1.5"/>
    </svg>
  </div>

  <!-- Central orchestration node -->
  <div class="flex justify-center mb-0">
    <div class="px-7 py-4 rounded-xl bg-neutral-900 dark:bg-white border border-neutral-800 dark:border-neutral-200 text-center">
      <div class="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1">Orchestration layer</div>
      <div class="text-base font-bold text-white dark:text-neutral-900">Claude Code + PKA System</div>
      <div class="text-[11px] text-neutral-400 dark:text-neutral-600 mt-0.5">SOUL.md · MEMORY.md · hot.md · thread files · skills</div>
    </div>
  </div>

  <!-- Connectors down to tools -->
  <div class="flex justify-center">
    <svg class="pka-connector w-full max-w-[540px] h-8 overflow-visible" viewBox="0 0 540 32" fill="none">
      <line x1="270" y1="0" x2="90" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="190" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="270" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="350" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="450" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
    </svg>
  </div>

  <!-- Tool row -->
  <div class="flex flex-wrap gap-2 justify-center">
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">OpenBrain (Postgres)</span>
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">n8n Automation</span>
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">Vikunja Tasks</span>
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">Granola</span>
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">Obsidian</span>
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">Asana</span>
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">Google Workspace</span>
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">Wispr Flow</span>
    <span class="px-3 py-1.5 text-[11px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">Kip (Telegram)</span>
  </div>

  <!-- Context detail panel -->
  <div id="pka-detail" class="pka-detail mt-6 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-4 text-sm text-neutral-600 dark:text-neutral-400 hidden">
    <div id="pka-detail-content"></div>
  </div>

</div>

<script>
const contextDetails = {
  work: {
    label: "Work — NACC / University of Washington",
    detail: "Day job context: NACC directory, REDCap, NEXT platform, website redesign, communications. Asana tracks tasks; thread files track every active project. Morning brief pulls calendar and due tasks each day."
  },
  ventures: {
    label: "Ventures — 9 Active Projects",
    detail: "Alz researcher site, memory care directory, travel app, booking app, women's sports blog, portfolio, and more. Each gets its own thread file. The content engine and marketing skills stack live here."
  },
  life: {
    label: "Life — Personal",
    detail: "Finances (Firefly III + PrivateZone), health, family, personal goals. Sensitive data stays local in D:\\PrivateZone. Bridge scripts post sanitized tasks to Vikunja for daily routing."
  }
};

function selectContext(el) {
  document.querySelectorAll('.pka-node').forEach(n => n.classList.remove('selected'));
  el.classList.add('selected');
  const ctx = el.dataset.context;
  const detail = contextDetails[ctx];
  const panel = document.getElementById('pka-detail');
  const content = document.getElementById('pka-detail-content');
  content.innerHTML = '<span class="font-semibold text-neutral-800 dark:text-neutral-200">' + detail.label + '</span><br/>' + detail.detail;
  panel.classList.remove('hidden');
}
</script>

---

## What it actually is

My PKA (Personal Knowledge Assistant) system is a model-agnostic AI orchestration layer that spans three contexts: my day job at the University of Washington, nine personal ventures I'm actively building, and my personal life. It's not a note-taking app or a task manager. It's a system that knows who I am, what I'm working on, and what I need, and acts on that knowledge across every session.

I think of it as a **life operating system**: not a product you finish, but infrastructure you build over time. It is, by design, never complete. The longer I invest in it, the better it gets.

---

## How it's structured

The system lives in a single folder with three sub-contexts, `work/`, `ventures/`, and `life/`, each with its own routing file, index, and thread files for active projects. A master routing layer at the root directs each session to the right context.

Key files loaded at the start of every session:

- `SOUL.md`: my personality, working style, and rules for how the AI should show up
- `USER.md`: who I am, my background, how I work best
- `hot.md`: what's most urgent right now
- `MEMORY.md`: a curated index of key decisions and lessons across all past sessions

The AI never loads everything, just what's relevant to the current task.

---

## The tooling

| Tool | Role |
|------|------|
| Claude Code | Primary orchestration layer |
| Wispr Flow | Voice-first daily input |
| Kip (Telegram bot) | Voice-note capture on the go. A quick message to Kip gets transcribed and dropped into a daily scratch file, which the morning brief and end-of-day routine both pick up and route from. |
| Obsidian | Meeting notes, daily notes, and a visual mirror of the PKA system. The graph view makes connections across your knowledge visible in a way nothing else does. |
| OpenBrain (Postgres) | Persistent storage for everything worth remembering: the knowledge base that grows with every session. |
| Wiki layer | Synthesizes captured knowledge into interconnected reference pages, turning raw inputs into something you can actually navigate and read, like a personal encyclopedia that builds itself. |
| Vikunja | Self-hosted task management |
| Asana | Institutional task management |
| Granola | Meeting transcription and structured notes using templates like 1:1s and weekly meetings, routed automatically into thread files. Integrates well with other tools in the stack. |
| Google Workspace | Calendar, Gmail, Drive |
| Firecrawl | Web research and content ingestion |
| n8n | Automation workflows |
| YouTube | A primary learning source. I organize videos into playlists by topic, and I'm building a workflow to automatically pull transcripts, draft summaries, and route anything worth keeping into my knowledge base. In progress, and one I'm genuinely excited about. |

---

## Model-agnostic by design

One of the most important architectural decisions I made early on: **don't build yourself into a single model.**

Different LLMs have genuine strengths. I use Claude Code for the majority of my work, but I still reach for ChatGPT and Codex for specific workflows where they shine. Because I work in VS Code, I can use extensions to bring different models into the same environment without changing my workflow.

I also manage my tokens deliberately. I maintain subscriptions to both Claude and ChatGPT, work and personal accounts for each, and I route work accordingly:

- **Claude Desktop (work account)**: connected to my PKA system's `work/` folder only, so work activities run on work tokens rather than my own.
- **Claude Code (personal account)**: for personal ventures, app builds, and system development.
- **ChatGPT / Codex**: for specific workflows where those models have an edge.

This sounds like overhead, but in practice it's straightforward. The goal is simply to maximize the tokens I have available and route work to the right account. I tend to gravitate toward the VS Code environment for most things, personal and work alike, but working with a colleague recently pushed me to explore the Claude Desktop app more seriously, both as a way to make better use of my work tokens and because it genuinely has great features. There's something to be said for running your morning brief in a well-designed UI rather than a terminal. It's a different mode, and sometimes that's exactly what you need.

---

This is the architecture. It's less interesting than where it came from and what it's actually like to run one, and that's a different kind of piece: [The system that knows you](/post/the-system-that-knows-you) covers the community this was built on top of, the flywheel that makes it compound, and what it takes to start your own.
