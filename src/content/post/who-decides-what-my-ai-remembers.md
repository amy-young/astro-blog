---
layout: ../../layouts/post.astro
title: Who decides what my AI remembers?
description: "Two recent critiques of Claude Code's auto-memory say the defaults pile up stale instructions that get treated as current. They're right. Here's how my system decides what gets remembered, the two places it was weakest, and what my first audit turned up."
dateFormatted: Nov 2, 2026
tags: ["Memory", "Context Engineering", "PKA System", "Claude Code"]
heroImage: /assets/images/posts/who-decides-what-my-ai-remembers-hero.webp
---

This article started with a simple question to my system: where did we leave off?

The answer came back fast and sure of itself. A handoff note from eleven days earlier (a short summary and set of instructions, written when I move work to another session or park it for later, so the agent can pick right back up) said I'd planned this piece, and that before writing it I needed to fix three stale facts on the project page for my personal knowledge system: an old meeting tool, a pipeline still marked "in progress," and a work setup that had since moved into its own repo. I said yes, let's fix them. Then Claude opened the live page. All three had been fixed nine days earlier, by a different session, in a different repo. Nobody told the handoff.

Nothing broke. But for a few minutes my system was confidently planning work that was already done, because a document it trusted described the world as it was on the day that document was written. That's the problem with AI memory in one small scene, and it happened in a system I built around memory on purpose.

## Both critiques are right about the defaults

*So does a hand-curated setup actually answer them, or just move the problem somewhere else?*

Brent W. Peterson went looking at what Claude Code's auto-memory had captured after months of daily use across 13 projects, and found 12 lines. His read ([Automatic Memory Is Not Learning](https://medium.com/@brentwpeterson/automatic-memory-is-not-learning-4191f548df4c)) is that "Claude decides what to remember," and what it keeps is the what without the why. Elliot M. ([Claude Auto-Memory: A brief rant](https://elliotmilco.substack.com/p/claude-auto-memory)) adds that the index loads into every session, "a file the user does not maintain, and probably never looks at," and that nothing in it ever expires.

I checked my own setup against both of them, point by point, and the answer splits cleanly in two.

The first two land on things I'd already built. My memory folder held about 119 files, and almost every one was written on purpose: at the end of a session, or after a correction. And every memory that records a correction or a project fact has to carry a **Why:** line, because a rule without its reason is exactly the kind that gets followed long after the reason is gone.

The other two didn't land anywhere. Memory writes showed up in my git history after the fact, which is visibility, not attention: I could see them if I looked, and mostly I didn't. And nothing expired. I had markers for superseded memories and a quarterly audit, both manual, both easy to skip. Elliot's "never-ending log of stale docs which are treated as evergreen guidance" described my system more accurately than I'd have liked.

(The full point-by-point comparison is at the end, for anyone who wants to check the work.)

## Claude suggests, I decide

*Isn't "I decide what gets remembered" just a nicer way of saying "I do all the work"?*

My CLAUDE.md, the instruction file every session reads, has a rule for when I say "remember this." I never say it. It's a sticky note: one fact, mid-session, my pick. It turns out that's not how I work.

What I actually rely on is a full end-of-session review. When a session wraps up I run /log-this, and Claude reads the whole session back: what we worked on, what was decided and why, what changed, what's next. It writes the daily log and updates the project thread. For memory, it doesn't write anything on its own. It suggests the things it thinks should carry into future sessions, and I decide which ones stay.

The timing matters as much as the confirming. Working with AI, you go through several iterations, adding context, until you've got what you need. I don't need every one of those steps remembered. I want the end of the session, where we arrived at something workable, whether that's writing, analysis or design: the finished product, at least for now (because you'll iterate on it again), and the process it took to get there. Capture the destination and the route, not every wrong turn.

Some of what I do doesn't need to be remembered at all. A quick one-off email. A personal task. That said, I capture about 95% of what I do, because it all adds to the context. So wanting control over memory hasn't made me keep less. What I want is to be the one deciding.

This was always part of the design. My memory runs in layers: thread files for each active project, a wiki compiled from raw notes (Andrej Karpathy's idea), and OpenBrain, a self-hosted database for searching by meaning (Nate Jones's design, which I followed when he released it). As a researcher, having access to a robust database is critical, and so is knowing the context a question is being asked in, not just the question. Context engineering is the natural evolution of that habit. And the longer I work this way, the more the collected examples and outcomes guide the next ones. The next blog post or the next design starts from the last ones that worked.

So who decides what my AI remembers? Claude suggests the memory. I decide what stays.

## Visibility isn't attention, and nothing expired

*So what does closing the two weak spots actually look like?*

Two small scripts, both hooks: they run by themselves at a fixed moment, with no model involved and nothing for me to remember.

The first fires every time a memory file is written and shows a one-line notice naming it. It doesn't ask my permission, but I see the write when it happens instead of in a git log I don't read.

The second runs at the start of every session and stays silent unless something needs attention. It flags memories due for review: a project memory untouched for 60 days, a reference memory after 120, or any memory with its own review date. Durable preferences can be marked to never expire. It also warns when the memory index nears 200 lines, the point where Claude Code quietly stops loading the rest, a truncation nothing else warns you about.

An old memory gets flagged, never deleted automatically. A person decides.

The first run flagged 32 memories. I went through them in batches of eight, checking each against the current state of my files rather than its date. Eleven got deleted. About twenty got corrected or confirmed. Sixteen were marked as never expiring. A third of what got flagged was wrong or redundant.

The worst one was about the contact form on this site. The memory said "staging only, do not merge." The form had been live for two months. A session trusting it would have treated a shipped feature as on hold.

Doing the audit was honestly great: finding out where my system actually was, and then making the corrections. It also made the case for doing it again. The AI field changes constantly. New models come out, new skills come out, and what I was doing three months ago shifts with each release. Some memories don't go wrong because they were written badly. They go wrong because the world they describe has moved.

## Memory is bigger than the memory folder

*If the memory folder is clean now, why did the opening scene still happen?*

Because the handoff that sent me to fix an already-fixed page isn't a memory file. Neither is the "remember this" rule, which led Claude to describe my habits from a line I wrote once and never used. And neither was the case that first showed me this: Claude read an old handoff and told me a past project "only went halfway," so I chose to finish it. It had shipped two months earlier, been compared side by side, and been reverted on purpose. The daily log said so. The handoff didn't.

Every case of stale memory I could find lived outside the memory folder. Anything an agent reads at the start of a session and believes is memory.

So I extended the health check to my handoffs. A handoff gets flagged if a later daily log mentions it and the handoff was never updated, or if it hasn't been touched in a month without being marked closed. First run: 9 of 31 flagged. Three had been named in later logs without being updated; six hadn't been touched in over a month.

It wouldn't have caught the one that started this article. That fix happened in a different repo, and nothing pointed back. Some staleness only shows up when you open the thing itself.

## Do your own audit

*Where would I even start?*

Open your MEMORY.md, or whatever your agent reads at the start of a session, and check each entry against what's true today. Not its date. What's true. Then look for the files that act like memory without being called memory: handoff notes, instruction files, the project doc you wrote once and kept trusting.

If you're running Claude Code's auto-memory as it ships, start with what Brent did: go look at what it captured. If you've built your own system, check whether anything in it can tell you a memory has gone stale, or whether that depends on you happening to notice.

Elliot ends his piece saying document memory should be colocated, have a lifecycle and be vendor-neutral, and that even then it's brittle. I agree with all of it. The difference I've found is that brittle and unchecked are not the same thing. The memory folder was the easy part. The next place I'm looking is everywhere else my system keeps what it believes.

## The full comparison

Elliot and Brent between them name eleven distinct problems with Claude Code's auto-memory. Here's how my setup measures against each one.

| What they found | How my setup handles it | Does it hold? |
|---|---|---|
| Claude decides what to keep; Brent found 12 lines after months of use | About 119 memory files, almost all written on purpose, at end-of-session reviews and after corrections | Yes |
| Memory captures the what, not the why (Brent) | Every feedback and project memory carries a **Why:** line and a **How to apply:** line | Yes, loosely enforced |
| Per-project silos (Brent) | One repo spans work, ventures and life, plus a self-hosted semantic brain shared across sessions | Yes |
| Flat notes, no relationships (Brent) | 220 links between memory files, plus entity extraction in the brain | Mostly: links, not typed edges |
| The layers don't connect (Brent) | One recall order: loaded memory first, then the brain, then say "not found," citing the source either way | Yes, as a rule |
| Trivia sits beside durable preferences (Elliot) | Every memory has a type (user, feedback, project, reference), and nothing the repo already records gets saved | Mostly |
| Stored outside the project, unversioned (Elliot) | A session-start script mirrors the memory folder into the repo, where it's committed | Yes, with a seam: the source still lives in `~/.claude` |
| Doesn't transfer to collaborators (Elliot) | I work alone, and my work sessions are deliberately walled off from personal memory | Doesn't apply |
| Vendor lock-in (Elliot) | Plain markdown and self-hosted Postgres | Partly: the data is portable, the loading behavior isn't |
| Silent writes nobody reads (Elliot) | Was: changes visible in git after the fact. Now: a notice on every write | Was weak; now visible, still not consent |
| Nothing expires (Elliot) | Was: manual markers and a quarterly audit. Now: a session-start check flags memories due for review | Was weak; now flagged, a person decides |
