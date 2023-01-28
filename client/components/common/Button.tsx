import tw, { styled, css, theme } from "twin.macro";

interface ButtonProps {
  variant?: "MainBtn" | "Submit" | "CardBtn";
}

const Button = styled.button(({ variant }: ButtonProps) => [
  //공통 버튼 스타일 설정
  tw`px-8 py-2 rounded transform duration-75 mx-1`,

  // 변형 스타일 설정
  tw`hocus:(scale-100 text-white bg-[#efa212])`,

  variant === "MainBtn" &&
    css`
      cursor: pointer;
      vertical-align: middle;
      text-decoration: none;
      transform-style: preserve-3d;
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);
      font-weight: 1000;
      text-transform: uppercase;
      background: white;
      border: 1.5px solid black;
      border-radius: 0.75em;
      transform-style: preserve-3d;
      ::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #efa212;
        border-radius: inherit;
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
          box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
      }
      :hover {
        background: #f9c15a;
        transform: translate(0, 0.25em);
      }
      :hover::before {
        box-shadow: 0 0 0 2px #efa212, 0 0.5em 0 0;
        transform: translate3d(0, 0.5em, -1em);
      }
      :active {
        background: #efa212;
        transform: translate(0em, 0.75em);
      }
      :active::before {
        box-shadow: 0 0 0 2px black, 0 0 black;
        transform: translate3d(0, 0, -1em);
      }
    `,
  variant === "Submit" &&
    tw`border-2 border-black rounded-xl 
    `,
  variant === "CardBtn" &&
    tw`font-extrabold px-1 py-1 my-1 text-[#efa212]
    `,

  // tailwind.config.js에서 설정해놓은 값 가져오기
  css`
    color: ${theme`colors.black`};
  `,
]);

export default Button;
