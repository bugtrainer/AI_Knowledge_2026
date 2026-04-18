---
tags: [AI, Safety, Alignment]
aliases: [CAI, Self-Critique, Anthropic Alignment]
icon: "📜"
created: 2026-04-17
updated: 2026-04-17
---

# 📜 Constitutional AI

## Definition
**Constitutional AI (CAI)** is [[Anthropic]]'s novel approach to AI alignment. Instead of relying solely on [[RLHF]] (human feedback), the model is given a set of **principles** (a "constitution") and learns to **self-critique** its own outputs against those principles.

## How It Works
1. The model generates a response
2. The model critiques its own response against constitutional principles (harmlessness, helpfulness, honesty)
3. The model revises its response based on self-critique
4. This process is used to generate training data for [[RLHF]]-style optimization

## Why It Matters
- More scalable than human-only feedback
- Allows systematic, documented alignment principles
- Powers Claude's safety behaviour
- Pioneered by [[Anthropic]] ([[Dario Amodei]])

## Key Relationships
- Created by: [[Anthropic]], [[Dario Amodei]]
- Built on: [[RLHF]], [[AI Alignment]]
- Related: [[Guardrails]], [[Red-teaming]]

## Learn More
- [YouTube: Constitutional AI](https://www.youtube.com/results?search_query=Constitutional+AI+Anthropic+explained)
- [Anthropic Research](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback)