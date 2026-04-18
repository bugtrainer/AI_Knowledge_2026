---
tags: [AI, Agents, Tools]
aliases: [Microsoft AutoGen, AG2]
icon: "🔧"
category: "concept"
difficulty: "intermediate"
status: "evergreen"
mastery_score: 0
year: 2023
created: 2026-04-18
updated: 2026-04-18
---

# 🔧 AutoGen

## Definition
[[Microsoft]]'s open-source multi-agent framework enabling multiple [[AI Agent]]s to converse, collaborate, and solve tasks together. Supports code execution, human-in-the-loop workflows, and agent role specialisation. One of the most popular agent frameworks alongside [[CrewAI]].

## How It Works (Simplified)
1. Define multiple agents with different roles (e.g., "Coder", "Critic", "Planner")
2. Agents communicate via a conversation protocol, each contributing their speciality
3. Built-in code execution sandbox lets agents write, run, and debug code autonomously
4. Human proxy agent allows human oversight at key decision points

## Why It Matters in 2026
- Proved that [[Multi-Agent Systems]] outperform single agents on complex coding and reasoning tasks
- Widely used in enterprise for automated code review, data analysis pipelines, and research workflows
- The research paper showed GPT-4 multi-agent setups solving problems that single agents consistently failed

> [!tip] Key Fact
> AutoGen's paper demonstrated that a team of GPT-4 agents could solve HumanEval coding challenges at 95%+ accuracy when debating solutions — far exceeding single-agent performance.

## Key Relationships
- Built by: [[Microsoft]]
- Pattern: [[Multi-Agent Systems]], [[AI Agent]]
- Similar: [[CrewAI]], [[LangChain _ LangGraph]]

## Learn More
- [YouTube: AutoGen Tutorial](https://www.youtube.com/results?search_query=AutoGen+Microsoft+multi+agent)
- [GitHub: AutoGen](https://microsoft.github.io/autogen/)
