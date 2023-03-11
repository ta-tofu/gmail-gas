# プログラム概要
- 自身の Gmail からメールの情報を取得して、Google Sheets に出力する GAS のプログラム
- 取得したメールには、ラベルが付与されます。
- Gmail から取得する情報は「メール受信日時, From, 件名, 本文」の 4 つです。

- 下記に、ライブラリを実行する方法についてのサンプルコードを記載しておきます。

```TypeScript
import { GmailUtility } from './GmailUtility';

function main() {
    // GmailUtilityクラスのインスタンスを生成
    const utility = new GmailUtility();
    // Gmailの検索条件
    const conditions = 'from:test@gmail.com';
    // スプレッドシートのシート名
    const sheet_name = 'sheet_name';
    // Gmailのラベル名
    const label_name = 'label_name';
    // GmailUtilityクラスのexecuteメソッドを実行
    utility.execute(conditions, sheet_name, label_name);
}

main();
```

# 留意点
1. 出力先に設定するシートは、予め作成しておいてください<span style="color: #ff6347;">(修正予定)</span>。
2. 付与するラベルは、予め作成しておいてください<span style="color: #ff6347;">(修正予定)</span>。

# 動作確認した環境
- clasp というツールで GAS にプッシュした後、GAS で正常に動作した事を確認しています。
- clasp の導入については、各自 Web で検索してみてください。
- clasp で GAS にプッシュする際、TypeScript のコードが JavaScript にトランスパイルされるみたいです。
- ローカル環境では確認してないです。