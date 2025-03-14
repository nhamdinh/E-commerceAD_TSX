# React + TypeScript + Vite
npx create-vite@latest my-react-app --template react-ts

# Base ReactJS
Base được dựng dựa trên React 18 với Vite.

## Các công nghệ sử dụng

- React 18 [link](https://react.dev/learn)
- Antd (v5) [link](https://ant.design/components/overview/)
- TailwindCss (v3) [link](https://tailwindcss.com/)
- Redux-toolkit (v2) [link](https://redux-toolkit.js.org/)
- i18next + react-i18next [link](https://www.i18next.com/)
- Eslint + Prettier
- Husky + Commitlint [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

  - Convention:

  ```bash
  <type>(ticket-number): <commit message>

  Giải thích:
  <type> : feat | refactor | fix| chore
  ticket-number: mã ticket bạn làm
  <commit message>: commit của bạn

  ```

  - Ví dụ:
    - feat(UTP-123): create homepage ui

## Config Theme trước khi bắt đầu dự án

- Thực hiện sửa các file: **utils/theme.utils.ts** (config theme cho antd, [GUI](https://ant.design/theme-editor#component-style)), **tailwind.config.cjs** (config cho toàn bộ hệ thống khi sử dụng class)

/my-react-app
│── /public            # Chứa index.html và các file tĩnh
│── /src               # Mã nguồn chính
│   │── /assets        # Chứa hình ảnh, icon, fonts, styles
│   │── /components    # Chứa các component dùng chung
│   │── /features      # Chứa các module chính (nếu dùng Redux)
│   │── /pages         # Chứa các trang chính của ứng dụng
│   │── /hooks         # Chứa custom hooks
│   │── /context       # Chứa context API nếu dùng
│   │── /services      # Chứa các API service
│   │── /store         # Chứa Redux store (nếu dùng Redux)
│   │── /utils         # Chứa các hàm helper
│   │── /locales       # Chứa đa ngôn ngữ
│   │── /worker        # tác vụ ngầm, song song với luồng chính UI
│   │── App.js         # Component gốc
│   │── index.js       # Entry point
│── .env               # Biến môi trường
│── package.json       # Thông tin dependencies
│── README.md          # Tài liệu dự án
│── vite.config.js
│── .gitignore


## Cấu trúc thư mục

- **public**
  - **locales** => Thư mục chứa các file ngôn ngữ.
  - **images** => Thư mục chứa ảnh.
- **src**
  - **components**
    - **icons** => Thư mục định nghĩa các icons có trong dự án có định dạng svg viết trong tsx.
    - **layouts** => Thư mục định nghĩa các layout của hệ thống.
    - **shared** => Thư mục định nghĩa các component có thể sử dụng lại.
  - **hooks** => Định nghĩa các hook dùng chung cho toàn bộ dự án.
  - **modules** => Thư mục định nghĩa các module cho dự án (Có thể xác định theo page hoặc các thành phần lớn trong dự án)
  - **page** => Định nghĩa các page
  - **route** => Định nghĩa đường dẫn
    - **auth.routes.tsx** => Định nghĩa đường dẫn auth, vd: login, signup, ...
    - **dashboard.routes.tsx** => Định nghĩa các đường dẫn trong dashboard (private route)
  - **services** => Định nghĩa các api sử dụng rtk query
  - **store**
  - **utils**
  - **i18n.ts** => file config đa ngôn ngữ.

## Các service common của hệ thống

1. **utils/cn.utils.ts**

- Sử dụng clsx và tailwind-merge để có thể gom và loại bỏ các class trùng loại trong component.
- Cách sử dụng:

```bash
import { cn } from '@/utils'

export const Component = ()=>{
  return (
    <div className={cn("class1 class2","class3")}>test</div>
  )
}
```

2. **utils/cookie.utils.ts**

- Định nghĩa các hàm thao tác với cookie

3. **utils/localStorage.utils.ts**

- Định nghĩa các hàm thao tác với local storage

4. **hooks/useAppModal.ts** và **hooks/useConfirmModal.ts**

- Hệ thống có 2 modal 1 là Modal chung 2 là Modal hiển thị confirm hoặc cảnh báo hoặc thông báo.
- Cách sử dụng _useAppModal_:

```bash
'use client';
import { useAppModal } from '@/hooks'

export const Component = () => {
  const { open, close } = useAppModal();
  return (
    <Button
      onClick={() =>
        open({
          // sử dụng props của component modal antd
          children: <div>test</div> (component bạn muốn hiển thị trong modal),
          onCancel: () => {
            close();
          },
          onOk: () => {
            close();
            // sử lý khi người dùng bấm ok
          },
        })
      }
    >
      OpenModal
    </Button>
  )
}
```

- Cách sử dụng _useConfirmModal_:

```bash
'use client';
import { useConfirmModal } from '@/hooks'

export const Component = () => {
  const { open, close } = useConfirmModal();
  return (
    <Button
      onClick={() =>
        open({
          okText: 'ok',
          title: 'confirm',
          titleClass: 'text-center',
          description: 'test',
          descriptionClass: 'text-center',
          onOk: () => {
            close();
            // sử lý khi người dùng bấm ok
          },
          onCancel: close
        })
      }
    >
      OpenModal
    </Button>
  )
}
```

4. **hooks/useAuth.ts**

- Hook xử lý authentication return ra các giá trị như isLogin (biết kiểm tra đã đăng nhập hay chưa), setToken (hàm thực hiện lưu token vào localStorage với event Trigger streaming tất cả các tab trên browser đang mở ứng dụng), logout (hàm thực hiện đăng xuất)

## Cách Chạy

- Cài NodeJS bản mới nhất hoặc LTS [link](https://nodejs.org/en)
- Chạy lệnh

```bash
yarn
yarn dev
```
