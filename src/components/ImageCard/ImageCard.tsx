import type React from 'react';

import { type IImageItem } from '../../types/image';
import { formatDate } from '../../utils/dateFormatter';
import {
  Card,
  Content,
  DateText,
  DeleteButton,
  Description,
  Image,
  Title,
} from './ImageCard.styles';

interface IImageCardProps {
  image: IImageItem;
  onDelete: (id: string) => void;
}

const ImageCard: React.FC<IImageCardProps> = ({ image, onDelete }) => {
  const handleDelete = () => {
    onDelete(image.id);
  };

  return (
    <Card>
      <Content>
        <Title>{image.title}</Title>
        {image.description && <Description>{image.description}</Description>}
        <DateText>Дата добавления: {formatDate(image.createdAt)}</DateText>
      </Content>

      <Image src={image.url} alt={image.title} />

      <DeleteButton onClick={handleDelete} aria-label="Удалить изображение">
        🗑️
      </DeleteButton>
    </Card>
  );
};

export default ImageCard;
