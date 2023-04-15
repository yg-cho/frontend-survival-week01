# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

# 프로젝트 세팅

### Javascript 개발환경 세팅
* fnm(fast node manager) 설치 - 본인은 MAC을 사용하여 MAC 기준으로 설명
  * brew install fnm ( brew가 없다면 brew먼저 설치하기 <https://brew.sh/index_ko> )
* node.js는 LTS버전으로 설치

### TypeScript + React + Jest + ESLint + Parcel 개발 환경 세팅

1. 먼저, 프로젝트 폴더를 준비한다.
```bash
mkdir my-app
cd my-app
```
2. 해당 폴더에서 VSC, Webstorm을 열어 준다.
3. 터미널로 돌아와 npm 패키지 기본설정을 시작한다 ( 이때 터미널의 현재 디렉터리는 위에 생성한 폴더여야 한다. )
```bash
npm init -y
```
4. 프로젝트 상위에 .gitignore 파일을 생성한다.
5. .gitignore 파일안에 <https://www.toptal.com/developers/gitignore/api/node>를 복사하여 넣어준다. (기본적으로 제네레이트 해주는 것이고, 필요한것은 따로 추가해도된다.)
6. 타입스크립트 설치 및 설정
```bash
npm i -D typescript
npx tsc --init
```
7. 생성된 tsconfig.json 파일에 jsx(tsx)를 사용하기 위한 설정을 추가하여 준다.
```bash
  "jsx": "react-jsx" /* Specify what JSX code is generated. */,
```
