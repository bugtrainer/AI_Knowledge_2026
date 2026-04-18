---
tags: [AI, Training, Retrieval]
aliases: [Retrieval-Augmented Generation, Retrieval Augmented Generation]
icon: "🔍"
created: 2026-04-17
updated: 2026-04-17
---

## Definition
**Retrieval-Augmented Generation (RAG)** is a technique that gives an AI model access to **your specific knowledge base** — company documents, databases, manuals, PDFs — at the time of answering. The system first **retrieves** relevant information, then **generates** an answer grounded in those sources.

## How It Works
```
User asks question → Vector search finds relevant documents → 
Retrieved context + question sent to LLM → LLM generates grounded answer
```
1. Your documents are split into chunks and converted into [[Embedding]]s (numerical vectors)
2. These embeddings are stored in a **Vector Database** (like Pinecone, Weaviate, or Chroma)
3. When you ask a question, the system searches for the most semantically similar chunks
4. Those chunks are injected into the LLM's [[Context Window]] alongside your question
5. The LLM generates an answer that is **grounded in your actual data**

## Real-World Analogy
Imagine asking a brilliant analyst a question — but instead of answering from memory (which might be wrong), they first pull out the 5 most relevant documents from your filing cabinet, read them, and THEN give you an answer with citations. That's RAG.

## Why It Matters in 2026
- **Dramatically reduces [[Hallucination]]** — answers are traceable to sources
- Powers [[NotebookLM]], enterprise search, and custom AI assistants
- Essential for any AI deployment where **accuracy matters** (legal, medical, financial)
- [[AnythingLLM]] makes it easy to build private RAG pipelines locally
- Combined with [[Grounding]] and citation requirements, RAG is the standard for trustworthy AI

## Key Relationships
- Data: [[Embedding]], [[Vector Database]], [[Context Window]]
- Reduces: [[Hallucination]]
- Enhanced by: [[Grounding]], [[Data-Centric AI]]
- Tools: [[AnythingLLM]], [[NotebookLM]], [[LangChain _ LangGraph]]
- Related: [[Memory]], [[Fine-Tuning]]

## Learn More
- [YouTube: RAG Explained (IBM)](https://www.youtube.com/results?search_query=RAG+Retrieval+Augmented+Generation+IBM)
- [IBM Research: RAG](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)