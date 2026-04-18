---
tags: [AI, Deployment]
aliases: [LLM Cloud, GPU Cloud, RunPod, Lambda Labs, Vast.ai]
icon: "☁️"
category: "concept"
difficulty: "intermediate"
status: "evergreen"
mastery_score: 0
year: 2022
created: 2026-04-17
updated: 2026-04-18
---

# ☁️ LLM VPS

## Definition
Dedicated **GPU cloud servers** (RunPod, Lambda Labs, Vast.ai) for self-hosting open-source [[LLM]]s. Cost as low as $0.20/hr for an A6000 GPU — enabling anyone to run Llama 3 70B privately. An alternative to paying per-token API fees to OpenAI or Anthropic.

## How It Works (Simplified)
1. Choose a GPU instance (e.g., 1x A6000 48GB, 1x H100 80GB) from a cloud provider
2. Deploy via [[Docker]] or pre-built templates (most providers offer one-click LLM deployments)
3. Load your model using [[Ollama]], vLLM, or text-generation-inference
4. Access your private LLM via API — no data leaves your server

## Why It Matters in 2026
- Enables **full data sovereignty** — critical for healthcare, legal, and finance use cases
- RunPod's cheapest H100 instance: ~$2.20/hr — frontier-class inference is now affordable for startups
- Combined with [[Quantisation]] and [[Open-Source AI]], GPU cloud democratises AI deployment

> [!tip] Key Fact
> RunPod and Lambda Labs grew 10x in revenue during 2023-2024 as the demand for self-hosted AI models exploded. GPU cloud is now a $2B+ market.

## Key Relationships
- Deployment: [[Docker]], [[Inference]], [[Ollama]]
- Models: [[Open-Source AI]], [[Quantisation]]
- Hardware: [[GPU]], [[NVIDIA]]

## Learn More
- [YouTube: Self-Hosting LLMs on VPS](https://www.youtube.com/results?search_query=Self+hosting+LLM+VPS)
- [RunPod](https://runpod.io/)
