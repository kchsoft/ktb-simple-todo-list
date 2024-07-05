# ktb-simple-todo-list
create ToDoList using HTML, CSS, JavaScript  
  
  
---  
<h3> Autoprefixer적용 </h3>
https://www.npmjs.com/package/autoprefixer/v/8.0.0  

해당 링크의 CLI 부분을 적용함.  

npx postcss index.css --use autoprefixer -d applyAutoprefixerDir/  

현재 dir에서
package.json 파일의

  "browserslist": [
    "chrome >= 8"
  ]

가 autoprefixer를 반영할 웹 브라우저 기준이 됨.
즉, 위에 npx CLI를 실행하면,
크롬 8버전 이상에서 CSS가 적용될 수 있게끔, prefixer를 자동으로 추가해준다.  

---  

<h3> Babel적용 </h3>  
npx babel index.js --out-file chrome8(SE5).js  

해당 CLI를 사용해서 index.js 파일을 chrome8 버전에서 동작할 수 있게끔
만들어줌.

babel.config.json의 내용을 바탕으로, chrome 버전을 설정한다.

--- 
<h3> RollUp 적용 </h3>  

npx rollup -c rollup.config.mjs
를 사용해서, mjs 파일에 나와있는 설정을 바탕으로
난독화(변수 이름 변경)/압축(공백 등등 제거)/번들링(파일 전체를 하나의 함수로 묶음) 진행