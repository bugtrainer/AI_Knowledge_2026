---
tags: [AI, Training]
aliases: [Quantized LoRA, 4-bit LoRA]
icon: "⚡"
category: "concept"
difficulty: "advanced"
status: "evergreen"
mastery_score: 0
year: 2023
created: 2026-04-18
updated: 2026-04-18
---

# ⚡ QLoRA

## Definition
**Quantized LoRA** — combines 4-bit [[Quantisation]] with [[LoRA]] fine-tuning, allowing researchers to train and adapt massive models (33B–70B parameters) on a single consumer GPU. Introduced by Dettmers et al. (2023), QLoRA democratised fine-tuning that previously required clusters of enterprise GPUs.

## How It Works (Simplified)
1. The base model is loaded in 4-bit precision (NormalFloat4), drastically reducing memory usage
2. Small trainable LoRA adapter matrices are added to each attention layer in full precision (BFloat16)
3. Only the adapter weights are updated during training — the base model stays frozen
4. Result: a 65B parameter model that would need 130GB VRAM can be fine-tuned on a single 48GB GPU

## Why It Matters in 2026
- QLoRA is why **anyone with a gaming GPU** can fine-tune competitive AI models — not just labs with $100M budgets
- The Guanaco models (QLoRA fine-tunes of LLaMA) proved the technique works at scale
- Combined with [[Ollama]] and local hosting, QLoRA enables fully private, customised AI on consumer hardware

> [!tip] Key Fact
> QLoRA reduced the VRAM needed to fine-tune a 65B model from 780GB (10x A100) down to 48GB (1x A6000) — a 16x efficiency improvement.

## Key Relationships
- Prerequisite: [[LoRA]], [[Quantisation]]
- Training: [[Fine-Tuning]]
- Deployment: [[Edge AI]], [[Ollama]]
- Related: [[Distillation]], [[SLM]]

## Learn More
- [YouTube: QLoRA Explained](https://www.youtube.com/results?search_query=QLoRA+explained)
- [Paper: QLoRA (Dettmers et al.)](https://arxiv.org/abs/2305.14314)
