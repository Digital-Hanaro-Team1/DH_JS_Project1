# 대한민국 구석구석 클론코딩 

> 
> 디지털 하나로에서 진행한 국내 여행 정보 포털 [대한민국 구석구석](https://korean.visitkorea.or.kr/main/main.do) 클론 프로젝트입니다.  
> HTML, CSS, JavaScript 기반으로 실제 사이트의 주요 UI/UX 구성 요소를 재현했습니다.

<br>

## 📌 프로젝트 소개

- 대한민국 대표 관광 정보 포털인 ‘대한민국 구석구석’ 웹사이트의 주요 기능과 화면 구성을 클론하였습니다.
- **HTML, CSS, JS로 프론트엔드 중심 구현**에 초점을 맞췄으며, 화면 구성과 슬라이더, 드롭다운 등 **다양한 인터랙션 요소**를 반영하였습니다.

---

### 👥 팀원

| 이름 | 역할 |
|:----:|----------------------------------------------------------------|
| <div align="center"><a href="https://github.com/ghi512"><img src="https://avatars.githubusercontent.com/jhpark0888" width="100"/><br/>박지환</a></div> |- 홈 페이지 구현 <br/> - 이벤트 슬라이드 구현<br/>- 캘린더 슬라이드 구현 <br/>- footer |
| <div align="center"><a href="https://github.com/jjinleee"><img src="https://avatars.githubusercontent.com/jjinleee" width="100"/><br/>이진</a></div> | - 지역 페이지 구현 <br/>- 드롭다운 목록별 명소 구현<br/>- 지역 뉴스 구현<br/>- header |
<br>

---

<br>


## 🖥️ 주요 화면 구성

### 🏠홈페이지

- 날짜별 전국 행사 및 축제 슬라이더  
- 이벤트 슬라이더
<img src="https://github.com/user-attachments/assets/e2253fa4-278d-4038-a49b-2e9b3cff6806" width="100%"/>
<img src="https://github.com/user-attachments/assets/aaac31ee-529e-460a-9e2b-fbf48b687afb" width="100%"/>

<br>

---

<br>

### 📍 지역 페이지

- 지역별 여행지 / 맛집 / 장소 카드 구성  
- ‘우리 지역 이야기’ 뉴스 구현

<img src="https://github.com/user-attachments/assets/f1c2c847-bfbe-4ba3-940e-0d2d7d4c2837" width="100%"/>
<br>

---
<br>


### 📌 헤더 & 푸터
| 항목 | 이미지 |
|------|--------|
| Header | <img src="https://github.com/user-attachments/assets/6eab05d9-b027-436e-b425-50d38a5380a6" width="100%"/> |
| Footer | <img src="https://github.com/user-attachments/assets/31323cfc-d832-4322-b8aa-685b4fca6864" width="100%"/> |


---

<br>

## 🛠 기술 스택

| 분류 | 사용 기술 |
|------|------------|
| Language | HTML5, CSS3, JavaScript  |
| Version Control | Git, GitHub |
| 협업 도구 | GitHub Issues, Pull Requests, Branch 전략 |


___

<br>

## 🚀 실행 방법

1. 이 저장소를 클론합니다.
    ```bash
    git clone https://github.com/your-id/your-repo.git
    ```

2. 프로젝트 디렉토리로 이동합니다.
    ```bash
    cd your-repo
    ```

3. `home.html` 파일을 브라우저에서 실행합니다.

---



<br>
<br>

## ✅ Git 컨벤션
### 📍**Branch Naming Rule**

- 개발 기능에 따라 브랜치 구분
- <prefix>/<#이슈번호> - <설명>
- 예시: `feat/#10 - 햄버거 메뉴 구현`

### 📍**Commit Message Rule**

- [prefix] <#이슈번호> - <설명>
- 예시: `[feat] #10 - 햄버거 아이콘 토글 기능 추가`

### 📍Merge **Rule**

- Fast-forward merge
    - 분기된 이후 main에 변화가 없어 충돌이 없는 경우 

- 3-way merge
    - 분기된 이후 main에 변화가 있어 충돌이 생기는 경우

- Rebase merge
    - 분기된 이후 main에 변화가 있지만 충돌 사항이 없는 경우

- Squash merge
    - 분기된 브랜치가 오류 해결을 위한 브랜치거나 FIX 커밋이 많은 경우

### 📍Merge **Message Rule**

- [feat/#이슈번호 →main] 작업 내용 요약
    - 주요 변경 사항 1
    - 주요 변경 사항 2
    - 추가적으로 수정한 내용
- 예시:
    
    `[feature/#2 profile] 사용자 프로필 페이지 추가`
    
    - `프로필 페이지 UI 구현`
    - `백엔드 API 연동`
    - `유효성 검사 로직 추가`

### 📍**Issue Naming Rule**

- [prefix] <설명>
    - 예시: `[feat] 햄버거 메뉴 구현`
- issue template
    
    ```markdown
    ### Issue
    이슈 내용
    
    ### To Do
    - [] 할 일 목록
    ```
    

### 📍**Pull request Naming Rule**

- [prefix] <#관련이슈번호> - <설명>
    - 예시: `[feat] #10 - 햄버거 메뉴 구현`
- pr template
    
    ```markdown
    ### Pull request
    ⛳️ 작업한 브랜치
    - <prefix>/<#이슈번호>
    👷 작업한 내용
    - 
    ### 스크린샷
    |기능|스크린샷|
    |---|------|
    |설명|스크린샷(png 또는 gif)|
    
    ### 관련 이슈
    - <#이슈번호>
    ```
    

### 📍**Prefix 정리**

| Prefix | Description |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 추가 및 수정 |
| style | 코드 포맷팅 (기능 수정 X) |
| refactor | 코드 리팩토링 |
| test | 테스트 관련 코드 추가 및 수정 |
| chore | 빌드, 패키지 등과 관련된 설정 (기능이나 코드과는 관련 X) |
| add | 이미지 등의 정적 자원 추가 |
| setting | 초기 설정 세팅 |
| rename | 변수, 파일, 폴더 명 변경 |
| comment | 필요한 주석 추가 및 변경 |

### 📍git work flow

```markdown
1. 작업 단위별 Issue 생성
새로운 작업 단위별 이슈 생성
- Issue 규칙
	- 담당자 지정 및 프로젝트 연결
	- 제목에 Prefix 사용: [feat] 햄버거 메뉴 구현
	- Issue 템플릿에 따라 이슈 내용과 할 일 목록 작성
	- Label을 사용해 작업 성격을 표시 (e.g., feature, bug, documentation 등)

2. Develop 브랜치 최신화
fork받은 로컬 레포에서 develop 브랜치 최신화
- git pull (origin develop)

3. 브랜치 생성
기능마다 브랜치 생성 (브랜치 이름 규칙 참고)

4. 작업 후 Add -> Commit -> Push -> Pull Request
- Add: 작업한 파일을 추가
- Commit: Commit 규칙에 따라 메시지 작성
- Push: 작업 브랜치를 원격에 푸시
- Pull Request 생성: GitHub에서 PR 생성 및 리뷰어 지정(pr 템플릿 사용)

5. PR 리뷰 및 Merge
- 리뷰어에게 Approve를 받은 후 PR 작성자가 develop 브랜치로 Merge하기

6. Issue와 Pull Request 관리
- Label 관리: 완료된 이슈와 PR에 done과 같은 Label을 추가하여 작업이 완료됨을 표시 (closed)
```


---

<br>

### 폴더 구조

```markdown

my-web-project/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── logo.png
├── README.md
└── .html
```

