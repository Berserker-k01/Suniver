export interface Program {
  id: string;
  title: string;
  degree: 'Licence' | 'Master' | 'Doctorat';
  faculty: string;
  duration: string;
  description: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
  isError?: boolean;
}