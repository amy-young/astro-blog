# amyyoung.me (Astro)

## Impeccable (installed 2026-10-22)

Design toolkit at `.claude/skills/impeccable/` (pbakaus/impeccable 4.7.0, project scope). Invoke as `/impeccable <command> <target>`.

- **User-invoked only.** `disable-model-invocation: true` is set in its SKILL.md. `npx impeccable update` overwrites that file, so re-add the flag after every update.
- **Telemetry off.** This is machine-wide, in `~/.impeccable/config.json`. Check with `sh .claude/skills/impeccable/scripts/impeccable telemetry status`.
- **Never `pin` commands.** Bare `/audit`, `/critique` or `/teach` collide with existing commands.
- **Hooks** live in `.claude/settings.local.json` (gitignored): a detector after edits, plus a deep pass at the end of each turn. Turn them off with `/impeccable hooks off` if they get noisy.
- The engine binary in `scripts/bin/` is gitignored; the launcher re-downloads it.
- Before running `init` or `document`, read the existing design system: the `:root` tokens in `src/assets/css/home.css`, plus the design kit at `D:\Personal Knowledge System\pka-system\ventures\context\design\claude-design-kit\` (`tokens.css`, `hero-template.html`, `README.md`). DESIGN.md should describe them, not replace them. Copy voice is governed by `ventures\context\writing\style-guide.md` in the same PKA folder (site-copy mode).
- Deploys copy only `dist/*`, so nothing here ships to the site.
