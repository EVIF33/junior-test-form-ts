export interface IUnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description?: string;
  description?: string;
  created_at: string;
  user: {
    name: string;
  };
}

export interface IImageItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  createdAt: string;
}

export interface IImageSubmitData {
  title: string;
  url: string;
  description?: string;
}
