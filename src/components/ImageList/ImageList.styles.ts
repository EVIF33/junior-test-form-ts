import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    justify-items: stretch;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const LoadingMessage = styled.div`
    text-align: center;
    padding: 60px 20px;
    font-size: 16px;
    color: #6c757d;
    line-height: 1.5;
    background: white;
    border-radius: 8px;
    border: 1px solid #e9ecef;
`;

export const ErrorMessage = styled.div`
    text-align: center;
    padding: 60px 20px;
    font-size: 16px;
    color: #dc3545;
    line-height: 1.5;
    background: white;
    border-radius: 8px;
    border: 1px solid #e9ecef;
`;

export const RetryButton = styled.button`
    display: inline-block;
    margin: 16px auto 0;
    padding: 8px 16px;
    background: #0d6efd;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
    transition: background-color 0.15s ease-in-out;

    &:hover {
        background: #0b5ed7;
    }
`;
