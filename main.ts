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