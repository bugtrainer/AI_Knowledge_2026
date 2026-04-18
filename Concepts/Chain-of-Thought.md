---
tags: [AI, Prompting]
aliases: [CoT, Step-by-Step Reasoning, Think Step by Step]
icon: "🔗"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**Chain-of-Thought (CoT)** prompting is a technique where you ask the model to reason **step-by-step** before giving a final answer. This dramatically improves accuracy on math, logic, and complex reasoning tasks.

## Example
❌ "What is 17 × 23?" → Model might guess incorrectly
✅ "What is 17 × 23? Think step by step." → Model shows: 17×20=340, 17×3=51, 340+51=391 ✓

## Why It Matters
- Foundation of [[Reasoning Model]]s (o3, R1, Magistral) — they do CoT **internally**
- Works with any LLM via prompting ("Let's think step by step")
- Dramatically improved since 2022 — now built into model training

## Key Relationships
- Part of: [[Prompt Engineering]]
- Internal to: [[Reasoning Model]]
- Used by: [[AI Agent]] (planning steps), [[Reflection]]

## Learn More
- [YouTube: Chain-of-Thought](https://www.youtube.com/results?search_query=Chain+of+Thought+prompting+explained)
- [Original Paper](https://arxiv.org/abs/2201.11903)