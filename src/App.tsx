import { Container, Divider, Main } from './App.styles';
import Form from './components/Form/Form';
import ImageList from './components/ImageList/ImageList';
import { useUnsplash } from './hooks/useUnsplash';
import { type IImageSubmitData } from './types/image';

function App() {
  const { images, loading, error, addImage, deleteImage, refetch } =
    useUnsplash();

  const handleAddImage = (formData: IImageSubmitData) => {
    const newImage = {
      title: formData.title,
      url: formData.url,
      description: formData.description,
      createdAt: new Date().toISOString(),
    };

    addImage(newImage);
  };

  const handleDeleteImage = (id: string) => {
    deleteImage(id);
  };

  const handleRetry = async () => {
    await refetch();
  };

  return (
    <Container>
      <Main>
        <Form onSubmit={handleAddImage} />

        <Divider />

        <ImageList
          images={images}
          loading={loading}
          error={error}
          onDeleteImage={handleDeleteImage}
          onRetry={handleRetry}
        />
      </Main>
    </Container>
  );
}

export default App;
