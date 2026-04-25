interface ProjectTranslation {
  id: string;
  language: string;
  title: string;
  description: string;
}

interface GithubStats {
  stars: number;
  languages: string[];
  topics: string[];
}

interface Project {
  id: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
  translations: ProjectTranslation[];
  githubStats?: GithubStats | null;
}
