# DH_JS_Project1

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
└── .gitignore
```



### 📍**Branch Naming Rule**

- 개발 기능에 따라 브랜치 구분
- <prefix>/<#이슈번호> - <설명>
- 예시: `feat/#10 - 햄버거 메뉴 구현`

### 📍**Commit Message Rule**

- [<prefix>] <#이슈번호> - <설명>
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

- [<prefix>] <설명>
    - 예시: `[feat] 햄버거 메뉴 구현`
- issue template
    
    ```markdown
    ### Issue
    이슈 내용
    
    ### To Do
    - [] 할 일 목록
    ```
    

### 📍**Pull request Naming Rule**

- [<prefix>] <#관련이슈번호> - <설명>
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
**1. 작업 단위별 Issue 생성**
새로운 작업 단위별 이슈 생성
- Issue 규칙
	- 담당자 지정 및 프로젝트 연결
	- 제목에 Prefix 사용: [feat] 햄버거 메뉴 구현
	- Issue 템플릿에 따라 이슈 내용과 할 일 목록 작성
	- Label을 사용해 작업 성격을 표시 (e.g., feature, bug, documentation 등)

**2. Develop 브랜치 최신화**
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
