/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Link from "next/link";
import { Grid, Paper } from "@material-ui/core";
import Template from "@/components/Template/SiteTemplate";
import PaperTitle from "@/components/Atoms/PaperTitle";
import PaperSection from "@/components/Atoms/PaperSection";
import PaperBody from "@/components/Atoms/PaperBody";
import PaperSpacer from "@/components/Atoms/PaperSpacer";

const Page: React.FC = () => {
  return (
    <Template>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper>
            <PaperTitle>エアイベント</PaperTitle>
            <PaperSection>はじめに</PaperSection>
            <PaperBody>
              政剣マニフェスティアオンリーイベント「漕ぎ出せ！ソクバイ海Ⅲ
              #アイムソウリー2020」は、全世界の総理の皆さんにオンライン上でも楽しんでいただくため「エアイベント」と題したイベントを開催します！
            </PaperBody>
            <PaperSection>イベント名</PaperSection>
            <PaperBody>
              エア「漕ぎ出せ！ソクバイ海Ⅲ」#アイムソウリー2020
            </PaperBody>
            <PaperSection>日程・会場</PaperSection>
            <PaperBody>
              2020年9月21日（敬老の日・月曜日）
              <br />
              12:00〜23:59（予定）
              <br />
              会場URLは決定次第お知らせします
            </PaperBody>
            <PaperSection>
              エア漕ぎ出せ！ソクバイ海Ⅲ #アイムソウリー2020 とは
            </PaperSection>
            <PaperBody>
              ・オンライン上で
              <br />
              ・特設のWebページ（エアイベント会場）で
              <br />
              ・政剣マニフェスティアの二次創作作品を頒布/購入できるイベントです！
              <br />
              <br />
              エアイベントのみの参加も大歓迎です！
              <br />
              同日開催のリアル会場のイベントとあわせての参加もできます！
            </PaperBody>
            <PaperSection>参加方法</PaperSection>
            <PaperBody>
              ・一般参加
              <br />
              &nbsp;&nbsp;→事前登録は不要です！開催当日に特設Webページにアクセスすることで参加できます！
              <br />
              ・サークル参加
              <br />
              &nbsp;&nbsp;→事前登録が必要です（詳しくはページ下部「
              <a href="#for_circle">サークル様向け情報</a>」をご確認ください）
            </PaperBody>
            <PaperSection>一般参加総理の皆さんのメリット</PaperSection>
            <PaperBody>
              ・オンライン上で参加できます！
              <br />
              &nbsp;&nbsp;（東京・板橋の会場に行けなくても大丈夫！）
              <br />
              ・全国、全世界、どこからでも参加可能！
              <br />
              &nbsp;&nbsp;（日本国外の総理の皆さんは
              <a
                href="https://www.melonbooks.co.jp/special/b/0/service/tenso/"
                target="_blank"
                rel="noopener noreferrer"
              >
                海外転送サービス
              </a>
              などをご利用ください）
              <br />
              ・会員登録は不要です！
              <br />
              &nbsp;&nbsp;（決済時に送り先の情報を入力いただきます）
              <br />
              ・複数のサークル様の頒布物がまとめて届きます！
              <br />
              ・サークル様との個人情報のやりとりも不要です！
              <br />
              &nbsp;&nbsp;（決済と頒布物の発送は株式会社メロンブックスが代行します）
            </PaperBody>
            <PaperSection>参加費</PaperSection>
            <PaperBody>・無料</PaperBody>
            <PaperSection>送料（税抜）</PaperSection>
            <PaperBody>
              ・メール便：270円
              <br />
              ・宅配便：600円
              <br />
              （離島・沖縄は+700円）
            </PaperBody>
            <PaperSection>注意事項</PaperSection>
            <PaperBody>
              ・決済は「クレジットカード決済のみ対応」です
              <br />
              &nbsp;&nbsp;・対応ブランドは「VISA」「MasterCard」「JCB」「AmericanExpress」の4種です
              <br />
              &nbsp;&nbsp;・各ブランドのプリペイドカード、デビットカードも利用可能です。あわせてご検討ください
            </PaperBody>
            <PaperSection>エアイベントに関するお問い合わせ先</PaperSection>
            <PaperBody>
              販売・発送に関して
              <br />
              メロンブックス『エアイベント事業部』カスタマーサポート
              <br />
              airevent-customersupport[at]melonbooks.co.jp
              <br />
              <br />
              イベントに関して
              <br />
              戦挙管理委員会
              <br />
              seimani.only[at]gmail.com
            </PaperBody>
          </Paper>
          <PaperSpacer />
          <Paper>
            <PaperTitle id="for_circle">サークル様向け情報</PaperTitle>
            <PaperSection>サークル参加総理の皆さんのメリット</PaperSection>
            <PaperBody>
              ・オンライン上で参加できます！
              <br />
              &nbsp;&nbsp;（全世界の総理に向けて頒布できます）
              <br />
              ・参加申し込みは9月16日（水）まで受付！
              <br />
              &nbsp;&nbsp;（ギリギリになってやっぱりサークル参加したい、もOK！）
              <br />
              &nbsp;&nbsp;（作品が出来上がってからの参加登録がおすすめ！）
              <br />
              ・新刊はもちろん、既刊も頒布可能！
              <br />
              &nbsp;&nbsp;（メロンブックス様にすでに委託している頒布物を移管することも可能です）
              <br />
              ・頒布物はメロンブックス様の倉庫から発送されます！
              <br />
              &nbsp;&nbsp;（自家通販と異なり、個別梱包の手間がかかりません）
              <br />
              ・購入者の皆さんとの個人情報のやりとりも不要です！
              <br />
              &nbsp;&nbsp;（決済と頒布物の発送は株式会社メロンブックスが代行します）
            </PaperBody>
            <PaperSection>参加費</PaperSection>
            <PaperBody>・無料</PaperBody>
            <PaperSection>手数料</PaperSection>
            <PaperBody>
              ・売上金額の10%
              <br />
              ・イベント後の在庫返送をご希望の場合、+1000円/1箱
              <br />
              &nbsp;&nbsp;※返送を希望されない場合、追加料金無料でメロンブックス様での委託販売が可能です
              <br />
              &nbsp;&nbsp;詳しくは、メロンブックス様提供のサークル参加説明詳細PDFをご確認ください
            </PaperBody>
            <PaperSection>エアイベント参加要件</PaperSection>
            <PaperBody>
              ☆
              「政剣マニフェスティア」の二次創作作品を新刊・既刊問わず1点以上頒布できること
              <br />
              ☆
              株式会社テクノードが定めた「二次創作についてのガイドライン」に沿った頒布物を用意できること
              <br />
              &nbsp;&nbsp;※二次創作についてのガイドライン（株式会社テクノード）
              <br />
              &nbsp;&nbsp;
              <a
                href="http://seimani.tekunodo.jp/faq.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://seimani.tekunodo.jp/faq.html
              </a>
              <br />
              ☆ 開催当日までメールで《確実に》連絡可能であること
              <br />☆
              &quot;戦挙権&quot;を持っていた（「政剣マニフェスティア」のプレイヤーであった）こと
            </PaperBody>
            <PaperSection>参加登録〆切</PaperSection>
            <PaperBody>9月16日（水）23:59</PaperBody>
            <PaperSection>参加手順とスケジュール</PaperSection>
            <PaperBody>
              ・9月16日（水）23:59まで
              <br />
              ①メロンブックス様へのサークル会員登録
              <br />
              ・エアイベントのシステム提供元であるメロンブックス様へのサークル会員登録が必要です
              <br />
              ・サークル会員登録は無料です
              <br />
              ②頒布作品の登録
              <br />
              ・詳しくは、メロンブックス様提供のサークル参加説明詳細PDFをご確認ください
              <br />
              &nbsp;&nbsp;※頒布作品の登録がされていない場合、エアイベントへの参加申込に進めません！
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;印刷所への入稿に合わせて作品登録しておくと入力漏れが少なくなります
              <br />
              &nbsp;&nbsp;※作品登録されていない頒布物は、エアイベントでの頒布ができません
              <br />
              ③エアイベント登録申込
              <br />
              ・サークルカットとサークルコメントはここで指定できます
              <br />
              &nbsp;&nbsp;（サークルカットのテンプレート）※リアル会場版のテンプレートと若干異なります。ご注意ください
              <br />
              ・頒布作品と頒布価格、納品数を指定してください
              <br />
              <br />
              ・9月17日（木）まで
              <br />
              ④エアイベント用在庫納品
              <br />
              ・以下の配送先にエアイベント用在庫を納品してください。
              <br />
              &nbsp;&nbsp;納品締切日：&nbsp;9月17日（木）
              <br />
              &nbsp;&nbsp;配送先名：&nbsp;株式会社メロンブックス『エアイベント受付センター』
              <br />
              &nbsp;&nbsp;配送先住所：
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;〒221-0036&nbsp;神奈川県横浜市神奈川区千若町3-1
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;ケイヒン配送(株)内&nbsp;新館7F&nbsp;エアイベント受付センター
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;TEL:&nbsp;045-444-1291
              <br />
              &nbsp;&nbsp;※配送先名に必ず「エアイベント受付センター」とご記入ください。
              <br />
              ・メロンブックス様への委託在庫から移管も可能です。詳しくはメロンブックス様提供のサークル参加説明詳細PDFをご確認ください
              <br />
              <br />
              ・9月21日（月）12:00〜23:59
              <br />
              ⑤エアイベント開催
              <br />
              ・特設Webサイトでのエアイベント開催です！
              <br />
              ・ハッシュタグ&nbsp;#アイムソウリー2020&nbsp;で盛り上げよう！
              <br />
              <br />
              ・9月27日（日）
              <br />
              ⑥在庫返送ご希望の場合、返送開始
              <br />
              <br />
              ・10月20日（火）
              <br />
              ⑦売上支払
              <br />
              ・ご指定の口座に売上金（掛率90%）が支払われます
              <br />
              ・振込手数料は以下の通りです
              <br />
              &nbsp;&nbsp;ゆうちょ銀行：無料
              <br />
              &nbsp;&nbsp;その他銀行：サークル様ご負担
            </PaperBody>
            <PaperSection>注意事項</PaperSection>
            <PaperBody>
              ・以下の場合、エアイベント参加登録後であっても参加を取り下げまたは停止させていただくことがございます
              <br />
              &nbsp;&nbsp;・本イベントのサークル参加要件を満たしていない場合
              <br />
              &nbsp;&nbsp;・株式会社メロンブックスのサークル取引規約、エアイベント取引規約にある禁止事項に違反する場合
              <br />
              ・作品の内容に問題があった場合、戦挙管理委員会および株式会社メロンブックスは一切の責任を負わないものとします
              <br />
              &nbsp;&nbsp;特に、株式会社テクノードの二次創作ガイドラインをよくお読みいただき、サークル参加総理ご自身の責任の元で作品作りをお願いいたします
              <br />
              ・エアイベント売上のお支払いについて、メロンブックス様の従来の機能を利用しているため、入金・支払報告書等はメロンブックス様より案内がございます
              <br />
              ・普段よりメロンブックス様と委託取引がある場合は、委託分支払と一緒に計上されます
              <br />
              ・返送対応・返送費の清算等も、メロンブックス様のサービス・システムを利用します。返送対応、費用請求はメロンブックス様からとなります
              <br />
              ・イベント終了後の在庫に関して、メロンブックス様預かりを選択した場合は委託取引となりますので、エアイベント後はメロンブックス様の通販ページでの販売となり、通常の委託掛率が適用されます
            </PaperBody>
            <PaperSection>
              エアイベント&nbsp;関連資料（メロンブックス様提供）
            </PaperSection>
            <PaperBody>
              エア漕ぎ出せ！ソクバイ海について（
              <a
                href="/assets/bin/AboutAirSokubaikai.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                AboutAirSokubaikai.pdf
              </a>
              ）
              <br />
              エア漕ぎ出せ！ソクバイ海サークル参加説明詳細（
              <a
                href="/assets/bin/ManualAirSokubaikai.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ManualAirSokubaikai.pdf
              </a>
              ）
            </PaperBody>
            <PaperSection>エアイベントに関するお問い合わせ先</PaperSection>
            <PaperBody>
              メロンブックス様&nbsp;&nbsp;エアイベント（サークル様向け）よくある質問
              <br />
              <a
                href="https://www.melonbooks.co.jp/help/tpl.php?pid=305"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.melonbooks.co.jp/help/tpl.php?pid=305
              </a>
              <br />
              <br />
              エアイベントのシステムに関して
              <br />
              メロンブックス『エアイベント事業部』サークルサポート
              <br />
              airevent-circlesupport[at]melonbooks.co.jp
              <br />
              <br />
              イベントに関して
              <br />
              戦挙管理委員会
              <br />
              seimani.only[at]gmail.com
            </PaperBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
