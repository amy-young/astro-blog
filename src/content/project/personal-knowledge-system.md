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

<figure class="pkd">

<svg class="pkd-sprite" aria-hidden="true" focusable="false">
<defs>
<symbol id="i-cal" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="1.8"/><line x1="8" y1="3" x2="8" y2="7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="16" y1="3" x2="16" y2="7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="i-inbox" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 13h5l2 3h4l2-3h5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="12" y1="2" x2="12" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><polyline points="8.5,6.5 12,10 15.5,6.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></symbol>
<symbol id="i-mic" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 10a7 7 0 0 0 14 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="i-search" viewBox="0 0 24 24"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="15" y1="15" x2="20" y2="20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="i-pencil" viewBox="0 0 24 24"><path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="13.5" y1="6.5" x2="17.5" y2="10.5" stroke="currentColor" stroke-width="1.8"/></symbol>
<symbol id="i-spark" viewBox="0 0 24 24"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="currentColor"/></symbol>
<symbol id="i-flow" viewBox="0 0 24 24"><circle cx="5" cy="6" r="2.3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="19" cy="6" r="2.3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="18" r="2.3" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="7.3" y1="6" x2="16.7" y2="6" stroke="currentColor" stroke-width="1.8"/><path d="M6 8l4.8 8.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M18 8l-4.8 8.2" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><polyline points="3,6.5 12,13 21,6.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></symbol>
<symbol id="i-term" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><polyline points="6,9 10,12 6,15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="15" x2="17" y2="15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="i-import" viewBox="0 0 24 24"><path d="M12 3v11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><polyline points="7,9 12,14 17,9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="i-folder" viewBox="0 0 24 24"><path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></symbol>
<symbol id="i-db" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol>
<symbol id="i-tag" viewBox="0 0 24 24"><path d="M12 2h7a1 1 0 0 1 1 1v7a1 1 0 0 1-.3.7l-9 9a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 0-1.4l9-9A1 1 0 0 1 12 2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="15.5" cy="6.5" r="1.4" fill="currentColor"/></symbol>
<symbol id="i-book" viewBox="0 0 24 24"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="4" y1="19" x2="20" y2="19" stroke="currentColor" stroke-width="1.8"/></symbol>
<symbol id="i-doc" viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><polyline points="15,2 15,7 20,7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
<symbol id="i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol>
<symbol id="i-list" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="3.5" cy="6" r="1.1" fill="currentColor"/><circle cx="3.5" cy="12" r="1.1" fill="currentColor"/><circle cx="3.5" cy="18" r="1.1" fill="currentColor"/></symbol>
<symbol id="i-bolt" viewBox="0 0 24 24"><polygon points="13,2 3,14 11,14 9,22 21,10 13,10" fill="currentColor"/></symbol>
<symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 2c-1.2 3.6-5 5.6-5 10a5 5 0 0 0 10 0c0-1.6-.7-2.6-1.6-3.4.1 1.6-.7 2.6-1.7 2-1-.6-.3-2.2-1-3.8-.6 1.6-2 2.8-1.6 4.4-1-1-1.1-2.6.9-9.2z" fill="currentColor"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24"><line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="14,6 20,12 14,18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-loop" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5.2M20 12a8 8 0 0 1-14 5.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="18,3 18,7 14,7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="6,21 6,17 10,17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
</defs>
</svg>

<div class="pkd-stages">

<section class="pkd-stage" aria-labelledby="pkd-s1">
  <div class="pkd-stage-head">
    <span class="pkd-num">1</span>
    <h3 id="pkd-s1" class="pkd-stage-title">Capture<span class="pkd-stage-sub">Everything worth remembering, from anywhere</span></h3>
  </div>
  <ul class="pkd-rows">
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-cal"/></svg></span><span><span class="pkd-row-label">Granola</span><span class="pkd-row-detail">Meeting notes, captured automatically as they happen</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-inbox"/></svg></span><span><span class="pkd-row-label">Drive _INBOX</span><span class="pkd-row-detail">PDF, DOCX, and Markdown, dropped for processing</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-play"/></svg></span><span><span class="pkd-row-label">YouTube playlists</span><span class="pkd-row-detail">Watched twice daily, transcripts pulled automatically</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-mic"/></svg></span><span><span class="pkd-row-label">Telegram bot Kip</span><span class="pkd-row-detail">Text or voice from a phone, routed by prefix</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-search"/></svg></span><span><span class="pkd-row-label">/venture-research</span><span class="pkd-row-detail">Scheduled Perplexity pulls across four venture categories</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-pencil"/></svg></span><span><span class="pkd-row-label">scratch-today.md</span><span class="pkd-row-detail">The fastest place to write something down</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-spark"/></svg></span><span><span class="pkd-row-label">capture_thought</span><span class="pkd-row-detail">A direct MCP write into the knowledge graph</span></span></li>
  </ul>
</section>

<div class="pkd-connector" aria-hidden="true"><svg><use href="#i-arrow"/></svg></div>

<section class="pkd-stage" aria-labelledby="pkd-s2">
  <div class="pkd-stage-head">
    <span class="pkd-num">2</span>
    <h3 id="pkd-s2" class="pkd-stage-title">Process<span class="pkd-stage-sub">Raw input becomes structured knowledge</span></h3>
  </div>
  <ul class="pkd-rows">
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-flow"/></svg></span><span><span class="pkd-row-label">n8n pipeline</span><span class="pkd-row-detail">Gemini synthesizes raw drops into structured notes</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-mail"/></svg></span><span><span class="pkd-row-label">Digest mining</span><span class="pkd-row-detail">The daily YouTube digest, mined for what's worth keeping</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-term"/></svg></span><span><span class="pkd-row-label">/ingest</span><span class="pkd-row-detail">Raw captures promoted into the compiled wiki</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-term"/></svg></span><span><span class="pkd-row-label">/panning-for-gold</span><span class="pkd-row-detail">Voice transcripts and brain dumps split into threads</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-import"/></svg></span><span><span class="pkd-row-label">obsidian-vault-import</span><span class="pkd-row-detail">Deduplicated import into the Obsidian mirror</span></span></li>
  </ul>
</section>

<div class="pkd-connector" aria-hidden="true"><svg><use href="#i-arrow"/></svg></div>

<section class="pkd-stage" aria-labelledby="pkd-s3">
  <div class="pkd-stage-head">
    <span class="pkd-num">3</span>
    <h3 id="pkd-s3" class="pkd-stage-title">Store<span class="pkd-stage-sub">Three contexts, one Postgres brain</span></h3>
  </div>
  <div class="pkd-folders">
    <span class="pkd-folder"><svg><use href="#i-folder"/></svg>work/</span>
    <span class="pkd-folder"><svg><use href="#i-folder"/></svg>ventures/</span>
    <span class="pkd-folder"><svg><use href="#i-folder"/></svg>life/</span>
  </div>
  <div class="pkd-brain">
    <div class="pkd-brain-head"><svg><use href="#i-db"/></svg><span class="pkd-brain-name">OpenBrain (Postgres + pgvector)</span></div>
    <ul class="pkd-brain-list">
      <li>Facts &amp; entities</li>
      <li>Relationships</li>
      <li>Embeddings</li>
      <li>Full text</li>
      <li>Metadata</li>
    </ul>
  </div>
</section>

<div class="pkd-connector" aria-hidden="true"><svg><use href="#i-arrow"/></svg></div>

<section class="pkd-stage" aria-labelledby="pkd-s4">
  <div class="pkd-stage-head">
    <span class="pkd-num">4</span>
    <h3 id="pkd-s4" class="pkd-stage-title">Synthesize<span class="pkd-stage-sub">Facts become connected, readable pages</span></h3>
  </div>
  <ul class="pkd-rows">
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-tag"/></svg></span><span><span class="pkd-row-label">Entity extraction</span><span class="pkd-row-detail">An hourly worker turns thoughts into named entities</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-book"/></svg></span><span><span class="pkd-row-label">Wiki compiler</span><span class="pkd-row-detail">Synthesizes captures into connected reference pages</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-doc"/></svg></span><span><span class="pkd-row-label">Content briefs</span><span class="pkd-row-detail">Freshness-aware summaries for active projects</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-grid"/></svg></span><span><span class="pkd-row-label">122 entity pages</span><span class="pkd-row-detail">Cached answers to "who or what is X"</span></span></li>
  </ul>
</section>

<div class="pkd-connector" aria-hidden="true"><svg><use href="#i-arrow"/></svg></div>

<section class="pkd-stage" aria-labelledby="pkd-s5">
  <div class="pkd-stage-head">
    <span class="pkd-num">5</span>
    <h3 id="pkd-s5" class="pkd-stage-title">Retrieve<span class="pkd-stage-sub">The lowest-cost layer that answers the question</span></h3>
  </div>
  <ul class="pkd-rows">
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-flame"/></svg></span><span><span class="pkd-row-label">hot.md</span><span class="pkd-row-detail">What's most urgent, read at session start</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-list"/></svg></span><span><span class="pkd-row-label">MEMORY.md</span><span class="pkd-row-detail">Curated facts and preferences, already indexed</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-bolt"/></svg></span><span><span class="pkd-row-label">Manifest search</span><span class="pkd-row-detail">Finds the right file, zero tokens spent</span></span></li>
    <li class="pkd-row"><span class="pkd-row-icon"><svg><use href="#i-search"/></svg></span><span><span class="pkd-row-label">search_thoughts</span><span class="pkd-row-detail">Semantic search over the graph, one embed call</span></span></li>
  </ul>
  <p class="pkd-tagline">Right answer. Every time.</p>
</section>

</div>

<div class="pkd-loop">
  <span class="pkd-loop-label"><svg><use href="#i-loop"/></svg>Every retrieval feeds back into the brain</span>
</div>

<div class="pkd-strip">
  <div>
    <span class="pkd-strip-lbl">Local workstation</span>
    <p>Claude Code, session hooks, and the skill estate, running on Windows.</p>
  </div>
  <div>
    <span class="pkd-strip-lbl">Hostinger VPS</span>
    <p>Docker and Caddy, running Postgres, n8n, and the entity-extraction worker.</p>
  </div>
  <div class="pkd-ladder">
    <span class="pkd-strip-lbl">Retrieval ladder</span>
    <ol>
      <li><span><strong>hot.md</strong> &mdash; 0 tokens &mdash; session-start orientation</span></li>
      <li><span><strong>MEMORY.md</strong> &mdash; 0 tokens &mdash; curated facts and preferences</span></li>
      <li><span><strong>Manifest search</strong> &mdash; 0 tokens, deterministic &mdash; finds the file or section</span></li>
      <li><span><strong>OpenBrain search</strong> &mdash; 1 embed call &mdash; atomic thoughts and fragments</span></li>
      <li><span><strong>Entity pages</strong> &mdash; 0 tokens &mdash; cached graph synthesis</span></li>
    </ol>
  </div>
</div>

<p class="pkd-foot">
  <span>Last verified Aug 15, 2026 &middot; Source of truth: <code>PKA-ARCHITECTURE.md</code></span>
  <a href="/assets/images/pka-system-architecture.webp" target="_blank" rel="noopener">View the full map (image)
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
  </a>
</p>

</figure>

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
