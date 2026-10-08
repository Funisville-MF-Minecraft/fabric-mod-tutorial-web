# Unverified items

This file lists all claims, settings, examples, and compatibility notes that must be verified with the current official sources and real runs before they can be considered final.

## Planning status
- No page content is yet final. All content remains subject to verification against the current Fabric docs, Fabric repositories, Fabric API, Loom, and GeyserMC official documentation.
- Exact supported Minecraft and Fabric version numbers will be pinned in the final site and repeated on each page.
- Bedrock support claims require live verification with a real Bedrock client in the example server environment.

## Items to verify before publication
- Current stable Minecraft target version to use as the baseline for all tutorial pages.
- Exact current Fabric Loader, Fabric API, Loom, and Geyser versions to quote in page headers.
- Current `fabric.mod.json` field semantics, especially environment handling and compatibility-related keys.
- Any server-side-only mod patterns that require vanilla client visibility checks.
- Bedrock compatibility table entries, especially the exact list of features that work and fail across versions.
- Any Geyser/Floodgate configuration keys and default ports that must be shown in examples.
- Any performance, profiling, or hosting recommendation that depends on third-party tools and version-specific behavior.

## Unverified box requirement
Every page that contains a claim that could change with official versions or with Bedrock compatibility must include a visible "Unverified" box until live confirmation is complete.
