# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

### 開発サーバー
```bash
pnpm dev  # Next.js開発サーバーをTurbopackで起動
```

### ビルドと本番
```bash
pnpm build  # プロダクションビルド
pnpm start  # プロダクションサーバー起動
```

### テスト
```bash
pnpm test           # Vitestでテスト実行（テストファイルがない場合はパス）
pnpm test:watch     # Vitestをwatchモードで実行
pnpm test:coverage  # カバレッジ付きでテスト実行
pnpm tc     # TypeScript型チェック
```

### コード品質
```bash
pnpm bc        # Biomeでチェック＆自動修正
pnpm format    # Biomeでフォーマット
pnpm lint      # Biomeでリント
```

### Storybook
```bash
pnpm storybook        # Storybookサーバー起動（ポート6006）
pnpm build-storybook  # Storybookビルド
```

## アーキテクチャ

### プロジェクト構成
- **Next.js 15** + **App Router** を使用
- **pnpm** でパッケージ管理
- **Biome** でlinting/formatting（ESLintの代替）
- **Vitest** + **jsdom** でテスト実行
- **Storybook** でコンポーネント開発
- **TypeScript** で型安全性を確保

### 設計方針
- コンポーネントをPresentational/Containerパターンで分離
- 機能ごとに`features/`ディレクトリで分割して関心の分離
- `@/*` エイリアスで`src/`ディレクトリからのインポート
- React 19を使用（pnpm.overridesで固定）
- Biomeのフォーマット設定：スペース2つインデント、シングルクォート

### 重要な設定
- TypeScriptは5.5未満に制限
- Biomeが自動的にimportを整理
- Vitestでjsdom環境でのテスト実行
- StorybookでコンポーネントのUI開発・テスト

## GitHub操作
- GitHub関連の操作（PR作成、Issue管理等）は`gh`コマンドではなくMCPツールを使用する
- 例：`mcp__github-server__create_pull_request`、`mcp__github-server__list_issues`等