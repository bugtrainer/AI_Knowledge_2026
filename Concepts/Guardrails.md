---
tags: [AI, Safety]
aliases: [AI Guardrails, Safety Filters, NeMo Guardrails]
icon: "🛡️"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**Guardrails** are technical restrictions that enforce safety boundaries on AI systems — blocking harmful outputs, filtering [[Prompt Injection]] attacks, preventing off-topic responses, and keeping models aligned with intended behaviour.

## Key Implementations
- **NeMo Guardrails** (NVIDIA) — Open-source guardrail framework
- **[[NemoClaw (NVIDIA)]]** — Enterprise security stack for agent deployments
- **[[Constitutional AI]]** — Anthropic's self-critique approach
- **Content filters** — Built into ChatGPT, Claude, Gemini

## Why It Matters in 2026
- Essential for enterprise AI deployment (regulated industries)
- Required by the [[EU AI Act]] for high-risk AI systems
- Critical for [[AI Agent]] safety — agents can take real-world actions with real consequences

## Key Relationships
- Protects against: [[Prompt Injection]], [[Hallucination]], [[Jailbreak]]
- Required by: [[EU AI Act]]
- Applied to: [[AI Agent]], [[LLM]]
- Frameworks: [[NemoClaw (NVIDIA)]], [[Constitutional AI]]

## Learn More
- [YouTube: NeMo Guardrails](https://www.youtube.com/results?search_query=NVIDIA+NeMo+Guardrails)
- [NVIDIA NeMo Guardrails GitHub](https://github.com/NVIDIA/NeMo-Guardrails)