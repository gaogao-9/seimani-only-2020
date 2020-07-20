/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Link from "next/link";
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
            <PaperTitle>感染症対策ページ</PaperTitle>
            <PaperSection>はじめに</PaperSection>
            <PaperBody>
              本イベントでは、会場の所在地である東京都が公表する『東京都感染拡大防止ガイドライン』に則り、感染症の拡大防止に努めるものとします。
              <br />
              <br />
              東京都感染拡大防止ガイドブック&nbsp;イベント編 (PDF)
              <br />
              <a
                href="https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/008/459/0625-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/008/459/0625-27.pdf
              </a>
              <br />
              <br />
              東京都感染拡大防止チェックシート&nbsp;イベント編 (PDF)
              <br />
              <a
                href="https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/008/429/24.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/008/429/24.pdf
              </a>
              <br />
              <br />
              以下は、現時点で主催より参加者の皆さんにお願いさせていただくと想定される対策の一例です。
            </PaperBody>
            <PaperSection>来場前</PaperSection>
            <PaperBody>
              ・当日早朝に検温（体温チェック）を必ず行ってください。高熱が出ている場合は、無理に参加をせず静養に努めてください。
              <br />・
              <a
                href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                接触確認アプリ（COCOA）
              </a>
              のインストールを推奨します。
              <br />
              ・来場前に連絡先などの情報登録をお願いする予定です。万が一の場合、主催から保健所など公的機関に提供するために使用しますので、ご協力をお願いいたします。
            </PaperBody>
            <PaperSection>来場後</PaperSection>
            <PaperBody>
              ・入場時の検温にご協力ください。
              <br />
              ・会場内ではマスクを必ず着用してください。マスク未着用の場合、参加をお断りすることがあります。
              <br />
              ・マスクを外した状態での会話はご遠慮ください。
              <br />
              ・大声での発声などはご遠慮ください。
              <br />
              ・飲食は複数人で同時に行わないよう、ご協力をお願いいたします。また、会話しながらの食事はご遠慮ください。
              <br />
              ・手洗いや手指消毒を定期的に行ってください。
              <br />
              ・会場内で体調を崩した場合は、速やかに主催スタッフに報告してください。
              <br />
              ・鼻水や唾液などがついたゴミはビニール袋に入れ、密閉して廃棄してください。
            </PaperBody>
            <PaperSection>サークル参加者向け</PaperSection>
            <PaperBody>
              ・間隔を空けた行列の整理にご協力ください。
              <br />
              ・飛沫防止シートの導入を推奨します。飛沫防止シートの導入が難しい場合、主催まで一度ご相談ください。
              <br />
              ・キャッシュレス決済、個人間送金アプリなどの導入を推奨します。本名ではなくニックネームでの決済・送金が可能なアプリもありますので、ご検討ください。
            </PaperBody>
            <PaperSection>コスプレ参加者向け</PaperSection>
            <PaperBody>
              ・今回のコスプレ参加は、混雑を避けるために事前登録制です。
              <br />
              ・受付期間内であっても上限人数に達し次第、事前登録は終了いたします。
              <br />
              ・更衣室の入室人数を制限いたします。そのため、順番でお待ちいただく場合があります。
              <br />
              ・更衣室の使用時間はお1人様1回につき40分までとなりますよう、ご協力をお願い致します。
              <br />
              ・更衣室内では対人距離2mを確保し、会話などはお控えください。
              <br />
              ・更衣室内・会場内ともに、やむを得ない場合を除き極力マスクの着用をお願い致します。
              <br />
              ・マスクを外しての撮影は指定された撮影スペースのみで行い、マスクを外した被写体の方は喋らないようにご注意ください。
              <br />
              ・撮影時にも対人距離2mを確保するよう、ご協力お願い致します。
              <br />
              <br />
              その他注意点はコスプレ参加者向けページをご確認ください。
              <br />
              <Link href="/cosplay">
                <a>https://festia.moe/cosplay</a>
              </Link>
            </PaperBody>
            <PaperSection>さいごに</PaperSection>
            <PaperBody>
              これらのお願いは情勢の変化やガイドブックの更新が発生した場合などに随時変更されますので、あらかじめご了承ください。
              <br />
              変更があり次第、Webページやtwitterなどで告知いたします。
            </PaperBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
