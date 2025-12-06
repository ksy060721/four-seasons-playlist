# 🌸 사계절 플레이리스트 (Four Seasons Playlist)

> **"계절의 온도를 담은 우리 조만의 노래 추천 웹페이지"** > 2025학년도 2학기 오픈소스개발과활용 기말 팀프로젝트

<br>

## 1. 프로젝트 개요 및 필요성 (Introduction & Necessity)

### 📅 프로젝트 주제
사용자가 현재 느끼고 싶은 계절을 선택하면, 그 계절의 분위기에 딱 맞는 엄선된 노래들을 유튜브 영상과 함께 추천해주는 **반응형 웹 플레이리스트**입니다.

### 💡 기획 의도 및 필요성
현대인들은 바쁜 일상 속에서 계절의 변화를 느끼지 못하고 지나칠 때가 많습니다. 음악은 잊고 지냈던 계절의 감각과 추억을 되살려주는 가장 강력한 매개체입니다.
* **감성 충전:** 삭막한 일상 속에서 봄의 설렘, 여름의 청량함, 가을의 쓸쓸함, 겨울의 포근함을 음악을 통해 전달하고자 했습니다.
* **사용자 편의성:** 유튜브를 일일이 검색하지 않아도, 탭 한 번으로 해당 계절의 명곡들을 바로 감상할 수 있는 플랫폼이 필요하다고 느꼈습니다.
* **웹 표준 준수:** 별도의 앱 설치 없이 웹 브라우저에서 즉시 접근 가능한 접근성 높은 페이지를 목표로 했습니다.

<br>

## 2. 주요 기능 (Key Features)

* **탭(Tab) 기반 UI:** 봄, 여름, 가을, 겨울 탭을 클릭하여 페이지 이동 없이 즉시 콘텐츠가 전환됩니다. (CSS Radio Button Trick 활용)
* **계절별 테마 디자인:** 각 계절을 상징하는 고유의 배경색(Pink, Blue, Red, Green)과 타이포그래피를 적용하여 시각적 몰입감을 높였습니다.
* **유튜브 임베드(Embed):** `iframe`을 활용하여 페이지 이탈 없이 바로 음악을 감상할 수 있습니다.
* **반응형 레이아웃:** Flexbox를 사용하여 PC 및 모바일 환경에서도 카드가 깨지지 않고 자연스럽게 정렬됩니다.

<br>

## 3. 사용 기술 (Tech Stack)

본 프로젝트는 순수 웹 기술과 오픈소스 플랫폼을 활용하여 제작되었습니다.

| 구분 | 기술 | 설명 |
| :-- | :-- | :-- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | 시맨틱 태그(section, article, nav)를 활용한 웹 구조 설계 |
| **Frontend** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Flexbox 레이아웃, CSS 탭 구현, 반응형 디자인, Google Fonts 적용 |
| **Collaboration** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) | 버전 관리 및 브랜치 전략 사용 |
| **Collaboration** | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) | 원격 저장소 호스팅 및 Issue/PR 관리 |
| **Deployment** | **GitHub Pages** | 정적 웹페이지 배포 |

<br>

## 4. 팀원 역할 분담 (Team Roles)

R&R(Role and Responsibilities)을 명확히 하여 협업을 진행했습니다.

* **[김서영] (조장)**
    * 프로젝트 기획 총괄
    * CSS 디자인 시스템 구축 (영상 썸네일 오류 수정)
    * GitHub 저장소 초기 세팅 및 관리
    * 봄 섹션 HTML 구조 작성
    * README 문서 작성
* **[최현아] (디자인)**
    * CSS 디자인 시스템 구축 (색상 선정)
    * 여름 섹션 HTML 구조 작성
* **[김영민] (디자인, ppt제작)**
    * 가을 섹션 HTML 구조 작성
    * ppt 자료 정리
 * **[오세란] (디자인)**
    *  CSS 디자인 시스템 구축 (홈페이지 목록화 시스템 구축)
    * 겨울 섹션 HTML 구조 작성

<br>

## 5. 배포 주소 (Deployment)

아래 링크를 클릭하면 웹페이지를 바로 확인하실 수 있습니다.

🚀 **웹사이트 바로가기:** [https://ksy060721.github.io/four-seasons-playlist/](https://ksy060721.github.io/four-seasons-playlist/)

<br>

## 6. 프로젝트 구조 (Project Structure)

```bash
four-seasons-playlist/
├── index.html       # 메인 페이지 (탭 구조 및 전체 콘텐츠 포함)
├── style.css        # 전체 스타일 시트 (디자인 및 레이아웃)
├── README.md        # 프로젝트 설명 문서
└── .gitignore       # Git 제외 파일 설정
