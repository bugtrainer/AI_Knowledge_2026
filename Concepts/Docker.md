---
tags: [AI, Deployment]
aliases: [Docker Container, Containerization, Docker Image]
icon: "🐳"
category: "concept"
difficulty: "intermediate"
status: "evergreen"
mastery_score: 0
year: 2013
created: 2026-04-17
updated: 2026-04-18
---

# 🐳 Docker

## Definition
**Containerisation platform** to package AI applications and all their dependencies (Python, CUDA, libraries) into portable, reproducible containers. Standard infrastructure for deploying AI models consistently across dev, staging, and production. Over 90% of AI startup deployments use Docker.

## How It Works (Simplified)
1. A **Dockerfile** specifies the exact environment: OS, Python version, GPU libraries, model files
2. `docker build` packages everything into an **image** — a snapshot of the complete environment
3. `docker run` launches a **container** from the image — identical behaviour on any machine
4. Containers are isolated, reproducible, and fast to spin up/tear down

## Why It Matters in 2026
- Eliminates "works on my machine" problems — the #1 pain point when deploying AI models
- NVIDIA GPU containers (nvidia-docker) enable GPU-accelerated AI inference inside containers
- Every cloud platform (AWS, Azure, GCP) runs containerised AI workloads
- Tools like [[AnythingLLM]], [[Ollama]], and most self-hosted AI tools ship as Docker images

> [!tip] Key Fact
> Over 90% of AI startup deployments use Docker containers — it's essentially mandatory infrastructure. If you deploy AI in production, you deploy it in Docker.

## Key Relationships
- Deployment: [[Inference]], [[LLM VPS]]
- Tools: [[AnythingLLM]], [[Ollama]]
- Hardware: [[GPU]], [[CUDA]] (nvidia-docker)

## Learn More
- [YouTube: Docker in 100 Seconds](https://www.youtube.com/results?search_query=Docker+in+100+seconds+NetworkChuck)
- [Docker Official](https://www.docker.com/)
