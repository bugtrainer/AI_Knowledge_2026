---
tags: [AI, Training, Alignment]
aliases: [Reinforcement Learning from Human Feedback, Human Feedback Training]
icon: "👍"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**RLHF** (Reinforcement Learning from Human Feedback) is the key technique used to align AI models with human preferences. It trains the model to produce outputs that humans rate as helpful, harmless, and honest.

## How It Works
1. **Generate**: The model produces multiple responses to the same prompt
2. **Rank**: Humans rank the responses from best to worst
3. **Train Reward Model**: A separate model learns what humans prefer
4. **Optimize**: The main model is fine-tuned to maximize the reward model's score

## Why It Matters
- RLHF is what makes ChatGPT *feel* helpful (vs the raw GPT model which is incoherent)
- Co-invented by **[[Ilya Sutskever]]** and **[[Dario Amodei]]** at OpenAI
- Being supplemented/replaced by [[DPO]] (simpler, no reward model needed)

## Key Relationships
- Part of: [[Fine-Tuning]]
- Alternative: [[DPO]]
- Goal: [[AI Alignment]], [[AI Safety]]
- Co-invented by: [[Ilya Sutskever]], [[Dario Amodei]]

## Learn More
- [YouTube: RLHF Explained](https://www.youtube.com/results?search_query=RLHF+explained+2024)
- [Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)