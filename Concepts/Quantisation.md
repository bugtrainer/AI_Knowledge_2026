---
tags: [AI, Deployment, Optimization]
aliases: [Quantization, Model Compression, INT4, INT8, GGUF]
icon: "🗜️"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**Quantisation** is the process of compressing AI models by reducing the numerical precision of their weights (e.g., from FP16 to INT8 or INT4). This makes models **smaller and faster** while maintaining most of their quality.

## Why It Matters in 2026
- Enables running large models on **consumer hardware** (laptops, phones)
- Critical for [[Edge AI]] — running AI locally without cloud
- [[Ollama]] uses quantised models (GGUF format) to run LLMs on your Mac/PC
- Trade-off: Small quality loss for massive efficiency gains

## Common Formats
| Format | Bits | Use Case |
|---|---|---|
| FP32 | 32-bit | Training (full precision) |
| FP16/BF16 | 16-bit | GPU inference |
| INT8 | 8-bit | Server inference |
| INT4/GPTQ | 4-bit | Consumer hardware |
| GGUF | Variable | Ollama/local deployment |

## Key Relationships
- Enables: [[Edge AI]], [[SLM]]
- Tools: [[Ollama]], [[AnythingLLM]]
- Related: [[Inference]], [[Parameters]]
- Trade-off with: Quality/accuracy

## Learn More
- [YouTube: Quantization](https://www.youtube.com/results?search_query=LLM+Quantization+explained)
- [Hugging Face Docs](https://huggingface.co/docs/optimum/concept_guides/quantization)