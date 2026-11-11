import {
  Server,
  Monitor,
  Layers,
  Database,
  GitBranch,
} from "lucide-react";

const skillsData = [
  {
    id: 1,
    icon: Server,
    title: {
      en: "Backend Development",
      fa: "توسعه بک‌اند",
    },
    description: {
      en: "Building scalable backend systems and APIs.",
      fa: "طراحی و توسعه سیستم‌های بک‌اند و APIهای مقیاس‌پذیر.",
    },
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
    ],
  },

  {
    id: 2,
    icon: Monitor,
    title: {
      en: "Frontend Development",
      fa: "توسعه فرانت‌اند",
    },
    description: {
      en: "Creating modern and responsive user interfaces.",
      fa: "ساخت رابط‌های کاربری مدرن و واکنش‌گرا.",
    },
    skills: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
    ],
  },

  {
    id: 3,
    icon: Layers,
    title: {
      en: "Software Architecture",
      fa: "معماری نرم‌افزار",
    },
    description: {
      en: "Designing maintainable and extensible software systems.",
      fa: "طراحی سیستم‌های نرم‌افزاری قابل نگهداری و توسعه.",
    },
    skills: [
      "Clean Architecture",
      "CQRS",
      "DDD",
      "SOLID",
    ],
  },

  {
    id: 4,
    icon: Database,
    title: {
      en: "Database & Caching",
      fa: "پایگاه داده و کش",
    },
    description: {
      en: "Data modeling, database design and caching strategies.",
      fa: "مدل‌سازی داده، طراحی پایگاه داده و راهکارهای کش.",
    },
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Redis",
    ],
  },

  {
    id: 5,
    icon: GitBranch,
    title: {
      en: "Tools & DevOps",
      fa: "ابزارها و دواپس",
    },
    description: {
      en: "Development tools and software delivery workflows.",
      fa: "ابزارهای توسعه و فرایندهای تحویل نرم‌افزار.",
    },
    skills: [
      "Git",
      "Docker",
      "Visual Studio",
    ],
  },
];

export default skillsData;