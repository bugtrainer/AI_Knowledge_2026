---
tags: [AI, Architecture]
aliases: [State Space Model, Mamba, Linear Attention]
icon: "🐍"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**State Space Models (SSMs)** are an alternative architecture to [[Transformer]]s designed for highly efficient processing of very long sequences. The most notable implementation is **Mamba** (Dec 2023).

## Why It Matters
- Transformers scale quadratically with sequence length (expensive for long contexts)
- SSMs scale linearly — much faster and cheaper for very long sequences
- Hybrid architectures (Transformer + Mamba) are being explored
- Still early — Transformers remain dominant in 2026

## Key Relationships
- Alternative to: [[Transformer]]
- Solves: Long-sequence efficiency
- Related: [[Attention]], [[Context Window]]

## Learn More
- [YouTube: Mamba SSM](https://www.youtube.com/results?search_query=State+Space+Models+Mamba+explained)
- [Mamba Paper](https://arxiv.org/abs/2312.00752)