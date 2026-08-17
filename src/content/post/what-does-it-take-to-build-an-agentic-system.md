---
layout: ../../layouts/post.astro
title: What Does It Take to Build an Agentic System, and Where Are Teams Getting Stuck?
description: The AI agent stack has a five-layer reference architecture now, and most teams only build the first two. Where the other three layers go missing, and what it costs when they do.
dateFormatted: Aug 16, 2026
tags: ["AI Agents", "Agent Architecture", "AI Training", "Evaluation"]
heroImage: /assets/images/posts/5-agentic-layers.webp
---

What does it actually take to build a system you can trust with an AI agent, not a demo, a system? A month of AI tooling releases points to an answer. Microsoft shipped "Agent 365," an observability and trust layer that has nothing to do with generating text. Google built a "Knowledge Catalog" for the same reason. A wave of eval platforms, Langfuse, LangSmith, Arize, went from developer niche to first-class purchase line item in the same stretch of weeks. Read individually, this looks like ordinary tooling churn. Read together, it sketches a five-part answer: agent, tools, memory, evaluation, governance.

And a KPMG survey of 2,145 executives points to exactly where most teams actually stop. Seven percent said they could demonstrate a return on their AI spending. The other ninety-three percent aren't running worse models than the seven percent who can. Most are running the same ChatGPT and Claude everyone else is. The difference isn't the tool. It's how many of the five layers actually got built.

## What does it actually take?

*But I already have an agent that works, isn't that the hard part?*

Getting a model to call a tool reliably used to be the hard part. It isn't anymore. What's consolidating into a reference architecture is everything around that call:

**Agent.** The model doing the reasoning and the planning. This is the layer most builders start and stop at, and for a demo, it's often enough.

**Tools.** The connections that let the agent act on real systems instead of just describing what it would do. Google's Dataplex now ships prebuilt MCP integrations for the exact surfaces builders are actually using ([Gemini CLI, Claude Code, Cursor, Copilot, Windsurf, and the rest](https://docs.cloud.google.com/dataplex/docs/pre-built-tools-with-mcp-toolbox)), which tells you where the center of gravity has moved: from generic chat to agents embedded directly in the dev loop.

**Memory and knowledge.** Where the agent's context comes from, and how it's governed. Google's framing for this layer is telling: agent quality now depends on curated organizational context, not bigger context windows or better prompts ([Dataplex AI overview](https://docs.cloud.google.com/dataplex/docs/ai-overview)).

**Evaluation.** How you know the agent is actually working, not just working today, in this one test case, in this one demo. This is the layer that turned into a genuine market this year: Langfuse, LangSmith, Braintrust, and Arize as platforms; Arize Phoenix, DeepEval, MLflow, and RAGAS as open-source alternatives; Helicone, Portkey, and LiteLLM as the gateways that route and log everything underneath ([observability and evaluation platform roundup, Marktechpost](https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/)).

**Governance.** Who's watching the agent, and what happens when it does something it shouldn't. This is the newest layer, and it arrived as its own product category rather than a feature bolted onto something else. Microsoft's Agent 365 is a trust and observability layer built specifically for agents; "Project Perception" is described as a new agentic security system built for the same reason ([Microsoft, "Rethinking Security for the Age of AI"](https://blogs.microsoft.com/blog/2026/07/27/rethinking-security-for-the-age-of-ai/)).

Five layers. Most builders have the first one, some have the second, and the rest is where the stack actually earns its name.

## Where do teams actually get stuck?

*If the map exists, why is everyone still stuck?*

Because layers three through five aren't glamorous, and the pain they prevent doesn't show up until later. What shows up first is the opposite: AI that's supposed to save time instead adding a step.

Workers describe "constantly check[ing] the output of AI tools," and in some workplaces, longer hours: "working into the night, on weekends," feeling "on call" because of AI-related demands ([BBC](https://www.bbc.com/news/articles/cvgx4yd1gl2o)). Teams report hitting "recurring roadblocks" like "setting up connectors between ChatGPT and their company systems" ([SmarterX, Good Karma Brands adoption case](https://smarterx.ai/smarterxblog/good-karma-brands-ai-adoption)). Neither complaint is really about the model. Both are about what's missing around it, the evaluation that would catch bad output before a human has to, the governance that would make connector setup a solved problem instead of a recurring one.

That's the same gap the KPMG number is pointing at. Nearly half of the executives surveyed had questioned, delayed, or scaled back AI deployments because costs outran benefits ([Reuters Breakingviews, "Corporate AI is still chasing theoretical benefits"](https://www.reuters.com/commentary/breakingviews/corporate-ai-is-still-chasing-theoretical-benefits-2026-08-07/)). Not because the agent didn't work. Because nobody could prove it did, or catch it when it didn't, which is what evaluation and governance are actually for. Meanwhile, state attorneys general are starting to require exactly this kind of proof from the outside: substantiated performance claims, disclosed data use, reviewed AI-generated content ([Reuters, "Compliance wild west"](https://www.reuters.com/legal/legalindustry/compliance-wild-west-how-state-ags-are-using-traditional-legal-frameworks--pracin-2026-07-27/)). Governance is becoming a requirement whether or not a team decided to build it.

Training data tells the same story from the people side. The most-cited barriers to AI adoption aren't model quality, they're a lack of education and training, a lack of awareness, and a lack of time ([SmarterX AI-for-business report](https://smarterx.ai/smarterxblog/ai-for-business-report-ai-urgency)). Deloitte's 2026 numbers put a shape on that gap: 71% of leaders report baseline AI-agent literacy efforts, but only 65% report targeted role-specific upskilling, and only 11% have integrated AI enablement into onboarding with real accountability and tracking ([Deloitte, "Path to agentic transformation"](https://www.deloitte.com/us/en/insights/industry/technology/path-to-agentic-transformation.html); [medtech workflows detail](https://www.deloitte.com/us/en/insights/industry/health-care/medtech-agentic-ai-enterprise-workflows.html)). Same pattern as the technical stack: effort concentrates at the first layer and drops off fast after that.

## What changes once all five layers are built?

McKinsey's language for this is "fluency," not "literacy," and the distinction is the whole point: people don't get better at working with AI by learning about it, only by using it inside a real workflow, with real stakes, and a way to tell if it worked ([McKinsey, "AI fluency"](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/ai-fluency-the-next-foundation-of-us-economic-competitiveness)). McKinsey's proposed fix for the adoption gap is a five-stage model of its own: awareness, belief, commit, develop, enforce ([McKinsey, "How to close the agentic adoption gap"](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/how-to-close-the-agentic-adoption-gap)). It's a different five stages than the technical stack above, but it's answering the same underlying question: what does it take to go from "we tried AI" to "we can prove AI works here."

The teams that get past layer two aren't doing anything exotic. They're building the boring parts on purpose: an eval suite before the agent ships, not after something breaks; a governance layer that makes connector setup repeatable instead of a fire drill every time; role-specific training that gets people using the system, not just hearing about it. None of that shows up in a demo. All of it shows up in whether the number seven changes.

## Where this leaves you

If you're building an agent right now: the first two layers get you a working demo. The other three are what get you a system someone can actually rely on, and they're not harder to build, just easier to skip.

If you're deciding whether to invest in AI training or tooling for your team: ask which of the five layers your current effort actually covers. If the honest answer stops at "agent" and "tools," that's not a reason to slow down. It's the map for what to build next.

The stack has a shape now. Most of the work left isn't inventing new layers, it's building the ones that already have names.

---

## Sources

**Agent stack / reference architecture:**
- Microsoft, ["Rethinking Security for the Age of AI"](https://blogs.microsoft.com/blog/2026/07/27/rethinking-security-for-the-age-of-ai/): Agent 365, Project Perception
- Google Cloud, [Dataplex AI overview](https://docs.cloud.google.com/dataplex/docs/ai-overview): Knowledge Catalog framing
- Google Cloud, [Dataplex pre-built MCP toolbox](https://docs.cloud.google.com/dataplex/docs/pre-built-tools-with-mcp-toolbox): coding-agent surface list
- Marktechpost, ["Top LLM Observability and Evaluation Platforms in 2026"](https://www.marktechpost.com/2026/08/09/top-llm-observability-and-evaluation-platforms-in-2026-langfuse-langsmith-braintrust-arize-and-more-compared/) (2026-08-09)
- Gumloop, ["Best Enterprise AI Tools"](https://www.gumloop.com/blog/best-enterprise-ai-tools): named enterprise stack

**Adoption friction / ROI:**
- Reuters Breakingviews, ["Corporate AI is still chasing theoretical benefits"](https://www.reuters.com/commentary/breakingviews/corporate-ai-is-still-chasing-theoretical-benefits-2026-08-07/) (2026-08-07): KPMG 7% ROI stat
- BBC, [article on AI verification burden](https://www.bbc.com/news/articles/cvgx4yd1gl2o)
- SmarterX, [Good Karma Brands AI adoption case](https://smarterx.ai/smarterxblog/good-karma-brands-ai-adoption): connector roadblocks quote
- SmarterX, [AI-for-business urgency report](https://smarterx.ai/smarterxblog/ai-for-business-report-ai-urgency): training/awareness/time barrier percentages
- Reuters, ["Compliance wild west: how state AGs are using traditional legal frameworks"](https://www.reuters.com/legal/legalindustry/compliance-wild-west-how-state-ags-are-using-traditional-legal-frameworks--pracin-2026-07-27/) (2026-07-27)

**Training architecture:**
- McKinsey, ["AI Fluency: The Next Foundation of US Economic Competitiveness"](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/ai-fluency-the-next-foundation-of-us-economic-competitiveness)
- McKinsey, ["How to Close the Agentic Adoption Gap"](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/how-to-close-the-agentic-adoption-gap): five-stage certification model
- Deloitte, ["Path to Agentic Transformation"](https://www.deloitte.com/us/en/insights/industry/technology/path-to-agentic-transformation.html): 71%/65% figures
- Deloitte, [Medtech agentic AI enterprise workflows](https://www.deloitte.com/us/en/insights/industry/health-care/medtech-agentic-ai-enterprise-workflows.html): 11% onboarding-integration figure
