// 페이지 로드 시 스크롤 최상단 이동
window.onload = function() {
    window.scrollTo(0, 0);
}

// 특정 계절 상세 페이지 보여주는 함수
function showDetail(season) {
    // 1. 메인 뷰 숨기기 (페이드 아웃 효과)
    const mainView = document.getElementById('main-view');
    mainView.style.opacity = '0';
    
    setTimeout(() => {
        mainView.style.display = 'none';
        
        // 2. 모든 상세 페이지 숨김 및 초기화
        const allPages = document.querySelectorAll('.detail-view');
        allPages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });

        // 3. 선택한 계절 페이지만 보이기
        const targetPage = document.getElementById(season + '-page');
        targetPage.style.display = 'block';
        
        // 약간의 지연 후 페이드인 효과 클래스(active) 추가
        setTimeout(() => {
            targetPage.classList.add('active');
        }, 50);
        
        // 4. 화면 최상단으로 부드럽게 이동
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 500); // CSS transition 시간(0.5s)과 타이밍 맞춤
}

// 메인 화면으로 돌아가는 함수
function showMain() {
    // 1. 현재 떠있는 상세 페이지 숨기기
    const allPages = document.querySelectorAll('.detail-view');
    allPages.forEach(page => {
        page.style.opacity = '0'; // 페이드 아웃
        page.classList.remove('active');
    });

    setTimeout(() => {
        // 2. display none 처리
        allPages.forEach(page => {
            page.style.display = 'none';
        });

        // 3. 메인 뷰 보이기
        const mainView = document.getElementById('main-view');
        mainView.style.display = 'flex';
        setTimeout(() => {
            mainView.style.opacity = '1';
        }, 50);

        // 4. 화면 최상단으로 부드럽게 이동
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, 500);
}