---
tags: [AI, Architecture]
aliases: [Context Length, Token Limit, Context Size]
icon: "🖼️"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
The **Context Window** is the maximum amount of text (measured in [[Token]]s) that an AI model can process in a single conversation. It includes everything: the system prompt, conversation history, any retrieved documents, AND the model's response.

## Scale in 2026
| Model | Context Window | Equivalent Text |
|---|---|---|
| Gemini 3.1 Pro | 1M tokens | ~4 novels |
| Claude Opus 4.6 | 1M tokens | ~4 novels |
| GPT-5.4 | 1M tokens | ~4 novels |
| Grok 4.20 | 2M tokens | ~8 novels |

## Why It Matters
- Larger context = more information available for reasoning
- Critical for [[RAG]] — more documents can be injected
- Enables long coding sessions (entire codebases in context)
- Allows [[AI Agent]]s to maintain coherent long-running tasks

## Key Relationships
- Measured in: [[Token]]s
- Expanded by: [[KV Cache]] efficiency improvements
- Used by: [[RAG]], [[LLM]], [[AI Agent]]
- Performance: [[Attention]] computes across the full context

## Learn More
- [YouTube: Context Windows](https://www.youtube.com/results?search_query=Context+Window+LLM+explained)
- [Anthropic: Long Context](https://www.anthropic.com/news/100k-context-windows)