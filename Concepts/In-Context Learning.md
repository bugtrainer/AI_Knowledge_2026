---
tags: [AI, Prompting, Training]
aliases: [ICL, In Context Learning, Learning in Context]
icon: "📖"
category: "concept"
difficulty: "intermediate"
status: "evergreen"
mastery_score: 0
year: 2020
created: 2026-04-18
updated: 2026-04-18
---

# 📖 In-Context Learning

## Definition
The emergent ability of large language models to learn new tasks **purely from examples provided in the prompt** — without any weight updates or fine-tuning. A meta-learning phenomenon that appears to emerge at scale. Underpins both [[Few-Shot]] prompting and [[RAG]].

## How It Works (Simplified)
1. You provide examples of the desired input→output behaviour directly in the prompt
2. The model identifies the pattern from your examples and applies it to new inputs
3. No training occurs — the model's weights don't change. It's purely in the forward pass
4. This ability gets dramatically better as models get larger (an "emergent" capability)

## Why It Matters in 2026
- ICL is why [[Prompt Engineering]] is so powerful — you can teach an LLM a new task with 3-5 examples
- It's a surprise phenomenon — researchers building GPT-3 didn't predict it would emerge
- ICL is why [[RAG]] works: retrieved documents become "examples" the model learns from in-context
- Understanding ICL helps explain why larger models are qualitatively better, not just incrementally

> [!tip] Key Fact
> ICL was a surprise finding in GPT-3. Researchers believed bigger models would just be better at N-gram prediction — they didn't expect them to become meta-learners that could generalise from a few examples.

## Key Relationships
- Techniques: [[Few-Shot]], [[Zero-Shot]], [[RAG]]
- Related: [[Prompt Engineering]], [[Context Window]]
- Core: [[LLM]], [[Foundation Model]]

## Learn More
- [YouTube: In-Context Learning](https://www.youtube.com/results?search_query=In+context+learning+LLM)
- [Wikipedia: ICL in NLP](https://en.wikipedia.org/wiki/In-context_learning_%28natural_language_processing%29)