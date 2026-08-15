---
layout: ../../layouts/post.astro
title: Typography fixture
description: Scratch fixture exercising every markdown element the real content does not. DELETE before shipping.
dateFormatted: Aug 14, 2026
tags: ["Scratch", "Delete me"]
---

Body copy sets the baseline. This paragraph exists to check measure, line-height and colour against the headings around it, and to give the [inline link treatment](https://example.com) something to sit inside so the underline offset can be judged in running text rather than in isolation. Some **bold emphasis** and some *italic emphasis* belong here too.

## Heading two, the section break

The h2 above should carry noticeably more space above it than below, so it binds to the text it introduces rather than floating between two blocks.

### Heading three, the subsection

Smaller, still clearly a heading, and unmistakably subordinate to the h2.

#### Heading four, the deepest level

Barely larger than body text, distinguished by weight rather than size.

### Lists

An unordered list with a nested level:

- First item, checking marker colour and indent
- Second item, which runs long enough to wrap onto a second line so the hanging indent can be judged properly against the marker
  - A nested item one level down
  - Another nested item
- Third item

An ordered list:

1. First step
2. Second step, also long enough to wrap so that the number alignment and the hanging indent are both visible when the text runs past the end of the line
3. Third step

### Blockquote

> A blockquote holds a pulled sentence or a citation. It should read as set apart without shouting.
>
> A second paragraph inside the same quote, to confirm the internal spacing survives.

### Inline and fenced code

Inline `code` inside a sentence, with a longer one like `pnpm astro build --site https://staging.amyyoung.me` to check it wraps rather than overflowing.

```bash
# A fenced block with a deliberately long line to force horizontal scrolling inside the block
docker run --rm -it --name mcp-sandbox --network none -v "$(pwd)":/workspace:ro ghcr.io/example/mcp-server:latest --config /workspace/config.json --verbose
echo "short line"
```

```json
{
  "mcpServers": {
    "fetch": { "command": "docker", "args": ["run", "-i", "--rm", "mcp/fetch"] }
  }
}
```

### Table

| Token | Value | Used by |
|---|---|---|
| `--accent` | `#4D3A9A` | the only hue on the site |
| `--ink-2` | `#333333` | article body text |
| `--f-mono` | system stack | inline and fenced code |

---

A closing paragraph after a horizontal rule, confirming the rule's spacing above and below.
