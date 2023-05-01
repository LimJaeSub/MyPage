import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-content nav">
        <div className="header-content-item">
          <img src="https://www.codestates.com/_next/image?url=%2Fassets%2Fcommon%2Flogo%2Fcodestates-ci.png&w=128&q=75" />
        </div>
        <div className="header-content-item">
          <button>About</button>
        </div>
        <div className="header-content-item">
          <button>수업 탐색</button>
        </div>
        <div className="header-content-item">
          <button>채용 파트너십</button>
        </div>
        <div className="header-content-item">
          <button>기업 교육</button>
        </div>
        <div className="header-content-item">
          <button>블로그</button>
        </div>
        <div className="header-content-item">
          <button>자주 묻는 질문</button>
        </div>
      </div>
      <div className="header-content mypage">
        <button>마이페이지</button>
      </div>
    </div>
  );
}

export default Header;
