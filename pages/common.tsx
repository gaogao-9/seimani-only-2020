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
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Template from "@/components/Template/SiteTemplate";
import PaperTitle from "@/components/Atoms/PaperTitle";
import PaperSection from "@/components/Atoms/PaperSection";
import PaperBody from "@/components/Atoms/PaperBody";
import PaperSpacer from "@/components/Atoms/PaperSpacer";

const Bold = styled.strong`
  font-weight: 500;
`;

const Page: React.FC = () => {
  const canUseForm = true;
  const [isRead, setIsRead] = React.useState(false);
  const onChecked = (eve: React.ChangeEvent<HTMLInputElement>): void =>
    setIsRead(eve.target.checked);

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
          </Paper>
          <PaperSpacer />
          <Paper>
            <PaperTitle>プライバシーポリシー</PaperTitle>
            <PaperBody>
              戦挙管理委員会（以下「当会」といいます）は、個人情報の保護に関する法令等を遵守するとともに、本プライバシーポリシーを遵守します。
            </PaperBody>
            <PaperSection>1. 個人情報の定義</PaperSection>
            <PaperBody>
              個人情報とは、氏名、住所、生年月日、年齢、性別、電話番号、電子メールアドレス、IPアドレス、銀行口座番号のうち、1つあるいは2つ以上を組み合せることによって、特定の個人を識別できるものを指します。
            </PaperBody>
            <PaperSection>2. 個人情報の取得</PaperSection>
            <PaperBody>
              当会は、個人情報を、適正な手段により取得いたします。
            </PaperBody>
            <PaperSection>3. 個人情報の利用目的</PaperSection>
            <PaperBody>
              当会は、主催する即売会・イベント等において、個人情報を、以下の目的で利用し、ご本人の同意を頂いた範囲内においてのみ取り扱います。
              <br />
              (1) 即売会・イベント等の運営に必要な情報を処理するため
              <br />
              (2) 即売会・イベント等に関する重要事項を参加者に連絡するため
              <br />
              (3) 即売会・イベント等の運営上のトラブルを解決するため
            </PaperBody>
            <PaperSection>4. 個人情報の第三者への提供</PaperSection>
            <PaperBody>
              当会は、個人情報保護法その他の法令により認められる事由がある場合を除き、ご本人の同意なくして、第三者に提供・開示しません。
            </PaperBody>
            <PaperSection>5. 個人情報の安全管理</PaperSection>
            <PaperBody>
              当会は、個人情報を適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。
            </PaperBody>
            <PaperSection>6. 個人情報の開示、訂正、苦情等</PaperSection>
            <PaperBody>
              当会は、個人情報について、開示、訂正、苦情等について、ご本人からのお申出があった場合には、お申出頂いた方がご本人であることを確認の上、個人情報保護法の定めに従い、速やかに対応いたします。
            </PaperBody>
            <PaperSection>7. プライバシーポリシーの変更</PaperSection>
            <PaperBody>
              当会は、必要に応じて、本プライバシーポリシーの内容を改定することがあります。その場合、変更箇所を速やかに公表するものとします。{" "}
            </PaperBody>
            <PaperSection>8. お問い合わせ窓口</PaperSection>
            <PaperBody>戦挙管理委員会 seimani.only[at]gmail.com</PaperBody>
          </Paper>
          <PaperSpacer />
          <Paper>
            <PaperTitle>参加者事前登録フォーム</PaperTitle>
            <PaperBody>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isRead}
                      onChange={onChecked}
                      color="primary"
                    />
                  }
                  disabled={!canUseForm}
                  label="以上の内容を熟読しました。"
                />
              </FormGroup>
              <br />
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSdjys5hauSxlHB5r-PmAvu6h4U0Pkwbw30INOoUAxBab0esaQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                disabled={!isRead || !canUseForm}
                variant="contained"
                color="primary"
                size="large"
              >
                参加者事前登録を行う
              </Button>
            </PaperBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
