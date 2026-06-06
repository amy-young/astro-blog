---
layout: ../../../layouts/project.astro
title: Personal Knowledge System
description: A living AI orchestration layer that spans work, ventures, and life — built to compound over time and free up the work that actually matters.
status: active
category: personal
startDate: 2024
tags: ["Claude Code", "AI Agents", "Obsidian", "n8n", "Postgres", "Self-hosted"]
---

For most of my career as an entrepreneur, I ran on people.

When I had my digital marketing consulting company, I'd assemble teams — web designers, copywriters, brand developers — and coordinate them around a research foundation I'd built. My background is in market research and sociology, so I'd lead with discovery: understanding the market, the audience, the positioning. That research would funnel into a rebrand, a website redesign, automated funnels, social media systems. Each person had their expertise. The work was good. But the operational overhead was real — enormous energy spent just keeping people coordinated, informed, and moving in the same direction.

I was always more drawn to the work that moved the needle: the insight, the strategy, the thing that actually changed something. The operational layer was a tax on that.

Now I'm building subagents and AI assistants to handle much of what those teams used to do. Not as a replacement for human creativity — but as a way to get back to working on what matters. That shift is what this system is built around.

---

## What it actually is

My PKA (Personal Knowledge and Action) system is a Claude Code-based AI orchestration layer that spans three contexts: my day job at the University of Washington, nine personal ventures I'm actively building, and my personal life. It's not a note-taking app or a task manager. It's a system that knows who I am, what I'm working on, and what I need — and acts on that knowledge across every session.

I think of it as a **life operating system** — not a product you finish, but infrastructure you build over time. It is, by design, never complete. The longer I invest in it, the better it gets.

I also use Obsidian for longer-form knowledge and reference material, and Wispr Flow as my daily driver for input. Wispr Flow isn't just for capturing ideas on the go — it's how I interact with my system throughout the day, dictating context, thoughts, and instructions at the speed of speech. The productivity gain from voice-first input is hard to overstate once you've built your workflow around it.

---

## Standing on shoulders

I didn't build this in isolation. The AI builder community has been extraordinarily generous with their thinking, and my system is a direct product of that generosity.

It started with **OpenClaw**, which introduced concepts like `SOUL.md` — a file that defines your personality and working style — and persistent memory across sessions. The ideas were compelling, but early on the project had real security concerns that gave a lot of us pause.

**Cole Medin** (if you're not watching his YouTube channel, start there) took the best of what OpenClaw introduced and rebuilt it properly using Claude Code. His approach to structuring context, routing between tasks, and keeping the system lean was hugely influential on how I designed my own.

**Goda Go** developed her own Claude Code-based system with a similar philosophy, and seeing multiple people arrive at similar architectural decisions independently gave me confidence I was on the right track.

**Ev Chapman** introduced me to the concept of threads — dedicated files for tracking every active project, capturing where you left off, what progress has been made, and what the next move is. This sounds simple, but it changed everything. Now I can ask my system "where did we leave off on the travel app?" and pick up exactly where we stopped. No reconstruction, no lost context. That alone is one of the biggest time savers in the system.

**Nate Jones** from AI News and Strategy Daily developed the OpenBrain concept — a database-backed system for capturing and retrieving everything he processes: research, meeting notes, content, ideas. When Andrej Karpathy introduced his wiki concept, Nate layered that on top of OpenBrain to create a living, connected knowledge base. I use that system too, adapted to self-hosted Postgres rather than Supabase — since Postgres is the foundation Supabase is built on anyway, and self-hosting is always my first choice.

I'm a committed open-source advocate. If I can self-host a high-quality, well-supported tool for free, that's what I do. The entire infrastructure for this system — database, task manager, automation layer, and this website — runs on a single self-hosted VPS.

---

## The cumulative flywheel

This is the part that matters most, and the part that's hardest to explain until you've experienced it.

Every meeting I have is logged. Every conversation with my AI agent is captured. Every platform decision, every research thread, every insight worth keeping — it goes into the system. OpenBrain stores it. The wiki organizes it. Thread files track where each project stands.

The system doesn't just remember what I told it. It builds on it. Each session starts with more context than the last. Decisions I made six months ago inform decisions I'm making today. Research I did for one project surfaces when it's relevant to another. The knowledge connects, and the connections compound.

That flywheel is why this is a long-term investment, not a setup project. The value isn't in what the system does on day one. It's in what it becomes after a year of consistent use.

---

## A philosophy of continuous evolution

One of my favorite things to do when a new framework or agent harness gets traction is sit down with Claude, pull up the repo, and go through it systematically. We review the architecture, the design decisions, the ideas that are genuinely new — and I identify what's worth incorporating into my system.

I did this recently with the Hermes agent. Not to switch systems, but to look for what's best-in-class and add it to what I've already built.

The result is a system that's mine — structured around how I actually think and work — but continuously enriched by the best ideas coming out of the broader community. The builders who share their work openly make that possible.

---

## Model-agnostic by design

One of the most important architectural decisions I made early on: **don't build yourself into a single model.**

Different LLMs have genuine strengths. I use Claude Code for the majority of my work, but I still reach for ChatGPT and Codex for specific workflows where they shine. Because I work in VS Code, I can use extensions to bring different models into the same environment without changing my workflow.

I also manage my tokens deliberately. I maintain subscriptions to both Claude and ChatGPT — work and personal accounts for each — and I route work accordingly:

- **Claude Desktop (work account)** — connected to my PKA system's `work/` folder only. Work tokens for work activities.
- **Claude Code (personal account)** — for personal ventures, app builds, and system development.
- **Claude Desktop (personal account)** — also connected to the personal knowledge system for a different interaction mode.
- **ChatGPT / Codex** — for specific workflows where those models have an edge.

This sounds like overhead, but in practice it's frictionless — and it means I'm never locked in, never rate-limited at a critical moment, and never paying work tokens for personal projects or vice versa.

---

## How it's structured

The system lives in a single folder with three sub-contexts — `work/`, `ventures/`, and `life/` — each with its own routing file, index, and thread files for active projects. A master routing layer at the root directs each session to the right context.

Key files loaded at the start of every session:

- `SOUL.md` — my personality, working style, and rules for how the AI should show up
- `USER.md` — who I am, my background, how I work best
- `hot.md` — what's most urgent right now
- `MEMORY.md` — a curated index of key decisions and lessons across all past sessions

The AI never loads everything — just what's relevant to the current task.

---

## The tooling

| Tool | Role |
|------|------|
| Claude Code | Primary orchestration layer |
| Wispr Flow | Voice-first daily input |
| Obsidian | Long-form knowledge and reference |
| OpenBrain (Postgres) | Cross-session knowledge capture and retrieval |
| Wiki layer | Connected knowledge organization |
| Vikunja | Self-hosted task management |
| Asana | Institutional task management |
| Granola | Meeting transcription → thread files |
| Google Workspace | Calendar, Gmail, Drive |
| Firecrawl | Web research and content ingestion |
| n8n | Automation workflows |

---

## What it feels like to use

It feels like working with someone who actually knows you.

I open a session, run a morning brief, and get a cross-context orientation — what's urgent, what's in flight, what needs a decision today. Before a call, I pull a meeting brief: calendar context, the relevant thread file, notes on the people involved. At the end of the day, the system processes what I captured, routes it to the right files, previews tomorrow, and updates priorities.

The skills compound. Every workflow I formalize is one I never have to think about again. Every decision I log becomes context for the next session. What used to require a coordinated team now runs through a system I built — and continue to build.

---

## If you want to build one

Start smaller than you think. One context, one skill, one memory file. Follow the builders who are doing this work in public — Cole Medin, Goda Go, Nate Jones, Ev Chapman are all worth your time. Look at what resonates with how you actually think. Adapt it. Make it yours.

Build it model-agnostic from the start. The landscape shifts too fast to bet everything on one provider.

And when new frameworks come out, don't feel pressure to adopt them wholesale. Pull up the repo, look at what's genuinely new, take what's best-in-class, and leave the rest.

The tools are available to anyone. What matters is deciding what the system is *for* — which specific tax you're tired of paying, and what work you'd rather be doing instead. The more you invest in it, the more it gives back. That's the whole idea.
