import styled from '@emotion/styled';

export const FormContainer = styled.form`
    background: white;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e9ecef;
    margin-bottom: 32px;
    max-width: 1400px;
`;

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CheckboxGroup = styled.div`
    margin-top: 16px;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 400;
    color: #212529;
    font-size: 14px;
    line-height: 1.5;
`;

export const Required = styled.span`
    color: #dc3545;
    margin-left: 4px;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${(props) => (props.$hasError ? '#dc3545' : '#ced4da')};
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.5;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    background: white;

    &:focus {
        outline: none;
        border-color: ${(props) => (props.$hasError ? '#dc3545' : '#86b7fe')};
        box-shadow: ${(props) => (props.$hasError ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' : '0 0 0 0.2rem rgba(13, 110, 253, 0.25)')};
    }

    &::placeholder {
        color: #6c757d;
    }
`;

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${(props) => (props.$hasError ? '#dc3545' : '#ced4da')};
    border-radius: 4px;
    font-size: 16px;
    font-family: inherit;
    line-height: 1.5;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    resize: vertical;
    background: white;

    &:focus {
        outline: none;
        border-color: ${(props) => (props.$hasError ? '#dc3545' : '#86b7fe')};
        box-shadow: ${(props) => (props.$hasError ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' : '0 0 0 0.2rem rgba(13, 110, 253, 0.25)')};
    }

    &::placeholder {
        color: #6c757d;
    }
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const CheckboxLabel = styled.label`
    font-weight: 400;
    color: #212529;
    font-size: 14px;
    line-height: 1.5;
    cursor: pointer;
    width: 100%;
`;

export const ErrorMessage = styled.span`
    display: block;
    color: #dc3545;
    font-size: 12px;
    margin-top: 4px;
    line-height: 1.5;
`;

export const SubmitButton = styled.button`
    padding: 12px 24px;
    background: #0d6efd;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    min-width: 160px;

    &:hover:not(:disabled) {
        background: #0b5ed7;
    }

    &:disabled {
        background: #6c757d;
        cursor: not-allowed;
    }
`;
