import type React from 'react';

import { type IImageItem } from '../../types/image';
import ImageCard from '../ImageCard/ImageCard';
import {
  Container,
  ErrorMessage,
  Grid,
  LoadingMessage,
  RetryButton,
} from './ImageList.styles';

interface IImageListProps {
  images: IImageItem[];
  loading: boolean;
  error: string | null;
  onDeleteImage: (id: string) => void;
  onRetry: () => void;
}

const ImageList: React.FC<IImageListProps> = ({
  images,
  loading,
  error,
  onDeleteImage,
  onRetry,
}) => {
  if (loading) {
    return (
      <Container>
        <LoadingMessage>Загрузка изображений...</LoadingMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>
          {error}
          <RetryButton onClick={onRetry}>Повторить попытку</RetryButton>
        </ErrorMessage>
      </Container>
    );
  }

  if (images.length === 0) {
    return (
      <Container>
        <LoadingMessage>Нет изображений для отображения</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Grid>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} onDelete={onDeleteImage} />
        ))}
      </Grid>
    </Container>
  );
};

export default ImageList;
