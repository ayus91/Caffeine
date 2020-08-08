# Caffeine - 이미지 추가
- Caffeine은 커피를 즐길 수 있는 **카페**라는 공간을 좋아하고,구매한 원두에 대해 **기록**을 남기는 커피 애호가를 위한 어플리케이션입니다.<br>
- **카페**와 **원두 기록**은 별개의 카테고리에서 독립적으로 작동하므로, 기호에 맞게 각각 혹은 두 카테고리 모두를 활용할 수 있습니다.
---
- **카페**
  - 사용자가 직접 새로운 카페 정보를 추가하고, 리뷰를 남겨서 다른 사용자들과 정보를 공유할 수 있습니다.
- **원두 기록**
  - 구매한 원두에 대해 사용자가 기록을 남길 수 있고, 해당 기록은 해당 사용자만이 읽고, 수정 및 삭제할 수 있습니다.
  - 기본으로 제공되는 항목들에 대해 사용자의 기호에 맞게 간단하게 혹은 자세하게 기록을 남길 수 있습니다.

## Installation 
추가예정

## Usage
- **카페**
  - **지역 선택**  
    - 원하는 지역을 선택하고, 그 지역에 등록되어 있는 카페들의 목록을 볼 수 있습니다.
  - **엄선된 카페 목록**
    - 한국과 영국에서 바리스타로 근무했던 경력을 바탕으로 프랜차이즈를 제외한 서울시의 카페들에 대한 정보를 엄선했으며, 지속적으로 새로운 카페 정보가 업데이트됩니다. 
  - **카페의 상세 정보**  
    - 카페 목록 중 한 카페를 선택시 상호명, 주소, 원두의 판매여부, 다른 사용자들이 남긴 상세한 리뷰와 평점을 볼 수 있고, <br>
    해당 카페의 인스타그램 계정으로의 링크가 추가되어 있습니다.
  - **리뷰 등록과 평점의 반영**  
    - 특정 카페에 대해 상세한 리뷰와 평점을 남겨서 다른 사용자들과 정보 공유가 가능하며, 등록된 날짜와 함께 리뷰의 평점을 바탕으로 해당 카페의 전체 평점이 표시됩니다.
  - **즐겨찾기 등록**   
    - 특정 카페를 즐겨찾기 목록에 추가할 수 있고, 해당 사용자만이 그 목록을 볼 수 있습니다. 더 이상 즐겨찾기 목록에 있는 것을 선호하지 않는다면 삭제도 가능합니다.
  - **새로운 카페 추가**   
    - 특정 카페에 대한 정보가 아직 제공되지 않고 있다면, 사용자가 직접 새로운 카페 정보를 추가할 수 있습니다.
    정보 추가시 'Daum 우편번호 검색 서비스'가 적용되어 동일한 주소에 대해 카페가 중복 등록되는 사례를 방지합니다.
    
- **원두기록**
  - **기록의 접근 권한 제한**
    - 구매한 원두에 대해 사용자가 기록을 남길 수 있고, 해당 기록은 해당 사용자만이 읽고, 수정 및 삭제할 수 있습니다.
  - **기록의 상세 정보**
    - 간략하게 정보를 보여주는 원두 기록 목록에서 한 기록을 선택시 원두의 이름, 원산지, 기록한 날짜, 구입처, 가격, 20가지의 선택지 중 특정 원두가 해당되는 맛, 그 외에 사용자가 기록한 추가적인 특징, 평점을 볼 수 있습니다.
  - **새로운 기록 추가**
    - 원두의 이름 부분만 필수항목으로 지정해두어 그 외의 항목에 대해서는 사용자의 기호에 맞게 간단하게부터 아주 자세하게까지 기호에 맞는 입력이 가능합니다.
    특히 flavor 부분에 있어 20가지의 맛의 선택이 가능하고, 선택된 맛에 있어서는 버튼의 색상이 변경되어 빠른 확인이 가능합니다.
  - **기록의 수정**
    - 기존의 기록을 그대로 불러와서 사용자에게 제공합니다. 그 후 사용자가 수정한 부분만 반영되어 기록되어 많은 항목들을 입력해 놓은 기록이어도 쉽고 빠른 수정이 가능합니다.
  - **기록의 삭제**
    - 해당 기록의 상세 정보에서 '삭제'버튼을 누르면 알림창으로 다시 한 번 삭제여부를 질문해서 소중한 기록을 실수로 삭제하는 사례를 방지합니다.

- **사용자 정보**
  - **간단한 회원가입**
    - 이메일, 사용할 이름, 비밀번호만 입력하여 간단하고 빠르게 회원가입이 가능합니다.
  - **인증 정보 확인**
    - 로그인 정보가 유효하지 않을시 카페, 원두기록으로의 접근이 전면 제한됩니다.
    - 로그인시 생성되는 사용자 정보를 바탕으로 그 이후의 모든 요청시 정보를 확인합니다. 비정상적인 방법으로 특정 페이지에 접근시 알림창이 나오고, 로그인 페이지로 이동합니다.
 
 ## Documentation
 링크예정
 
 ## Author
 - 이지하 https://github.com/ayus91
   - **Front-end / Cafe**
   - 전체 지역 목록 보기 / 특정 지역의 카페 목록 / 한 카페의 세부 정보 
   - 사용자가 새로운 카페 정보 추가
   - 사용자가 리뷰 기록하기/  리뷰의 평점을 바탕으로 해당 카페의 전체 평점을 표시
   - 사용자가 즐겨찾기에 추가한 카페 목록 보기 및 삭제
 
 - 강준혁 https://github.com/aiora32
   - **Front-end / Note, Cafe**
   - Note
     - 전체 기록 목록 보기 / 특정 기록의 세부 정보
     - 새로운 기록 추가, 수정 및 삭제
   - Cafe
     - 사용자가 새로운 카페 정보 추가시 'Daum 우편번호 검색 서비스'의 적용으로 Caffeine의 데이터베이스에 이미 저장되어 있는 주소의 경우 중복으로 등록되는 것 방지
    
  - 김현우 https://github.com/hyun0310woo
   - **Front-end / User**
   - 기존 사용자의 로그인, 로그아웃 처리, 새로운 사용자의 회원가입
   - 토큰을 통한 로그인 상태의 유지
   
  - 조선민 https://github.com/Sunmin0520
   - **Back-end / Cafe, Note, User**
   - Cafe
     - 서울시의 각 지역의 카페 정보 / 특정 카페에 대해 사용자들이 입력한 리뷰와 즐겨찾기 정보를 데이터베이스에 저장 및 불러오기
     - 새로운 카페 정보 등록, 새로운 리뷰 등록, 특정 카페의 즐겨찾기 추가 및 삭제
   - Note
     - 로그인한 사용자의 원두 기록을 데이터베이스에 저장 / 정상적으로 로그인이 이루어졌을 때만 해당 사용자의 정보 불러오기
     - 특정 기록의 수정 및 삭제
   - User
     - 회원가입시 새로운 사용자 정보를 데이터베이스에 저장 / 로그인시 사용자가 입력한 정보와 데이터베이스에 저장된 정보와의 비교
     - JWT middleware를 통한 인증 및 접근권한 부여와 중복되는 코드 방지
   
   ## Stack
   - Front-end: 
   - Back-end: node.js, express, jwt, Sequelize, MySQL,EC2, RDS
