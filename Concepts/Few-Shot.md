---
tags: [AI, Prompting]
aliases: [Few Shot Learning, Few Shot Prompting, N-Shot]
icon: "🎯"
category: "concept"
difficulty: "beginner"
status: "evergreen"
mastery_score: 0
year: 2020
created: 2026-04-17
updated: 2026-04-18
---

# 🎯 Few-Shot

## Definition
Providing a small number of input→output examples in the prompt to guide the model's behaviour on a new task. Requires **no training** — entirely in-context. GPT-3 (2020) first demonstrated dramatic few-shot capability, proving large models are meta-learners through [[In-Context Learning]].

## How It Works (Simplified)
1. Provide 2-5 example pairs showing the desired input→output format
2. Then provide the actual input you want processed
3. The model identifies the pattern from your examples and applies it to the new input
4. Example: "Translate: dog→chien, cat→chat, house→" → model outputs "maison"

## Why It Matters in 2026
- Few-shot prompting can radically change model behaviour without any [[Fine-Tuning]]
- It's the most cost-effective way to customise AI output for specific tasks
- Combined with [[Chain-of-Thought]], few-shot examples teaching the model *how to think* (not just what to output) is one of the most powerful [[Prompt Engineering]] techniques

> [!tip] Key Fact
> GPT-3's few-shot ability surprised OpenAI researchers — it wasn't explicitly trained for it. The ability to learn from examples in the prompt emerged spontaneously from scale.

## Key Relationships
- Related: [[Zero-Shot]], [[In-Context Learning]], [[Prompt Engineering]]
- Technique: [[Chain-of-Thought]] (few-shot CoT is particularly powerful)
- Core: [[LLM]], [[Context Window]]

## Learn More
- [YouTube: Few-Shot Prompting](https://www.youtube.com/results?search_query=Few+shot+prompting)
- [Wikipedia: ICL](https://en.wikipedia.org/wiki/In-context_learning_(natural_language_processing))
