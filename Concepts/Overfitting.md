---
tags: [AI, Training]
aliases: [Model Overfitting, Overfit, Memorization]
icon: "📈"
category: "concept"
difficulty: "beginner"
status: "evergreen"
mastery_score: 0
year: 1990
created: 2026-04-17
updated: 2026-04-18
---

# 📈 Overfitting

## Definition
When a model **memorises** training data rather than learning generalizable patterns. An overfit model performs spectacularly on its training data but fails on new, unseen examples. Addressed via dropout, regularisation, data augmentation, and early stopping.

## How It Works (Simplified)
1. During training, the model encounters the same examples thousands of times
2. Instead of learning the *underlying pattern*, it memorises individual examples
3. On the training set: 99% accuracy. On new data: 50% accuracy → the model hasn't actually learned
4. Real-world analogy: a student who memorises exam answers but can't answer rephrased questions

## Why It Matters in 2026
- Overfitting is the classic failure mode in all machine learning — beginners encounter it constantly
- [[Fine-Tuning]] LLMs on small datasets risks overfitting unless techniques like [[LoRA]] (which limits learnable parameters) are used
- [[Synthetic Data]] can exacerbate overfitting if it lacks diversity

> [!tip] Key Fact
> Classic example: a neural network trained on 10,000 cat photos can score 99.9% accuracy on those exact photos but fail to recognise a cat in a new photo. It memorised pixels, not the concept of "cat."

## Key Relationships
- Training: [[Deep Learning]], [[Fine-Tuning]], [[Pre-Training]]
- Related: [[Synthetic Data]], [[Model Collapse]]
- Mitigation: [[LoRA]] (parameter-efficient fine-tuning reduces overfitting risk)

## Learn More
- [YouTube: Overfitting Explained](https://www.youtube.com/results?search_query=Machine+Learning+Overfitting)
- [Wikipedia: Overfitting](https://en.wikipedia.org/wiki/Overfitting)
