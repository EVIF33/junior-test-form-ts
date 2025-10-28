import styled from '@emotion/styled';

export const Card = styled.div`
    position: relative;
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e9ecef;
    overflow: hidden;
    transition: box-shadow 0.15s ease-in-out;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

export const Content = styled.div`
    padding: 20px;
    padding-right: 60px;
    flex: 1;
    min-height: auto;
`;

export const Title = styled.h3`
    margin: 0 0 12px 0;
    font-size: 18px;
    font-weight: 600;
    color: #212529;
    line-height: 1.4;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

export const Description = styled.p`
    margin: 0 0 16px 0;
    font-size: 14px;
    color: #6c757d;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const DateText = styled.span`
    font-size: 12px;
    color: #6c757d;
    line-height: 1.5;
    display: block;
`;

export const Image = styled.img`
    width: calc(100% - 24px);
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    display: block;
    margin: 0 12px 12px 12px;
    border-radius: 4px;
    align-self: flex-end;
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #dee2e6;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.15s ease-in-out;
    color: #6c757d;
    z-index: 10;

    &:hover {
        background: white;
        color: #dc3545;
        border-color: #dc3545;
    }
`;
