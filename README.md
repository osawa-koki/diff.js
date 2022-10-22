# 差分表示ツール

Googleが開発している[DiffMatchPatch](https://github.com/google/diff-match-patch/tree/master/javascript)を使用してブラウザ上で簡単に差分を表示します。

## 環境構築 (クローン時)

```shell
# 必要なパッケージのインストール
yarn install

# 簡易サーバ立ち上げ
http-server -p 8000 -o
```

## 環境構築 (構築時)

あくまでも自分がどのように環境を構築したかのメモで、クローン時に実行する必要はありません。

```shell
yarn init

yarn add typescript
npx tsc --init

yarn add tslint
npx tslint --init
```
