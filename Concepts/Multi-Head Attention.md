---
tags: [AI, Architecture]
aliases: [MHA, Multi Head Self Attention]
icon: "🧩"
category: "concept"
difficulty: "advanced"
status: "evergreen"
mastery_score: 0
year: 2017
created: 2026-04-18
updated: 2026-04-18
---

# 🧩 Multi-Head Attention

## Definition
Running multiple [[Attention]] operations in parallel, each learning to focus on different aspects of the input (syntax, semantics, coreference, position). The key mechanism enabling [[Transformer]]s to model complex, multi-faceted relationships simultaneously. Each "head" specialises in detecting different relationship types.

## How It Works (Simplified)
1. The input is projected into multiple different "subspaces" (one per head)
2. Each head independently computes attention weights over the input sequence
3. One head might attend to syntactic relationships, another to semantic meaning, another to positional patterns
4. All head outputs are concatenated and projected back to the original dimension
5. GPT-4 is estimated to have **96 attention heads per layer** across **120 layers**

## Why It Matters in 2026
- Without multi-head attention, transformers would only capture one type of relationship at a time
- The number of attention heads is a key architectural decision — more heads = more expressiveness but more compute
- Understanding MHA is prerequisite for understanding [[KV Cache]], [[MoE]], and modern context window extensions

> [!tip] Key Fact
> Research visualising attention heads found that specific heads in GPT-2 reliably attend to syntax (e.g., subject-verb agreement) while others attend to semantic co-occurrence — they genuinely specialise.

## Key Relationships
- Core: [[Attention]], [[Transformer]]
- Optimisation: [[KV Cache]]
- Architecture: [[MoE]], [[SSM]]

## Learn More
- [YouTube: Multi-Head Attention](https://www.youtube.com/results?search_query=Multi+head+attention+explained)
- [Wikipedia: Multi-Head Attention](https://en.wikipedia.org/wiki/Attention_(machine_learning)#Multi-head_attention)
