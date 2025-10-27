import * as S from './styles';

export const Form = () => {
  return (
    <S.FormContainer>
      <S.FormRow>
        <S.FormColumn>
          <S.FormGroup>
            <S.Label htmlFor="title">
              Название фото
              <S.Required>*</S.Required>
            </S.Label>
            <S.Input placeholder="Yosemite National Park" />
          </S.FormGroup>

          <S.CheckboxContainer>
            <S.Checkbox type="checkbox" id="hasDescription" />
            <S.Label
              htmlFor="hasDescription"
              style={{ fontWeight: 'normal', margin: 0 }}
            >
              Есть описание
            </S.Label>
          </S.CheckboxContainer>
        </S.FormColumn>

        <S.FormColumn>
          <S.FormGroup>
            <S.Label htmlFor="url">
              Ссылка на фото
              <S.Required>*</S.Required>
            </S.Label>
            <S.Input placeholder="https://images.unsplash.com/photo-15275..." />
            <S.ButtonContainer>
              <S.Button type="submit">Добавить фото</S.Button>
            </S.ButtonContainer>
          </S.FormGroup>
        </S.FormColumn>
      </S.FormRow>

      <S.FormGroup>
        <S.Label htmlFor="description">
          Описание фото
          <S.Required>*</S.Required>
        </S.Label>
        <S.TextArea
          id="description"
          placeholder="Введите описание изображения"
          rows={4}
        />
      </S.FormGroup>
    </S.FormContainer>
  );
};
