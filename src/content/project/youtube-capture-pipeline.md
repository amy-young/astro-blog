---
layout: ../../layouts/project.astro
title: YouTube Capture Pipeline
description: Saving a YouTube video to a playlist is the whole capture step. An n8n pipeline on my own server turns each save into a summary, a list of every resource the video mentioned, and, for creators I trust, an entry filed in my knowledge base.
status: shipped
category: personal
startDate: "2026"
tags: ["n8n", "yt-dlp", "Gemini", "PostgreSQL", "Automation"]
heroImage: /assets/images/projects/youtube-capture-pipeline-hero.webp
---

## What it actually is

A lot of my learning happens on YouTube, and most of it happens on a phone or a TV, where "I'll look into this later" used to mean I never saw that video again. Pulling transcripts by hand, chasing links out of descriptions, and filing notes never survived a real week.

So I made saving the video the capture. I add it to a playlist from the couch, and an n8n pipeline on [my own server](/project/self-hosted-vps-lab) does the rest: it pulls the transcript and description, summarizes the video against what I'm working on, lists every tool and repo it mentions, and files the best of it into my [knowledge base](/project/personal-knowledge-system).

## What a day looks like

1. **9pm**, on the couch: this one's good. Save it to a playlist. That's the entire manual step.
2. **5:30am**: the watcher polls every playlist through the YouTube API and pulls the transcript, description, and publish date for anything new.
3. **Around 6am**: one digest email. A summary of each video calibrated to my interests, every GitHub repo, tool, and link it mentioned (pulled from the description, which is where the links actually live), and a verdict on each one.
4. **Same run**: videos from creators I trust are also filed straight into the knowledge base, synthesized through a lens for their subject.
5. **Weekly**: a content brief for each topic area, with dated claims, creator takes attributed by name, where the consensus sits, and angles worth writing.

A second run at 4pm picks up anything saved during the day.

## How it fits together

<div class="ytp-flow" role="img" aria-label="Pipeline flow. A video saved to a playlist from a phone or TV is picked up by the n8n watcher at 5:30am and 4pm, which runs yt-dlp on the VPS for the transcript, description, and publish date. Routing then splits it two ways. Every video goes down the digest path: a mining pass for the summary, resources, and verdict, then the daily digest email and resources ledger. Videos from trusted creators or the transcript playlist also go down the auto-file path: category lens synthesis with Gemini 2.5 Flash, the knowledge base with entity extraction, weekly content briefs with per-category freshness profiles, and the content engine.">
  <div class="ytp-step"><span class="ytp-eyebrow">Capture</span><strong>Save to a playlist</strong><span>From a phone or TV</span></div>
  <div class="ytp-arrow" aria-hidden="true"></div>
  <div class="ytp-step"><span class="ytp-eyebrow">n8n watcher</span><strong>5:30am and 4pm</strong><span>Polls every playlist</span></div>
  <div class="ytp-arrow" aria-hidden="true"></div>
  <div class="ytp-step"><span class="ytp-eyebrow">yt-dlp on the VPS</span><strong>Transcript, description, publish date</strong></div>
  <div class="ytp-arrow" aria-hidden="true"></div>
  <div class="ytp-step ytp-route"><span class="ytp-eyebrow">Routing</span><strong>Playlist rules decide the path</strong></div>
  <div class="ytp-stem" aria-hidden="true"></div>
  <div class="ytp-branches">
    <div class="ytp-branch">
      <p class="ytp-branch-label">Digest path · every video</p>
      <div class="ytp-step"><strong>Mining pass</strong><span>Summary, resources, verdict</span></div>
      <div class="ytp-arrow" aria-hidden="true"></div>
      <div class="ytp-step ytp-end"><strong>Daily digest email</strong><span>Plus a resources ledger</span></div>
    </div>
    <div class="ytp-branch">
      <p class="ytp-branch-label">Auto-file path · trusted creators, transcript playlist</p>
      <div class="ytp-step"><strong>Category lens synthesis</strong><span>Gemini 2.5 Flash</span></div>
      <div class="ytp-arrow" aria-hidden="true"></div>
      <div class="ytp-step"><strong>Knowledge base</strong><span>With entity extraction</span></div>
      <div class="ytp-arrow" aria-hidden="true"></div>
      <div class="ytp-step"><strong>Weekly content briefs</strong><span>Freshness profile per category</span></div>
      <div class="ytp-arrow" aria-hidden="true"></div>
      <div class="ytp-step ytp-end"><strong>Content engine</strong><span>Posts, curriculum, ideas</span></div>
    </div>
  </div>
</div>

<style>
  /* Markup, not an image: the README's Mermaid flow rebuilt so the text stays crisp and
     wraps on a phone. Site is light-only; colours are the home.css accent tokens. */
  .ytp-flow { display: flex; flex-direction: column; align-items: center; margin: 32px 0 40px; }
  .ytp-step {
    display: flex; flex-direction: column; gap: 2px; width: 100%; max-width: 340px;
    padding: 12px 16px; border: 1px solid var(--accent-bdr); border-radius: 10px;
    background: #fff; text-align: center; line-height: 1.35;
  }
  .ytp-step strong { font-size: .95rem; font-weight: 700; color: var(--ink); }
  .ytp-step span { font-size: .85rem; color: var(--ink-3); }
  .ytp-step .ytp-eyebrow {
    font-size: .625rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
    color: var(--accent);
  }
  .ytp-route { background: var(--accent-wash-2); }
  .ytp-end { background: var(--accent-tint); border-color: var(--accent); }
  .ytp-arrow { width: 2px; height: 22px; background: var(--accent-bdr); position: relative; }
  .ytp-arrow::after {
    content: ""; position: absolute; left: 50%; bottom: -1px; transform: translateX(-50%);
    border: 5px solid transparent; border-top-color: var(--accent-bdr); border-bottom: 0;
  }
  .ytp-stem { width: 2px; height: 22px; background: var(--accent-bdr); }
  .ytp-branches {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%;
    padding-top: 22px; border-top: 2px solid var(--accent-bdr);
  }
  .ytp-branch { display: flex; flex-direction: column; align-items: center; }
  .ytp-branch-label {
    margin: 0 0 12px; font-size: .625rem; font-weight: 600; letter-spacing: .14em;
    text-transform: uppercase; color: var(--accent); text-align: center;
  }
  @media (max-width: 600px) {
    .ytp-branches { grid-template-columns: 1fr; gap: 28px; }
  }
</style>

## Playlists are the control surface

There's no app to open. The playlist I save to decides what happens next.

| Playlist | What happens |
|---|---|
| Capture | Summarized and mined for the digest. Nothing is filed automatically; I decide from the email. |
| transcript | The full transcript is filed to the knowledge base, and the digest marks it as auto-filed. |
| Subject playlists | The playlist name becomes the video's category, which picks the lens it's synthesized through. |
| Trusted creators | Their videos are filed from any playlist, each with a default category. |

Capture and transcript work as queues. Once a video is processed, the next run removes it from the playlist, so a queue only ever holds what's still waiting. Subject playlists are collections I keep, and the pipeline never touches them. Behind all of it, one Google Sheet holds the entire configuration: which playlist does what, the trusted creator list, a ledger that stops duplicates, and a tracker for every resource the digests surface.

## One lens per subject

The synthesis prompt changes with the category, and each lens pulls two layers out of a video. The first is the material itself: for AI videos, the tools, workflow patterns, and capability claims; for women's sports, the storylines, stats, and verbatim quotes. The second is the conversation around it: the creator's take, attributed by name, where it sits against the consensus, and which questions are still open. That second layer is what makes the knowledge base useful for writing, because an opinion piece needs to know what everyone else is already saying.

Anything that arrives without a category gets classified and extracted in the same call. The model picks the lens and names the category, so no default quietly bends everything toward one subject.

## Briefs that know how old a claim is

Every claim in the knowledge base carries the video's publish date, not the day I saved it. A backlog import is exactly where that matters: date by arrival, and a batch of six-month-old videos reads like this morning's news. So the upload date travels through every stage, and anything from the backlog of 200+ videos I triaged at the start is flagged as publish date unknown rather than stamped with the day it arrived.

Each topic area then gets its own sense of how fast things go stale:

- **AI systems:** a 7-day window. Anything older than about two weeks is labeled historical context.
- **Women's sports:** a 30-day window in three horizons. *Write now* covers the last 72 hours, because a game recap is stale in two days. *Current storylines* cover two weeks. *Standing issues*, like league economics and collective bargaining, stay writable all month.

The compiled brief separates what to write now from background, and feeds a content engine that turns one capture stream into posts, curriculum material, and ideas.

## Stack

| Piece | Role |
|---|---|
| n8n, self-hosted | Orchestration: two workflows plus a patched document pipeline |
| yt-dlp | Transcripts and metadata, run on the VPS host through n8n's SSH node |
| Gemini 2.5 Flash via OpenRouter | Mining and lens synthesis, about half a cent to a cent per video |
| Google Sheets | Configuration, dedup ledger, resource tracker |
| Google Drive | Moves files between pipeline stages |
| Postgres + PostgREST | The knowledge base, with entity extraction |
| Node.js | The brief compiler and its freshness profiles |

## What it took to build

The repo documents eight issues that will catch anyone who builds this. Three of them:

**YouTube blocks datacenter IPs.** yt-dlp on a VPS gets asked to confirm it isn't a bot. The fix is browser cookies exported from a private session I then close, so they don't rotate, plus a JavaScript runtime for parsing the player. The cookies expire every few weeks, which makes refreshing them the system's one recurring maintenance task.

**My first digest had exactly one video in it.** Inside an n8n loop, reading results back from an earlier node returns only the last pass through the loop. Collecting across every pass means walking each run index explicitly.

**A fetch limit stopped the digest for more than ten weeks, with no error.** The watcher read the first 50 items of each playlist. Once Capture passed 50, new saves landed outside that window and the digest simply stopped arriving. The fix was to fetch everything and drain each queue playlist as videos are processed, so a queue can't outgrow any limit again.

The rest, including why Watch Later is invisible to the YouTube API, are in the repo.

## The code

The workflows, the lens prompts, and the setup guides are public on GitHub under an MIT license, with every ID and key replaced by a placeholder: [amy-young/youtube-capture-pipeline](https://github.com/amy-young/youtube-capture-pipeline).
