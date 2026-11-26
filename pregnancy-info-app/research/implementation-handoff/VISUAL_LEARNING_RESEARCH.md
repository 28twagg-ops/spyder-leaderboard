# Visual-first education: design evidence for Claude

This is design research, not a finished UI. Honor the stated preference for concise, visual material without diagnosing attention problems or assigning a fixed learning style. [UX05] finds insufficient evidence for the learning-style matching hypothesis. Instead, design for preference, comprehension and minimal cognitive load, and test with the actual intended user.

## Evidence and practical implications
- [UX01, UX02, UX03] Pictorial health information paired with text tends to improve understanding and recall. Prefer a meaningful anatomy sketch or action illustration over generic imagery. Do not equate illustration preference with low literacy.
- [UX04] The updated animation review reports 48/60 knowledge trials, 28/53 attitude/cognition trials and 20/32 behavior trials with positive findings. These are outcome-specific trial counts, not certainty or efficacy probabilities. Retention and behavior are less established than immediate comprehension.
- [UX06, UX07] Use segmented, self-paced videos and compact sections; evidence from educational settings is indirect. Do not infer a biological attention-span threshold. Test 15–30-second summaries, 45–90-second explanations and optional longer professional demonstrations.
- [UX08, UX09] Decision aids and risk visuals can improve knowledge. For the Cochrane decision-aid review, knowledge increased 11.90 points on a 100-point scale (95% CI 10.60–13.19); 107 studies, 25,492 people. Applicability to this exact app is indirect. Use absolute event rates with equal denominators, label confidence intervals and distinguish options including no intervention.
- [UX10–UX13, UX18] Use clear language, visible main action and safety note, mobile comprehension testing, accessible captions/transcripts, keyboard access and text alternatives. No crucial information in an image, video or color alone.
- [UX14, UX15] No credible basis for declaring one color scheme optimal for this user. Color can communicate hierarchy and mood; context, culture, contrast and preference matter. Test alternative directions; Claude chooses final theme.
- [UX16, UX17] Existing pregnancy app evidence highlights credibility, commercial influence, privacy and feature creep. Use a simple core pathway instead of adding every feature by default.

## Proposed content hierarchy
First view: one clear visual, a one-sentence finding, one next action or explicitly no action, essential safety note, and clear evidence label. Then optional practical detail, evidence comparison, citations and primary-study data. The quick view should not require a chart legend or paragraph of scientific terms. An ordinary visit should be useful in 30–60 seconds; this is a design target to test, not a clinical finding.

Daily/weekly mode: up to three relevant, optional priorities; no countdown pressure, no streak punishment, no body score, no automatic supplement actions. Partner tasks should be distinct and optional. Offer a choice of text/visual/audio where appropriate, no autoplay or notification defaults. A topic not appropriate for current stage remains browseable as research, but not on the action list.

### Scientific chart contracts
Use ordered icon arrays (same denominator and outcome) or horizontal bars for observed events, label risk direction, show exact sample sizes and uncertainty in drilldown. Forest plots use log axis for ratios and linear axis for differences; no-effect line at 1 or 0 respectively. Never show review + component trials as independent votes. When data are insufficient use a direct sentence, not invented confidence or a chart. Use distinct texture/shape/text beyond color.

See UX_SOURCE_REGISTRY.json for source URLs and evidence types. These recommendations are starting points; actual usability and preference have not been tested.
