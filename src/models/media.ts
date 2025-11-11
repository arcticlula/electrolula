export interface IMedia {
  type: 'image' | 'video';
  src: string;
  poster?: string;
}

export interface IObjectMedia {
  obj: IObjectMediaSrc | IObjectMediaSrc[];
  isGroup?: boolean;
  name: string;
}

export interface IObjectMediaSrc {
  src: string;
  name?: string;
  colorHex?: string;
  opacity?: number;
}