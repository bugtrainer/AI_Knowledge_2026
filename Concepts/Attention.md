---
tags: [AI, Architecture]
aliases: [Attention Mechanism, Self-Attention, Multi-Head Attention]
icon: "👁️"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
The **Attention Mechanism** allows a model to dynamically focus on the most relevant parts of the input when generating each output token. It is the core innovation inside the [[Transformer]] architecture.

## How It Works (Simplified)
For each word being generated, the model calculates "attention scores" — how much it should focus on every other word in the input. Words that are semantically related get higher attention scores.

Example: In "The cat sat on the mat because **it** was tired" — the attention mechanism helps the model understand that "it" refers to "cat", not "mat".

## Variants
- **Self-Attention**: Each token attends to all other tokens in the same sequence
- **Multi-Head Attention**: Multiple attention computations run in parallel, each learning different relationships
- **Cross-Attention**: Attention between two different sequences (used in encoder-decoder models)
- **Flash Attention**: Memory-efficient implementations for long sequences

## Key Relationships
- Core of: [[Transformer]]
- Enables: [[Context Window]] (longer attention = longer context)
- Performance: [[KV Cache]] (caches attention computations)
- Processes: [[Token]], [[Embedding]]

## Learn More
- [YouTube: 3Blue1Brown — Attention](https://www.youtube.com/results?search_query=Attention+Mechanism+Transformers+3Blue1Brown)
- [Wikipedia](https://en.wikipedia.org/wiki/Attention_(machine_learning))