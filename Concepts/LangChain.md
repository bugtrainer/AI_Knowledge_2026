---
tags: [AI, Agents, Framework]
aliases: [LangChain Framework, LangGraph]
icon: "⛓️"
category: "concept"
difficulty: "intermediate"
status: "evergreen"
mastery_score: 0
year: 2022
created: 2026-04-18
updated: 2026-04-18
---

# ⛓️ LangChain

## Definition
The most widely adopted framework for building [[LLM]] applications and [[AI Agent]]s. Provides chains (sequential LLM calls), memory, [[RAG]] patterns, and tool integrations. **LangGraph** extends it for complex stateful agent workflows with cycles and branching. Created by Harrison Chase.

## How It Works (Simplified)
1. **Chains:** Compose multiple LLM calls in sequence (e.g., summarise → translate → format)
2. **Agents:** Give the LLM access to tools and let it decide which to use via [[Function Calling]]
3. **Memory:** Conversation history management for chat applications
4. **Retrieval:** Built-in [[RAG]] pipelines connecting LLMs to [[Vector Database]]s
5. **LangGraph:** State machines for multi-step, multi-agent workflows with human-in-the-loop

## Why It Matters in 2026
- LangChain became one of the **top-10 most forked repos** on GitHub in AI within a year of launch
- It's the "Rails of AI" — most AI startup prototypes begin with LangChain
- LangGraph's state machine approach is increasingly favoured over simpler chain patterns for production agent systems

> [!tip] Key Fact
> LangChain went from 0 to 80,000 GitHub stars in 18 months. Its creator Harrison Chase raised $25M in seed funding before the project was a year old.

## Key Relationships
- Core: [[AI Agent]], [[RAG]], [[Function Calling]]
- Similar: [[CrewAI]], [[AutoGen]], [[Google ADK]]
- Infrastructure: [[Vector Database]], [[MCP]]
- Uses: [[LLM]], [[Embedding]]

## Learn More
- [YouTube: LangChain Tutorial](https://www.youtube.com/results?search_query=LangChain+tutorial+explained)
- [LangChain Official](https://langchain.com/)


## Video Resources
- [Prompt Engineering for LLMs, PDL, & LangChain in Action](https://www.youtube.com/watch?v=cgVppD6paYo)
- [LangChain RAG: Optimizing AI Models for Accurate Responses](https://www.youtube.com/watch?v=cDn7bf84LsM)
- [LangChain vs LangGraph: A Tale of Two Frameworks](https://www.youtube.com/watch?v=qAF1NjEVHhY)
- [Create Advanced AI Agents with LangChain and RAG Techniques](https://www.youtube.com/watch?v=Y1PaM3edYoI)
- [Build AI Function Calling with LangChain & Advanced AI Models](https://www.youtube.com/watch?v=cjCYcTPryw8)
- [What is LangChain?](https://www.youtube.com/watch?v=1bUy-1hGZpI)
