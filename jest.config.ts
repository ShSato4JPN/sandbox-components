import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
  // カバレッジ（テストがどれだけコードを網羅しているか）を収集する
  //collectCoverage: true,

  // カバレッジレポートの出力先ディレクトリ
  //coverageDirectory: "coverage",

  // テスト環境のセットアップ
  //setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // 各テスト前にモックやスパイの状態をリセットする
  //clearMocks: true,

  // V8エンジンのカバレッジ機能を使う（高速・推奨）
  coverageProvider: "v8",

  // テストしないパスを指定
  //testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],

  // ブラウザ環境をエミュレートするjsdomをテスト環境に使う
  testEnvironment: "jsdom",

  // カバレッジ情報を収集するファイル群を示すグロブパターンの配列。
  // 指定したグロブパターンにマッチするファイルがある場合は、
  //  そのファイルに対するテストが存在せずテストスイートでそのファイルが必須でなくてもカバレッジ情報が収集されます。
  // collectCoverageFrom: [
  //   "**/*.{ts,tsx}",
  //   "!**/*.d.ts",
  //   "!**/node_modules/**",
  //   "!<rootDir>/.next/**",
  //   "!<rootDir>/*.config.js",
  //   "!<rootDir>/coverage/**",
  // ],

  // moduleNameMapper を設定しない場合、Jestはimport文やrequireで指定されたパスをそのまま解決しようとします。
  // その結果、以下のような問題が発生することがあります：
  // @/components/Button などのパスエイリアスを使っている場合、Jestがそのパスを解決できず、モジュールが見つからないエラーになる
  // CSSや画像ファイル（例: import './style.css' や import logo from './logo.svg'）をimportしている場合、Jestがそれらを理解できずエラーになる
  // テスト用に特定のモジュールをモック化したい場合に、差し替えができない
  // つまり、開発時（webpackやtsconfigのエイリアス解決）と同じようにテスト環境でもimportを解決したい場合は、moduleNameMapper の設定が必要です。
  // 設定しなくても動くケースもありますが、エイリアスや非JSファイルのimportがある場合は必須です。
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/src/$1",
  // },

  // この transform の設定は、Jestがテスト実行時に .js, .jsx, .ts, .tsx ファイルを
  // 「どのようにトランスパイル（変換）するか」を指定しています。
  // transform: {
  //   // Use babel-jest to transpile tests with the next/babel preset
  //   // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  //   "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  // },

  // Jest がキャッシュされた依存情報を保持するディレクトリ(テストの高速化)
  //cacheDirectory: "node_modules/.cache/jest",
};

export default createJestConfig(config);
