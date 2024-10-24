# XENO FO

## 📖 설명
더조은컴퓨터 학원 팀 프로젝트 남자 패션 쇼핑몰 XENO입니다.

<a href="https://github.com/cyjoon68/Daewon_XENO/wiki/%08XENO_view">이미지 바로가기</a>

## 🧑‍💻 팀원 소개
<table>
    <tbody>
        <tr>
            <td align="center"><a href="https://github.com/cyjoon68"><img src="https://avatars.githubusercontent.com/u/157681635?v=4" width="100px; alt="" /><br /><sub><b>채영준</b></sub></a><br /></td>
            <td align="center"><a href="https://github.com/huntingforheat"><img src="https://avatars.githubusercontent.com/u/108726369?v=4" width="100px; alt="" /><br /><sub><b>박정태</b></sub></a><br /></td>
            <td align="center"><a href="https://github.com/joohyeongzz"><img src="https://avatars.githubusercontent.com/u/162415872?v=4" width="100px; alt="" /><br /><sub><b>강주형</b></sub></a><br /></td>
            <td align="center"><a href="https://github.com/mingi502"><img src="https://avatars.githubusercontent.com/u/116711211?v=4" width="100px; alt="" /><br /><sub><b>최민기</b></sub></a><br /></td>
        </tr>
    </tbody>
</table>

## ⚡️ 기능 구현

### Auth 페이지
- react-hook-form, zod를 사용하여 form의 상태관리
    - 유효한 정규식이 아닐 경우 에러 텍스트 출력
    - 모든 필수 input이 유효할 경우 submit 버튼 활성화
- react-query useMutation를 사용하여 서버 상태관리
   - 회원 가입 페이지 Loading UI 구현
   - 로그인 페이지 유효한 요청이 아닐 경우 Error Modal
   - 로그인 페이지 유효한 요청시 Home으로 이동

<hr />

### Main 페이지
- react-query를 사용하여 상품 랭킹 페이지 구현
  - useInfiniteQuery와 react-intersection-observer를 사용하여 감지

<hr />

### 싱품 상세 페이지
- react-slick를 사용하여 상품 상세페이지 이미지 슬라이드 구현
- next-ui modal을 사용하여 상품 옵션 선택 모달 구현
- recoil을 사용하여 상품 옵션 수량 선택 구현
- Typescript를 사용하여 컴포넌트 타입 정의
   - 공통된 모달의 props을 AppModalType로 정의하여 상속
   - AppPromptModalProps 인터페이스를 actionButtonProps subButtonProps 정의하여 각
   버튼의 action과 style, text를 받아 모달안에 있는 닫기 이벤트 적용

<hr />

### 장바구니 페이지
- recoil을 사용하여 장바구니 리스트 정보를 스토어에 저장하여 전체 선택 및 선택 구매 구현
- 구매하기 버튼 클릭 시 구매하기 페이지로 이동

<hr />

### 구매하기 페이지
- react-daum-postcode을 사용하여 배송지 입력하기 페이지의 주소 입력 모달 구현
- Toss Payment를 사용하여 결제 기능 구현
- recoil을 사용하여 배송 메세지 구현


## 📦 폴더구조

### FSD 폴더 구조
```
📦 (FSD)
├─ 📂 apps
│  └─ providers
├─ 📂 entities
│  ├─ cart
│  ├─ order
│  ├─ product
│  ├─ review
│  └─ user
├─ 📂 features
│  ├─ auth
│  ├─ cart
│  ├─ order
│  ├─ product
│  ├─ review
│  └─ types
├─ 📂 shareds
│  ├─ fetchs
│  ├─ path
│  ├─ stores
│  ├─ styles
│  ├─ types
│  ├─ ui
└─ 📂 widgets
    ├─ app
    ├─ cart
    ├─ home
    ├─ my
    ├─ order
    ├─ product
    └─ review
```

### app(page) 폴더 구조
```
📦 app
├─ 📂 (main)
├─ 📂 auth
│  ├─ signin
│  └─ signup
├─ 📂 cart
├─ 📂 complete
├─ 📂 menu
├─ 📂 mypage
│  ├─ claims
│  └─ orders
├─ 📂 order
│  └─ delivery
├─ 📂 products
│  └─ [productId]
├─ 📂 rank
│  ├─ outer
│  ├─ pants
│  └─ top
├─ 📂 reviews
│  ├─ create
│  │  └─ [orderId]
│  └─ info
│     └─ [reviewId]
├─ 📂 search
│  └─ result
│     └─ [keyword]
└─ 📂 wishlist
```

## 🔧 env 파일
```js
NEXT_PUBLIC_TOSS_PAYMENTS_CLIENT_SECRET_KEY = "Toss Client Key"
NEXT_PUBLIC_TOSS_PAYMENTS_SECRET_KEY = "Toss Secret Key"
NEXT_PUBLIC_TOSS_PAYMENTS_CUSTOMER_KEY_SECRET_KEY = "Toss Customer Id"
NEXT_PUBLIC_API_URL = "API SERVER URL"
```