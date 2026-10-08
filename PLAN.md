# Fabric modding documentation plan

## Goal
Build a complete multi-page documentation site for the Fabric modding ecosystem on Minecraft: Java Edition, with a server-first philosophy: readers should be able to start with a local mod, move to a dedicated or server-hosted Fabric server, ship server-side-only features, and make that server playable for Bedrock players through Geyser and Floodgate. The site must teach a full beginner-to-advanced path from install and first mod to running a public server, choosing a hosting provider or self-hosting setup, and supporting Java + Bedrock players together.

## Target baseline
- Minecraft: 1.21.1
- Fabric API: 0.115.x
- Fabric Loader: 0.16.x
- Loom: 1.7.x to 1.8.x
- Geyser: 2.4.x
- Mappings: Mojang mapped to intermediary via Loom; names stay aligned with the target MC version
- Scope: Java Edition modding is the core Fabric target; server-side mod development is a first-class pillar; Bedrock compatibility is handled through Geyser + Floodgate and is not a Fabric client feature

> This is the planned reference baseline for the site. Every tutorial page will mention the exact tested versions in its own "Tested on" section, and server and Bedrock pages will call out the client type and OS used during verification.

### Server-first emphasis
This site is not only a client modding guide. It teaches how to run a dedicated Java server with Fabric, how to use Fabric on a server-hosted Minecraft environment, how server-only mods differ from client-required mods, and how to keep a Fabric server playable for Bedrock players without breaking the Java-side authoritative model. The public server path is a core requirement, not an add-on topic.

## Site map

### Home and orientation
- `/` — Home, quick-start paths, platform selection, and project matrix
- `/about/what-is-modding` — What modding is; Fabric vs Forge/NeoForge/Quilt
- `/start/quickstart` — Fastest path from zero to first mod
- `/start/versions-and-tools` — Fabric, Loader, API, Loom, mappings, Java requirements

### Foundations
- `/foundations/java-for-modders`
- `/foundations/setup-windows`
- `/foundations/setup-macos`
- `/foundations/setup-linux`
- `/foundations/project-anatomy`
- `/foundations/core-concepts`

### Content and gameplay systems
- `/content/items`
- `/content/blocks`
- `/content/block-entities`
- `/content/recipes`
- `/content/entities`
- `/content/status-effects`
- `/content/fluids`
- `/content/world-generation`
- `/content/persistent-data`

### Client and interface
- `/client/gui-and-screens`
- `/client/rendering`
- `/client/input-and-keybinds`

### Systems and APIs
- `/systems/events`
- `/systems/fabric-api-catalog` — module overview for every Fabric API module
- `/systems/networking`
- `/systems/commands`
- `/systems/configuration`
- `/systems/mixins`
- `/systems/data-generation`

### Server-side Fabric
- `/server/basics`
- `/server/server-side-only-mods`
- `/server/vanilla-visible-content`
- `/server/tools-and-apis`
- `/server/admin-and-ops`
- `/server/networking-and-auth`
- `/server/security`
- `/server/running-public-server`

### Bedrock on a Java server
- `/bedrock/overview`
- `/bedrock/install-and-configure-geyser`
- `/bedrock/compatibility`
- `/bedrock/bedrock-friendly-mod-design`
- `/bedrock/troubleshooting`
- `/bedrock/addons-are-different`

### Engineering and operations
- `/engineering/testing`
- `/engineering/debugging`
- `/engineering/compatibility`
- `/engineering/multi-version-builds`
- `/engineering/updating-to-new-version`
- `/engineering/publishing`
- `/engineering/kotlin-with-fabric`
- `/engineering/performance-and-security`
- `/engineering/ecosystem`

### Reference and help
- `/reference/glossary`
- `/reference/cheat-sheet`
- `/reference/troubleshooting-index`
- `/reference/faq`
- `/reference/official-links`

## Stack and implementation plan

### Site generator and UI
- Astro Starlight as the static docs framework for a multi-page documentation site
- Markdown/MDX for page authoring
- Pagefind for local search
- Sidebar navigation and per-page table of contents
- Previous/next navigation links
- Light/dark themes and responsive mobile layout
- Woven-thread visual identity with multi-color stripe motif and strong typography
- WCAG AA-compliant contrast and semantic HTML
- No-JS experience supported; interactive elements degrade gracefully

### Code highlighting and assets
- Syntax highlighting for Java, Kotlin, JSON, YAML, TOML, Gradle Groovy, Gradle Kotlin DSL, and shell
- Copy buttons on code blocks and file-path titles on each block
- Example mod and example server tree viewer in the docs site

### Interactive tools planned
- Item/block code generator
- Server setup helper by OS
- Geyser/Floodgate config helper
- LocalStorage progress tracker with try/catch safeguards
- Searchable error troubleshooter
- API decision helper for event vs mixin vs API

## Example mod: planned scope
The documentation will be backed by a real example mod in `/example-mod`, and every code sample will be taken from this source tree. The example mod is meant to demonstrate the exact patterns used in tutorials, including:

- basic item, block, and recipe registration
- custom block entity and inventory behavior
- custom entity or mob integration
- advanced events and networking payloads
- server-only gameplay hooks and command patterns
- data generation for models, language entries, loot tables, and tags
- tests for game logic and dedicated server behavior

## Example server: planned scope
The dedicated server in `/example-server` will be used for all real server workflows and Bedrock compatibility checks. It will include:

- Fabric Loader installation for a Java server on both self-hosted and server-hosted environments
- Fabric API and core dependency setup
- `server.properties`, EULA, JVM flags, and memory tuning
- firewall and port-forwarding checks
- systemd, Docker, and hosted-server deployment examples
- backup and restore procedures
- Geyser/Floodgate installation notes for Bedrock access
- smoke tests with a Java client and Bedrock client when possible

## Documentation phases
1. Phase A: scaffold docs theme, home page, navigation, and support files
2. Phase B: Foundations and content pages
3. Phase C: Client, APIs, and systems pages
4. Phase D: Server-side mod pages and Bedrock pages
5. Phase E: engineering, reference, and polish
6. Phase F: validation, CI checks, final content review, and report

## Verification workflow required before final completion
Each phase must be validated with:
- site build
- link checker
- example mod build
- example mod datagen
- example mod game tests
- example server smoke test
- fix all failures before progressing

## Coverage status summary
The full manifest is captured in [COVERAGE.md](COVERAGE.md). The initial state is intentionally marked as planned and pending authoring. No page should be considered final until it has passed the CI requirement and content validation checklist.

## Risks and known gaps before approval
- Official version numbers must be confirmed against the current Fabric docs and repositories before publication.
- Any feature that cannot be verified on the real mod and server must be clearly marked as unverified and listed in [UNVERIFIED.md](UNVERIFIED.md).
- Bedrock behavior will require explicit testing notes because Java and Bedrock differences are protocol-level and not all features can be mirrored.

## Decision gate
This document is the engineering plan and coverage manifest. The next step is implementation of the docs scaffold and the tracked content work only after approval of this plan.
