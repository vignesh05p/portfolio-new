// Single source of truth for page content. Edit here, not in the components.

export const profile = {
  name: 'Vignesh Prabhu',
  headline: 'GenAI Engineer · Agentic AI · LLMs · RAG · Backend Engineering',
  hero: 'I build AI systems that actually run in production.',
  intro:
    'AI/ML engineer building production-grade GenAI and backend systems. I work across LLMs, agentic workflows, RAG, model evaluation, self-hosted inference, Python/FastAPI, AWS, and production AI infrastructure.',
  location: 'Udupi, Karnataka, India',
}

export const links = {
  email: 'dev.vigneshprabhu@gmail.com',
  github: { label: 'GitHub', href: 'https://github.com/vignesh05p' },
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/vigneshprabhu11' },
  x: { label: 'X (Twitter)', href: 'https://x.com/prabhu_ai' },
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const currentRole = {
  role: 'Member of Technical Staff',
  company: 'Manipal Dot Net',
  period: 'Nov 2025 — Present',
  summary:
    'Building and shipping production GenAI systems: domain-specific LLMs, agentic workflows, retrieval pipelines and the backend infrastructure that keeps them reliable under real traffic.',
  highlights: [
    'Cut comparable LLM inference cost by roughly 90% by moving an AWS Bedrock-heavy architecture toward self-hosted GPU inference.',
    'Engineered and deployed CURE-MED-14B, a Qwen-based medical LLM served with GGUF quantization and llama.cpp on an NVIDIA L4 GPU.',
    'Designed a hybrid architecture pairing the self-hosted LLM with Claude through AWS Bedrock, with fallback routing for production reliability.',
    'Built agentic workflows on LangGraph/LangChain with deterministic state management and persistent execution.',
    'Worked on multimodal RAG for clinical encounter analysis and built an AI-driven OSCE simulation MVP.',
    'Built scalable FastAPI services and the production AI pipelines around them.',
  ],
  focus: [
    'LLM fine-tuning & evaluation',
    'Agentic AI',
    'Self-hosted GPU inference',
    'RAG & semantic retrieval',
    'FastAPI',
    'AWS & Bedrock',
  ],
}

export const featured = {
  name: 'AstraTrade AI',
  subtitle: 'Quantitative Intraday Research Platform',
  description:
    'A local-first quantitative research platform for NSE/BSE equities, combining real-time market-data ingestion, durable storage, feature engineering, deterministic decisioning and LLM-based advisory analysis.',
  stats: [
    { value: '~37,000', unit: 'snapshots/sec', label: 'Level-2 depth ingest' },
    { value: '33', unit: 'instruments', label: 'Recorded concurrently' },
    { value: '12', unit: 'features', label: 'Intraday signal layer' },
  ],
  details: [
    'Level-2 market-depth recorder sustaining roughly 37,000 snapshots/sec across 33 instruments.',
    'Crash-safe Parquet persistence with integrity verification.',
    'PostgreSQL point-in-time feature store that prevents look-ahead bias.',
    'Expected-value decision engine constrained by transaction costs and slippage.',
    'LangGraph advisory layer deliberately restricted to evidence summarization and contradiction analysis.',
    'Triple-barrier labeling, purged cross-validation, embargo periods and backtest-overfitting controls.',
  ],
}

export const stack = [
  {
    group: 'AI / GenAI',
    items: [
      'LLMs',
      'Generative AI',
      'Agentic AI',
      'RAG',
      'Embeddings',
      'Semantic Retrieval',
      'Fine-tuning',
      'Model Evaluation',
      'Prompt Engineering',
    ],
  },
  {
    group: 'Backend',
    items: [
      'Python',
      'Go',
      'FastAPI',
      'Gin',
      'REST APIs',
      'gRPC',
      'Microservices',
      'Async Programming',
      'Concurrency',
    ],
  },
  {
    group: 'AI Infrastructure',
    items: [
      'AWS',
      'AWS Bedrock',
      'GPU Inference',
      'vLLM',
      'llama.cpp',
      'LLM Serving',
      'Docker',
      'Linux',
      'CI/CD',
    ],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector Databases', 'Parquet'],
  },
]

export const earlier = {
  role: 'Software Engineer Intern',
  company: 'IonIdea',
  period: 'Feb 2025 — May 2025',
  note: 'Improved FastAPI API latency by roughly 29% through backend and request-processing optimization.',
}

export const education = {
  degree: 'B.E. Computer Science and Engineering',
  school: 'Shri Madhwa Vadiraja Institute of Technology and Management',
  period: '2021 — 2025',
  detail: 'CGPA 7.4',
}

export const achievements = [
  { title: 'Winner', detail: 'HackWave 2024' },
  { title: 'Runner-up', detail: 'EG AI Hackathon' },
]
