//作業登録画面
'use client';
import { useState } from "react";

// 新規と編集でコンポーネント名を分ける
export default function NewTaskPage() {

    //予定日
    const [scheduledDate, setScheduledDate] = useState("2026-11-26");
    //完了日
    const [completedDate, setCompletedDate] = useState("");

    return(
        <main>
            <h1>作業を登録する</h1>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-full">
                    <label>
                        作業名 * <input type="text" name="title" placeholder="例：発根を確認する" className="border block mt-1 w-full" required />
                    </label>
                </div>
                <div>
                    <label>
                        品目 {/* TODO 選択肢はDBから取る */}
                        <select name="plandId" className="border block mt-1 w-full">
                            <option value="">選択してください</option>
                            <option value="1">ラズベリー</option>
                        </select>
                    </label>
                </div>

                <div>
                    <div>
                        <label>
                            予定日
                            <input
                            type="date"
                            value={scheduledDate}
                            className="border block mt-1 w-full"
                            min="2020-01-01"
                            max="2030-12-31"
                            onChange={(e) => setScheduledDate(e.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <div>
                    <label>
                        <input type="checkbox" name="completed" className="border mt-1"></input>完了した作業として記録する
                    </label>
                </div>
                <div>
                    <div>
                        <label>
                            完了日
                            <input
                            type="date"
                            value={completedDate}
                            className="border block mt-1 w-full"
                            min="2020-01-01"
                            max="2030-12-31"
                            onChange={(e) => setCompletedDate(e.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <div className="col-span-full">
                    <label>
                        メモ
                        <textarea name="memo" placeholder="実施した内容や、確認したいことを記録します。" className="border block mt-1 w-full"></textarea>
                    </label>
                </div>
            </form>
        </main>
    );
}