---
layout: ../../layouts/project.astro
title: Publications Intelligence
description: A queryable intelligence layer over the research published using NACC's data, built to double as the front door to the data-request process.
status: building
category: work
startDate: "2026"
tags: ["Postgres", "pgvector", "Hybrid Retrieval", "Citation Integrity", "Research Data"]
---

## What it actually is

NACC's public record of research published using its Alzheimer's and dementia data is currently a static list: a link out to a bibliography, plus a "keystone papers" section that's a couple of years stale. It doesn't answer the questions a prospective data requester actually has — has this already been done, who's working on this, what data types support my idea, what funding has this data enabled. This product turns that static record into a queryable intelligence layer, and doubles it as the front door to the data-request process itself.

## Why Postgres and pgvector, not a dedicated vector database

The workload splits about half relational, half semantic. Funding amounts, grant mechanisms, and year-over-year trends are SQL aggregations a vector store can't do, and they're the actual trend-analysis feature. Semantic search over paper abstracts needs embeddings. Postgres with pgvector does both in one transactional system. The corpus is thousands of papers, not millions, so a specialized vector database would never earn its operational cost here.

## The core design decision: two data planes that never touch

The published bibliography, PubMed metadata, and NIH funding data form one plane: public, safe for anyone to query. A second plane holds internal enrichment data — additional researcher and funding detail that isn't public anywhere else. The boundary between the two is enforced at the data layer, with a visibility flag on every column that could carry internal information, not by query discipline or careful prompting. The public surface physically cannot select an internal row.

## Citation integrity, structurally enforced

For a research-integrity audience, a hallucinated citation isn't a minor bug — it would destroy trust in the tool outright. So the model never gets the chance: it cites by reference ID only, and the application renders the actual citation from the database row, which means a DOI can never be invented because the model never emits one. Every cited ID is validated against what was actually retrieved before an answer ships. On weak retrieval, the system says "I don't have papers that directly answer this" rather than guessing. Abstention, here, is a feature.

## The insight that makes this more than a publication list

Most publication trackers only show backward-looking funding: what grant paid for the work that got published. This one also tracks the forward direction — when a paper's underlying data went on to seed a *new* grant application. That's an ROI argument for whether a dataset is worth requesting that nothing else in the field can make, and it reframes the product from a passive archive into an active case for using the data at all.

## Where it stands

Currently in the foundation phase: ingesting the curated bibliography and standing up the Postgres and pgvector schema, while measuring how well the enrichment layer actually lines up against the public corpus — the gate that decides how far that layer gets to go before anything ships further.
