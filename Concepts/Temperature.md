---
tags: [AI, Prompting, Parameters]
aliases: [Creativity Parameter, Randomness Control]
icon: "🌡️"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**Temperature** is a parameter that controls the randomness of a model's output:
- **0.0** = Deterministic (always picks the most likely token — factual, repetitive)
- **1.0** = High randomness (creative, diverse, but less predictable)
- **0.7** = Common default (balanced creativity and coherence)

## When to Use
| Temperature | Best For |
|---|---|
| 0.0–0.3 | Factual Q&A, data extraction, code generation |
| 0.4–0.7 | General conversation, writing, analysis |
| 0.8–1.0 | Creative writing, brainstorming, poetry |

## Key Relationships
- Controls: [[Inference]] behaviour
- Part of: [[Prompt Engineering]]
- Reduces [[Hallucination]] at lower values

## Learn More
- [YouTube: Temperature](https://www.youtube.com/results?search_query=LLM+Temperature+parameter+explained)
- [OpenAI Docs](https://platform.openai.com/docs/api-reference/chat/create)