---
tags: [AI, Training, Core]
aliases: [Chinchilla Scaling, Kaplan Scaling Laws, Compute-Optimal Training]
icon: "📏"
category: "concept"
difficulty: "advanced"
status: "evergreen"
mastery_score: 0
year: 2020
created: 2026-04-18
updated: 2026-04-18
---

# 📏 Scaling Laws

## Definition
Empirical power-law relationships discovered by Kaplan et al. (2020) and Hoffmann et al. (2022, "Chinchilla") showing that model performance scales predictably with three variables: **compute**, **data size**, and **parameter count**. These laws let labs predict frontier model capability before spending $100M on training.

## How It Works (Simplified)
1. **Kaplan Laws (2020):** Performance improves as a smooth power-law function of compute, data, and parameters
2. **Chinchilla Law (2022):** For a given compute budget, the optimal model uses ~20 tokens per parameter — meaning GPT-3 (175B params, 300B tokens) was massively **undertrained**
3. Labs now use these laws to plan training runs: "If we spend $X on compute, we can expect Y capability"
4. Recent debate: "post-scaling" era suggests diminishing returns at the frontier, pushing interest to [[Test-Time Compute]]

## Why It Matters in 2026
- Scaling laws are why [[DeepSeek]]'s efficiency shocked the industry — they achieved frontier quality at a fraction of the expected compute
- The "Is scaling dead?" debate led to the rise of [[Reasoning Model]]s that scale compute at inference instead of training
- Every major lab uses scaling laws as their primary planning tool for multi-billion-dollar training runs

> [!tip] Key Fact
> The Chinchilla paper proved GPT-3 should have been trained on 3.5 trillion tokens (not 300B) — its "optimal" version would have been 10x better at the same cost.

## Key Relationships
- Training: [[Pre-Training]], [[Foundation Model]], [[LLM]]
- Efficiency: [[Distillation]], [[MoE]], [[SLM]]
- Frontier: [[Test-Time Compute]], [[Reasoning Model]]
- People: [[Ilya Sutskever]] (scaling maximalist)

## Learn More
- [YouTube: Scaling Laws Explained](https://www.youtube.com/results?search_query=LLM+scaling+laws+explained)
- [Paper: Chinchilla (Hoffmann et al.)](https://arxiv.org/abs/2203.15556)


## Video Resources
- [Manus, vibe coding, scaling laws and Perplexity’s AI phone](https://www.youtube.com/watch?v=Ddh3p185KhA)
- [Google’s AI Overviews, Golden Gate Claude, the "whale computer" and scaling laws](https://www.youtube.com/watch?v=VMmIdX9Zmuw)
