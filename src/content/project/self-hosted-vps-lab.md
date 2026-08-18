---
layout: ../../layouts/project.astro
title: Self-Hosted VPS Lab
description: One small server running Docker and Caddy that replaced five separate subscriptions, and now hosts the automation, memory, and task layer behind my AI operating system.
status: shipped
category: personal
startDate: "2026"
tags: ["Docker", "Caddy", "Self-Hosted", "n8n", "PostgreSQL"]
heroImage: /assets/images/projects/vps-lab-hero.png
---

## What it actually is

A Hostinger KVM 2 VPS, two vCPUs and 8GB RAM running Ubuntu 24.04, that I rent for less than most people pay for a single project management subscription. Everything on it runs in Docker Compose behind Caddy as a reverse proxy, which issues its own certificates on first request and needs no manual renewal.

I didn't build this to run a company. I built it because my personal AI operating system needs somewhere to live that isn't my laptop: a task manager, an automation layer, a memory store, and a place for Claude Code to keep working when the laptop is closed. Renting the infrastructure and running the open-source version of each tool myself turned out to be less work than paying for five separate products, and it means none of my data lives in a database I don't control.

## What's running on it

| Service | Role |
|---|---|
| Caddy | Reverse proxy for everything below, automatic HTTPS |
| Docker Compose | Runs every service, no Kubernetes needed at this scale |
| n8n | Automation: document and video transcript pipelines into my knowledge base |
| KaraKeep | Tags and summarizes everything I save |
| Vikunja | Personal task management, migrated off a work-owned Asana workspace |
| Syncthing | Relays my knowledge base between desktop and laptop while traveling |
| OpenBrain (Postgres + pgvector + PostgREST) | The queryable memory layer behind the whole system |
| Watchtower | Keeps most containers patched automatically |
| Tailscale | Private mesh network for remote and administrative access |

## Why one server instead of five subscriptions

The cost argument is the least interesting part. What the VPS actually buys is one place where my knowledge base, my automations, and my agent's working directory all live continuously, independent of whether my laptop is open. Claude Code doesn't get broader access to my life by running from here. It gets a narrower one: a specific synced folder, specific databases, specific scoped credentials, instead of the run of my entire workstation.

The public surface is deliberately narrow. Caddy is the only thing that answers on ports 80 and 443, every internal service is bound to localhost behind it, and a weekly cron job runs a security audit and emails me the result. For remote access I use Tailscale rather than exposing SSH to the open internet, which puts the VPS, my desktop, and my laptop on one private network.

## What it took to build

An evening at a time, spread across several months, not a platform engineering project. The one real failure worth naming: Caddy's own configuration used to rely on Docker networks that got attached by hand, and a routine `docker compose up -d` once dropped all of them at once, taking three services down simultaneously. Fixed by having Caddy declare every network it needs explicitly. That's the actual shape of a self-hosting outage at this scale, a config file that quietly assumed something that stopped being true, not a 2am emergency.

Full writeup on why this is worth doing and what I'd tell someone starting from zero: [Put a VPS in your stack](/post/what-self-hosting-a-vps-actually-buys-a-one-person-ai-system).
