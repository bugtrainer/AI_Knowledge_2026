# Glossary

7. Complete AI Glossary

### Core AI Concepts

| Term | What It Is / Does |
|---|---|
| **AGI** | Artificial General Intelligence — hypothetical AI with human-level reasoning across all domains. Does not exist yet. |
| **AI Agent** | An AI that autonomously takes a sequence of actions to complete a goal using tools. |
| **Agentic AI** | AI systems operating with greater autonomy over multiple steps and decisions. |
| **Deep Learning** | Machine learning using multi-layered neural networks — the engine behind all modern AI. |
| **Foundation Model** | A large pre-trained model adaptable to many tasks. |
| **Generative AI** | AI that creates new content: text, images, audio, video, 3D worlds. |
| **LLM** | Large Language Model — trained on massive text data to understand and generate language. |
| **Multimodal AI** | AI that processes and generates multiple content types: text, image, audio, video. |
| **Reasoning Model** | AI model that uses internal chain-of-thought to "think" step-by-step before answering. |
| **World Model** | AI that builds an internal model of physical reality — enabling simulation, prediction, and planning. |
| **Embodied AI / Physical AI** | AI systems that interact with the real world through physical forms (robots, vehicles). |

### Training Concepts

| Term | What It Is / Does |
|---|---|
| **Fine-tuning** | Adapting a pre-trained model for a specific use case. |
| **Hallucination** | When a model generates confident but factually incorrect information. |
| **Overfitting** | When a model memorises training data rather than generalising. |
| **Pre-training** | Initial large-scale training on broad data. |
| **RAG** | Retrieval-Augmented Generation — grounding AI answers in retrieved documents from a knowledge base. |
| **RLHF** | Reinforcement Learning from Human Feedback — key alignment technique. |
| **Synthetic Data** | Artificially generated data for training. Companies: Gretel, MostlyAI, Datagen. |
| **Data-Centric AI** | Paradigm where data quality, not model architecture, is the primary constraint. |

### Architecture

| Term | What It Is / Does |
|---|---|
| **Attention Mechanism** | Allows the model to focus on relevant parts of the input. |
| **Context Window** | Maximum text a model can process at once. Leading models in 2026: 1M-2M tokens. |
| **Embedding** | Numerical vector representation of words or concepts. |
| **MoE (Mixture of Experts)** | Architecture where different sub-networks specialise in different inputs. Used by GPT-5, Gemini 3.1, DeepSeek-V3, Mistral Large 3. |
| **Parameters** | Learnable values inside a model (e.g., '70 billion parameters'). |
| **Token** | Basic unit of text a model processes — roughly a word or part of a word. |
| **Transformer** | Dominant neural network architecture behind all modern LLMs. Introduced in the 2017 paper "Attention Is All You Need." |
| **ASIC** | Application-Specific Integrated Circuit — custom chip optimised for a particular task (e.g. Groq's LPU, Google's TPU). |
| **Wafer-Scale Engine** | Cerebras approach: entire silicon wafer as a single processor for massive parallelism. |

### Prompting and Behaviour

| Term | What It Is / Does |
|---|---|
| **Chain-of-Thought (CoT)** | Prompting the model to reason step-by-step before answering. |
| **Few-shot** | Providing examples in the prompt to guide model behaviour. |
| **Grounding** | Connecting outputs to verified real-world information to reduce hallucination. |
| **In-context Learning (ICL)** | Model adapts to a task using examples within the prompt — no retraining needed. |
| **Prompt Engineering** | Crafting prompts strategically to elicit better outputs — a core skill in 2026. |
| **System Prompt** | Instructions given to the model before a conversation begins. |
| **Temperature** | Controls randomness: high = creative, low = deterministic. |
| **Zero-shot** | Performing a task with no examples in the prompt. |

### Agents and Deployment

| Term | What It Is / Does |
|---|---|
| **Digital Labor** | AI behaving as a worker-like entity in structured business processes. |
| **Edge AI** | Running AI models locally on devices rather than the cloud. |
| **GEO** | Generative Engine Optimisation — optimising content to be cited by AI models. |
| **Guardrails** | Technical restrictions on what an AI system can say or do. |
| **Inference** | Running a trained model to generate outputs. Cost and speed are top priorities in 2026. |
| **MCP** | Model Context Protocol — standard for connecting AI models to external tools. |
| **Model Routing** | Directing tasks to different models based on complexity and cost. |
| **Orchestrator** | A controller that coordinates and delegates to multiple agents. |
| **Prompt Injection** | Malicious inputs designed to hijack a model's behaviour — key security concern for agents. |
| **Quantisation** | Compressing models to run on smaller hardware. |
| **Vibe Coding** | Using AI to write most or all code by describing what you want in plain English. |
| **Computer Use** | An AI model's ability to interact with software environments — clicking, typing, and navigating desktop applications. |

### Safety, Alignment, and Regulation

| Term | What It Is / Does |
|---|---|
| **AI Alignment** | Ensuring AI systems pursue the goals humans actually intend. |
| **AI Safety** | Research ensuring AI systems are safe and beneficial long-term. |
| **AI Sovereignty** | Strategic independence from specific AI providers — data, compute, and geopolitical considerations. |
| **Constitutional AI** | Anthropic's approach: model self-critiques against a defined set of principles. |
| **Interpretability** | Understanding why a model makes specific decisions — required for regulation and trust. |
| **Jailbreak** | A prompt designed to bypass safety guidelines. |
| **Model Collapse** | Quality degradation when models are recursively trained on AI-generated data. |
| **Red-teaming** | Adversarially probing a model to find vulnerabilities before deployment. |
| **EU AI Act** | The world's first comprehensive AI regulation. Risk-based framework, phased enforcement 2025-2027. Fines up to €35M or 7% of global turnover. |
| **Content Credentials / C2PA** | Invisible metadata standards for identifying AI-generated content (watermarking). |

---
