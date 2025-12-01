import { styled } from 'styled-components';

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image:
    linear-gradient(
      to right,
      #0d0d0d 0%,
      rgba(13, 13, 13, 0.8) 15%,
      rgba(13, 13, 13, 0.4) 30%,
      rgba(13, 13, 13, 0) 50%,
      rgba(13, 13, 13, 0) 70%,
      rgba(13, 13, 13, 0.4) 85%,
      rgba(13, 13, 13, 0.8) 95%,
      #0d0d0d 100%
    ),
    linear-gradient(
      to top,
      #0d0d0d 0%,
      rgba(13, 13, 13, 0.8) 20%,
      rgba(13, 13, 13, 0.5) 40%,
      rgba(13, 13, 13, 0.2) 60%,
      rgba(13, 13, 13, 0) 80%
    );
`;
