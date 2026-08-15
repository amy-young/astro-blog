# fixtures/

Test content that is **not** part of the site. Nothing here is routed or built:
Astro only routes `src/pages/` and `src/content/`, and Tailwind's content glob is
`./src/**`, so this folder is inert.

## `typography-fixture.md` — the `.article-body` scale

Exercises every markdown element the real content does not. Added 2026-08-14 while
building `.article-body`, because neither real fixture covers the whole scale:

| Element | Real content coverage |
|---|---|
| `h2`, `p`, links | both |
| fenced `pre > code` | **only** the inherited theme post (3 blocks) |
| tables, images, `hr` | only the theme post |
| lists | only the PKA project page |
| `h3`, `h4`, `blockquote`, nested + ordered lists | **nothing** — this fixture is the only source |

⚠️ **The theme post is slated for deletion** (`handoff/posts-redesign/README.md`,
decision 6). When it goes, this fixture becomes the **only** content on the site
with fenced code blocks. Do not delete this file.

### Re-verifying after a change to `.article-body`

```
cp fixtures/typography-fixture.md src/content/post/zz-scratch-typography-fixture.md
pnpm astro dev          # then open /post/zz-scratch-typography-fixture/
# ...check the scale...
rm src/content/post/zz-scratch-typography-fixture.md
```

It must live in `src/content/post/` to render, which creates a real route and adds an
entry to `getCollection("post")` — so **remove it before shipping**. The `zz-` prefix
is there so it sorts last if anyone forgets.

The typographic scale itself lives in `src/assets/css/home.css` under
`ARTICLE BODY`. That file is the source of truth, not this fixture and not any
published specimen page.
