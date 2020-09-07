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
  Box,
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
  max-height: 300px;
  border-radius: 0 !important;
`;

const Page: React.FC = () => {
  return (
    <Template>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper>
            <PaperTitle>参加者全般</PaperTitle>
            <PaperSection>はじめに</PaperSection>
            <PaperBody>
              一般参加を予定される総理の皆さんは、下記の諸注意をお読みいただいた上でご参加ください。
              <br />
              なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
            </PaperBody>
            <PaperSection>感染症対策とイベント開催について</PaperSection>
            <PaperBody>
              昨今の感染症に関する世情を鑑み、9月21日に開催予定の本イベントにおいては感染症の拡大を防止する措置を講じることとします。
              <br />
              主催である戦挙管理委員会は、9月21日時点で可能な限りの措置を講じます。
              <br />
              一般参加総理の皆さんにも様々な形で感染拡大防止にご協力いただきたく存じますので、何卒ご理解ください。
              <br />
              詳細：感染症対策ページ
              <br />
              <Link href="/infection">
                <a>https://festia.moe/infection</a>
              </Link>
              <br />
              <br />
              なお、緊急事態宣言が発表された場合などはイベント開催を取りやめる場合がありますので、あらかじめご了承ください。
              <br />
              <br />
              また、リアルイベントの開催可否に関わらず、エアイベントが同日開催されます。そちらへの参加もあわせてご検討ください。
              <br />
              詳細：エアイベントのご案内
              <br />
              <Link href="/online_event">
                <a>https://festia.moe/online_event</a>
              </Link>
            </PaperBody>
            <PaperSection>イベントスケジュール</PaperSection>
            <PaperBody>
              <Box>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell width={80}>10:00</TableCell>
                      <TableCell>
                        サークル参加総理入場開始
                        <br />
                        【更衣室】開場
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>11:30</TableCell>
                      <TableCell>
                        コスプレ一般参加総理入場開始
                        <br />
                        一般参加総理向け整理券配布開始
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>12:00</TableCell>
                      <TableCell>【即売会】開始</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>15:00</TableCell>
                      <TableCell>
                        【即売会】終了
                        <br />
                        【宅急便】受付開始
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>16:00</TableCell>
                      <TableCell>【宅急便】受付終了</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>18:00</TableCell>
                      <TableCell>
                        【会場】完全撤収
                        <br />
                        【更衣室】閉鎖
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
              <br />
              ※スケジュールは変更になることがあります
            </PaperBody>
            <PaperSection>参加費</PaperSection>
            <PaperBody>
              即売会参加 500円（入場特典アイテム兼入場証をお渡しいたします）
              <br />
              お支払い方法として、現金の他に「pixiv&nbsp;pay」を導入いたします。お支払いの際にお申し付けください。
              <br />
              <a
                href="https://pay.pixiv.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pay.pixiv.net/
              </a>
            </PaperBody>
            <PaperSection>再入場方法</PaperSection>
            <PaperBody>
              イベント時間中は、会場入口の戦挙管理委員（スタッフ）に入場証をお見せください。
            </PaperBody>
            <PaperSection>事前登録と入場整理へのご協力のお願い</PaperSection>
            <PaperBody>
              今回のイベントでは、新型感染症の感染拡大防止を目的に、以下の対策を実施いたします。
              <br />
              1. 来場者情報の事前登録
              <br />
              ・会場側の要請により、来場者の皆さんの連絡先情報をお預かりすることとなりました。
              <br />
              ・すべての参加者の皆さんに、連絡先情報を事前にご登録いただきます。
              <br />
              ・ご入力いただきました情報は、主催の戦挙管理委員会のプライバシーポリシーに基づき厳重に管理し、開催後2週間を目処に、適切な手段で廃棄いたします。
              <br />
              ・新型感染症拡大予防およびそれに係る調査の目的で、公的機関から来場者の皆さんの連絡先情報の提出を求められた場合、公的機関に対して連絡先情報を提供いたします。
              <br />
              2. 入場整理券の導入
              <br />
              ・会場側の要請により、会場に同時に入場できる参加者の数を制限いたします。
              <br />
              ・ご来場時に整理券をお配りし、入場時間のご案内をさせていただきます。
              <br />
              ・整理券の配布開始時間は【11:30】です。
              <br />
              ・三密回避のため、待機列形成は行いません。恐れ入りますが、配布開始時間前のご来場はご遠慮ください。
              <br />
              <br />
              参加総理の皆さんにはご不便・ご迷惑をおかけいたしますが、何卒ご協力のほど宜しくお願い申し上げます。
            </PaperBody>
            <PaperSection>迷惑行為、危険行為の禁止</PaperSection>
            <PaperBody>
              ・会場内外で走る、受付より外の会場外共用部に長時間立ち止まる、などの行為はご遠慮ください。
              <br />
              ・一箇所のサークルスペース前に長時間居座る、近隣のサークルスペースの前にはみ出す、などの行為は、他の参加者の迷惑になりますのでご遠慮ください。
              <br />
              ・会場は禁煙、禁酒です。喫煙は指定の喫煙スペース【1階駐輪場奥】にてお願いします。
              <br />
              ・会場内や会場周辺での勧誘行為、パフォーマンスなどの混乱が予想される行為は禁止です。
              <br />
              ・モデルガン・エアガンなどの武器類、楽器などの大きな音の鳴る物、引火物、アルコール（消毒用途を除く）、ペット、その他危険と思われるものの持ち込みは禁止です。
            </PaperBody>
            <PaperSection>会場内撮影について</PaperSection>
            <PaperBody>
              ・会場内での動画撮影は一切禁止です。
              <br />
              ・会場内での写真撮影はサークルスペースや展示物、コスプレの撮影に限り可能です。ただし、人物が写り込まないようにご配慮ください。もし写り込んでしまったものをSNS等にアップロードする場合は【必ず加工を施し】個人の特定ができないようにしてください。
              <br />
              ・サークルスペースやコスプレイヤーを撮影する際、また撮影したものをSNSにアップロードする際には、被写体のサークル参加者やコスプレ参加者に許可を得てください。
              <br />
              ・コスプレ撮影を行う場合、サークルスペースが写り込まないようにご配慮ください。
            </PaperBody>
            <PaperSection>会場利用規約厳守のお願い</PaperSection>
            <PaperBody>
              ・共用部のコンセントの使用は禁止です。
              <br />
              ・荷物は受付より外の共用部には絶対に置かないでください。
              <br />
              ・ゴミはお手数ですがお持ち帰りください。
              <br />
              ・会場内非常口の前に荷物を置かないようにお願いいたします。
            </PaperBody>
            <PaperSection>落とし物について</PaperSection>
            <PaperBody>
              ・落とし物・忘れ物などは【会場本部】までお届けください。
              <br />
              ・金銭・貴重品の紛失につきましては当イベント主催者では責任を負いかねますので、貴重品の管理にご注意ください。
            </PaperBody>
            <PaperSection>その他</PaperSection>
            <PaperBody>
              ・緊急の場合を除き、個人的な呼び出しはできません。
              <br />
              ・ケガをした方、気分の悪くなった方はお近くの戦挙管理委員までお申し出ください。
              <br />
              ・飲食物の持ち込みは可能ですが、会場を汚されないよう十分ご注意ください。
              <br />
              ・イベント会場内での手作り食品の差し入れはご遠慮ください。
              <br />
              ・コスプレまたはコスプレと判断されるような服装での入場・退場は禁止です。コスプレをされる場合、所定の更衣室でのお着替えをお願い致します。
              <br />
              ・会場外における事故・トラブルにつきまして当イベント主催者は保証できません。ご来場、ご帰宅の際はご注意ください。
              <br />
              コスプレ諸注意は コスプレ参加者向けのページ に掲載しております。
              <br />
              <Link href="/cosplay">
                <a>https://festia.moe/cosplay</a>
              </Link>
              <br />
              コスプレ参加予定の方はご一読ください。
              <br />
              <br />
              ※一般参加者の同人誌、同人グッズ、あるいはそれに準ずるものの頒布行為の禁止※
              <br />
              <br />
              一般参加者の上記行為を全面的に禁止させていただきます。
              <br />
              一般参加者からサークル参加者への差し入れ等は良識の範囲内でお願い致します。
              <br />
              目に余る行為が見受けられた場合はご退場をお願いいただく場合もございます。
              <br />
              即売会を皆様に楽しんでいただくため、ご協力お願い致します。
              <br />
              会場内で頒布行為をしたい方は是非ともサークル参加を！
            </PaperBody>
            <PaperSection>色紙大募集！</PaperSection>
            <PaperBody>
              今回は全国の総理の皆さんから色紙を募集します！
              <br />
              会場を政霊たちのイラストで華やかに飾りましょう！
              <br />
              応募条件は下記画像をご確認ください。
              <br />
              <Button
                href="/assets/img/illust_card/description.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledAvatar src="/assets/img/illust_card/description.png" />
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
                href="/assets/img/illust_card/address.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledAvatar src="/assets/img/illust_card/address.jpg" />
              </Button>
            </PaperBody>
            <PaperSection>会場限定グッズくじ実施！</PaperSection>
            <PaperBody>
              過去のメインビジュアルを使用したタペストリーや、デフォルメキャラクターのアクリルスタンドなどを、ハズレなしくじで入手するチャンス！
              <br />
              ラストワン賞も……？
              <br />
              お楽しみに！
            </PaperBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
