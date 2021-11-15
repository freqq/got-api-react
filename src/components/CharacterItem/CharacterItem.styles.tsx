import styled from 'styled-components';

export const CharacterWrapper = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: 0;
  border-bottom: 1px solid #333;
  font-size: 13px;
  transition: 0.2s;

  &:nth-child(2n + 2) {
    background: rgba(0, 0, 0, 0.03);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

export const CharacterColumnItem = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #ccc;
  padding: 10px;

  &:last-child {
    border-right: none;
  }

  p {
    margin: 0;
  }

  @media (max-width: 750px) {
    &:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const CharacterItemParagraph = styled.p`
  margin: 0;
`;

export const CharacterHouses = styled.div`
  display: flex;
`;

export const CharacterHouseItem = styled.button`
  margin-right: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
