# インターンシップタスクサイト

## 環境構築手順

1. git clone

    任意のディレクトリで以下のコマンドを実行

    ```bash
    git clone https://github.com/logicalAnd-Inc/internship_js.git
    ```

2. nodeのインストール

    **Mac**

    nodebrewのインストール

    ```bash
    brew install nodebrew
    nodebrew setup
    ```

    nodebrewのPathを追加
    ```bash
    echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
    source ~/.zshrc
    ```

    インストールできるNodeのバージョン確認
    ```bash
    node ls-remote
    ```

    バージョンを指定してインストール
    （コマンドにはリポジトリ作成当時の実行バージョンを記載）
    ```bash
    nodebrew install v18.1.0
    ```

    インストール確認
    ```bash
    nodebrew ls
    ```

    バージョン変更方法
    ```bash
    nodebrew use v18.1.0
    ```

    npmのインストール
    ```bash
    npm install -g npm
    ```

    nodebrewとnpmのアンインストール
    ```bash
    brew ls
    brew uninstall --force nodebrew
    npm ls -g node
    npm uninstall -g npm
    ```

    3. パッケージのインストール
    ```bash
    npm install
    ```

## 実行手順
1. cloneしたディレクトリに移動
    ```bash
    cd 任意のディレクトリ/internship_js
    ```

2. ローカルサーバー実行
    ```bash
    npm run start
    ```

3. 表示されたURLをブラウザで表示
    ```bash
    open http://localhost:3000/top/
    ```