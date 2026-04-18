---
tags: [AI, Architecture, Generative]
aliases: [Denoising Diffusion, Stable Diffusion Architecture, DDPM]
icon: "🌫️"
created: 2026-04-17
updated: 2026-04-17
---

# 🌫️ Diffusion Model

## Definition
A **Diffusion Model** generates content (images, video, audio) by learning to reverse a process of adding noise. During training, it learns how to gradually **denoise** a completely random image into a coherent one. During generation, it starts from pure noise and progressively refines it.

## Real-World Analogy
Imagine taking a beautiful photograph and slowly adding static until it's pure noise. A diffusion model learns to reverse this process — starting from static and carving out a beautiful image.

## Why It Matters in 2026
Powers nearly all frontier image and video generation:
- [[Stable Diffusion 4 (Stability AI)]] — Open-source, run locally
- [[Midjourney v7]] — Artistic excellence
- [[DALL-E 4 (OpenAI)]] — Integrated in ChatGPT
- [[Sora 2 (OpenAI)]] — Video generation
- [[Runway Gen-4]] — Professional video

## Key Relationships
- Type of: [[Generative AI]], [[Neural Network]]
- Replaced: [[GAN]] as dominant image generation approach
- Powers: [[Midjourney v7]], [[DALL-E 4 (OpenAI)]], [[Stable Diffusion 4 (Stability AI)]]

## Learn More
- [YouTube: Diffusion Models](https://www.youtube.com/results?search_query=Diffusion+Models+explained+AI)
- [Wikipedia](https://en.wikipedia.org/wiki/Diffusion_model)