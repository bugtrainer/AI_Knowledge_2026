---
tags: [AI, Training, Core]
aliases: [Gradient Descent Algorithm, SGD, Stochastic Gradient Descent, Adam Optimizer]
icon: "⛰️"
category: "concept"
difficulty: "beginner"
status: "evergreen"
mastery_score: 0
year: 1847
created: 2026-04-18
updated: 2026-04-18
---

# ⛰️ Gradient Descent

## Definition
The universal optimisation algorithm used to train all neural networks. It iteratively adjusts model weights in the direction of steepest loss decrease — like a blindfolded hiker feeling their way downhill to find the valley floor. The **Adam** optimizer (2014) is the dominant variant used in virtually all modern deep learning.

## How It Works (Simplified)
1. The model makes a prediction and computes how wrong it was (the **loss**)
2. [[Backpropagation]] calculates the gradient (slope) of the loss with respect to every weight
3. Each weight is nudged slightly in the direction that reduces the loss (the "downhill" direction)
4. Repeat millions of times across billions of data points until the model converges

## Why It Matters in 2026
- Without gradient descent, neural networks cannot learn — it's the mathematical heartbeat of all AI training
- The choice of optimizer (SGD, Adam, AdaFactor, LION) materially affects training speed and model quality
- Understanding gradient descent is a prerequisite for understanding why AI training is so compute-intensive

> [!tip] Key Fact
> The Adam optimizer (Kingma & Ba, 2014) is used by default in virtually all deep learning — from GPT to Stable Diffusion to AlphaFold. It combines momentum and adaptive learning rates.

## Key Relationships
- Core: [[Backpropagation]], [[Neural Network]], [[Deep Learning]]
- Training: [[Pre-Training]], [[Fine-Tuning]]
- Hardware: [[GPU]] (parallelises gradient computation)

## Learn More
- [YouTube: Gradient Descent Explained](https://www.youtube.com/results?search_query=Gradient+Descent+explained+3Blue1Brown)
- [Wikipedia: Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent)
