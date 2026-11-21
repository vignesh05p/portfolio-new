// Single source of truth for page content. Edit here, not in the components.

export const profile = {
  name: 'Vignesh Prabhu',
  role: 'AI/ML Engineer',
  headline: 'Generative AI · Agentic AI · LLMs · RAG · Backend Engineering',
  hero: 'AI/ML Engineer building AI systems that actually run in production.',
  intro:
    "I'm Vignesh Prabhu, an AI/ML engineer based in Udupi, Karnataka. I work across LLMs, agentic workflows, RAG, model evaluation, self-hosted inference, Python/FastAPI, AWS, and production AI infrastructure.",
  location: 'Udupi, Karnataka, India',
  portraitAlt:
    'Vignesh Prabhu, AI/ML engineer based in Udupi, Karnataka',
}

// Prose for the About section. Every geographic and factual claim here is
// confirmed: based in Udupi, onsite in the Udupi–Manipal area, open to roles
// in Bengaluru and Mangaluru and to remote work across India.
export const about = {
  lead: "I'm Vignesh, an AI/ML engineer from Udupi, Karnataka. I build AI that runs in production, not just in notebooks.",
  work: "By day I'm a Member of Technical Staff at Manipal Dot Net, onsite in the Udupi–Manipal area. I fine-tune LLMs, build agentic workflows and RAG pipelines, and serve models on our own GPUs instead of paying per token. Python, FastAPI and AWS hold it all together.",
  life: "Off the clock I'm a cheerful explorer and an adventure lover: new places, new ideas, new tech. I also edit videos and trade the markets on the side.",
  education:
    "I studied computer science and engineering at Shri Madhwa Vadiraja Institute of Technology and Management. I'm open to AI/ML roles in Bengaluru and Mangaluru, and to remote work with teams across India.",
}

// One-minute intro video, featured in the About section.
export const introVideo = {
  id: '0Bsx73lLpgQ',
  title: 'Meet me in a minute',
  duration: '1:03',
  watchUrl: 'https://www.youtube.com/watch?v=0Bsx73lLpgQ',
  thumbnail: 'https://i.ytimg.com/vi/0Bsx73lLpgQ/maxresdefault.jpg',
}

export const links = {
  email: 'dev.vigneshprabhu@gmail.com',
  github: { label: 'GitHub', href: 'https://github.com/vignesh05p' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vigneshprabhu11' },
  x: { label: 'X (Twitter)', href: 'https://x.com/prabhu_ai' },
  youtube: { label: 'YouTube', href: 'https://www.youtube.com/@Vigneshprabhu-dev' },
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const currentRole = {
  role: 'Member of Technical Staff',
  company: 'Manipal Dot Net',
  companyUrl: 'https://web.manipal.net/mdn/index.php',
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
  // Rendered as the last highlight, with the link in the middle.
  learning: {
    before: 'Learned machine learning fundamentals in classes and hands-on workshops taught by ',
    linkText: "Manipal Dot Net's senior leadership",
    href: 'https://web.manipal.net/mdn/corporate/people.php',
    after: '.',
  },
  lessons: [
    'Check whether that AWS instance is still running before you log off. Idle GPUs bill by the hour, and they never sleep.',
    'Test twice before deploying live. Production is a bad place to find out.',
    'Read the code yourself, whoever wrote it: a senior, a stranger or an AI. Especially the AI.',
    'There is always a cheaper, better way. Some open-source project has already solved it; finding it is just a matter of time. Never commit to anything costly. Call it Indian jugaad, it runs in the blood.',
    'Speak less, work more. Prove yourself to yourself, not to anyone else.',
    'Own the product like it is yours, even when you hold no stake in it. That habit made me who I am.',
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

// Projects, in display order. The first one is the flagship.
export const projects = [
  {
    id: 'astratrade-ai',
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
  },
  {
    id: 'video-down',
    name: 'Video Down',
    subtitle: 'Telegram Bot for Saving Videos as MP4 & MP3',
    description:
      'A Telegram bot that turns a video link from X, YouTube, Pinterest, Facebook, Reddit, Vimeo, Threads and 1,000+ other sites into an MP4 or MP3 saved in your chat. Telegram stores every file in the cloud for free, so the chat becomes a personal, searchable video library.',
    stats: [
      { value: '1,000+', unit: 'sites', label: 'Supported through yt-dlp' },
      { value: '~0.5', unit: 'sec', label: 'X link lookup, down from 1.7 s' },
      { value: '90', unit: 'tests', label: 'Incl. full bot flow' },
    ],
    details: [
      'Resolves each link once and reuses that lookup for every download, with yt-dlp kept warm between requests: X lookups dropped from ~1.7 s to ~0.5 s and YouTube from ~3.5 s to ~2.1 s.',
      'Prefetches the quick MP4 (sharpest version up to 720p at about 20 MB) the moment the format menu appears, so the file is usually ready before the user taps.',
      'Parallel ranged HTTP downloads over several connections to get past per-connection throttling (~0.26 MB/s on YouTube), with yt-dlp as the fallback; MP3 is cut locally from the MP4 with ffmpeg instead of downloading twice.',
      'SQLite-backed Telegram file_id cache returns anything sent before instantly, for every user, plus searchable captions with hashtags, /library and /search.',
      'Works inside Telegram\'s 50 MB bot limit: oversized formats are flagged up front and a download that turns out too big steps down a quality automatically.',
      'Hardened as a public bot: refuses links that resolve to private or local addresses, disables generic page fetching, caps download size, rate-limits each user, and runs in a locked-down Docker sandbox (read-only, non-root, all capabilities dropped).',
      'Per-delivery timing logs and an admin /perf view of median lookup, download, convert and upload times.',
    ],
    tags: ['Python', 'python-telegram-bot', 'asyncio', 'yt-dlp', 'ffmpeg', 'SQLite', 'Docker'],
    live: 'https://t.me/videodown_x_insta_bot',
    source: 'https://github.com/vignesh05p/video-down-bot',
  },
]

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

// "Off the Clock" section: side interests and side income.
export const beyond = [
  {
    title: 'Video editing',
    text: 'A creative outlet that also pays. My edits, and the intro above, live on my ',
    link: { label: 'YouTube channel', href: links.youtube.href },
    after: '.',
  },
  {
    title: 'Trading',
    text: "The markets are my other side income. Sorry, the P&L stays private for now. Curious? ",
    link: { label: 'Email me', href: `mailto:${links.email}` },
    after: " and I'll share it.",
  },
  {
    title: 'Exploring',
    text: "Explorer and adventure lover. New places, new people, new tech: I'm happiest when something is new.",
  },
]
