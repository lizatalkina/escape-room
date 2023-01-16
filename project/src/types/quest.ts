export type Quest = {
  id: number;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
  description?: string;
  coverImg?: string;
  coverImgWebp?: string;
};
