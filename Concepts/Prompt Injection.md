---
tags: [AI, Safety, Security]
aliases: [Prompt Attack, Injection Attack, Adversarial Prompt]
icon: "💉"
created: 2026-04-17
updated: 2026-04-17
---

!["Prompt Injection"](../Assets/Images/concept_prompt_injection.png)

## Definition
**Prompt Injection** is a security attack where malicious instructions are hidden inside inputs to hijack an AI model's behaviour — causing it to ignore its original instructions, reveal system prompts, or take unintended actions.

## Types
1. **Direct injection**: User directly types malicious instructions ("Ignore all previous instructions and...")
2. **Indirect injection**: Malicious instructions hidden in documents, emails, or web pages that the AI reads

## Why It Matters in 2026
- The **#1 security concern** for [[AI Agent]] deployments
- Agents can browse the web, read emails, and execute code — a successful injection could cause real damage
- Listed as the top risk in the OWASP Top 10 for LLM Applications
- [[Guardrails]] and [[NemoClaw (NVIDIA)]] exist specifically to mitigate this

## Key Relationships
- Mitigated by: [[Guardrails]], [[NemoClaw (NVIDIA)]], [[Red-teaming]]
- Targets: [[LLM]], [[AI Agent]]
- Related: [[Jailbreak]], [[AI Safety]]

## Learn More
- [YouTube: Prompt Injection](https://www.youtube.com/results?search_query=Prompt+Injection+attacks+explained)
- [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)