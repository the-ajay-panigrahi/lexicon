# UI refresh

15 November 2026. Baseline: `3944144fe6eb9457f2f37252684c64cf82a14dfe`.

Adapted from the accompanying OpenDesignMD reference. Existing project stack, copy, data, routing, authentication and business logic are preserved. Application changes are a presentation stylesheet and its import only. No new runtime dependency. Existing dark themes and reduced-motion preferences are retained. Original reference assets/fonts/logos are not copied.

Verified: `npm run build` passed. Desktop/mobile Chromium checks passed for entry, name creation in browser-local storage, dashboard navigation, refresh persistence and theme switching. Business source hashes match the baseline after removing the single CSS import. No learning, scoring, scheduling or vocabulary data changed.

The user authorized committing and pushing this UI-only change. Deployment status is tracked in Portfolio V3 context/ui-refresh-status.md.
