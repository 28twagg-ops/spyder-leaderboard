# Platform and installation requirements — 2026-11-26

## Required product outcome
iPhone is the primary device. The app must be launchable from the iPhone Home Screen using a distinctive app icon and name, with an app-like experience and persistent navigation. It must also work responsively on iPad, Android phones/tablets, and desktop/laptop browsers. These are requirements, not a claim that implementation already exists.

## Architecture decision belongs to Claude
Evaluate a responsive installable progressive web app (PWA) first as a low-friction route; compare native iOS or a cross-platform wrapper only if requirements justify their complexity. Do not mandate a framework, App Store distribution, paid developer account, external service or deployment. Document the actual chosen approach, limitations and migration path. Home Screen icon installation is mandatory; native widgets, Apple Watch, push notifications and App Store publication are optional future ideas, not authorized scope.

For a PWA: use a stable application identity, name/short name, appropriate launch URL and scope, standalone display, web app manifest, original icon assets (including Apple touch icon and appropriate Android sizes), theme/background colors and HTTPS in the authorized installation environment. Include a concise iPhone Safari help flow: Share → Add to Home Screen → Open as Web App where available → Add. Provide a browser fallback and platform-appropriate install help; do not rely on Chromium-only install events for iOS. Do not claim local development or a mockup is an installed app.

## iPhone experience and cross-device acceptance
- Prioritize small and large iPhone portrait layouts; test 320–430 CSS px widths, safe-area insets, bottom tab bar, Dynamic Island/notch and home indicator, keyboard, scrolling, landscape, large text, VoiceOver and reduced motion. Aim for at least 44 × 44 pt touch targets on iPhone; no horizontal page overflow. Charts may use accessible alternatives or deliberate local scrolling.
- Ensure navigation, research articles, timeline controls, body map, comparisons and citations work with touch and keyboard. iPad and desktop should use available space intentionally, not stretch mobile cards; Android should remain usable without iOS-only gestures. Support browser access when installation is not supported.
- Test actual Home Screen addition, icon appearance, standalone launch, deep links, back behavior, relaunch and upgrade. Record OS/device/browser, build version, actual results and gaps. Simulator or responsive emulation is useful but not proof of physical device installation.
- Target offline access to a versioned, previously loaded, approved educational library and basic navigation where technically feasible. Never silently serve obsolete safety content; clearly display offline/version status. No caching sensitive data in shared/public caches. Treat storage eviction and browser vs installed-app storage separation as real limitations; implement explicit export/delete and tested recovery. Do not promise automatic cross-device sync; user health records remain local/private unless separately authorized.
- No public launch, Apple/Google store submission, external health services or cloud sync without explicit approval. Testing must be possible without altering the legacy leaderboard.

## References
Apple iPhone guide: https://support.apple.com/guide/iphone/bookmark-a-website-iph42ab2f3a7/ios
Apple Developer: https://developer.apple.com/videos/play/wwdc2023/10120/
WebKit: https://webkit.org/blog/17333/webkit-features-in-safari-26-0/
