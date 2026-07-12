---
layout: ../../layouts/project.astro
title: Personal Knowledge System
description: A living AI orchestration layer that spans work, ventures, and life, built to compound over time and free up the work that actually matters.
status: active
category: personal
startDate: "2024"
tags: ["Claude Code", "AI Agents", "Obsidian", "n8n", "Postgres", "Self-hosted"]
---

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

For most of my career, I've been an entrepreneur - executing projects for clients by finding and working with great people.

When I had my digital marketing consulting company, I'd assemble teams - web designers, copywriters, brand developers, and programmers - and coordinate them around a research foundation I'd built. My background is in market research and sociology, so I'd lead with discovery: understanding the market, the audience, the positioning. That research would funnel into a rebrand, a website redesign, automated funnels, social media systems. Each person had their expertise. The work was good. But the operational overhead was real - enormous energy spent just keeping people coordinated, informed, and moving in the same direction.

I was always more drawn to the work that moved the needle: the insight, the strategy, the thing that actually changed something. The operational layer consumed time I would rather have spent on the work itself.

Now I'm building subagents and AI assistants to handle much of what those teams used to do. Not as a replacement for human creativity - but as a way to get back to working on what matters. That shift is what this system is built around.

---

## What it actually is

My PKA (Personal Knowledge Assistant) system is a model-agnostic AI orchestration layer that spans three contexts: my day job at the University of Washington, nine personal ventures I'm actively building, and my personal life. It's not a note-taking app or a task manager. It's a system that knows who I am, what I'm working on, and what I need - and acts on that knowledge across every session.

I think of it as a **life operating system** - not a product you finish, but infrastructure you build over time. It is, by design, never complete. The longer I invest in it, the better it gets.

I also use Obsidian as a mirror of my PKA system and as the destination for my meeting notes, which flow in automatically from Granola. I've always admired people who were disciplined about maintaining an Obsidian vault and taking daily notes - but those systems always required so much manual upkeep that I could never stick with it. Now I've built the automations and orchestration so it happens on its own. When I want to explore my knowledge visually, I can open Obsidian's graph view and see the entire PKA system and everything in it. The content is there. I just didn't have to maintain it by hand.

Wispr Flow is my daily driver for input - not just for capturing ideas on the go, but for how I interact with my system throughout the day, dictating context, thoughts, and instructions at the speed of speech. The productivity gain from voice-first input is hard to overstate once you've built your workflow around it.

---

## Standing on shoulders

I didn't build this in isolation. The AI builder community has been extraordinarily generous with their thinking, and my system is a direct product of that generosity.

It started with **Cole Medin** (if you're not watching his YouTube channel, start there). OpenClaw had just come out at the time, and while the concepts were compelling - `SOUL.md` for defining your personality and working style, `MEMORY.md` for persistent memory across sessions - there were real security concerns being raised early on. Cole wanted more control, so he built his own system using Claude Code, taking the best ideas and implementing them on his own terms. His approach to structuring context, routing between tasks, and keeping the system lean was hugely influential on how I designed my own.

This is actually a pattern worth internalizing: once you've built your own system, you don't wholesale replace it when something new comes out. You might run a separate instance to explore it - on a spare machine, a VPS, a sandboxed environment - but what you're really doing is identifying the best-in-class concepts and integrating those into what you've already built. Your system stays yours.

**Ev Chapman** introduced me to the concept of threads - dedicated files for tracking every active project, capturing where you left off, what progress has been made, and what the next move is. This sounds simple, but it changed everything. Now I can ask my system "where did we leave off on the travel app?" and pick up exactly where we stopped. No reconstruction, no lost context. That alone is one of the biggest time savers in the system.

**Nate Jones** from AI News and Strategy Daily developed the OpenBrain concept - a database-backed system for capturing and retrieving everything he processes: research, meeting notes, content, ideas. When Andrej Karpathy introduced his wiki concept, Nate layered that on top of OpenBrain to create a living, connected knowledge base. I use that system too, adapted to self-hosted Postgres rather than Supabase. Since Postgres is the foundation Supabase is built on, I decided to go straight to the source. Nate may well be on a paid Supabase plan - and that makes sense for his use case - but I've found that the open source versions of many tools are truncated compared to their paid counterparts, often missing the UX polish that makes them genuinely pleasant to use. So I went straight to Postgres and self-hosted it on my own VPS, skipping the Supabase layer entirely. I'm sure Supabase is great - but that's the beauty of building your own system. You get to make that call.

In practice, once everything is connected, I rarely interact with the database directly. I run queries, retrieve notes, and surface research right from inside my PKA system. The database is there doing its job quietly in the background.

I'm a committed open-source advocate. If I can self-host a high-quality, well-supported tool for free, that's what I do. The entire infrastructure for this system - database, task manager, automation layer, and this website - runs on a single self-hosted VPS.

---

## The cumulative flywheel

This is the part that matters most, and the part that's hardest to explain until you've experienced it.

Every meeting I have is logged. Every conversation with my AI agent is captured. Every platform decision, every research thread, every insight worth keeping - it goes into the system. OpenBrain stores it. The wiki synthesizes it into connected, navigable pages you can actually read and reference - not just search. Thread files track where each project stands.

The system doesn't just remember what I told it. It builds on it. Each session starts with more context than the last. Decisions I made six months ago inform decisions I'm making today. Research I did for one project surfaces when it's relevant to another. The knowledge connects, and the connections compound.

That flywheel is why this is a long-term investment, not a setup project. The value isn't in what the system does on day one. It's in what it becomes after a year of consistent use.

---

## A philosophy of continuous evolution

One of my favorite things to do when a new framework or agent harness gets traction is sit down with Claude, pull up the repo, and go through it systematically. We review the architecture, the design decisions, the ideas that are genuinely new - and I identify what's worth incorporating into my system.

I did this recently with the Hermes agent. Not to switch systems, but to look for what's best-in-class and add it to what I've already built.

The result is a system that's mine - structured around how I actually think and work - but continuously enriched by the best ideas coming out of the broader community. The builders who share their work openly make that possible.

---

## Model-agnostic by design

One of the most important architectural decisions I made early on: **don't build yourself into a single model.**

Different LLMs have genuine strengths. I use Claude Code for the majority of my work, but I still reach for ChatGPT and Codex for specific workflows where they shine. Because I work in VS Code, I can use extensions to bring different models into the same environment without changing my workflow.

I also manage my tokens deliberately. I maintain subscriptions to both Claude and ChatGPT - work and personal accounts for each - and I route work accordingly:

- **Claude Desktop (work account)** - connected to my PKA system's `work/` folder only, so work activities run on work tokens rather than my own.
- **Claude Code (personal account)** - for personal ventures, app builds, and system development.
- **ChatGPT / Codex** - for specific workflows where those models have an edge.

This sounds like overhead, but in practice it's straightforward. The goal is simply to maximize the tokens I have available and route work to the right account. I tend to gravitate toward the VS Code environment for most things - personal and work alike - but working with a colleague recently pushed me to explore the Claude Desktop app more seriously, both as a way to make better use of my work tokens and because it genuinely has great features. There's something to be said for running your morning brief in a well-designed UI rather than a terminal. It's a different mode, and sometimes that's exactly what you need.

---

## How it's structured

The system lives in a single folder with three sub-contexts - `work/`, `ventures/`, and `life/` - each with its own routing file, index, and thread files for active projects. A master routing layer at the root directs each session to the right context.

Key files loaded at the start of every session:

- `SOUL.md` - my personality, working style, and rules for how the AI should show up
- `USER.md` - who I am, my background, how I work best
- `hot.md` - what's most urgent right now
- `MEMORY.md` - a curated index of key decisions and lessons across all past sessions

The AI never loads everything - just what's relevant to the current task.

---

## The tooling

| Tool | Role |
|------|------|
| Claude Code | Primary orchestration layer |
| Wispr Flow | Voice-first daily input |
| Obsidian | Meeting notes, daily notes, and a visual mirror of the PKA system. The graph view makes connections across your knowledge visible in a way nothing else does. |
| OpenBrain (Postgres) | Persistent storage for everything worth remembering - the knowledge base that grows with every session. |
| Wiki layer | Synthesizes captured knowledge into interconnected reference pages - turns raw inputs into something you can actually navigate and read, like a personal encyclopedia that builds itself. |
| Vikunja | Self-hosted task management |
| Asana | Institutional task management |
| Granola | Meeting transcription and structured notes using templates like 1:1s and weekly meetings, routed automatically into thread files. Integrates well with other tools in the stack. |
| Google Workspace | Calendar, Gmail, Drive |
| Firecrawl | Web research and content ingestion |
| n8n | Automation workflows |
| YouTube | A primary learning source. I organize videos into playlists by topic, and I'm building a workflow to automatically pull transcripts, draft summaries, and route anything worth keeping into my knowledge base. In progress - and one I'm genuinely excited about. |

---

## What it feels like to use

It feels like working with someone who actually knows you.

I open a session, run a morning brief, and get a cross-context orientation - what's urgent, what's in flight, what needs a decision today. Before a call, I pull a meeting brief: calendar context, the relevant thread file, notes on the people involved. At the end of the day, the system processes what I captured, routes it to the right files, previews tomorrow, and updates priorities.

The skills compound. Every workflow I formalize is one I never have to think about again. Every decision I log becomes context for the next session. What used to require a coordinated team now runs through a system I built - and continue to build.

---

## If you want to build one

The most important thing: just start. It's okay to start small.

Pick one context - your work, one project, one area of your life that feels chaotic. Then find a framework or harness that resonates with you - one you trust. Research what other people are building so you can start to understand how these systems actually work. Because at the end of the day, it's a system of folders with markdown files. That's it. On your hard drive, or in the cloud if you prefer - but you have to start building.

From there, build incrementally. Watch YouTube - it's one of the best learning resources out there for this. When you find a video that resonates, copy the transcript into Claude and ask it what's valuable. Then ask it to integrate that into your system. Work with your LLM of choice - Claude, Codex, whatever you trust - and ask it to help you connect your apps: your calendar, your notes, your project management. Pretty soon you have an automated workflow. Then ask it to turn that into a skill, so you can start running a morning brief that pulls everything into one view. Do that enough times and the system starts to take shape on its own.

If you want to explore agent frameworks, try one. Hermes seems to be the most popular one right now. But don't feel pressure to adopt anything wholesale. The better approach is to pull up the repo, go through it with your AI, identify what's genuinely new or best-in-class, and fold that into what you've already built. Your system stays yours.

**Build it model-agnostic from the start.** The landscape shifts too fast to bet everything on one provider. Design your system so it can work with whatever tools make sense for a given task - and you'll never be locked in.

**Follow the builders who are doing this in public.** Cole Medin, Nate Hurk, Jack Roberts, Nate Jones, and Ev Chapman are all worth your time. They share their thinking openly and generously. But there are many great people doing incredible work out there - find someone you genuinely enjoy listening to, who resonates with how you think, and ideally someone with expertise in your particular space or vertical. Look at what they're building, adapt it, and make it your own.

Start learning. That's the most important thing. Start learning and start building. These AI skills are what employers are looking for - but more importantly, do it for yourself. A well-built system frees you from the operational grind: manually creating tasks, copying and pasting meeting notes, reorganizing files. It puts that time back toward the high-leverage work - planning, executing, developing applications and workflows that make your organization better. And when you get there, share it with your team. That's how it compounds beyond just you.

Most of all - don't let the chat window be the ceiling. So much of what people think AI can do is defined entirely by what they've experienced in a chat interface. When you start connecting your apps, your meetings, your knowledge, your ideas - when you bring it all into one place and let it compound - that's when something shifts. That's when it stops being a tool and starts feeling like something that actually knows you.

That's the magic. And it's available to anyone willing to start building.
