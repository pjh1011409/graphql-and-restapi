import tw, { styled, css, theme } from "twin.macro";

interface CardProps {
  variant?: "PostCard";
}

const Card = styled.div(({ variant }: CardProps) => [
  //공통 버튼 스타일 설정

  variant === "PostCard" && tw`border-2 border-black  rounded-xl p-2`,
  // tailwind.config.js에서 설정해놓은 값 가져오기
  css`
    color: ${theme`colors.black`};
  `,
]);

export default Card;
