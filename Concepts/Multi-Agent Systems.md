---
tags: [AI, Agents]
aliases: [Multi-Agent, Multi-Agent Collaboration, Agent Swarms]
icon: "🌐"
category: "concept"
difficulty: "intermediate"
status: "evergreen"
mastery_score: 0
year: 2023
created: 2026-04-18
updated: 2026-04-18
---

# 🌐 Multi-Agent Systems

## Definition
Multiple [[AI Agent]]s coordinating to complete complex tasks — each specialising in a sub-task and communicating via structured messages. Patterns include supervisor→worker, peer-to-peer debate, and market-based negotiation. [[AutoGen]], [[CrewAI]], and LangGraph implement multi-agent architectures.

## How It Works (Simplified)
1. **Role Assignment:** Each agent gets a specific persona/skill (researcher, writer, reviewer, coder)
2. **Task Decomposition:** A complex goal is broken into sub-tasks and distributed to specialised agents
3. **Communication:** Agents share findings via structured messages, building on each other's work
4. **Convergence:** Results are aggregated, reviewed, and refined until the goal is met

## Why It Matters in 2026
- Single agents hit accuracy ceilings on complex tasks — multi-agent setups can debate, cross-check, and self-correct
- [[Andrew Ng]]'s "agentic workflow" framework identified multi-agent as one of 4 key agent design patterns
- Enterprise adoption is accelerating — teams of specialised agents handle customer support, code review, and research pipelines

> [!tip] Key Fact
> Microsoft's AutoGen research showed that GPT-4 agents debating each other solved math problems with near-perfect accuracy that single agents consistently failed.

## Key Relationships
- Core: [[AI Agent]], [[Agentic AI]]
- Frameworks: [[CrewAI]], [[AutoGen]], [[LangChain _ LangGraph]]
- Techniques: [[ReAct]], [[Reflection]], [[Memory]]
- Infrastructure: [[MCP]], [[Function Calling]]

## Learn More
- [YouTube: Multi-Agent AI Systems](https://www.youtube.com/results?search_query=Multi+agent+AI+systems+explained)
- [Microsoft AutoGen](https://microsoft.github.io/autogen/)
