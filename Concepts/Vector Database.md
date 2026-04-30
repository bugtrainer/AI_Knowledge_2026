---
tags: [AI, Infrastructure, Data]
aliases: [Vector Store, Embedding Database, Pinecone, Weaviate, Chroma]
icon: "📊"
created: 2026-04-17
updated: 2026-04-17
---

# 📊 Vector Database

## Definition
A **Vector Database** stores data as high-dimensional vectors ([[Embedding]]s) and enables **semantic search** — finding items by meaning rather than exact keyword match. This is the backbone of [[RAG]] systems.

## Popular Vector Databases in 2026
| Database | Type | Key Feature |
|---|---|---|
| **Pinecone** | Cloud-native | Easiest to use, fully managed |
| **Weaviate** | Open-source | Hybrid search (vector + keyword) |
| **Chroma** | Open-source | Lightweight, developer-friendly |
| **Qdrant** | Open-source | High performance, Rust-based |
| **pgvector** | Postgres extension | Use your existing Postgres DB |

## Why It Matters
- Essential infrastructure for any [[RAG]] pipeline
- Enables semantic search across documents, images, and code
- Growing rapidly — Pinecone raised $100M+, Weaviate raised $50M+

## Key Relationships
- Stores: [[Embedding]]s
- Enables: [[RAG]], [[Grounding]]
- Used by: [[AnythingLLM]], [[LangChain _ LangGraph]]

## Learn More
- [YouTube: Vector Databases](https://www.youtube.com/results?search_query=Vector+Database+explained+AI)
- [Pinecone](https://www.pinecone.io/)

## Video Resources
- [What is a Vector Database? Powering Semantic Search & AI Applications](https://www.youtube.com/watch?v=gl1r1XV0SLw)
- [What is a Vector Database?](https://www.youtube.com/watch?v=t9IDoenf-lo)
