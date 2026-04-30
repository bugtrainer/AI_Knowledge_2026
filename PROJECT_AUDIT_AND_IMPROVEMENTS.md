# Project Audit & Detailed Improvement Plan (April 30, 2026)

## 1) Executive Summary
This repository is strong as a **content-first AI knowledge vault** with clear structure and broad topical coverage. It already supports:
- Obsidian-first usage (`README.md`).
- Static publishing via Quartz (`build.sh`).
- Interactive graph/document browsing via `aura-os` React app + local Express server (`scripts/aura-server.js`, `scripts/aura-indexer.js`).

The highest-impact opportunities are:
1. **Stabilize build/deploy reproducibility** (avoid cloning Quartz at build time).
2. **Harden metadata parsing/index quality** (replace ad-hoc YAML parsing).
3. **Improve app environment handling** (remove hardcoded localhost API endpoint).
4. **Raise content quality controls** (link integrity, schema validation, freshness signals).
5. **Improve UX/accessibility and performance** for larger graph datasets.

---

## 2) What is Working Well

### Content system
- The vault is logically grouped (`Concepts`, `Tools`, `People`, `Companies`) and appears designed for networked exploration.
- Markdown + wikilinks is a durable, low lock-in format.

### Build/distribution model
- A static publishing flow exists and is scriptable (`build.sh`).
- Clear root-level npm script exists for build invocation (`package.json`).

### Interactive visualization
- `aura-os` includes graph navigation + side panel + markdown doc viewer with clear UI separation (`App.jsx`, `GraphView.jsx`, `DocViewer.jsx`).
- Manifest generation and serving are separated into dedicated scripts (`aura-indexer.js`, `aura-server.js`).

---

## 3) Key Risks and Gaps

### A. Build and deployment reliability
**Observed:** `build.sh` clones Quartz from GitHub during each build.

**Risks:**
- Non-deterministic builds (upstream Quartz changes can break output unexpectedly).
- Build-time network dependency and longer build durations.
- Harder rollback/debug.

**Improvements:**
- Pin Quartz to a commit/tag.
- Prefer submodule/subtree/vendor strategy over ad-hoc clone.
- Add CI build check that validates generated site artifacts.

---

### B. Metadata parsing correctness
**Observed:** `scripts/aura-indexer.js` implements a simplified YAML parser by splitting on `:` line-by-line.

**Risks:**
- Breaks on valid YAML with nested structures, quoted strings, multiline text, arrays, colons inside values.
- Inconsistent tags/status/difficulty extraction quality.

**Improvements:**
- Replace with robust parser (`js-yaml` or `yaml` package).
- Define a strict frontmatter schema (required/optional fields).
- Add validation warnings and summary report.

---

### C. Environment portability for Aura UI
**Observed:** `DocViewer.jsx` fetches markdown from hardcoded `http://localhost:3002`.

**Risks:**
- Breaks in non-localhost environments.
- Makes deployment and preview environments fragile.

**Improvements:**
- Use `VITE_API_BASE_URL` with fallback.
- Add a relative proxy in Vite (`/api`, `/vault`) so local and hosted behavior match.
- Fail gracefully with actionable error messaging when server is unavailable.

---

### D. Server and API hygiene
**Observed:** `aura-server.js` allows wildcard CORS and imports `cors` but doesn't use the package directly.

**Risks:**
- Overly permissive defaults (fine for local dev, risky beyond that).
- Confusing code ownership/intent.

**Improvements:**
- Scope CORS by environment (dev wildcard; prod allowlist).
- Remove unused imports/dependencies.
- Add health endpoint (`/health`) and basic request logging.

---

### E. Data quality and link integrity
**Observed:** Dead links are filtered from graph edges, but there is no dedicated quality report.

**Risks:**
- Broken wikilinks and orphan notes accumulate unnoticed.
- Harder editorial maintenance as corpus grows.

**Improvements:**
- Generate a `quality-report.json/md` from indexer with:
  - unresolved links
  - orphan notes
  - duplicate titles / duplicate IDs
  - missing metadata fields
- Fail CI on severe issues above thresholds.

---

### F. Frontend performance & UX at scale
**Observed:** Graph renders custom canvas labels at runtime; dimensions tie directly to `window` size minus fixed sidebar width.

**Risks:**
- Performance degradation as node count increases.
- Layout bugs on narrow/mobile displays.

**Improvements:**
- Add viewport/container-based resize observer instead of `window.innerWidth - 320`.
- Hide labels more aggressively at low zoom; consider level-of-detail rendering.
- Add graph controls: focus selected node, reset camera, filter by tag/status/path.
- Consider precomputing centrality/community clusters for exploration modes.

---

## 4) Prioritized Roadmap

## Phase 1 (High impact, low/medium effort)
1. **Indexer hardening**
   - Introduce YAML library + schema validator.
   - Emit quality diagnostics artifact.
2. **Environment config for Aura app**
   - Replace hardcoded API origin.
   - Add `.env.example` and docs.
3. **Build determinism**
   - Pin Quartz version/commit.

## Phase 2 (Quality and operations)
4. **CI pipeline**
   - Lint scripts + run indexer + check broken links + build smoke test.
5. **Content governance tooling**
   - Metadata consistency check (difficulty/status/tags enum).
   - Freshness indicator fields (`last_reviewed`, `source_date`).

## Phase 3 (Product polish)
6. **Graph UX improvements**
   - Advanced filters, keyboard nav, accessibility pass.
7. **Search enhancements**
   - Full-text search index (mini search or lunr/flexsearch).
8. **Documentation refresh**
   - Replace default Vite template README inside `aura-os` with project-specific setup.

---

## 5) Concrete Implementation Suggestions

### Suggested frontmatter schema
- `title` (string, required)
- `tags` (string[])
- `difficulty` (enum: beginner/intermediate/advanced)
- `status` (enum: seed/growth/evergreen)
- `mastery_score` (0-5 integer)
- `last_reviewed` (ISO date)

### Suggested CI checks
- `node scripts/aura-indexer.js`
- `node scripts/validate-vault.js`
- `npm --prefix aura-os run build`
- optional markdown lint and link lint

### Suggested docs additions
- `CONTRIBUTING.md` with note template and metadata requirements.
- `ARCHITECTURE.md` showing data flow:
  vault markdown -> indexer -> manifest -> aura server/ui -> static site.

---

## 6) Success Metrics
Track improvements by measuring:
- Build reproducibility success rate.
- % notes with complete metadata.
- Broken-link count over time.
- Aura app load time and FPS at target node sizes.
- Search-to-open conversion and average session depth (if analytics added).

---

## 7) Quick Wins (Next 1-2 days)
1. Parameterize API base URL in `DocViewer`.
2. Replace simplistic YAML parser in indexer.
3. Pin Quartz repository checkout to a known commit.
4. Replace `aura-os/README.md` template text with project-specific instructions.

These four changes alone would materially improve reliability, portability, and maintainability.
