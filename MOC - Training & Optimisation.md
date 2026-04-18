---
tags: [AI, MOC, Index]
aliases: [Training Methods, AI Training Techniques]
icon: "🏋️"
category: "moc"
created: 2026-04-18
updated: 2026-04-18
---

# 🏋️ MOC — Training & Optimisation

> *How AI models are trained, fine-tuned, and made efficient.*

## The Training Pipeline
Understanding how a model goes from random weights to useful AI:

```
Pre-Training → Fine-Tuning → Alignment → Deployment
   (MASSIVE)      (targeted)    (RLHF/DPO)   (inference)
```

## Phase 1: Pre-Training
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Pre-Training]] | 🟡 Intermediate | Massive initial training on broad data |
| [[Scaling Laws]] | 🔴 Advanced | Mathematical laws governing how scaling compute/data improves models |
| [[Synthetic Data]] | 🟡 Intermediate | AI-generated training data |
| [[Data-Centric AI]] | 🟡 Intermediate | Data quality matters more than model architecture |

## Phase 2: Fine-Tuning & Alignment
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Fine-Tuning]] | 🟡 Intermediate | Adapting pre-trained models for specific tasks |
| [[RLHF]] | 🟡 Intermediate | Human feedback trains a reward model that aligns the LLM |
| [[DPO]] | 🔴 Advanced | Simpler alternative to RLHF using direct preferences |
| [[LoRA]] | 🟡 Intermediate | Parameter-efficient fine-tuning (train <1% of weights) |
| [[QLoRA]] | 🔴 Advanced | 4-bit quantised LoRA — fine-tune 70B models on one GPU |
| [[Constitutional AI]] | 🔴 Advanced | Anthropic's principle-based self-alignment technique |

## Phase 3: Optimisation for Deployment
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Quantisation]] | 🟡 Intermediate | Compressing model weights (32-bit → 4-bit) |
| [[Distillation]] | 🟡 Intermediate | Training small models to mimic large ones |
| [[Inference]] | 🟢 Beginner | Running a trained model to generate outputs |

## Core Mathematics
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Backpropagation]] | 🟡 Intermediate | Computing gradients to update weights |
| [[Gradient Descent]] | 🟢 Beginner | The universal optimisation algorithm |
| [[Reinforcement Learning]] | 🟡 Intermediate | Learning from rewards (foundation of RLHF) |

## Failure Modes
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Overfitting]] | 🟢 Beginner | Memorising data instead of learning patterns |
| [[Hallucination]] | 🟢 Beginner | Generating confident but false information |
| [[Model Collapse]] | 🔴 Advanced | Degradation from recursive AI-generated training data |

## The New Frontier
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Test-Time Compute]] | 🔴 Advanced | Scaling intelligence at inference, not training |
| [[In-Context Learning]] | 🟡 Intermediate | Learning from examples in the prompt |

---

> [!NOTE]
> Read top-to-bottom: the phases flow in the order models are actually built. Start at Pre-Training and work down.
