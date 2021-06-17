// src\set-public-path.ts
import { setPublicPath } from 'systemjs-webpack-interop';

if ((window as any).singleSpaNavigate) {
  setPublicPath('@react-mf/test', 2);
}
