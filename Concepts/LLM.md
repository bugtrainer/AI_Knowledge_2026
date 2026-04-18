---
tags: [AI, Core, Architecture]
aliases: [Large Language Model, Language Model, GPT, Foundation Model]
icon: "💬"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
A **Large Language Model (LLM)** is a neural network trained on vast amounts of text data to understand and generate human language. LLMs are the engine behind virtually every modern AI assistant — including [[ChatGPT (OpenAI)]], [[Claude (Anthropic)]], [[Gemini (Google)]], and [[Grok (xAI)]].

## How It Works (Simplified)
1. **Pre-training**: The model reads billions of web pages, books, and code — learning statistical patterns of language
2. **Fine-tuning**: The raw model is refined using [[RLHF]] or [[DPO]] to follow instructions and be helpful
3. **Inference**: When you type a prompt, the model predicts the most likely next [[Token]] — one word at a time — generating coherent responses

## Real-World Analogy
Imagine an extraordinarily well-read assistant who has absorbed more text than any human could read in 10 lifetimes. It doesn't "know" facts — it generates plausible continuations of text. This is why it can sometimes confidently produce incorrect information ([[Hallucination]]).

## Why It Matters in 2026
- LLMs are the foundation of the [[AI Agent]] revolution — agents use LLMs as their "brain"
- Leading models now have **1M-2M token** [[Context Window]]s (≈700K-1.4M words in one conversation)
- [[MoE]] (Mixture of Experts) architecture allows models like GPT-5.4 and DeepSeek-V3 to be both massive AND efficient
- The race is shifting from "bigger models" to "smarter reasoning" ([[Reasoning Model]])

## Flagship LLMs in April 2026
| Model | Lab | Parameters | Context |
|---|---|---|---|
| GPT-5.4 | [[OpenAI]] | Undisclosed (MoE) | 1M tokens |
| Claude Opus 4.6 | [[Anthropic]] | Undisclosed | 1M tokens |
| Gemini 3.1 Pro | [[Google DeepMind]] | Undisclosed (MoE) | 1M tokens |
| Grok 4.20 | [[xAI]] | Undisclosed | 2M tokens |
| DeepSeek-V3 | [[DeepSeek]] | 671B (MoE) | Large |
| Mistral Large 3 | [[Mistral AI]] | Open-weight (MoE) | Large |

## Key Relationships
- Architecture: [[Transformer]], [[Attention]], [[MoE]], [[Parameters]], [[Token]]
- Training: [[Pre-Training]], [[Fine-Tuning]], [[RLHF]], [[DPO]], [[LoRA]]
- Retrieval: [[RAG]], [[Embedding]], [[Grounding]]
- Deployment: [[Inference]], [[Quantisation]], [[Edge AI]], [[KV Cache]]
- Behaviour: [[Prompt Engineering]], [[Chain-of-Thought]], [[Temperature]]
- Limitations: [[Hallucination]], [[Overfitting]], [[Model Collapse]]
- Evolution: [[Reasoning Model]], [[Multimodal AI]], [[AI Agent]]
- Hub: [[MOC - Core Concepts]], [[MOC - Training & Optimisation]]

## Learn More
- [YouTube: Andrej Karpathy — Let's Build GPT](https://www.youtube.com/results?search_query=Andrej+Karpathy+lets+build+GPT)
- [Wikipedia: LLM](https://en.wikipedia.org/wiki/Large_language_model)