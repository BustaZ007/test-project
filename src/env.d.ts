/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly IS_PUBLIC_VERSION: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
