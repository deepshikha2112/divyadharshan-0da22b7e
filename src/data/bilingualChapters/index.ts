import { ganeshaChapters } from './ganeshaChapters';
import { krishnaChapters } from './krishnaChapters';
import { Chapter } from '@/components/ChapterAudioReader';

export interface BilingualChapter {
  id: string;
  title: string;
  titleEnglish: string;
  subtitle: string;
  subtitleEnglish: string;
  content: string;
  contentEnglish: string;
  mood: string;
  instrument: string;
}

// Convert bilingual chapters to the Chapter format used by ChapterAudioReader
const convertToChapterFormat = (chapters: BilingualChapter[]): Chapter[] => {
  return chapters.map(chapter => ({
    id: chapter.id,
    title: chapter.title,
    titleEnglish: chapter.titleEnglish,
    subtitle: chapter.subtitle,
    subtitleEnglish: chapter.subtitleEnglish,
    content: chapter.content,
    contentEnglish: chapter.contentEnglish,
    mood: chapter.mood as Chapter['mood'],
    instrument: chapter.instrument as Chapter['instrument'],
  }));
};

export const bilingualDeityChapters: Record<string, Chapter[]> = {
  ganesha: convertToChapterFormat(ganeshaChapters),
  krishna: convertToChapterFormat(krishnaChapters),
};

export const getBilingualChaptersByDeityId = (deityId: string): Chapter[] | null => {
  return bilingualDeityChapters[deityId] || null;
};

export { ganeshaChapters, krishnaChapters };
