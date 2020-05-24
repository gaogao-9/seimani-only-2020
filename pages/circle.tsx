/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Template from "@/components/Template/SiteTemplate";
import PaperTitle from "@/components/Atoms/PaperTitle";
import PaperSection from "@/components/Atoms/PaperSection";
import PaperBody from "@/components/Atoms/PaperBody";

const Page: React.FC = () => {
  return (
    <Template>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper>
            <PaperTitle>サークル参加をする方へ</PaperTitle>
            <PaperSection>はじめに</PaperSection>
            <PaperBody>
              当イベントにて二次創作作品の頒布や展示を希望される総理には、サークル参加の事前申込をお願いしております。
              <br />
              下記の諸注意をお読みいただいた上で、所定の方法にてお申し込みください。
              <br />
              なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
            </PaperBody>
            <PaperSection>感染症対策とイベント開催について</PaperSection>
            <PaperBody>
              昨今の感染症に関する世情を鑑み、9月21日に開催予定の本イベントにおいては感染症の拡大を防止する措置を講じることとします。
              <br />
              主催である戦挙管理委員会は、9月21日時点で可能な限りの措置を講じます。
              <br />
              サークル参加総理の皆さんにも様々な形で感染拡大防止にご協力いただきたく存じますので、何卒ご理解ください。
              <br />
              なお、緊急事態宣言が発表された場合などはイベント開催を取りやめる場合がありますので、あらかじめご了承ください。開催取りやめとなった場合は参加費の返金を行います。
            </PaperBody>
            <PaperSection>イベント名</PaperSection>
            <PaperBody>
              政剣マニフェスティアオンリー同人誌即売会
              <br />
              緊急交流イベント「漕ぎ出せ！ソクバイ海Ⅲ」
              <br />
              <a
                href="https://twitter.com/search?q=%23%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%BD%E3%82%A6%E3%83%AA%E3%83%BC2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                #アイムソウリー2020
              </a>
            </PaperBody>
            <PaperSection>日程・会場</PaperSection>
            <PaperBody>
              2020年9月21日（敬老の日・月曜日
              <br />
              緊急交流イベント「漕ぎ出せ！ソクバイ海Ⅲ」
              <br />
              ハイライフプラザいたばし
            </PaperBody>
            <PaperSection>開催当日のスケジュール（予定）</PaperSection>
            <PaperBody>
              09:00〜 会場設営
              <br />
              10:00〜 サークル入場開始
              <br />
              12:00 【即売会開始】
              <br />
              14:30 【即売会終了】宅急便受付開始
              <br />
              15:30 【アフターイベント開始】
              <br />
              17:30 【アフターイベント終了】
              <br />
              〜18:00 会場撤収
              <br />
              ※スケジュールは変更になることがあります
              <br />
              ※コスプレについては現在検討中です
            </PaperBody>
            <PaperSection>サークル参加資格</PaperSection>
            <PaperBody>
              ☆「政剣マニフェスティア」の二次創作作品を1点以上頒布または展示できること
              <br />
              ☆ 開催当日までメールで《確実に》連絡可能であること
              <br />
              ☆&quot;戦挙権&quot;を持っている（「政剣マニフェスティア」のプレイヤーである）こと
            </PaperBody>
            <PaperSection>サークル参加費用</PaperSection>
            <PaperBody>
              1スペース 3500円
              <br />
              [含まれるもの]
              <br />
              ・長机半分（幅900mm*奥行600mm）
              <br />
              ・イス1脚
              <br />
              ・入場証2枚
              <br />
              ・パンフレット引換券1枚
              <br />
              ※追加イス 500円/1脚（追加は最大2脚まで）
              <br />
              ※追加入場証 500円/1枚（追加は最大1枚まで）
              <br />
              <br />
              ※複数スペース申込・合体申込可能
              <br />
              例）2スペース申込 7000円
              <br />
              [含まれるもの]
              <br />
              ・長机1つ分（幅1800mm*奥行600mm）
              <br />
              ・イス2脚
              <br />
              ・入場証4枚
              <br />
              ・パンフレット引換券2枚
              <br />
              ※追加イス 500円/1脚（追加は最大4脚まで）
              <br />
              ※追加入場証 500円/1枚（追加は最大2枚まで）
              <br />
              <br />
              ※参加費支払方法の詳細は、申込締切後にメールにてご連絡いたします。
            </PaperBody>
            <PaperSection>申込期限</PaperSection>
            <PaperBody>
              2020年7月20日（海の日・月曜日） 23:59まで
              <br />
              ※申込後のキャンセルはお受けできません
            </PaperBody>
            <PaperSection>参加申込方法</PaperSection>
            <PaperBody>
              申込受付期間中に「オンライン申し込みフォーム」からお申し込み下さい。
            </PaperBody>
            <PaperSection>サークルカットについて</PaperSection>
            <PaperBody>
              psd形式のテンプレートを用意しております。ご活用ください。
              <br />
              作成上の注意事項は、サークルカットのテンプレート内にある「カット作成の注意点」に記載しております。必ずお読みください。
              <br />
              ※アナログ原稿およびオフラインでのサークルカット受付は行いません。
              <br />
              <br />
              <a href="/assets/bin/cut_win.zip">
                サークルカットテンプレート(ZIP形式)
              </a>
            </PaperBody>
            <PaperSection>宅配便による搬入・搬出</PaperSection>
            <PaperBody>
              ヤマト運輸の宅急便をご利用いただけます。
              <br />
              伝票の記載例など、注意点は後日改めてご案内します。
            </PaperBody>
            <PaperSection>その他</PaperSection>
            <PaperBody>
              ・イベント当日、戦挙管理委員（スタッフ）が頒布物の確認を行うことがあります。ご協力をお願いいたします。
              <br />
              ・頒布印刷物について、奥付または奥付に準ずる欄に著者名やサークル名の表記がない場合、頒布をお断りすることがあります。
              <br />
              ・申込フォームの「成人向け作品」欄にて「無」を選択されたサークル様は、形態を問わず成人向け作品の頒布および展示が禁止となります。変更がある場合は、事前に戦挙管理委員会までご連絡ください。
              <br />
              ・壁、柱、窓、扉などにポスターなどを貼り付ける行為は厳禁です。あらかじめポスタースタンドなどの準備をお願いいたします。
              <br />
              ・会場内電源の使用には、戦挙管理委員会に許可を得てください。無許可で使用を行なっていた場合、使用中止をお願いする場合がございます。
              <br />
              ・駐車場のご用意はできません。搬入・搬出時に車両を使用する場合は、事前に戦挙管理委員会までご相談ください。
              <br />
              ・飲食は可能ですが、会場を汚されないようにお願いいたします。
              <br />
              ・ゴミの取り扱いについては、後日告知いたします。なお、会場内外でのポイ捨ては厳禁です。
              <br />
              ・施設内は全面禁煙です。喫煙は駐輪場奥の喫煙コーナーでお願いいたします。
              <br />
              ・会場内非常口の前には荷物を置かないようにお願いいたします。
              <br />
              ・その他、イベント当日に会場にてお困りごとや不明点がございましたら、最寄りの戦挙管理委員までお声がけください。
            </PaperBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
