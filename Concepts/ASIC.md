---
tags: [AI, Hardware]
aliases: [Application-Specific Integrated Circuit, Custom AI Chip, Groq LPU, Google TPU]
icon: "🔲"
category: "concept"
difficulty: "advanced"
status: "evergreen"
mastery_score: 0
year: 2016
created: 2026-04-17
updated: 2026-04-18
---

# 🔲 ASIC

## Definition
**Application-Specific Integrated Circuit** — custom chips designed and optimised for a single workload (e.g., AI inference or training). Unlike general-purpose [[GPU]]s, ASICs sacrifice flexibility for dramatic speed and power efficiency. Key examples: Groq's LPU, Google's TPUs, AWS Trainium/Inferentia, and Cerebras WSE.

## How It Works (Simplified)
1. Instead of running many different operations (like a GPU), an ASIC is purpose-built for one type of computation
2. This specialisation allows ASICs to be 5-10x more power-efficient than GPUs for AI tasks
3. Google TPUs: custom ASIC for matrix operations used to train Gemini
4. Groq LPU: entirely deterministic, zero-memory-bottleneck chip designed for ultra-fast inference

## Why It Matters in 2026
- Groq's LPU achieves **500+ tokens/sec** for Llama 3 70B — 10x faster than top GPU servers
- Google's TPU v7 (Ironwood) powers all Gemini training and inference at scale
- As AI moves to the edge ([[Edge AI]]), ASICs and [[NPU]]s become critical for battery-efficient on-device AI
- The ASIC vs. GPU debate will define the economics of AI infrastructure in the next decade

> [!tip] Key Fact
> Groq's LPU chip generates text so fast that it makes conversation with a 70B-parameter model feel like talking to a human with zero lag — fundamentally changing the user experience of AI.

## Key Relationships
- Hardware: [[GPU]], [[NPU]], [[CUDA]]
- Usage: [[Inference]] (primary use case for ASICs)
- Companies: [[NVIDIA]] (GPU competitor), [[Google DeepMind]] (TPU)
- Edge: [[Edge AI]], [[SLM]]

## Learn More
- [YouTube: AI ASICs Explained](https://www.youtube.com/results?search_query=ASIC+AI+chips+Groq+TPU)
- [Wikipedia: ASIC](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit)
