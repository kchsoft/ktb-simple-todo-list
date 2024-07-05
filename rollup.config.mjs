import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: {
    main : './index.js',
    }, // 번들링할 진입 파일 경로
  output: {
    // file: 'rollupPractice/bundle.js', // 번들링 결과 파일 경로
    dir: 'rollupPractice',
    format: 'iife', // 번들링 형식 (여기서는 Immediately-invoked Function Expression)
    sourcemap: true
  },
  plugins: [
    nodeResolve(), // node_modules에서 모듈을 불러올 수 있도록 도와줌
    commonjs(), // CommonJS 모듈을 ES6로 변환하여 Rollup이 처리할 수 있도록 함
    terser({
      compress: {
        // 압축 설정 (불필요한 코드 제거 등)
        drop_console: true, // 콘솔 로그 제거
      },
      mangle: {
        // 난독화 설정 (변수 이름 변경 등)
        toplevel: true,
      },
    })
  ]
};

