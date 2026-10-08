# Coverage manifest

This file tracks every required topic in the documentation request and whether a page exists, is stubbed, or still needs authoring. The final build must fail if a required row has no page or a stubbed page.

Status key:
- Planned: page is scheduled but not yet authored
- Drafting: page exists and is being filled in
- Ready: page is complete and validated
- Requires verification: page exists but needs a real test or official-source confirmation

| ID | Topic | Status | Page | Notes |
| --- | --- | --- | --- | --- |
| A1 | What modding is; Fabric vs Forge, NeoForge, Quilt; Loader/API/Loom/mappings and obfuscation | Planned | docs/about/what-is-modding.md | Needs original comparison and versioned notes |
| A2 | Java for modders, with Minecraft examples | Planned | docs/foundations/java-for-modders.md | |
| A3 | Setup on Windows, macOS, Linux; JDK rules; IntelliJ; VS Code; template generator; importing Gradle; runClient and runServer; first-launch checklist | Planned | docs/foundations/setup.md | Separate OS pages recommended |
| A4 | Project anatomy: every file, fabric.mod.json field-by-field, Gradle files, Loom options, split source sets, entrypoints, resources layout, naming conventions | Planned | docs/foundations/project-anatomy.md | |
| A5 | Core concepts: identifiers, registries, logical vs physical sides, game loop, ticks, worlds, chunks, positions, block states, codecs, data components, tags, data-driven content, datapacks vs resource packs | Planned | docs/foundations/core-concepts.md | |
| B6 | Items | Planned | docs/content/items.md | |
| B7 | Blocks | Planned | docs/content/blocks.md | |
| B8 | Block entities | Planned | docs/content/block-entities.md | |
| B9 | Recipes | Planned | docs/content/recipes.md | |
| B10 | Entities and mobs | Planned | docs/content/entities.md | |
| B11 | Status effects, potions, enchantments, damage types, sounds, particles, advancements, game rules, villager trades, loot modifiers | Planned | docs/content/gameplay-systems.md | |
| B12 | Fluids and Transfer API | Planned | docs/content/fluids.md | |
| B13 | World generation: features, biomes, structures, dimensions | Planned | docs/content/world-generation.md | |
| B14 | Persistent data and attachments | Planned | docs/content/persistent-data.md | |
| C15 | GUIs and screens | Planned | docs/client/gui-and-screens.md | |
| C16 | Rendering: models, renderers, shaders, render layers | Planned | docs/client/rendering.md | |
| C17 | Input, keybinds, client commands | Planned | docs/client/input-and-keybinds.md | |
| D18 | Events and Fabric API: how events work, catalog with examples, and one page for every API module | Planned | docs/systems/fabric-api.md | Need generated module list |
| D19 | Networking: payloads, codecs, both directions, config phase, validation, rate limiting | Planned | docs/systems/networking.md | |
| D20 | Commands: Brigadier, custom arguments, suggestions, permissions | Planned | docs/systems/commands.md | |
| D21 | Configuration: Gson/JSON, config libraries, Mod Menu, reloadable configs | Planned | docs/systems/configuration.md | |
| D22 | Mixins in depth, access wideners, class tweakers | Planned | docs/systems/mixins.md | |
| D23 | Data generation for all providers | Planned | docs/systems/data-generation.md | |
| E24 | Server basics: dedicated server setup, properties, EULA, JVM, memory, ports, firewall, backups, hardening | Planned | docs/server/basics.md | |
| E25 | Server-side-only mods: environment, vanilla client visibility, build an example that joins without a client mod | Planned | docs/server/server-side-only-mods.md | |
| E26 | Making custom content visible to vanilla clients: polymer-style ideas, server-side resource packs, custom model data, text display and item display entities, limits | Planned | docs/server/vanilla-visible-content.md | |
| E27 | Server tools and APIs: permissions, scheduled async tasks, scoreboards, bossbars, teams, inventories, chat, player data, economy, regions, DB storage | Planned | docs/server/tools-and-apis.md | |
| E28 | Server administration: performance mods, profiling, logs, crash recovery, backups, restarts, modpack hosting | Planned | docs/server/admin-and-ops.md | |
| E29 | Server networking for mod and non-mod clients: handshake/fallback and authoritative server design | Planned | docs/server/networking-and-auth.md | |
| E30 | Security and abuse prevention: validation, permissions, deserialization, dependency supply chain care | Planned | docs/server/security.md | |
| E31 | Running a public or friends server: domain, forwarding, DNS SRV, providers vs home hosting, DDoS basics, monitoring | Planned | docs/server/running-public-server.md | |
| F32 | Honest overview of Java vs Bedrock and the Geyser + Floodgate route | Planned | docs/bedrock/overview.md | |
| F33 | Installing and configuring Geyser and Floodgate, ports, auth modes, firewalls, test steps with Bedrock | Planned | docs/bedrock/install-and-configure-geyser.md | |
| F34 | What works and what does not for Bedrock players on modded Fabric servers; compatibility table | Planned | docs/bedrock/compatibility.md | |
| F35 | Designing mods that are Bedrock-friendly; custom items/blocks, resource pack mapping, Floodgate APIs | Planned | docs/bedrock/bedrock-friendly-mod-design.md | |
| F36 | Common Bedrock-on-Java problems and fixes; searchable troubleshooting table | Planned | docs/bedrock/troubleshooting.md | |
| F37 | Separate page: Bedrock add-ons are a different system; comparison table and links to official docs | Planned | docs/bedrock/addons-are-different.md | |
| G38 | Testing: game tests, dedicated server tests, CI integration | Planned | docs/engineering/testing.md | |
| G39 | Debugging: crash reports, logs, debugger, hot swap, profiling | Planned | docs/engineering/debugging.md | |
| G40 | Compatibility (client/server/shared, dependencies, Jar-in-Jar, load order) | Planned | docs/engineering/compatibility.md | |
| G41 | Multi-version and multi-loader builds | Planned | docs/engineering/multi-version-builds.md | |
| G42 | Updating to a new Minecraft version | Planned | docs/engineering/updating-to-new-version.md | |
| G43 | Publishing: Modrinth, CurseForge, GitHub Releases, automation, pre-release checklist, server-only vs client-required labeling | Planned | docs/engineering/publishing.md | |
| G44 | Kotlin with Fabric | Planned | docs/engineering/kotlin-with-fabric.md | |
| G45 | Performance and security | Planned | docs/engineering/performance-and-security.md | |
| G46 | Ecosystem: key libraries and tools, evaluation criteria | Planned | docs/engineering/ecosystem.md | |
| H47 | Glossary | Planned | docs/reference/glossary.md | |
| H47a | Cheat sheet of common Minecraft classes | Planned | docs/reference/cheat-sheet.md | |
| H47b | Searchable troubleshooting index | Planned | docs/reference/troubleshooting-index.md | |
| H47c | FAQ | Planned | docs/reference/faq.md | |
| H47d | Curated official links and community help channels | Planned | docs/reference/official-links.md | |
| I1 | Code generator for items and blocks | Planned | docs/tools/code-generator.md | Interactive UI feature |
| I2 | Server setup helper | Planned | docs/tools/server-setup-helper.md | Interactive UI feature |
| I3 | Geyser/Floodgate config helper | Planned | docs/tools/geyser-config-helper.md | Interactive UI feature |
| I4 | Progress tracker in localStorage | Planned | docs/tools/progress-tracker.md | Interactive UI feature |
| I5 | Searchable error-message troubleshooter | Planned | docs/tools/error-troubleshooter.md | Interactive UI feature |
| I6 | File-tree viewer for example mod/server | Planned | docs/tools/file-tree-viewer.md | Interactive UI feature |
| I7 | Find-the-right-API decision helper | Planned | docs/tools/api-decision-helper.md | Interactive UI feature |

## Required CI rule
The site build must fail if any required row is missing a page or the page has fewer than 400 words, or if the page is not populated with a working example unless it is explicitly a reference table. This manifests as a coverage check in CI that reads this file and verifies each topic row.

## Final completion rule
The site is not complete until every row in this file is covered by a validated page and every unverified item is recorded in [UNVERIFIED.md](UNVERIFIED.md).
