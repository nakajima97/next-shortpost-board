# 要件定義書：ショート投稿掲示板アプリ

## 1. プロジェクト概要

### 1.1 システム名
ショート投稿掲示板アプリ（Next.js Short Post Board）

### 1.2 システム概要
短文投稿型の掲示板アプリケーション。ユーザーが短いメッセージを投稿し、時系列で閲覧できるWebアプリ。

## 2. 技術要件

### 2.1 開発環境
- **フレームワーク**: Next.js 15 + App Router
- **言語**: TypeScript
- **パッケージ管理**: pnpm
- **テスト**: Vitest + jsdom
- **コード品質**: Biome
- **UI開発**: Storybook
- **DB**: SQLite
- **UIライブラリ**: shadcn/ui + tailwind css
- **データフェッチ**: SWR
- **スキーマ管理**: zod

## 3. 機能要件

### 3.1 基本機能
1. **投稿機能**
   - 短文テキストの投稿
   - ハンドルネーム付きで投稿
   - 投稿日時の自動記録

2. **投稿閲覧機能**
   - 投稿一覧の時系列表示（新しい順）
   - 投稿詳細の個別表示

3. **UI/UX機能**
   - モーダル形式の投稿作成
   - Skeleton UIによるローディング表示
   - エラーハンドリング（404、サーバーエラー）

4. **簡易認証機能（UUIDベース）**
   - 初回アクセス時のUUID生成・Cookie設定
   - 投稿とUUIDの紐付け
   - 投稿者のみ削除可能な権限制御

5. **投稿削除機能**
   - 投稿詳細画面での条件付き削除ボタン表示
   - 投稿者UUIDとCookie UUIDの照合による権限確認
   - Server Functionsによる安全な削除処理

### 3.2 機能制限
- コメント機能なし（短文投稿型のため）
- 本格的なユーザー管理機能なし（UUID簡易認証のみ）

## 4. 非機能要件
- デプロイを考えていないため考慮しない

## 5. 開発・技術仕様
### 5.1 フロントエンド
- フレームワーク：Next.js App Router / React
- UIライブラリ：shadcn/ui / Tailwind CSS
- 状態管理：Context API
- テスト：vitest、Storybook

### 5.2 バックエンド
- フレームワーク：Next.JS Route Handlers
- データベース：SQLite

### 5.3 その他
- ER図、画面遷移図の作成：Mermaid
- バージョン管理：Git
- 開発環境：ローカルPC上で完結

## 6. UUID簡易認証の実装仕様

### 6.1 Middleware処理
**初回アクセス時**
- Session Cookieから`user_uuid`を確認
- UUIDが存在しない場合、新規UUID生成
- Session Cookie（`httpOnly`, `secure`, `sameSite`）でUUIDをブラウザに保存
- ブラウザ閉じるまで同じUUIDを継続利用
- 永続化なし（ブラウザ再起動時は新規UUID生成）

### 6.2 投稿機能との連携
**投稿作成時**
- 投稿データにSession CookieのUUIDを紐付けて保存
- SQLiteデータベースに投稿者UUIDとして記録
- Server Functionsで投稿処理を実行

### 6.3 削除権限制御
**詳細画面での削除機能**
- 投稿のUUIDとSession CookieのUUIDを比較
- 一致する場合のみ削除ボタンを表示（Client Component）
- Server Functionsで権限確認後に削除実行
- 不正アクセス時のエラーハンドリング

### 6.4 学習ポイント
1. **Middleware操作**
   - Next.js MiddlewareでのSession Cookie読み書き
   - リクエスト/レスポンス処理の理解

2. **Session Cookie管理**
   - `httpOnly`, `secure`, `sameSite`属性の設定
   - セキュアなCookie実装（XSS/CSRF対策）
   - ブラウザセッション限定の一時的認証

3. **Server Functions**
   - サーバーサイドでのアクセス制御実装
   - セキュリティを考慮したデータ操作

4. **Client Component**
   - 条件付きUI表示の実装
   - ユーザー権限に基づく画面制御

5. **簡易認証フロー**
   - ログイン機能不要な認証の仕組み
   - Session Cookie/UUIDベースの一時セッション管理