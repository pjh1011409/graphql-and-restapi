## 💻 PJH's Blog 📡

<strong>최근 들어 관심 갖고, 직접 프로젝트를 진행하며 구현해보고 싶었던 기술들을 학습하는 목적으로 제작한 간단한 CRUD 기능을 제공하는 토이 프로젝트입니다. </strong>

- GraphQL
- React Qeury
- Next.js
- Apollo server
- twin.macro

<br>

## 🗓 프로젝트 기간

2023.01.13 ~ 2023.01.28
<br>

## 📎 Link

**Notion**
👉 [Notion Portfolio](https://www.notion.so/API-Practice-33a84c2d694947f68872ba74341911b5)
<br>

## 🍀 나의 개발일지

<details>
<summary>✏️ 프로젝트를 개발하며 작성한 개발블로그입니다.</summary>

- [REST API vs GraphQL](https://velog.io/@pjh1011409/REST-API-vs-GraphQL)
- [REST API 통신](https://velog.io/@pjh1011409/REST-API-%ED%86%B5%EC%8B%A0)
- [GraphQL 통신](https://velog.io/@pjh1011409/GraphQL-%ED%86%B5%EC%8B%A0)
- [RestAPI + 무한스크롤](https://velog.io/@pjh1011409/RestAPI-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4)
- [GraphQL + 무한스크롤](https://velog.io/@pjh1011409/GraphQL-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4)
- [GraphQL - Resolver / Schema](https://velog.io/@pjh1011409/GraphQL-Resolver)
- [Emotion + Tailwind CSS](https://velog.io/@pjh1011409/Emotion-Tailwind-CSS)
- [React Query - Hydration(SSR)](https://velog.io/@pjh1011409/React-Query-HydrationSSR)
- [React Query - 사용자 경험 개선 UI](https://velog.io/@pjh1011409/React-Query-Global-Setting)

</details>
 
  
<br>

## ⚙️ 주요 공부 및 구현 사항

- **API**
  - GraphQL, REST 각각 다른 API 요청 방법과 그에 대한 응답 방법에 대해 학습

<br>

- **twin.macro** 🎨

  - 빠르고 쉽고 일관되게 디자인할 수 있는 Utility CSS, Tailwind CSS와 JS 파일 내에서 태그 안에 스타일을 적용하는 CSS-in-JS, Emotion을 함께 사용하여 flexible한 코드 작성 가능

<br>

- **Error, Loading**
  - React Query의 속성들을 사용히여 쉽고 효율적이고 깔끔한 UI 제공
  - useIsFetching, useMutating, onSuccess, onError ...

<br>

- **Infinite Scroll**

  - 효율적인 데이터 패칭 구현.
    - 방법 1. useInfiniteScroll + Intersection Observer API
    - 방법 2. useInfiniteScroll + React Infinite Scroller

  <br>

- **hydration**
  - React Query를 통한 SSR방식(Next.js) 구현을 위한 Hydration 방법 사용

<br>

## 💻 Service Architecture

<img width="1022" alt="스크린샷 2023-01-28 오후 7 20 41" src="https://user-images.githubusercontent.com/81337674/215261387-07b2377d-eaad-48a9-9ee6-55c91ed0f95b.png">

<br>

## 📄 Project Architecture

#### Client

```
⭐️ client
|
├── 🗂 components
│    ├── 📄 MsgInput.tsx
│    ├── 📄 MsgItem.tsx
│    ├── 📄 MsgList.tsx
│    └── 🗂 common
│           ├── 📄 Button.tsx
│           ├── 📄 Input.tsx
│           └── 📄 Card.tsx
│
├── 🗂 graphql
│    ├── 📄 messages.ts
│    └── 📄 user.ts
│
├── 🗂 hooks
│     ├── 📄 userGetMessage.ts
│     ├── 📄 useCreateMessage.ts
│     ├── 📄 useUpdateMessage.ts
│     ├── 📄 useDeleteMessage.ts
│     ├── 📄 useInfiniteScroll.ts
│     ├── 📄 useQueryError.ts
│     └── 📄 useCustomToast.ts
│
└── 🗂 pages
     ├── 📄 _app.js
     └── 📄 index.tsx

```

#### Server

```
⭐️ src
|
├── 📄 index.ts
├── 📄 firebase.js
├── 📄 types.ts
|
├── 🗂 resolvers
│    ├── 📄 message.ts
│    ├── 📄 index.ts
│    └── 📄 user.ts
│
└── 🗂 schema
     ├── 📄 message.ts
     ├── 📄 index.ts
     └── 📄 user.ts

```

<br>

## Query & Mutation

<img width="569" alt="스크린샷 2023-01-28 오후 7 42 37" src="https://user-images.githubusercontent.com/81337674/215262297-f6d837f4-9a05-49cc-8dac-f7cd47534b63.png">

<br>

## 🛠 Tools

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> 
  <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=GraphQL&logoColor=white">
 
<br>
  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
     <img src="https://img.shields.io/badge/Apollo GraphQL-311C87?style=for-the-badge&logo=Apollo GraphQL&logoColor=white">
      <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">

  <br>
     <img src="https://img.shields.io/badge/Chakra UI-319795?style=for-the-badge&&logo=Chakra UI&logoColor=orange">
         <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
             <img src="https://img.shields.io/badge/Emotion-F16521?style=for-the-badge&logo=Etsy&logoColor=white">
     <br>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">

<br>

## 👍 사용 이유

### Next.js + React Query

- Redux에 비해 구조적으로 간결성을 가지며, 데이터 패칭, 캐싱, 서버 쪽 데이터를 관리하기 용이하다.
- React.js를 서버측에서 pre-rendering하여 html을 생성하고, 브라우저에게 보내주는 SSR방식의 개발을 진행해보고 싶었다. </li>

### GraphQL + Apollo Server

- 하나의 EndPoint에 여러 API 요청이 가능하며, 필요한 정보만 요청할 수 있어 HTTP 요청 횟수와 응답 사이즈가 줄어든다.
- GraphQL이 적용된 서버를 쉽게 생성하게 도와주는 라이브러리로, 간단한 코드 몇줄로 GraphQL 서버 구성이 가능하다.

### Tailwind CSS + Emotion = Twin.macro

- Utiliy FirstCSS 와 CSS in JS의 장점을 모두 살려 더욱 유연한 CSS 구현 가능.

<br>

## 🎥 GIF

|                                                                                    **InfiniteScroll**                                                                                     |                                                                                        **Create**                                                                                         |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="300" height="400" alt="스크린샷 2023-01-28 오후 7 42 37" src="https://user-images.githubusercontent.com/81337674/215267483-88532d2b-1696-44a5-905b-4ee3212fd933.gif"> | <img width="300" height="400" alt="스크린샷 2023-01-28 오후 7 42 37" src="https://user-images.githubusercontent.com/81337674/215267628-d377ea72-bf3c-4b03-a1a8-d13b3303a3d8.gif"> |
|                                                                                        **Update**                                                                                         |                                                                                        **Delete**                                                                                         |
| <img width="300" height="400" alt="스크린샷 2023-01-28 오후 7 42 37" src="https://user-images.githubusercontent.com/81337674/215267659-c233243c-0b3a-4aaa-9ec3-7386f3972e58.gif"> | <img width="300" height="400" alt="스크린샷 2023-01-28 오후 7 42 37" src="https://user-images.githubusercontent.com/81337674/215267527-a5a65d7a-fe73-4934-9285-036ea70c5835.gif"> |
