/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import {
  Grid,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import styled from "@emotion/styled";
import Template from "@/components/Template/SiteTemplate";
import PaperTitle from "@/components/Atoms/PaperTitle";
import PaperSection from "@/components/Atoms/PaperSection";
import PaperBody from "@/components/Atoms/PaperBody";
import PaperSpacer from "@/components/Atoms/PaperSpacer";

const Bold = styled.strong`
  font-weight: 500;
`;

const Page: React.FC = () => {
  const canUseForm = true; // 6/1日開放
  const [isRead, setIsRead] = React.useState(false);
  const onChecked = (eve: React.ChangeEvent<HTMLInputElement>): void =>
    setIsRead(eve.target.checked);

  return (
    <Template>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper>
            <PaperTitle>コスプレ参加をする方へ</PaperTitle>
            <PaperSection>感染症対策に関するルール</PaperSection>
            <PaperBody>
              ・混雑を避けるため、更衣室の利用は事前登録制となります。フォームより申請ください。【9/14まで受付】
              <br />
              ・受付期間内であっても上限人数に達し次第、事前登録は終了させていただきます。ご了承ください。
              <br />
              ・受付期間内であっても上限人数に達し次第、事前登録は終了させていただきます。ご了承ください。
              <br />
              ・更衣室の入室人数を制限させていただきます。順番でお待ちいただく場合があります。
              <br />
              ・更衣室使用時間はおひとり様一回につき40分までとなりますよう、ご協力をお願い致します。
              <br />
              ・更衣室内では対人距離2mを確保し、会話等はお控えください。
              <br />
              ・更衣室内、会場内共にやむを得ない場合を除き極力マスクの着用をお願い致します。
              <br />
              ・マスクを外しての撮影は指定された撮影スペースのみで行い、マスクを外した被写体の方は喋らないようにご注意ください。撮影時にも対人距離2mを確保するようご協力お願い致します。
            </PaperBody>
            <PaperSection>入場について</PaperSection>
            <PaperBody>
              更衣室開放時間は【10:00〜18:30】の予定となっております。
              <br />
              事前登録完了時にお送りしたメールの画面、またはメールを印刷したものを受付にご提示ください。
              <br />
              コスプレ更衣室は、サークル参加の総理は【10:00】より、一般参加の総理は【11:30】よりご利用いただけます。
              <br />
              即売会エリアへはサークル参加のコスプレ総理は【10:00】より、一般参加のコスプレ総理は【12:00】より入場が可能です。
              <br />
              更衣室入室の際、イベント入場料の他、コスプレ登録・更衣室使用料としてサークル参加者は【500円】、一般参加者は【1500円】を頂戴いたします。
              <br />
              当日お困りの事や不明点がございましたら、お近くの戦挙管理委員までお声がけください。
            </PaperBody>
            <PaperSection>更衣について</PaperSection>
            <PaperBody>
              更衣室は所定の更衣室(2F)のみをご利用ください。
              <br />
              トイレでの着替えや、ヘアースプレーなどの使用、地毛及びウィッグのカットは厳禁です。
              <br />
              更衣室はきれいにご利用ください。荷物・ゴミ等の放置は禁止です。
              <br />
              更衣室内での一切の撮影行為を禁止します。
              <br />
              更衣室は【18:30完全閉鎖】となります。時間は厳守いただきますよう、お願いいたします。
            </PaperBody>
            <PaperSection>衣装について</PaperSection>
            <PaperBody>
              国内外を問わず、リアルな軍服・国旗・階級章の着用は禁止します。実在の人物、団体とは何の関係もないただの美少女が戦うファンタジーですからね。
              <br />
              コスプレや、コスプレと思われるような衣服・派手なメイクでの入退場は禁止です。一般常識の範囲内におさまる服装でご来場ください。
              <br />
              過度に露出の多いコスチュームはお避けください。公式立ち絵に従う範囲で、必ずボディスーツ・肌着・サポーターなどを着用し、露出対策をお願いいたします。
              <br />
              水着コスプレはご遠慮ください。
              <br />
              コスプレとしての着ぐるみ（頭にかぶり物をしていて顔が見えないものを指します）の着用は可能です。
              <br />
              女装をする男性コスプレ総理の方は、わき毛、すね毛、ひげなどの露出する部分の毛は処理をし、生足の露出は避けてタイツ、ストッキング、スパッツ等を着用してください。ご協力をお願い申し上げます。
              <br />
              更衣室の入退室時は、戦挙管理委員による衣装チェックにご協力ください。過度な露出が認められる場合は、上着などの着用をお願いすることがございます。
              <br />
              戦挙管理委員から衣装修正の指示を受けた総理は更衣室に戻り、その箇所を速やかに修正してください。
            </PaperBody>
            <PaperSection>コスプレ可能エリアについて</PaperSection>
            <PaperBody>
              2Fのみコスプレ可能エリアとなります。
              <br />
              コスプレと判断される服装、メイクで1F及び館外へ出られることはお控えください。
            </PaperBody>
            <PaperSection>会場内マナーについて</PaperSection>
            <PaperBody>
              会場内を走ることや、場内・周辺でのパフォーマンス等（走る・飛ぶ・騒ぐ・振り回す・楽器をならす等の行為）はおやめください。事故や怪我のもととなります。
              <br />
              長物などは破損や周囲の邪魔になる恐れがありますので、会場外およびサークルスペースではケース等に入れて持ち運びください。
              <br />
              お荷物は更衣室や本部での預かりが可能ですが、貴重品は必ずご携帯ください。万一紛失されましても、責任を負いかねます。あらかじめご了承ください。
              <br />
              イベント時間中に落し物や紛失物が発生した場合は、本部までお越しください。
              <br />
              不審物を発見した場合、不用意に触らず戦挙管理委員をお呼びください
            </PaperBody>
          </Paper>
          <PaperSpacer />
          <Paper>
            <PaperTitle>コスプレ事前登録フォーム</PaperTitle>
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdtL4y7wy4jrh7IYMY3zHtnDh71-bEWCOBTwVXVLvtDXjGX0A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                disabled={!isRead || !canUseForm}
                variant="contained"
                color="primary"
                size="large"
              >
                コスプレ事前登録する
              </Button>
            </PaperBody>
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Page;
