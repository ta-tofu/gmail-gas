/**
 * Gmailのメールを取得し、スプレッドシートに書き込むクラス
 * @param conditions Gmailの検索条件
 * @param sheetName スプレッドシートのシート名
 * @param labelName Gmailのラベル名
 */
class GmailData {
    date: GoogleAppsScript.Base.Date;
    sender: string;
    subject: string;
    body: string;
  
    constructor(date: GoogleAppsScript.Base.Date, sender: string, subject: string, body: string) {
      this.date = date;
      this.sender = sender;
      this.subject = subject;
      this.body = body;
    }
}

/**
 * Gmailのメールを取得し、スプレッドシートに書き込むクラス
 * @param conditions Gmailの検索条件
 * @param sheetName スプレッドシートのシート名
 * @param labelName Gmailのラベル名
 * @return なし
 */
export class GmailUtility {
    /**
     * Gmailのメールを取得し、スプレッドシートに書き込むメソッド
     * @param conditions Gmailの検索条件
     * @param sheetName スプレッドシートのシート名
     * @param labelName Gmailのラベル名
     * @return なし
     */
    execute(conditions: string, sheetName: string, labelName: string) {
        const threads = this.getGmail(conditions);
        if (threads.length === 0) return;
        
        threads.forEach((thread) => {
            this.addLabelToThread(thread, labelName);
            thread.getMessages().forEach((message) => {
                this.appendDataToSheet(this.extractGmailData(message), sheetName);
            });
        });
        return;
    }

    /**
     * Gmailのメールを取得するメソッド
     * @param conditions Gmailの検索条件
     * @return Gmailのメール
     */
    getGmail(conditions: string): GoogleAppsScript.Gmail.GmailThread[] {
        const thread = GmailApp.search(conditions);
        return thread;
    }

    /**
     * Gmailのメールから必要なデータを抽出するメソッド
     * @param message Gmailのメール
     * @return Gmailのメールから抽出したデータ
     */
    extractGmailData(message: GoogleAppsScript.Gmail.GmailMessage): GmailData {
        const result: GmailData[] = [];
        
        const date = message.getDate();
        const sender = message.getFrom();
        const subject = message.getSubject();
        const body = message.getPlainBody();

        const gmailData = new GmailData(date, sender, subject, body);

        return gmailData;
    }

    /**
     * Gmailのメールにラベルを付与するメソッド
     * @param thread Gmailのメール
     * @param labelName Gmailのラベル名
     * @return なし
     */
    addLabelToThread(thread: GoogleAppsScript.Gmail.GmailThread, labelName: string) {
        const label = GmailApp.getUserLabelByName(labelName);
        if (label == null) return;
        label.addToThread(thread);
        return;
    }

    /**
     * スプレッドシートにデータを書き込むメソッド
     * @param data スプレッドシートに書き込むデータ
     * @param sheetName スプレッドシートのシート名
     * @return なし
     */
    appendDataToSheet(data: GmailData, sheetName: string) {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
        if (sheet == null) return;
        sheet.appendRow([data.date, data.sender, data.subject, data.body]);
        return;
    }
}
