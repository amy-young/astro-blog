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
  /* Rewritten 2026-08-17 off Tailwind utility classes onto plain CSS -- same diagram and
     same fix as src/content/post/the-system-that-knows-you.md; see that file's comment
     for the full explanation. No dark: variants reintroduced -- the site is light-only. */
  .pka-diagram { font-family: "Roboto", sans-serif; margin: 40px 0; }
  .pka-diagram .hidden { display: none; }
  .pka-context-label {
    font-size: .625rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
    color: #a3a3a3; text-align: center; margin-bottom: 16px;
  }
  .pka-context-row { display: flex; gap: 12px; justify-content: center; margin-bottom: 8px; }
  .pka-node {
    cursor: pointer; flex: 1; max-width: 168px; padding: 16px; border-radius: 12px;
    border: 1px solid #ddd6fe; background: #fff; text-align: left; font: inherit;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .pka-node[data-context="ventures"] { border-color: #fde68a; }
  .pka-node[data-context="life"] { border-color: #a7f3d0; }
  .pka-node:hover { transform: translateY(-2px); }
  .pka-node.selected { box-shadow: 0 0 0 2px rgb(139 92 246); transform: translateY(-2px); }
  .pka-node-eyebrow { font-size: .625rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: rgb(167 139 250); margin-bottom: 4px; }
  .pka-node[data-context="ventures"] .pka-node-eyebrow { color: rgb(251 191 36); }
  .pka-node[data-context="life"] .pka-node-eyebrow { color: rgb(52 211 153); }
  .pka-node-title { font-size: .875rem; font-weight: 600; color: #262626; }
  .pka-node-sub { font-size: .6875rem; color: #737373; margin-top: 4px; }
  .pka-connector-wrap { display: flex; justify-content: center; }
  .pka-connector { width: 100%; max-width: 540px; height: 32px; overflow: visible; }
  .pka-connector line { stroke-dasharray: 4 3; animation: dash 20s linear infinite; }
  @keyframes dash { to { stroke-dashoffset: -100; } }
  .pka-orch-row { display: flex; justify-content: center; }
  .pka-orch-node { padding: 16px 28px; border-radius: 12px; background: #171717; border: 1px solid #262626; text-align: center; }
  .pka-orch-eyebrow { font-size: .625rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #a3a3a3; margin-bottom: 4px; }
  .pka-orch-title { font-size: 1rem; font-weight: 700; color: #fff; }
  .pka-orch-sub { font-size: .6875rem; color: #a3a3a3; margin-top: 2px; }
  .pka-tool-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
  .pka-tool-pill { padding: 6px 12px; font-size: .6875rem; font-weight: 500; border-radius: 999px; border: 1px solid #e5e5e5; background: #fff; color: #525252; }
  .pka-detail {
    margin-top: 24px; border-radius: 12px; border: 1px dashed #e5e5e5; background: #fafafa;
    padding: 16px; font-size: .875rem; color: #525252; transition: opacity 0.2s ease, max-height 0.3s ease;
  }
  .pka-detail-label { font-weight: 600; color: #262626; }
</style>

<div class="pka-diagram">

  <!-- Context row -->
  <p class="pka-context-label">Three contexts, one orchestration layer</p>
  <div class="pka-context-row">
    <button class="pka-node" data-context="work" onclick="selectContext(this)">
      <div class="pka-node-eyebrow">Work</div>
      <div class="pka-node-title">NACC · UW</div>
      <div class="pka-node-sub">Research, comms, directory</div>
    </button>
    <button class="pka-node" data-context="ventures" onclick="selectContext(this)">
      <div class="pka-node-eyebrow">Ventures</div>
      <div class="pka-node-title">9 Projects</div>
      <div class="pka-node-sub">Apps, sites, content engine</div>
    </button>
    <button class="pka-node" data-context="life" onclick="selectContext(this)">
      <div class="pka-node-eyebrow">Life</div>
      <div class="pka-node-title">Personal</div>
      <div class="pka-node-sub">Family, finances, health</div>
    </button>
  </div>

  <!-- Connectors down to center -->
  <div class="pka-connector-wrap">
    <svg class="pka-connector" viewBox="0 0 540 32" fill="none">
      <line x1="90" y1="0" x2="270" y2="32" stroke="rgb(167 139 250)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="270" y2="32" stroke="rgb(251 191 36)" stroke-width="1.5"/>
      <line x1="450" y1="0" x2="270" y2="32" stroke="rgb(52 211 153)" stroke-width="1.5"/>
    </svg>
  </div>

  <!-- Central orchestration node -->
  <div class="pka-orch-row">
    <div class="pka-orch-node">
      <div class="pka-orch-eyebrow">Orchestration layer</div>
      <div class="pka-orch-title">Claude Code + PKA System</div>
      <div class="pka-orch-sub">SOUL.md · MEMORY.md · hot.md · thread files · skills</div>
    </div>
  </div>

  <!-- Connectors down to tools -->
  <div class="pka-connector-wrap">
    <svg class="pka-connector" viewBox="0 0 540 32" fill="none">
      <line x1="270" y1="0" x2="90" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="190" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="270" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="350" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
      <line x1="270" y1="0" x2="450" y2="32" stroke="rgb(163 163 163)" stroke-width="1.5"/>
    </svg>
  </div>

  <!-- Tool row -->
  <div class="pka-tool-row">
    <span class="pka-tool-pill">OpenBrain (Postgres)</span>
    <span class="pka-tool-pill">n8n Automation</span>
    <span class="pka-tool-pill">Vikunja Tasks</span>
    <span class="pka-tool-pill">Granola</span>
    <span class="pka-tool-pill">Obsidian</span>
    <span class="pka-tool-pill">Asana</span>
    <span class="pka-tool-pill">Google Workspace</span>
    <span class="pka-tool-pill">Wispr Flow</span>
    <span class="pka-tool-pill">Kip (Telegram)</span>
  </div>

  <!-- Context detail panel -->
  <div id="pka-detail" class="pka-detail hidden">
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
  content.innerHTML = '<span class="pka-detail-label">' + detail.label + '</span><br/>' + detail.detail;
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
