import styled from '@emotion/styled';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

export const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Label = styled.label`
    font-weight: 600;
    color: #374151;
    font-size: 0.875rem;
    display: block;
    margin-bottom: 0.25rem;
`;

export const Required = styled.span`
    color: #e53e3e;
    margin-left: 0.25rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.2s;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    resize: vertical;
    min-height: 100px;
    transition: all 0.2s;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

export const Checkbox = styled.input`
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 4px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
`;

export const Button = styled.button`
    padding: 0.875rem 2rem;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 200px;
`;
