import axios from 'axios';
import { useEffect, useState } from 'react';

import { type IImageItem, type IUnsplashImage } from '../types/image';

const UNSPLASH_API_KEY = 'ON12e0W5alE0Uv77sRlrpX6AcyksbFygRMpejSX6s3o';
const UNSPLASH_BASE_URL = 'https://api.unsplash.com';

export const useUnsplash = () => {
  const [images, setImages] = useState<IImageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`${UNSPLASH_BASE_URL}/photos/random`, {
        params: {
          count: 5,
          client_id: UNSPLASH_API_KEY,
        },
      });

      const unsplashImages: IUnsplashImage[] = response.data;
      const formattedImages: IImageItem[] = unsplashImages.map((img) => ({
        id: img.id,
        title: img.alt_description || 'Без названия',
        url: img.urls.regular,
        description: img.description,
        createdAt: img.created_at,
      }));

      setImages(formattedImages);
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApiError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        handleResponseError(err.response.status);
      } else if (err.request) {
        setError('Ошибка сети: не удалось подключиться к серверу');
      } else {
        setError(`Ошибка: ${err.message}`);
      }
    } else {
      setError('Произошла неизвестная ошибка');
    }
  };

  const handleResponseError = (status: number) => {
    switch (status) {
      case 401:
        setError('Неверный API ключ');
        break;
      case 403:
        setError('Доступ запрещен');
        break;
      case 404:
        setError('Ресурс не найден');
        break;
      case 429:
        setError('Слишком много запросов');
        break;
      case 500:
        setError('Ошибка сервера');
        break;
      default:
        setError(`Ошибка: ${status}`);
    }
  };

  const addImage = (imageData: Omit<IImageItem, 'id'>) => {
    const newImage: IImageItem = {
      ...imageData,
      id: Date.now().toString(),
    };
    setImages((prev) => [newImage, ...prev]);
  };

  const deleteImage = (id: string) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  useEffect(() => {
    (async () => {
      await fetchImages();
    })();
  }, []);

  return {
    images,
    loading,
    error,
    addImage,
    deleteImage,
    refetch: fetchImages,
  };
};
