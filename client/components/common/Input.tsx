import tw, { styled, css, theme } from "twin.macro";

interface InputProps {
  variant?: "Create" | "Update";
  isSmall?: boolean;
}

const Input = styled.textarea(({ variant, isSmall }: InputProps) => [
  //공통 버튼 스타일 설정

  variant === "Create" && tw`border-2 border-black  rounded-xl p-2`,
  // tailwind.config.js에서 설정해놓은 값 가져오기
  css`
    color: ${theme`colors.black`};
  `,
]);

export default Input;
