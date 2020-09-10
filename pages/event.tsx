/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Button,
} from "@material-ui/core";
import Template from "@/components/Template/SiteTemplate";
import PaperTitle from "@/components/Atoms/PaperTitle";
import PaperSection from "@/components/Atoms/PaperSection";
import PaperBody from "@/components/Atoms/PaperBody";

const StyledAvatar = styled(Avatar)`
  width: 100% !important;
  max-width: 300px;
  height: 100% !important;
  border-radius: 0 !important;
`;

const Page: React.FC = () => {
  return (
    <Template>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper>
            <PaperTitle>現地イベント</PaperTitle>
            <PaperSection>色紙大募集！</PaperSection>
            <PaperBody>
              今回は全国の総理の皆さんから色紙を募集します！
              <br />
              会場を政霊たちのイラストで華やかに飾りましょう！
              <br />
              応募条件は下記画像をご確認ください。
              <br />
              <Button
                href="/assets/img/event/description.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledAvatar src="/assets/img/event/description.png" />
              </Button>
              <br />
              ・色紙の大きさは自由
              <br />
              ・応募枚数の制限なし
              <br />
              ・モノクロ、カラーいずれもOK
              <br />
              ・年齢制限イラストはNG
              <br />
              ・会場に来られなくても応募可能！
              <br />
              ・色紙はイベント中に一定時間飾った後、参加者の皆さんに来場プレゼントとしてお渡しします
              <br />
              <br />
              ・会場に来られない方は、下記の送り先にお送りください！
              <br />
              （運送業者はヤマト運輸のみ受付となります。ご了承ください）
              <br />
              <Button
                href="/assets/img/event/address.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledAvatar src="/assets/img/event/address.jpg" />
              </Button>
              <br />
              <br />
              【受付期間：9月16日（水）～9月20日（日）】
            </PaperBody>
            <PaperSection>会場限定グッズくじ実施！</PaperSection>
            <PaperBody>
              オンリーイベント記念くじ&nbsp;&nbsp;1回600円
              <br />
              過去のメインビジュアルを使用したタペストリーや、デフォルメキャラクターのアクリルスタンドなどを、ハズレなしくじで入手するチャンス！
              <br />
              <Button
                href="/assets/img/event/lottery.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledAvatar src="/assets/img/event/lottery.png" />
              </Button>
              <br />
              <br />
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width={160}>A賞</TableCell>
                    <TableCell>
                      B2サイズタペストリー ver.ソクバイ海Ⅲメインビジュアル
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>B賞</TableCell>
                    <TableCell>
                      B2サイズタペストリー ver.ソクバイ海Ⅱメインビジュアル
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>C賞</TableCell>
                    <TableCell>
                      B2サイズタペストリー ver.ソクバイ海メインビジュアル
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>D賞</TableCell>
                    <TableCell>アクリルスタンド 全3種から選べます</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>E賞</TableCell>
                    <TableCell>ラバーキーホルダー 全3種から選べます</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>F賞</TableCell>
                    <TableCell>クリアファイル 全3種から選べます</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>G賞</TableCell>
                    <TableCell>缶バッジセット 全4種から選べます</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ラストワン賞</TableCell>
                    <TableCell>
                      アクリルクロック
                      <br />
                      大迫力(約15cm*20cm)の卓上アクリルクロックです！
                      <br />
                      最後のくじを引くと必ず貰えます！
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br />
              ※一度に引けるのは2回まで
              <br />
              ※並び直して引くのは可能です
            </PaperBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
