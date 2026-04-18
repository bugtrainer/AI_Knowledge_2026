---
tags: [AI, Deployment]
aliases: [Model Inference, Running a Model, Serving]
icon: "⚙️"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**Inference** is the process of running a trained AI model to generate outputs — i.e., when you send a prompt and get a response. Distinct from *training* (building the model), inference is where the model is actually *used*.

## Why It Matters in 2026
- Inference cost and speed are **top priorities** for AI companies
- Specialised hardware like [[Groq (LPU)]] and [[Cerebras (WSE-3)]] are built for fast inference
- [[Quantisation]] reduces inference cost by compressing models
- [[KV Cache]] accelerates inference for long conversations
- Tokens per second is the key performance metric

## Key Relationship
- Hardware: [[NVIDIA GPUs (Blackwell)]], [[Google TPU v7 (Ironwood)]], [[Groq (LPU)]], [[ASIC]]
- Optimised by: [[Quantisation]], [[KV Cache]], [[MoE]]
- Controlled by: [[Temperature]]

## Learn More
- [YouTube: Training vs Inference](https://www.youtube.com/results?search_query=AI+Training+vs+Inference)
- [Wikipedia](https://en.wikipedia.org/wiki/Statistical_inference)