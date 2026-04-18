---
tags: [AI, Hardware, Core]
aliases: [Compute Unified Device Architecture, NVIDIA CUDA]
icon: "🔲"
category: "concept"
difficulty: "intermediate"
status: "evergreen"
mastery_score: 0
year: 2007
created: 2026-04-18
updated: 2026-04-18
---

# 🔲 CUDA

## Definition
**Compute Unified Device Architecture** — [[NVIDIA]]'s parallel computing platform and programming model that made GPUs programmable for general-purpose compute, including AI. CUDA's dominant software ecosystem is NVIDIA's biggest competitive moat — switching to AMD or Intel requires rewriting massive codebases. Every major AI framework (PyTorch, TensorFlow) is built on CUDA.

## How It Works (Simplified)
1. CUDA provides programming APIs that let developers run parallel computations on NVIDIA [[GPU]]s
2. AI frameworks (PyTorch, TensorFlow, JAX) use CUDA under the hood for GPU-accelerated training
3. Libraries like cuDNN (deep learning), cuBLAS (linear algebra), and NCCL (multi-GPU communication) are all CUDA-based
4. Developers write standard Python code; the frameworks translate it to CUDA GPU instructions automatically

## Why It Matters in 2026
- CUDA lock-in is so complete that AMD's ROCm alternative has struggled to gain meaningful AI market share for **10 years**
- Every AI researcher learns CUDA implicitly through PyTorch — it's the invisible foundation
- NVIDIA's $3T+ valuation is built on CUDA as much as on hardware

> [!tip] Key Fact
> NVIDIA's CUDA ecosystem has 4 million+ developer users and 15 years of accumulated libraries. AMD's competing ROCm platform supports less than 20% of the same library surface area — this is NVIDIA's real moat.

## Key Relationships
- Hardware: [[GPU]], [[NVIDIA]], [[ASIC]]
- Usage: [[Deep Learning]], [[Pre-Training]], [[Inference]]
- Alternatives: AMD ROCm, Google TPU (JAX/XLA)

## Learn More
- [YouTube: CUDA Explained](https://www.youtube.com/results?search_query=CUDA+NVIDIA+AI+explained)
- [NVIDIA CUDA Zone](https://developer.nvidia.com/cuda-zone)
