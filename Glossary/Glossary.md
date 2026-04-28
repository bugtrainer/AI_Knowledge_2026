# Glossary

7. Complete AI Glossary

### Core AI Concepts

| Term | What It Is / Does |
|---|---|
| **AGI** | Artificial General Intelligence — hypothetical AI with human-level reasoning across all domains. Does not exist yet. |
| **AI Agent** | An AI that autonomously takes a sequence of actions to complete a goal using tools. |
| **Agentic AI** | AI systems operating with greater autonomy over multiple steps and decisions. |
| **ASI** | Artificial Super Intelligence — hypothetical AI that surpasses human intelligence across all domains. The theoretical step beyond AGI. |
| **Computer Vision** | Field of AI that trains computers to interpret and understand visual information from images and video. |
| **Deep Learning** | Machine learning using multi-layered neural networks — the engine behind all modern AI. |
| **Expert Systems** | Early AI programs that emulate human expert decision-making in specific domains using predefined rules and knowledge bases. |
| **Foundation Model** | A large pre-trained model adaptable to many tasks. |
| **Generative AI** | AI that creates new content: text, images, audio, video, 3D worlds. |
| **LLM** | Large Language Model — trained on massive text data to understand and generate language. |
| **Machine Learning (ML)** | A subset of AI that uses algorithms and statistics to identify patterns and learn from data without explicit programming. |
| **Multimodal AI** | AI that processes and generates multiple content types: text, image, audio, video. |
| **Natural Language Processing (NLP)** | Subfield of AI focused on enabling machines to understand, interpret, and generate human language. |
| **Neuro-Symbolic AI** | Combines deep learning (neural networks) with logic-based symbolic AI — gives models grounded rules they cannot break, reducing hallucinations. |
| **Neural Networks** | Computing systems modelled after the human brain, featuring layers of interconnected artificial "neurons" that process and transmit information. |
| **Reasoning Model** | AI model that uses internal chain-of-thought to "think" step-by-step before answering. |
| **World Model** | AI that builds an internal model of physical reality — enabling simulation, prediction, and planning. |
| **Embodied AI / Physical AI** | AI systems that interact with the real world through physical forms (robots, vehicles). |

### Training Concepts

| Term | What It Is / Does |
|---|---|
| **Backpropagation** | The core algorithm for training neural networks — calculates errors and adjusts weights backward through layers to minimise loss. |
| **Data Augmentation** | Artificially increasing the quantity or diversity of training data to help models generalise better. |
| **Data Labelling** | Adding descriptive tags to raw data so AI systems can learn from labelled examples (essential for supervised learning). |
| **Data-Centric AI** | Paradigm where data quality, not model architecture, is the primary constraint. |
| **Federated Learning** | Training AI models across multiple devices or servers while keeping raw data localised — preserving privacy. |
| **Fine-tuning** | Adapting a pre-trained model for a specific use case. |
| **Gradient Descent** | The optimisation method used to minimise errors during training by iteratively adjusting model parameters. |
| **Hallucination** | When a model generates confident but factually incorrect information. |
| **Overfitting** | When a model memorises training data rather than generalising. |
| **Post-training** | The phase after pre-training — tuning outputs via supervised fine-tuning on specific input/output pairs and RLHF. |
| **Pre-training** | Initial large-scale training on broad data. |
| **RAG** | Retrieval-Augmented Generation — grounding AI answers in retrieved documents from a knowledge base. |
| **Reinforcement Learning (RL)** | A training method where models learn optimal decisions through cycles of actions, rewards, and penalties. |
| **RLHF** | Reinforcement Learning from Human Feedback — key alignment technique. |
| **Supervised Learning** | Training a model on labelled data where the correct output is known — e.g., classifying images as "cat" or "dog." |
| **Data Distillation** | Using a large model to compress knowledge into hyper-dense synthetic documents to efficiently train smaller models. |
| **Synthetic Data** | Artificially generated data for training. Companies: Gretel, MostlyAI, Datagen. |
| **Transfer Learning** | Adapting a model trained on one task to a new, related task — leveraging existing knowledge to reduce training time. |
| **Underfitting** | When a model is too simple to capture underlying patterns in data, resulting in poor performance. |
| **Unsupervised Learning** | Training a model to find hidden patterns in data without labelled examples — e.g., clustering and anomaly detection. |

### Architecture

| Term | What It Is / Does |
|---|---|
| **Attention Mechanism** | Allows the model to focus on relevant parts of the input. |
| **Autoencoder** | A neural network that compresses input into a smaller representation, then reconstructs it — used for denoising, generation, and feature learning. |
| **Auto-regressive Model** | A model that generates output one step at a time, using its own previous predictions to inform the next. All modern LLMs are auto-regressive. |
| **BERT** | Bidirectional Encoder Representations from Transformers — a foundational model that processes text by looking at both preceding and following words. Paved the way for modern NLP. |
| **CNN (Convolutional Neural Network)** | Specialised neural network architecture designed for processing grid-like data — highly effective for image recognition and computer vision. |
| **Context Window** | Maximum text a model can process at once. Leading models in 2026: 1M-2M tokens. |
| **Diffusion Model** | Architecture behind modern image generators (Midjourney, Stable Diffusion). Creates images by gradually denoising random patterns. |
| **Embedding** | Numerical vector representation of words or concepts. |
| **GAN (Generative Adversarial Network)** | Two neural networks competing: a generator creates content, a discriminator judges it. This rivalry produces increasingly realistic outputs. |
| **GPU** | Graphics Processing Unit — originally for graphics, now the workhorse processor for AI training and inference due to massive parallel computation. Key players: NVIDIA, AMD. |
| **Hidden Layers** | The computational layers inside a neural network between the input and output layers — where the model learns complex features and patterns. |
| **Latent Space** | A compressed, abstract representation of data learned by a model that captures its most important features and relationships. |
| **Liquid Neural Networks (LNNs)** | Neural networks that adapt their weights in real-time even after training — enabling continuous learning and adaptation, especially for robotics. |
| **MoE (Mixture of Experts)** | Architecture where different sub-networks specialise in different inputs. Used by GPT-5, Gemini 3.1, DeepSeek-V3, Mistral Large 3. |
| **SLM (Small Language Model)** | Compact, efficient language models (typically 1-7B parameters) designed to run on-device. Optimised for speed, privacy, and personalised use cases. |
| **NeRF (Neural Radiance Fields)** | Neural network that creates 3D scenes from 2D images by learning how light interacts with objects from different angles. |
| **Parameters** | Learnable values inside a model (e.g., '70 billion parameters'). |
| **Token** | Basic unit of text a model processes — roughly a word or part of a word. |
| **TPU** | Tensor Processing Unit — Google's custom-built chip designed specifically for efficient ML training and inference workloads. |
| **Transformer** | Dominant neural network architecture behind all modern LLMs. Introduced in the 2017 paper "Attention Is All You Need." |
| **ASIC** | Application-Specific Integrated Circuit — custom chip optimised for a particular task (e.g. Groq's LPU, Google's TPU). |
| **Wafer-Scale Engine** | Cerebras approach: entire silicon wafer as a single processor for massive parallelism. |

### Prompting and Behaviour

| Term | What It Is / Does |
|---|---|
| **Chain-of-Thought (CoT)** | Prompting the model to reason step-by-step before answering. |
| **Few-shot** | Providing examples in the prompt to guide model behaviour. |
| **Frequency Penalty** | A parameter that discourages the model from repeatedly generating the same words or phrases. |
| **Grounding** | Connecting outputs to verified real-world information to reduce hallucination. |
| **In-context Learning (ICL)** | Model adapts to a task using examples within the prompt — no retraining needed. |
| **Presence Penalty** | A parameter that discourages the model from generating words that have already appeared in the output. |
| **Prompt Engineering** | Crafting prompts strategically to elicit better outputs — a core skill in 2026. |
| **Stop Sequences** | Specific words or characters that signal the AI model to immediately stop generating text. |
| **System Prompt** | Instructions given to the model before a conversation begins. |
| **Temperature** | Controls randomness: high = creative, low = deterministic. |
| **Top-k Sampling** | Restricts the model to choosing the next word from only the top k most likely options — keeps output more predictable. |
| **Top-p (Nucleus Sampling)** | Restricts the model to choosing from the smallest set of words whose cumulative probability exceeds threshold p — balances creativity and coherence. |
| **Zero-shot** | Performing a task with no examples in the prompt. |

### Agents and Deployment

| Term | What It Is / Does |
|---|---|
| **AutoML** | Automated Machine Learning — systems that automatically search for the best model, tune hyperparameters, and prepare data without manual effort. |
| **Chatbot** | AI-powered conversational tools (e.g., ChatGPT, Gemini) designed to engage in natural-sounding dialogue with humans. |
| **Compute** | The processing power and resources required for AI training and inference — a key bottleneck and competitive advantage. |
| **Continuous Context** | AI that maintains memory across sessions, devices, and time — never "forgets" previous conversations or user behaviour. |
| **Computer Use** | An AI model's ability to interact with software environments — clicking, typing, and navigating desktop applications. |
| **Digital Labor** | AI behaving as a worker-like entity in structured business processes. |
| **Edge AI** | Running AI models locally on devices rather than the cloud. |
| **GEO** | Generative Engine Optimisation — optimising content to be cited by AI models. |
| **Guardrails** | Technical restrictions on what an AI system can say or do. |
| **Inference** | Running a trained model to generate outputs. Cost and speed are top priorities in 2026. |
| **Multi-Agent Orchestration** | Systems where multiple specialised AI agents communicate and collaborate to solve complex tasks — like a hive mind of micro-workers. |
| **MCP** | Model Context Protocol — standard for connecting AI models to external tools. |
| **Model Compression** | Techniques to reduce the size and computational needs of AI models for deployment on resource-constrained devices. |
| **Model Routing** | Directing tasks to different models based on complexity and cost. |
| **Orchestrator** | A controller that coordinates and delegates to multiple agents. |
| **Prompt Injection** | Malicious inputs designed to hijack a model's behaviour — key security concern for agents. |
| **Quantisation** | Compressing models to run on smaller hardware. |
| **TensorFlow / PyTorch** | The two dominant open-source frameworks for building and deploying machine learning models. TensorFlow by Google, PyTorch by Meta. |
| **Shadow AI** | Employees secretly using unapproved AI tools with company data — the 2026 version of Shadow IT. A major enterprise security concern. |
| **Test-Time Compute** | Allowing AI to "think longer" on hard problems by spending more compute at inference time rather than at training time. |
| **Vibe Coding** | Using AI to write most or all code by describing what you want in plain English. |

### Safety, Alignment, and Regulation

| Term | What It Is / Does |
|---|---|
| **AI Alignment** | Ensuring AI systems pursue the goals humans actually intend. |
| **AI Bias / Algorithmic Bias** | Systematic errors in AI systems that lead to unfair or discriminatory outcomes, often reflecting prejudices present in training data. |
| **AI Slop** | Low-quality, cheaply produced AI-generated content flooding the internet — prioritising quantity over quality. |
| **Mechanistic Interpretability** | Opening the "black box" — understanding exactly which artificial neurons fired to make a specific decision. Required by 2026-era regulations. |
| **AI Governance** | Policies, practices, and structures for managing the responsible development and deployment of AI technologies. |
| **AI Safety** | Research ensuring AI systems are safe and beneficial long-term. |
| **AI Sovereignty** | Strategic independence from specific AI providers — data, compute, and geopolitical considerations. |
| **Constitutional AI** | Anthropic's approach: model self-critiques against a defined set of principles. |
| **Deepfake** | AI technique that replaces a person in an existing image or video with someone else's likeness — a key misinformation risk. |
| **Explainable AI (XAI)** | Approaches that make AI decision-making processes understandable to humans, enhancing transparency and trust. |
| **Interpretability** | Understanding why a model makes specific decisions — required for regulation and trust. |
| **Jailbreak** | A prompt designed to bypass safety guidelines. |
| **Model Collapse** | Quality degradation when models are recursively trained on AI-generated data. |
| **Red-teaming** | Adversarially probing a model to find vulnerabilities before deployment. |
| **Singularity** | Hypothetical future point where AI surpasses human intelligence, leading to unpredictable and irreversible technological change. |
| **EU AI Act** | The world's first comprehensive AI regulation. Risk-based framework, phased enforcement 2025-2027. Fines up to €35M or 7% of global turnover. |
| **Content Credentials / C2PA** | Invisible metadata standards for identifying AI-generated content (watermarking). |
| **Synthetic Provenance** | Cryptographic tracking and watermarking of who trained a model and what data was used to generate a specific output — combats AI slop and misinformation. |

### Evaluation Metrics

| Term | What It Is / Does |
|---|---|
| **Accuracy** | The percentage of correct predictions out of total predictions — simple but can be misleading on imbalanced datasets. |
| **AUC (Area Under the ROC Curve)** | Measures a classification model's ability to distinguish between positive and negative classes. Ranges from 0.5 (random) to 1.0 (perfect). |
| **BLEU Score** | A metric for evaluating the quality of machine-translated text by comparing it to a reference translation. |
| **F1 Score** | The harmonic mean of precision and recall — useful when you need to balance both false positives and false negatives. |
| **Loss Function** | A method for quantifying the difference between a model's predicted output and the actual value — guides model training. |
| **Precision** | Of all the positive predictions the model made, how many were actually correct. |
| **Recall** | Of all the actual positives, how many did the model correctly identify. |
| **ROUGE Score** | A set of metrics for evaluating AI-generated text summaries by comparing them to reference summaries. |

### Emerging Trends & Buzzwords (2026)

| Term | What It Is / Does |
|---|---|
| **Agentic Swarms** | Hundreds of cheap, specialised micro-agents communicating with each other to solve complex enterprise problems — like a hive mind of junior analysts. |
| **Ambient AI** | AI that operates invisibly in the background of daily life — no chat box needed. It observes, anticipates, and acts without explicit prompts. |
| **Biological Foundation Models** | The equivalent of an LLM for biology — predicts the next amino acid in a protein or the next fold in a DNA strand. |
| **Digital Twin** | A virtual replica of a physical system (factory, city, human body) continuously updated with real-time data, used for simulation and prediction. |
| **In-Silico Trials** | Testing new drugs entirely inside AI-powered computer simulations using "virtual patients" — bypassing animal testing and speeding up approval. |
| **Intent-Based Computing** | The death of the prompt — instead of crafting clever prompts, you state a high-level intent and the OS breaks it down and executes it across apps. |
| **Spatial AI** | AI that can see, map, and interact with the physical room you are in, in real-time — driven by AR/VR, smart glasses, and autonomous vehicles. |
| **Sustainable AI / Carbon-Aware Inference** | Software that routes AI queries to data centres powered by renewable energy — minimising the carbon footprint of AI workloads. |
| **Zero-Touch AI** | AI that executes entire workflows from start to finish without any human pressing "approve" or typing a prompt. |

---
