---
tags: [AI, Deployment, Tools]
aliases: [Ollama AI, Local LLM Runner]
icon: "🦙"
category: "concept"
difficulty: "beginner"
status: "evergreen"
mastery_score: 0
year: 2023
created: 2026-04-18
updated: 2026-04-18
---

# 🦙 Ollama

## Definition
A CLI tool for running open-source LLMs locally on Mac, Windows, and Linux with a single command. Handles model download, quantisation, and inference automatically. `ollama run llama3` is how AI enthusiasts worldwide run local LLMs. 50,000+ GitHub stars in 6 months.

## How It Works (Simplified)
1. Install Ollama (one-line install on Mac/Linux, installer on Windows)
2. Run `ollama pull llama3` to download a quantised model (~4GB for 8B model)
3. Run `ollama run llama3` to start an interactive chat with a local LLM
4. Also provides a local API server compatible with OpenAI's API format — so tools like [[AnythingLLM]] and [[Cursor]] can use it

## Why It Matters in 2026
- Made local AI **trivially easy** — no Python, no GPU drivers, no configuration needed
- Powers the privacy-first AI movement: run fully offline, no data leaves your machine
- Combined with [[Quantisation]] and [[Open-Source AI]], Ollama democratises access to frontier-quality models

> [!tip] Key Fact
> Ollama reached 50,000 GitHub stars in 6 months — one of the fastest-growing open source AI tools ever. It turned "running AI locally" from a PhD-level task into a one-line command.

## Key Relationships
- Uses: [[Quantisation]], [[Open-Source AI]]
- Models: Llama, Mistral, Phi, Gemma, DeepSeek
- Tools: [[AnythingLLM]], [[Cursor]]
- Related: [[Edge AI]], [[SLM]]

## Learn More
- [YouTube: Ollama Tutorial](https://www.youtube.com/results?search_query=Ollama+local+LLM+tutorial)
- [Ollama Official](https://ollama.ai/)
