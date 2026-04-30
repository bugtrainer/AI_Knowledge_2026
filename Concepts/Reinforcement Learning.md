---
tags: [AI, Training, Core]
aliases: [RL, Reward Learning, Policy Gradient]
icon: "🎮"
category: "concept"
difficulty: "intermediate"
status: "evergreen"
mastery_score: 0
year: 1998
created: 2026-04-18
updated: 2026-04-18
---

# 🎮 Reinforcement Learning

## Definition
A learning paradigm where an agent learns to maximise a reward signal by taking actions in an environment. Unlike supervised learning (where correct answers are provided), RL agents discover optimal behaviour through trial and error. RL powers game-playing AI (AlphaGo), robotics, and critically — [[RLHF]] alignment.

## How It Works (Simplified)
1. An **agent** takes an **action** in an **environment**
2. The environment returns a **reward** (positive or negative)
3. The agent updates its **policy** (strategy) to maximise long-term cumulative reward
4. Over millions of episodes, the agent discovers optimal behaviour
5. In the LLM context: RLHF uses humans as the "environment" providing reward signals

## Why It Matters in 2026
- [[RLHF]] is the foundational alignment technique that made ChatGPT safe and helpful
- [[Reasoning Model]]s use RL to learn when to "think harder" ([[Test-Time Compute]])
- [[DeepSeek]] R1 used pure RL (without supervised fine-tuning) to develop reasoning — a paradigm breakthrough
- [[Embodied AI]] and robotics rely entirely on RL for learning physical tasks

> [!tip] Key Fact
> AlphaGo Zero (2017) learned Go from scratch using only RL — no human game data — and became the strongest Go player in history within 3 days of training.

## Key Relationships
- Applied: [[RLHF]], [[DPO]], [[Test-Time Compute]]
- Core: [[Deep Learning]], [[Neural Network]]
- Domains: [[Embodied AI]], [[AI Agent]]
- History: [[Demis Hassabis]] (AlphaGo), [[Ilya Sutskever]]

## Learn More
- [YouTube: Reinforcement Learning Explained](https://www.youtube.com/results?search_query=Reinforcement+Learning+explained)
- [Wikipedia: Reinforcement Learning](https://en.wikipedia.org/wiki/Reinforcement_learning)


## Video Resources
- [Reinforcement Learning from Human Feedback (RLHF) Explained](https://www.youtube.com/watch?v=T_X4XFwKX8k)
