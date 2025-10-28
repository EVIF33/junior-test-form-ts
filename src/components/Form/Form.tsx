import { zodResolver } from '@hookform/resolvers/zod';
import type React from 'react';
import { useForm } from 'react-hook-form';

import { type IImageSubmitData } from '../../types/image';
import {
  ButtonContainer,
  CheckboxContainer,
  CheckboxGroup,
  CheckboxLabel,
  ErrorMessage,
  FieldGroup,
  FormContainer,
  FormRow,
  Input,
  Label,
  Required,
  SubmitButton,
  TextArea,
} from './Form.styles';
import { type ValidationSchema, validationSchema } from './validationSchema';

interface IFormProps {
  onSubmit: (data: IImageSubmitData) => void;
}

const Form: React.FC<IFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      url: '',
      hasDescription: false,
      description: '',
    },
  });

  const hasDescription = watch('hasDescription');

  const onFormSubmit = (data: ValidationSchema) => {
    const submitData: IImageSubmitData = {
      title: data.title,
      url: data.url,
      description:
        data.hasDescription && data.description ? data.description : undefined,
    };

    onSubmit(submitData);
    reset({
      title: '',
      url: '',
      hasDescription: false,
      description: '',
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <FormRow>
        <FieldGroup>
          <Label htmlFor="title">
            Название фото
            <Required>*</Required>
          </Label>
          <Input
            id="title"
            type="text"
            {...register('title')}
            placeholder="Введите название фото"
            $hasError={!!errors.title}
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

          <CheckboxGroup>
            <CheckboxContainer>
              <input
                id="hasDescription"
                type="checkbox"
                {...register('hasDescription')}
              />
              <CheckboxLabel htmlFor="hasDescription">
                Есть описание
              </CheckboxLabel>
            </CheckboxContainer>
          </CheckboxGroup>

          {hasDescription && (
            <>
              <Label htmlFor="description">
                Описание
                <Required>*</Required>
              </Label>
              <TextArea
                id="description"
                rows={4}
                {...register('description')}
                placeholder="Введите описание фото"
                $hasError={!!errors.description}
              />
              {errors.description && (
                <ErrorMessage>{errors.description.message}</ErrorMessage>
              )}
            </>
          )}
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="url">
            Ссылка на фото
            <Required>*</Required>
          </Label>
          <Input
            id="url"
            type="text"
            {...register('url')}
            placeholder="Введите ссылку на фото"
            $hasError={!!errors.url}
          />
          {errors.url && <ErrorMessage>{errors.url.message}</ErrorMessage>}

          <ButtonContainer>
            <SubmitButton type="submit">Добавить фото</SubmitButton>
          </ButtonContainer>
        </FieldGroup>
      </FormRow>
    </FormContainer>
  );
};

export default Form;
