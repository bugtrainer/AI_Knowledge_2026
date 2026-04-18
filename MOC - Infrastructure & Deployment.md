---
tags: [AI, MOC, Index]
aliases: [AI Infrastructure, Deployment Guide]
icon: "☁️"
category: "moc"
created: 2026-04-18
updated: 2026-04-18
---

# ☁️ MOC — Infrastructure & Deployment

> *The hardware, platforms, and tools that make AI actually work in the real world.*

## Hardware
The physical foundation of AI:

| Concept | Difficulty | One-Liner |
|---|---|---|
| [[GPU]] | 🟢 Beginner | The parallel compute chips that train and run AI |
| [[NVIDIA]] | 🟢 Beginner | Dominant AI chip company ($3T+ market cap) |
| [[CUDA]] | 🟡 Intermediate | NVIDIA's software platform for GPU computing |
| [[ASIC]] | 🔴 Advanced | Custom chips (Groq LPU, Google TPU) |
| [[NPU]] | 🟡 Intermediate | Neural Processing Units in phones/laptops |
| [[Edge AI]] | 🟡 Intermediate | Running AI on local devices |
| [[ESP32]] | 🟡 Intermediate | $5 microcontroller for IoT AI |
| [[Jetson Nano]] | 🟡 Intermediate | NVIDIA's edge AI computer |

## Deployment Platforms
How models go from research to production:

| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Inference]] | 🟢 Beginner | Running trained models to serve users |
| [[Docker]] | 🟡 Intermediate | Containerisation for reproducible AI deployment |
| [[LLM VPS]] | 🟡 Intermediate | GPU cloud servers for self-hosting |
| [[Quantisation]] | 🟡 Intermediate | Compressing models to run on smaller hardware |
| [[Ollama]] | 🟢 Beginner | Run open-source LLMs locally with one command |
| [[Hugging Face]] | 🟢 Beginner | The "GitHub of AI" — 500K+ models |

## Data Infrastructure
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Vector Database]] | 🟡 Intermediate | Stores embeddings for semantic search |
| [[Embedding]] | 🟡 Intermediate | Converting text/images to numerical vectors |
| [[RAG]] | 🟡 Intermediate | Retrieval-Augmented Generation using documents |
| [[AnythingLLM]] | 🟡 Intermediate | No-code private RAG tool |

## The Open-Source Stack
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Open-Source AI]] | 🟢 Beginner | The movement making AI freely available |
| [[SLM]] | 🟢 Beginner | Small models that run on consumer hardware |
| [[QLoRA]] | 🔴 Advanced | Fine-tune massive models on single GPUs |

---

> [!TIP]
> **Practical path:** GPU → Inference → Quantisation → Ollama → AnythingLLM. This gives you a working local AI stack in an afternoon.
