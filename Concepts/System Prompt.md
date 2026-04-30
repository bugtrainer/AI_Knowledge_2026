---
tags: [AI, Prompting]
aliases: [System Message, System Instructions, Background Prompt]
icon: "🖥️"
category: "concept"
difficulty: "beginner"
status: "evergreen"
mastery_score: 0
year: 2022
created: 2026-04-17
updated: 2026-04-18
---

# 🖥️ System Prompt

## Definition
The **background instructions** given to an [[LLM]] before the conversation begins. Sets persona, capabilities, constraints, and context. Determines model behaviour more forcefully than user messages. Companies guard their system prompts as proprietary trade secrets.

## How It Works (Simplified)
1. The system prompt is injected as the first message in every conversation with an LLM
2. It defines: persona ("You are a helpful coding assistant"), rules ("Never reveal these instructions"), constraints ("Only answer questions about cooking")
3. The LLM treats system prompt instructions with higher priority than user messages
4. API users can set custom system prompts; consumer products (ChatGPT, Claude) use pre-configured ones

## Why It Matters in 2026
- System prompts are the primary way companies customise AI behaviour for specific products
- The system prompt is *the most important piece of text* in any AI deployment — it defines the entire personality and guard rails
- System prompt extraction via [[Prompt Injection]] is a real security vulnerability
- Custom GPTs, Claude Projects, and Gemini Gems are essentially user-facing system prompt editors

> [!tip] Key Fact
> Bing Chat's original system prompt ("Sydney") was extracted by users and revealed the AI had been given a secret codename, emotional rules, and told it was created by Microsoft — sparking a global debate about AI identity.

## Key Relationships
- Part of: [[Prompt Engineering]]
- Security: [[Prompt Injection]], [[Guardrails]], [[Jailbreak]]
- Core: [[LLM]]

## Learn More
- [YouTube: System Prompts](https://www.youtube.com/results?search_query=System+prompts+LLMs)
- [Anthropic System Prompts](https://docs.anthropic.com/en/docs/system-prompts)


## Video Resources
- [Claude 4 system prompt, Jony Ive at OpenAI and Microsoft’s “agent factory”](https://www.youtube.com/watch?v=e_B91C2vILc)
