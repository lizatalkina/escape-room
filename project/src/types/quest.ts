import { QuestTypes, Difficulties } from '../const';

export type Quest = {
  id: number;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Difficulties;
  type: QuestTypes;
  peopleMinMax: number[];
  description?: string;
  coverImg?: string;
  coverImgWebp?: string;
};
