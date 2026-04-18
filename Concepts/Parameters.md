---
tags: [AI, Architecture]
aliases: [Model Parameters, Weights, Weights and Biases]
icon: "🧮"
category: "concept"
difficulty: "beginner"
status: "evergreen"
mastery_score: 0
year: 1986
created: 2026-04-17
updated: 2026-04-18
---

# 🧮 Parameters

## Definition
Learnable numerical **weights and biases** inside a neural network — the "knowledge" encoded after training. GPT-3: 175B, GPT-4: estimated 1.8T ([[MoE]]), Llama 3: 8B/70B/405B. More parameters generally means more capability but exponentially higher compute cost and memory requirements.

## How It Works (Simplified)
1. Before training, parameters are initialised randomly
2. During [[Pre-Training]], [[Gradient Descent]] adjusts each parameter trillions of times
3. After training, the parameters encode compressed representations of everything the model learned
4. At [[Inference]], input data flows through these parameters to produce outputs
5. Parameter count is measured in **Billions (B)** — 1B = 1,000,000,000 individual numbers

## Why It Matters in 2026
- Parameter count was the primary scaling axis until 2024. [[Scaling Laws]] showed that more parameters + more data = better models
- The rise of [[MoE]] means "total parameters" and "active parameters per token" can differ dramatically (GPT-4: 1.8T total but ~220B active)
- [[Quantisation]] reduces the precision of each parameter (32-bit → 4-bit) to fit large models on smaller hardware
- The human brain has ~100 trillion synapses — GPT-4's 1.8T parameters are within 2 orders of magnitude

> [!tip] Key Fact
> GPT-2 (2019): 1.5B parameters. GPT-3 (2020): 175B. GPT-4 (2023): estimated 1.8T. That's a 1,200x increase in 4 years — the most aggressive scaling in computing history.

## Key Relationships
- Core: [[LLM]], [[Neural Network]], [[Deep Learning]]
- Scaling: [[Scaling Laws]], [[Foundation Model]]
- Efficiency: [[Quantisation]], [[MoE]], [[LoRA]], [[Distillation]]

## Learn More
- [YouTube: AI Parameters Explained](https://www.youtube.com/results?search_query=AI+Parameters+explained)
- [Wikipedia: Model Parameters](https://en.wikipedia.org/wiki/Parameter_(machine_learning))
