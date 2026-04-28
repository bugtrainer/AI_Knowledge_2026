---
tags: [AI, MOC, Index]
aliases: [AI Agents Guide, Agent Frameworks]
icon: "🤖"
category: "moc"
created: 2026-04-18
updated: 2026-04-29
---

# 🤖 MOC — Agents & Autonomy

> *AI systems that act, plan, and execute autonomously. The defining trend of 2024-2026.*

## The Agent Stack
An AI agent is built from stacked capabilities:

```
Planning → Tool Use → Memory → Self-Correction → Multi-Agent
  (ReAct)   (Function   (RAG +     (Reflection)    (CrewAI,
             Calling)   Vector DB)                   AutoGen)
```

## Foundations
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[AI Agent]] | 🟡 Intermediate | Autonomous AI that uses tools to achieve goals |
| [[Agentic AI]] | 🟡 Intermediate | The broad paradigm of autonomous AI systems |
| [[ReAct]] | 🟡 Intermediate | Reason + Act — the foundational agent loop |
| [[Function Calling]] | 🟡 Intermediate | How agents interface with tools via structured JSON |
| [[MCP]] | 🟡 Intermediate | Universal protocol for connecting AI to external tools |

## Agent Capabilities
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Memory]] | 🟡 Intermediate | Short-term (context) + long-term (vector DB) memory |
| [[Reflection]] | 🟡 Intermediate | Self-critique and self-correction loops |
| [[Orchestrator]] | 🟡 Intermediate | Managing multi-step agent workflows |

## Multi-Agent Systems
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Multi-Agent Systems]] | 🟡 Intermediate | Multiple specialised agents collaborating |
| [[CrewAI]] | 🟡 Intermediate | Role-based multi-agent framework |
| [[AutoGen]] | 🟡 Intermediate | Microsoft's multi-agent conversation framework |
| [[LangChain]] | 🟡 Intermediate | Most popular framework for LLM apps and agents |
| [[Google ADK]] | 🟡 Intermediate | Google's Agent Development Kit |
| [[Manus AI]] | 🟡 Intermediate | Meta-acquired general-purpose AI agent |

## Agent Applications
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Vibe Coding]] | 🟢 Beginner | Building software by describing it in natural language |
| [[Computer Use]] | 🟡 Intermediate | AI that controls mouse, keyboard, and screen |
| [[Hermes Agent]] | 🟡 Intermediate | Specialised agent for autonomous task execution |
| [[Skills]] | 🟡 Intermediate | Reusable capability modules for AI agents |

## Prompting for Agents
| Concept | Difficulty | One-Liner |
|---|---|---|
| [[Prompt Engineering]] | 🟢 Beginner | Crafting instructions that guide model output |
| [[Chain-of-Thought]] | 🟡 Intermediate | Step-by-step reasoning prompts |
| [[System Prompt]] | 🟢 Beginner | The background instructions that define agent behaviour |
| [[Grounding]] | 🟡 Intermediate | Connecting AI to verified data sources |

---

> [!TIP]
> **Learning order:** Start with AI Agent → ReAct → Function Calling → MCP → Memory → then explore frameworks (CrewAI, AutoGen, LangChain).
