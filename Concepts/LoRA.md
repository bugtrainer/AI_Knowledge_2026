---
tags: [AI, Training, Optimization]
aliases: [Low-Rank Adaptation, Parameter-Efficient Fine-Tuning, PEFT, QLoRA]
icon: "📉"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**LoRA (Low-Rank Adaptation)** is a parameter-efficient [[Fine-Tuning]] technique that trains only a **tiny fraction** of a model's parameters — making fine-tuning dramatically cheaper and faster while preserving most of the quality.

## How It Works (Simplified)
Instead of updating all billions of parameters, LoRA adds small "adapter" matrices to each layer. Only these adapters are trained — the original model stays frozen. The result: 10-100x cheaper fine-tuning.

## Why It Matters in 2026
- Lets small teams and individuals fine-tune massive models on a single GPU
- **QLoRA** combines LoRA with [[Quantisation]] for even lower resource requirements
- Powers the open-source fine-tuning community on Hugging Face

## Key Relationships
- Type of: [[Fine-Tuning]]
- Combined with: [[Quantisation]] (as QLoRA)
- Platform: [[Hugging Face]]

## Learn More
- [YouTube: LoRA](https://www.youtube.com/results?search_query=LoRA+Low+Rank+Adaptation+explained)
- [Original Paper](https://arxiv.org/abs/2106.09685)