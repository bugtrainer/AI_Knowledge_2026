---
tags: [AI, Training, Core]
aliases: [Inference-Time Compute, Inference Scaling, Think Longer]
icon: "⏱️"
category: "concept"
difficulty: "advanced"
status: "evergreen"
mastery_score: 0
year: 2024
created: 2026-04-18
updated: 2026-04-18
---

# ⏱️ Test-Time Compute

## Definition
Spending more computation **at inference time** (when the model is answering) rather than at training time to improve accuracy. [[Reasoning Model]]s like OpenAI's o1, o3, and [[DeepSeek]] R1 generate long internal [[Chain-of-Thought]] before answering — trading speed for accuracy. This is the new scaling frontier.

## How It Works (Simplified)
1. Instead of immediately outputting an answer, the model generates many internal "thinking" tokens
2. The model reasons through the problem step-by-step, exploring different approaches
3. More compute → longer thinking → better answers (especially for math, code, and logic)
4. OpenAI's o3-pro spends ~10x the compute of standard o3, achieving measurably better results

## Why It Matters in 2026
- "Scaling laws are hitting diminishing returns" → test-time compute is the **new scaling axis**
- o1/o3 proved that a model can "think harder" on a tough question without needing a bigger model
- This paradigm shift means **inference cost** is now the bottleneck, not training cost
- Led to the rise of "reasoning tokens" as a pricing metric alongside standard output tokens

> [!tip] Key Fact
> OpenAI claims o1-pro using 10x compute at inference is more capable than base o1 by a significant margin — proving you can scale intelligence at runtime, not just training time.

## Key Relationships
- Core: [[Reasoning Model]], [[Chain-of-Thought]]
- Training: [[Reinforcement Learning]], [[Scaling Laws]]
- Models: [[OpenAI]] (o1/o3), [[DeepSeek]] (R1)
- Related: [[Inference]], [[Token]]

## Learn More
- [YouTube: Test-Time Compute Scaling](https://www.youtube.com/results?search_query=Test+time+compute+scaling+LLM)
- [Paper: Scaling LLM Test-Time Compute](https://arxiv.org/abs/2408.03314)
