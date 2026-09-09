---
layout: ../../layouts/post.astro
title: The cheapest part of my loop never calls a model
description: "Loop engineering got named in June, and the bill arrived two months later. Here's the loop I actually run every day, and my fix for what makes loops expensive: get everything that never needed a decision off the model."
dateFormatted: Sep 8, 2026
tags: ["Loop Engineering", "AI Agents", "PKA System", "Claude Code", "Automation"]
heroImage: /assets/images/posts/the-cheapest-part-of-my-loop-never-calls-a-model-hero.webp
---

Loop engineering got its name in June. Boris Cherny, who leads Claude Code at Anthropic, put it plainly: "I don't prompt Claude anymore. I have loops running that prompt Claude and figuring out what to do. My job is to write loops." Addy Osmani, an engineering lead at Google Chrome, wrote [the essay that named the practice](https://addyosmani.com/blog/loop-engineering/) a few days later. The lineage people settled on runs prompt engineering, then context engineering, then harness engineering, then loops: the harness on a timer, spawning helpers, feeding itself.

What's actually in one? Osmani names five building blocks. Automations, which trigger a run and set its pace. Worktrees, isolated copies of a project so parallel runs don't collide. Skills, written-down capabilities an agent can reuse. Plugins and connectors, the hookups to outside tools and data. And sub-agents, helpers that take on subtasks and check each other's work. Underneath all five sits a sixth thing: memory, kept as external state. A markdown file or a board, something that lives outside any single conversation and holds what's done and what's next. The model forgets everything between runs, so that record has to be on disk rather than in the context window. Without it, a loop loses the thread between iterations.

The bill arrived about two months later.

Stanford's Digital Economy Lab ran the first systematic study of what agentic coding actually consumes, and the numbers are not subtle: agentic tasks burn roughly a thousand times as many tokens (the unit everything gets billed in) as ordinary code chat, runs on the identical task vary by up to 30x, and input tokens rather than output tokens drive the cost, because every step re-reads everything that came before it ([Stanford Digital Economy Lab, arXiv 2604.22750](https://arxiv.org/abs/2604.22750)). The finding that should change how people build: accuracy peaks at intermediate cost and then saturates. Spending more on the loop stops buying you results well before it stops buying you tokens.

The engineering critique landed in the same window and it's sharper than the cost one. A loop repeats, so a loop amplifies whatever the harness underneath it got wrong, and codecentric makes the point that a loop running unattended is also a loop making mistakes unattended.

I think both critiques are correct. I also think they're an argument for building loops differently, not for skipping them, because the expensive part of a loop and the useful part of a loop are not the same part.

Here's mine, in the order it actually runs.

## The cheapest part of my loop never calls a model

*Isn't this just a script with a new name on it?*

Three things fire on session start, every session, before I've said a word. They're hooks: small scripts the system runs by itself at a fixed moment, with no model involved and nothing for me to remember.

The first rebuilds the retrieval manifest, so the index of what's in the system reflects what's in the system rather than what was in it last Tuesday. The second reads my capture file and, if anything unrouted is sitting in it, prints the list straight into the session context along with the routing rules (task goes to the tracker, project update goes to the thread file, knowledge goes to the raw folder, no clear home goes to the inbox). The third syncs my skill files into the command layer, so a skill I edited yesterday is the skill I invoke today.

Zero tokens. All three.

None of them needs a model, and all three used to depend on one, which is the part that took me longest to see. My instructions file has told Claude to check the capture zone at the start of every session for months. It's a clear instruction, in a file that loads every time. And it worked most of the time, which is a different thing from working, because "most of the time" means the capture file quietly accumulates on exactly the days I'm busiest and least likely to notice.

A hook doesn't decide. It runs.

## Rules go in a hook. Judgment goes to the model.

*Fine, but where's the line?*

The rule I settled on is narrow enough to actually apply: if X always triggers Y with no judgment involved, it's a hook. If someone has to weigh something, it's a model call.

That rule is doing two jobs, and only one of them is about quality. Hooks run free and tokens don't, so every step I move off the model is a step that costs nothing and never varies. The other job is reliability, and it's the one I underrated: an instruction in a context file is something the model reads and then decides about, while a hook is something that happens. Those look similar on a good day and nothing alike on a bad one.

This is the angle I'd add to the loop-engineering conversation, which mostly gets discussed as a question of how to wire agents together. Most of what I built isn't wiring. It's deciding, case by case, which parts of my day don't need a model at all, and then making those parts mechanical so the model's attention lands on the parts that do.

The open question the field keeps naming, how much of a loop should be hard-coded and how much left to the model's own judgment, stops being abstract the moment you're running one. It's a line you redraw every few weeks, usually right after something slips. And every time I've moved that line, it has moved the same direction: more of the loop turns out to be mechanical than I assumed going in.

## Writing it down is cheaper than making the model read it again

*What actually carries from one session to the next?*

Not the conversation. The conversation is gone. What carries is state I wrote down on purpose, in three tiers that do three different jobs.

**Thread files** hold the current state of a project: phase, last updated, what got decided and why. One per project, appended to at the end of any session where something real happened.

**Daily logs** hold what happened on a given day, by context. Work, ventures, life, each in its own folder.

**hot.md** holds what's urgent right now, capped at a few hundred words, rewritten at the end of each working day. It exists so a new session can orient in one read instead of crawling twenty thread files trying to reconstruct where things stood.

Then the morning brief pulls it together: hot.md, memory, both calendars, work tasks from Asana, personal and venture tasks from Vikunja, birthdays inside seven days, anything left unrouted overnight. It comes back under 300 words and ends with one specific suggested first task, broken down small if something has been sitting overdue.

The Stanford finding about input tokens is worth sitting with here, because it explains why this structure is not just tidiness. The reason agentic work costs what it does is the snowball: each step re-reads the original prompt, the response, and everything since, so context accumulates and gets paid for again on every turn. A summary written down once and read once is the cheap version of remembering. Three hundred words of hot.md replaces a re-read of the entire week.

That's the whole loop, really. The hooks run before I arrive, the morning brief tells me where things stand, the work happens, an end-of-day routine writes down what changed, and hot.md carries it to tomorrow morning. None of that memory lives in the model. It lives in files I can open, edit, and argue with.

## The last pieces came from failures, not from design

*Did you plan all of this?*

No. The most useful pieces are all repairs.

In July I ran the end-of-day routine to close out a Sunday, and it asked me cold what was worth keeping from the day. I sat there reconstructing three separate pieces of work from memory, which is the opposite of what the routine exists to do. Asking someone at 6pm what mattered about their day is a terrible question, and I'd built it in without noticing.

The cause was visible in the files. Individual work sessions during the day don't reliably log anything when they close, so the day's record was scattered, some of it already written into project files, some in the daily log, some nowhere at all. The routine had never looked at any of that before asking.

Two changes, both the same day. The routine now scans before it asks: which project files were touched today, what's already in today's log, which tasks closed, what's already been captured. It shows me that list and asks what's missing, so recall from scratch became confirm and amend. Then a second hook, sixty-five lines, went after the cause rather than the symptom: if a project file changed today and no log entry exists for it, print one line suggesting I write one, once, then stay quiet. It never blocks anything. It just makes a specific kind of forgetting visible while it's still cheap to fix.

Then I re-ran the whole thing against that same Sunday to see whether it actually worked. It surfaced something I would have lost: a drive migration where I'd verified more than 140,000 files, written up in a project file, with no log entry and nothing captured anywhere else.

Noticed, fixed, and tested the same day. Neither change came from a design session. Both came from one evening where the routine annoyed me enough to go look at why.

## A loop running unattended is a loop failing unattended

*What's the catch?*

The critique I quoted at the top is the one I'd underline, and I'd extend it: hooks that only speak when something is wrong are wonderful right up until one of them is wrong.

I had a task-fetching script that had shipped, been wired into the morning brief, and never once worked, because the credential it needed was never created. The code was fine. Provisioning was a separate step, and it was the step that got skipped. For weeks the brief came back clean with the entire work half of my day missing, and the failure presented itself as good news: no tasks today.

That's the real cost of moving work out of the model, and it's a different cost than the token bill. A model that can't do something tends to say so. A script that can't do something returns an empty list, and an empty list looks exactly like a quiet day.

So a loop needs one more part that rarely makes the diagrams: something that periodically checks the loop. Mine is a quarterly audit that verifies each piece actually runs rather than trusting that it does, plus a standing rule that a new integration isn't finished when the code is written, it's finished when the credential works.

Build the loop. Then build the habit of not believing it.

## Where this leaves you

If the token numbers are what's making you hesitate: the fix isn't a smaller model, it's a smaller share of the loop that needs one. Start with the steps in your day that never involve a decision. Those are hooks, they cost nothing to run, and they're the highest-leverage thing you can build in an afternoon.

If you already save everything but still can't tell where a project stood last week: the problem usually isn't how you store things, it's that nothing happens at the end of a work session. Something has to write down what changed while it's still fresh. That written summary is also what saves you from paying a model to reconstruct it later.

If you're weighing whether any of this is worth it for one person: I'm always improving the system, and that's not something I'd talk you out of. It's fun, and a system you like working on is a system that keeps getting better. Most of what's any good about mine arrived that way.

Plenty of that work is substantial. I go through other people's repositories regularly and take in whole workflows, or sometimes just the one piece worth having, and standing up a new capability is a different kind of session than fixing a broken one. Both are worth the time. The system isn't small, and it was never meant to be.

What keeps it sustainable is that the pieces are. The useful measure isn't how long a piece took to build, it's how long it takes to fix once you find out it's wrong. The repair I walked through above fit into the gaps of a day I was already spending on other things. It never became a project, and it never needed to be scheduled. Something I'd have to set aside a weekend to diagnose is a different kind of thing to own, however good it looked going in.

Keep the individual pieces that small and you can keep adding to the system for years without the upkeep ever catching up with you. The improving compounds instead of piling up, which is the difference between a system you maintain and one that gets better every time you touch it.

The most interesting thing about loop engineering was never the loop. It's that building one forces you to sort your own work into what needs judgment and what only ever needed a rule. The first pile is always smaller than it feels, and it's the one worth protecting.

---

## Sources

- Addy Osmani (Google Chrome), ["Loop Engineering"](https://addyosmani.com/blog/loop-engineering/), 2026-06-07 (republished by O'Reilly Radar 2026-06-22): named the practice. Loop anatomy is automations, worktrees, skills, plugins and connectors, sub-agents, plus state/memory, which the essay describes as persistent storage in markdown files or a board. Source of the verbatim Boris Cherny quote used in the opening.
- codecentric, ["Loop, Harness, Context Engineering: The Terms Explained"](https://www.codecentric.de/en/knowledge-hub/blog/loop-harness-context-engineering-explained) (2026-07-05): the three-layer framework, and the unattended-mistakes critique
- Stanford Digital Economy Lab, ["How Do AI Agents Spend Your Money? Analyzing and Predicting Token Consumption in Agentic Coding Tasks"](https://arxiv.org/abs/2604.22750): ~1000x token consumption vs. code chat, up to 30x variance on identical tasks, input-token dominance, accuracy saturating above intermediate cost
- [36Kr, 2026-06-29](https://eu.36kr.com/en/p/3873913078732036), reporting Jensen Huang, Andrej Karpathy, and Andrew Ng on prompts giving way to loops
