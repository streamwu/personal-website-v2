export interface Project {
  title: string;
  description: string;
  year?: string;
  link?: string;
  tags?: string[];
  embedLink?: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  link?: string;
}

export interface AchievementSection {
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
  publications?: Publication[];
  interests?: string[];
}

export const personalData = {
  name: "Xihui Wu",
  profileImage: "https://raw.githubusercontent.com/streamwu/personal-website/main/src/profile_pic.png",
  title: "AI Developer & Independent Philosophy Scholar",
  about: "Bridging the gap between computational intelligence and philosophical inquiry.\n\nAfter obtaining her Master of Science degree in Computer Science at the University of Chicago, Xihui Wu worked at major technology companies in Silicon Valley, including Amazon, Microsoft, and Google. Her journey with AI began with recommender systems in 2017; she later participated in the development of BERT and GPT-2 in 2019 and has witnessed the rapid expansion of LLMs since then. In 2022, she enrolled in the Master of Art in Philosophy program at San Jose State University, graduating at the end of 2025. She currently works at Google while in part time she is an independent philosophy scholar focusing on the philosophy of mind, science, and technology.",
  sections: {
    tech: {
      title: "High Tech & AI",
      subtitle: "Professional Achievements",
      description: "Leading innovations in the AI industry, focusing on scalable machine learning systems and ethical AI frameworks.",
      projects: [
        {
          title: "LLM Evaluations & AI Agents",
          description: "Current focus on developing robust evaluation frameworks for large language models and architecting autonomous AI agent systems.",
          year: "2025-Present",
          tags: ["LLM", "Agents", "Evaluation"]
        },
        {
          title: "ML Infrastructure & Compliance",
          description: "Developed an ML experimentation platform, high-performance JAX dataset feeding tools, and comprehensive AI Data compliance tooling.",
          year: "2021-2025",
          tags: ["JAX", "Infrastructure", "Compliance"]
        },
        {
          title: "Swift for TensorFlow",
          description: "Core member at Google Brain contributing to the development of a next-generation platform for machine learning and numerical computing.",
          year: "2019-2021",
          tags: ["Google Brain", "Swift", "Compiler"]
        }
      ],
      publications: [
        {
          title: "Swift for TensorFlow: A portable, flexible platform for deep learning",
          venue: "Proceedings of Machine Learning and Systems 3",
          year: "2021"
        },
        {
          title: "User Modeling Driven News Filtering Algorithm for Microblog Service in China",
          venue: "ICIS '12",
          year: "2012"
        }
      ]
    },
    philosophy: {
      title: "Academic Philosophy",
      subtitle: "Academic Achievements",
      description: "Exploring the foundations of mind, science, and technology through rigorous philosophical analysis, with a specific focus on the nature of Artificial Intelligence.",
      interests: [
        "Philosophy of Mind",
        "Philosophy of Science",
        "Philosophy of Technology",
        "Philosophy of AI"
      ],
      projects: [
        {
          title: "Exploring the Brain-Machine Metaphor",
          description: "Current research recently presented at the 2026 American Philosophical Association (APA) Meeting.",
          year: "2026"
        },
        {
          title: "A Critique of Functionalist Frameworks",
          description: "Manuscript currently under review at a peer-reviewed journal.",
          year: "2026"
        },
        {
          title: "The Ontology of AI as an Artifact",
          description: "In preparation; expanding on work originally presented at the San Jose State University Philosophy Alumni Conference.",
          year: "2026"
        }
      ]
    },
    cross: {
      title: "NGO - Ideality Refracted",
      subtitle: "Non-Profit Philosophical Organization",
      description: "Founded in the San Francisco Bay Area in 2023, Ideality Refracted is a registered 501(c)(3) non-profit cultural organization dedicated to broad philosophical inquiry guided by professional scholarship.",
      projects: [
        {
          title: "Founder & Director",
          description: "Leading a philosophical community that hosts salon events and services individuals interested in philosophizing broadly. The organization primarily serves the North American Chinese community while remaining open to all seekers of wisdom.",
          year: "2023-Present",
          link: "https://ideality-refracted.super.site/",
          tags: ["Non-Profit", "Philosophy", "Community"]
        },
        {
          title: "Technical Developer",
          description: "Architecting and developing the organization's digital infrastructure, including the official website and an automated event management platform powered by LLM agents.",
          year: "2023-Present",
          link: "https://github.com/ideality-refracted",
          tags: ["Web Dev", "LLM Agents", "Automation"]
        }
      ]
    },
    interactive: {
      title: "Interactive Philosophy",
      subtitle: "Fun Projects",
      description: "Building interactive experiences that bring philosophical concepts to life through technology.",
      projects: [
        {
          title: "Interactive Philosophy App",
          description: "A technology powered philosophy app developed by Xihui on behalf of Ideality Refracted. This interactive tool brings philosophical inquiry to your fingertips.",
          year: "2025",
          link: "https://ais-pre-m4rlrxlm44wkzo4g7m4b56-266718637431.us-west2.run.app",
          embedLink: "https://ais-pre-m4rlrxlm44wkzo4g7m4b56-266718637431.us-west2.run.app",
          tags: ["AI", "Philosophy", "Interactive"]
        }
      ]
    },
    personal: {
      title: "Life Beyond the Screen",
      subtitle: "Personal Bio",
      description: "Xihui Wu (often called Stream, as her name means 'stream' in Chinese) finds balance through artistic expression. She is an amateurish violin player and hip-hop dance performer, exploring the same themes of rhythm and structure that fascinate her in code and philosophy.",
      projects: []
    }
  }
};
