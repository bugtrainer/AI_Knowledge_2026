---
tags: [AI, Safety, Training]
aliases: [AI Hallucination, Confabulation, Making Things Up]
icon: "😵"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**Hallucination** is when an AI model generates information that sounds plausible and confident but is **factually incorrect**. The model isn't "lying" — it's generating statistically likely text that happens to be wrong.

## Real-World Analogy
It's like an overconfident student who always raises their hand and gives an answer that *sounds* right, but they're just guessing based on patterns they've seen — not actual knowledge.

## Why It Matters in 2026
Hallucination remains the **#1 limitation** for enterprise AI deployments:
- Models can fabricate citations, case law, medical advice, and financial data
- Particularly dangerous in high-stakes domains: healthcare, legal, finance
- Every major AI lab is investing heavily in mitigation

## Mitigation Strategies
1. **[[RAG]]** — Ground answers in retrieved documents
2. **[[Grounding]]** — Connect outputs to verified real-world data
3. **Citation requirements** — Force the model to show its sources
4. **Human review** — Always verify AI outputs in critical workflows
5. **[[Guardrails]]** — Technical restrictions on what AI can claim
6. **Temperature control** — Lower [[Temperature]] = less creative = fewer hallucinations

## Key Relationships
- Mitigated by: [[RAG]], [[Grounding]], [[Guardrails]], [[Temperature]]
- Related risks: [[Model Collapse]], [[Prompt Injection]]
- Policy: [[EU AI Act]], [[AI Safety]]

## Learn More
- [YouTube: AI Hallucination](https://www.youtube.com/results?search_query=AI+Hallucination+explained)
- [Wikipedia](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence))