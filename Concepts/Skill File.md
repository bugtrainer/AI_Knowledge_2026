---
tags: [AI, Agents, Concepts]
aliases: [Skill Instruction, Agent Skill File, Skill definition]
icon: "📜"
created: 2026-04-21
updated: 2026-04-21
---

## Definition
A **Skill File** is a modular, portable instruction set that defines a specific capability for an **[[AI Agent]]**. Unlike a broad [[System Prompt]], a skill file is task-specific and can be dynamically loaded by an agent to execute a particular workflow, such as "Performing a Financial Audit," "Writing Unit Tests," or "Generating Functional Requirements."

## Why It Matters in 2026
As agents have moved from general-purpose assistants to specialized digital workers, the "massive single prompt" has been replaced by **Modular Orchestration**. Logic is now separated into discrete "skills" that can be updated, shared, and versioned independently.

---

## 🛠️ What a Skill File Should Contain
To be effective, a skill file must be structured so that the agent understands not only *what* to do, but *when* and *under what constraints*.

### 1. Metadata & ID
- **Name**: Clear title for the skill (e.g., `audit_python_security`).
- **Version**: Version tracking (important for multi-agent systems).
- **Tags**: Categorization for the agent's orchestrator to find.

### 2. Triggers (Activation Logic)
- **Directives**: Specific keywords or intents that should trigger this skill.
- **Contextual Clues**: File types, workspace states, or previous message patterns that signal this skill is relevant.

### 3. Core Instructions (The "Skill Logic")
- **Step-by-Step Procedure**: A precise, logical sequence of actions.
- **Decision Trees**: "If the output is X, do Y; if it is Z, do A."
- **Expected Artifacts**: What the final output should look like (e.g., a Markdown report, a Pull Request).

### 4. Constraints & Guardrails
- **Negative Constraints**: "Never use library X," "Do not modify the `assets` folder."
- **Logic Boundaries**: Specific edge cases to avoid or handle with caution.
- **Safety Markers**: Compliance or preference rules relevant to the task.

### 5. Tool Requirements
- List of **[[Function Calling]]** tools or **[[MCP]]** servers required to execute the skill (e.g., `web_search`, `read_file`, `sql_query`).

### 6. Few-shot Examples
- **Input/Output Pairs**: At least 2-3 examples of high-quality execution for the agent to follow.

---

## 🚀 Best Practices
- **Atomic Design**: Keep one skill per file. If a skill becomes too complex, break it into sub-skills.
- **Agent-Readable Format**: Use headers and bullet points. Agents process structured text better than dense paragraphs.
- **Semantic Consistency**: Use consistent terminology (e.g., always referring to "the target file" rather than "it" or "the script").

## Key Relationships
- Capability: [[Skills]]
- Implementation: [[Prompt Engineering]], [[System Prompt]]
- Execution: [[AI Agent]], [[Orchestrator]]
- Standard: [[MCP]]

---

## Learn More
- [Official Antigravity Skill Specs](https://example.com/antigravity/skills)
- [Anthropic: Modular Prompting for Agents](https://anthropic.com/research/modular-prompting)
