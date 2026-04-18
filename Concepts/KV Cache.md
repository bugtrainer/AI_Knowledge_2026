---
tags: [AI, Architecture, Optimization]
aliases: [Key-Value Cache, Attention Cache, KV-Cache]
icon: "💾"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
The **KV Cache** (Key-Value Cache) stores previously computed [[Attention]] values during [[Inference]], so the model doesn't need to recompute them for every new [[Token]]. It's the "short-term memory" that makes text generation efficient.

## Why It Matters
- Without KV Cache, generating each token would require reprocessing the ENTIRE conversation — extremely slow
- The cache grows with [[Context Window]] size — a major engineering challenge at 1M+ tokens
- Innovations like **PagedAttention** and **KV Cache quantization** are critical for serving long-context models

## Key Relationships
- Optimises: [[Transformer]], [[Inference]]
- Stores: [[Attention]] computations
- Grows with: [[Context Window]], [[Token]] count

## Learn More
- [YouTube: KV Cache](https://www.youtube.com/results?search_query=KV+Cache+LLM+explained)
- [Hugging Face Blog](https://huggingface.co/blog/kv-cache-quantization)