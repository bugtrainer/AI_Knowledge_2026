---
tags: [AI, Architecture]
aliases: [Mixture of Experts, Sparse Model, Expert Routing]
icon: "🥘"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**Mixture of Experts (MoE)** is an architecture where a model contains multiple specialised sub-networks ("experts"), but only activates a **subset** of them for each input. This allows models to be very large (many parameters) while being efficient (only a fraction are used per query).

## Real-World Analogy
Imagine a hospital with 100 specialist doctors. When a patient arrives, they're routed to just 2-3 relevant specialists — not all 100. The hospital has vast expertise, but each patient only uses a fraction of it. That's MoE.

## Why It Matters in 2026
Used by virtually all frontier models:
- **GPT-5.4** (OpenAI) — MoE architecture
- **Gemini 3.1** (Google) — MoE architecture
- **DeepSeek-V3** — 671B total params, but only ~37B active per query
- **Mistral Large 3** — Open-weight MoE

## Key Relationships
- Architecture for: [[LLM]], [[Foundation Model]]
- Related: [[Parameters]], [[Transformer]], [[Inference]]
- Enables: Efficiency at scale

## Learn More
- [YouTube: MoE Explained](https://www.youtube.com/results?search_query=Mixture+of+Experts+MoE+explained)
- [Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_experts)