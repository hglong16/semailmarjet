import axios from "axios";
import cheerio from "cheerio";
import * as fs from "fs";
import * as readline from "readline";

const writeStream = fs.createWriteStream("DONE.mjml");
const url: Array<string> = ["0"];

let url1: string;
let url2: string;
let url3: string;
let url4: string;
let url5: string;
let url6: string;
let url7: string;
let url8: string;
let url9: string;

const readF = async () => {
  const file = fs.createReadStream("URL.txt");
  const rl = readline.createInterface({
    input: file,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    url.push(line);
  }
};

const getS = async (url) => {
  const res = await axios.get(url);
  const $ = await cheerio.load(res.data);

  let title: string = $("title").text();
  let author = $(".author-info > a").text();
  let authorLink = $(".author-info > a").attr("href");
  let category = $(".category > a").text();
  let categoryLink = $(".category > a").attr("href");
  let description = $('meta[name="description"]').attr("content");
  let createdDay = $(".created-day").text();
  let img = $("meta[property='og:image']").attr("content");

  const avatar = $("avatar> a > img").attr("src");
  const b = {
    title: title,
    author: author,
    authorLink: `https://spiderum.com${authorLink}`,
    category: category,
    categoryLink: `https://spiderum.com${categoryLink}`,
    description: description,
    createdDay: createdDay,
    img: img,
    avatar: avatar,
  };

  return b;
};

const crawl = async () => {
  const article1 = await getS(url1).then((s) => {
    return s;
  });
  const article2 = await getS(url2).then((s) => {
    return s;
  });
  const article3 = await getS(url3).then((s) => {
    return s;
  });
  const article4 = await getS(url4).then((s) => {
    return s;
  });
  const article5 = await getS(url5).then((s) => {
    return s;
  });
  const article6 = await getS(url6).then((s) => {
    return s;
  });
  const article7 = await getS(url7).then((s) => {
    return s;
  });
  const article8 = await getS(url8).then((s) => {
    return s;
  });
  const article9 = await getS(url9).then((s) => {
    return s;
  });




let vltn = `<mjml>
<mj-head>
  <mj-breakpoint width="300px" />

  <mj-style>
    body { min-width: 300px!important; } .img-author img{ 
      bottom:8px!important;
    } .sub-cate { margin-top:4px!important;
    } .author-name { line-height: 1!important;
    margin:0 0 0 0; } .sub-author-container p{ min-width:115px; margin:5px 0 0
    0; } a { color: #161616; text-decoration: none; text-underline-offset:
    none; } .sub-title-cont { min-height: 66px!important; display:
    table!important; } .sub-title { display: table-cell!important;
    vertical-align: middle!important; } .sub-img { height: 120px !important;
    width: 120px !important; } .sub-img img { width: 100% !important;
    object-fit: cover !important; height: 100%; } @media (min-width: 385px) {
    .author-name { font-size:14px !important; } .sub-cate {
    margin-top:4px!important; font-size:14px !important } .big-title p {
    font-size: 42px !important; line-height: 57.2px !important; } .big-title
    td { width: 300px !important; } .main-image img { padding: 16px 0 6px 0
    !important; } .author-card { padding: 18px 0 0 0 !important; } .sub-hr {
    padding: 11px 0 26px 0 !important; } .sub-har { padding: 40px 0 18px 0
    !important; } .img-author { padding: 5px 27px 0 0 !important; }
    .img-author img { width: 32px !important; height: 32px !important; bottom:
    0 !important; } .sub-img { height: 128px !important; width: 128px
    !important; } .sub-img img { width: 100% !important; object-fit: cover
    !important; height: 100%; } .sub-content { margin: 0 0 0 6.5% !important;
    width: calc(93.5% - 128px) !important; } .sub-2 { padding: 0 0 48px 0
    !important; } .big-title { width: 55% !important; } .sub-title-cont {
    min-height:71px!important; } } @media (min-width: 520px) { .big-title p {
    font-size: 38px !important; line-height: 50px !important; } .big-title {
    width: 70% !important; } } a:hover, img:hover { color: #161616; opacity:
    0.7; } .container { -webkit-box-align: center; -ms-flex-align: center;
    align-items: center; } .sub-img { float: left; padding: 0 0 0 0; width:
    120px; } .sub-img img { border-radius: 3px; } .sub-content { float: left;
    width: calc(100% - 148px); margin: 0; padding: 0; } .sub-content p {
    font-size: 16px; line-height: 21.79px; font-weight: 700; }
    .sub-author-container { text-align: left; max-width: 420px; line-height:
    0px; float: left; height: 36px; } /*# sourceMappingURL=final.css.map */
  </mj-style>
  <mj-font
    name="Noto Serif"
    href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@0,400;0,700;1,400;1,700&display=swap"
  />
  <mj-font
    name="Noto Sans"
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
  />
  <mj-font
    name="Raleway"
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
  />

  <mj-attributes>
    <mj-all padding="0px" align="center" />
    <mj-section background-color="#f9f9f9"> </mj-section>
    <<mj-text color="#161616" text-decoration="none"> </mj-text>
  </mj-attributes>
</mj-head>
<mj-body width="680px">
  <!-- Headder -->

  <mj-wrapper>
    <mj-section css-class="">
      <mj-column width="100%" padding="27px 0 0 0">
        <mj-image
          src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/c773b2d00d3c11ec9971cbd2e720387a.png"
          alt="Spiderum log"
          width="166px"
          height="166px"
        />
      </mj-column>
      <mj-column css-class="big-title" width="80%" padding="22px 0 0 0">
        <mj-text
          font-family="Noto Serif, serif"
          font-size="32px"
          align="center"
          line-height="43.58px"
          font-weight="500"
        >
          <p>Những bài viết thú vị từ Spiderum.</p>
        </mj-text>
      </mj-column>
      <!-- user-card -->
      <mj-column css-class="user-card" width="100%" padding="22px 0 50px 0">
        <mj-raw>
          <div
            style="
              display: flex;
              align-item: center;
              justify-content: center;
              height: 36px;
            "
          >
            <div style="padding: 5px 12px 0 0; height: 36px">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-avatar/953eeaa0096811ec9ec5131d8341f662.jpeg"
                alt=""
                style="width: 32px; height: 32px; border-radius: 50%"
              />
            </div>
            <div
              style="
                text-align: left;
                max-width: 420px;
                line-height: 0px;

                height: 36px;
              "
            >
              <div>
                <p
                  style="
                    width: auto;
                    font-size: 14px;
                    color: #161616;
                    font-family: 'Noto Sans', sans-serif;
                  "
                >
                  Danh cho <span style="font-weight: 700">Thcccccccc</span>
                </p>
                <p
                  style="
                    font-size: 12px;
                    color: #616161;
                    font-family: 'Noto Sans', sans-serif;
                    line-height: 5px;
                  "
                >
                  @nguudau
                </p>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>
    </mj-section>
  </mj-wrapper>

  <!-- Content card -->
  <mj-wrapper>
    <mj-section background-color="#E3EBF6" padding="12px 0 0 0">
      <!-- card header -->
      <mj-column width="100%">
        <mj-text
          font-family="Raleway, sans-serif"
          font-size="20px"
          line-height="25.08px"
          font-weight="700"
        >
          <p>Được xem nhiều nhất</p>
        </mj-text>
        <mj-divider
          border-width="1px"
          border-color="#616161"
          padding="16px 0 0 0"
          width="91%"
        />
      </mj-column>
      <!-- Main content -->
      <mj-column css-class="main-image" width="89.58%" padding="10px 0 0 0">
        <mj-image
          href="${url1}"
          border-radius="3px"
          src="${article1['img']}"
          alt='${article1["description"]}'
        />
        <!-- Category | Time -->
        <mj-text
          font-size="13px"
          line-height="0px"
          padding="11px 0 0 0"
          align="left"
          font-family="Noto Sans, sans-serif"
        >
          <p>
            <a href="${article1['categoryLink']}">
              ${article1['category']}
              <span style="font-size: 12px; color: #616161"> | </span></a
            >
          </p>
        </mj-text>
        <!-- Title -->
        <mj-text
          font-size="20px"
          font-weight="700"
          line-height="25.08px"
          padding="10px 0 0 0"
          align="left"
          font-family="Raleway, sans-serif"
        >
          <a href="${url1}"> ${article1['title']}</a>
        </mj-text>
        <!-- Description -->
        <mj-text
          css-class="main-des"
          font-size="16px"
          line-height="21.79px"
          font-weight="400"
          padding="16px 0 0 0"
          align="left"
          font-family="Nota Sans, sans-serif"
          color="#616161"
        >
          <a style="color: #616161" href="${url1}">
            ${article1['description']}
          </a>
        </mj-text>
      </mj-column>

      <!-- author -->
      <mj-column css-class="author-card" width="89.58%" padding="13px 0 0 0">
        <mj-raw>
          <div style="display: flex; align-items: center; height: 36px">
            <div style="padding: 5px 12px 0 0; height: 36px">
              <a href="${article1['authorLink']}">
                <img
                  src="${article1['avatar']}"
                  alt=""
                  style="width: 32px; height: 32px; border-radius: 50%"
              /></a>
            </div>
            <div
              style="
                text-align: left;
                max-width: 420px;
                line-height: 0px;

                height: 36px;
              "
            >
              <div>
                <a href="${article1['authorLink']}">
                  <p
                    style="
                      width: auto;
                      font-size: 14px;
                      color: #161616;
                      font-family: 'Noto Sans', sans-serif;
                    "
                  >
                    <span style="font-weight: 700"
                      >${article1['author']}</span
                    >
                  </p>
                  <p
                    style="
                      font-size: 12px;
                      color: #616161;
                      font-family: 'Noto Sans', sans-serif;
                      line-height: 5px;
                    "
                  >
                    ${article1['createdDay']}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>

      <!-- hr subcontent 1 -->
      <mj-column css-class="sub-hr" width="91%" padding="11px 0 10px 0">
        <mj-divider border-width="1px" border-color="#e3e3e3" />
      </mj-column>
      <!-- sub-content 1 -->
      <mj-column width="89.58%" padding="0 0 0 0">
        <mj-raw>
          <div class="container">
            <!-- sub-img 1 -->
            <div class="sub-img" style="margin: 5px 0 0 0">
              <a href="${url2}">
                <img
                  src="${article2['img']}"
                  alt="${article2['description']}"
                />
              </a>
            </div>
            <!-- sub category -->
            <div class="sub-content" style="margin: 0 0 0 18px">
              <p class="sub-cate"
                style="
                
                  font-size: 12px;
                  line-height: 12px;
                  font-family: 'Noto Sans', sans-serif;
                "
              >
                <a href='${article2["categoryLink"]}'
                  >${article2['category']}</a
                >
                |
                <span style="color: #616161"> </span>
              </p>
              <!-- sub title -->
              <div class="sub-title-cont">
                <p
                  class="sub-title"
                  style="
                    margin: 0;
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14px;
                  "
                >
                  <a href="${url2}">${article2['title']} </a>
                </p>
              </div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  position: relative;
                  height: 36px;
                "
              >
                <div
                  class="img-author"
                  style="
                    padding: 5px 12px 0 0;
                    height: 36px;

                    height: 20px;
                  "
                >
                  <img
                    src="${article2['avatar']}"
                    alt=""
                    style="
                      width: 18px;
                      height: 18px;
                      border-radius: 50%;
                      align-items: center;
                      position: absolute;
                      bottom: 5px;
                    "
                  />
                </div>
                <div class="sub-author-container" style="padding-left: 12px">
                  <a href="${article2['authorLink']}">
                    <p
                      class="author-name"
                      style="
                        font-size: 12px;
                        color: #161616;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 0px;
                      "
                    >
                      <span style="font-weight: 700"
                        >${article2['author']}</span
                      >
                    </p>
                    <p
                      style="
                        font-size: 12px;
                        color: #616161;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 5px;
                      "
                    >
                      ${article2['createdDay']}
                    </p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>

      <!-- hr subcontent 2 -->
      <mj-column css-class="sub-har" width="91%" padding="11px 0 10px 0">
        <mj-divider border-width="1px" border-color="#e3e3e3" />
      </mj-column>

      <mj-column css-class="sub-2" width="89.58%" padding="0 0 36px 0">
        <mj-raw>
          <div class="container">
            <!-- sub-img 1 -->
            <div class="sub-img" style="margin: 5px 0 0 0">
              <a href="${url3}">
                <img
                  src="${article3['img']}"
                  alt="${article3['description']}"
              /></a>
            </div>
            <!-- sub category -->
            <div class="sub-content" style="margin: 0 0 0 18px">
              <p class="sub-cate"
                style="
                  font-size: 12px;
                  line-height: 12px;
                  font-family: 'Noto Sans', sans-serif;
                "
              >
                <a href="${url3}">${article3['category']}</a> |
                <span style="color: #616161"> </span>
              </p>
              <!-- sub title -->
              <div class="sub-title-cont">
                <p
                  class="sub-title"
                  style="
                    margin: 0;
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14px;
                  "
                >
                  <a href="${url3}">${article3['title']} </a>
                </p>
              </div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  position: relative;
                  height: 36px;
                "
              >
                <div
                  class="img-author"
                  style="
                    padding: 5px 12px 0 0;
                    height: 36px;

                    height: 20px;
                  "
                >
                  <img
                    src="${article3['avatar']}"
                    alt=""
                    style="
                      width: 18px;
                      height: 18px;
                      border-radius: 50%;
                      align-items: center;
                      position: absolute;
                      bottom: 5px;
                    "
                  />
                </div>

                <div class="sub-author-container" style="padding-left: 12px">
                  <a href="${article3['authorLink']}">
                    <p
                      class="author-name"
                      style="
                        font-size: 12px;
                        color: #161616;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 0px;
                      "
                    >
                      <span style="font-weight: 700"
                        >${article3['author']}</span
                      >
                    </p>
                    <p
                      style="
                        font-size: 12px;
                        color: #616161;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 5px;
                      "
                    >
                      ${article3['createdDay']}
                    </p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>
    </mj-section>
  </mj-wrapper>
  <!-- Content card 2 -->
  <mj-wrapper>
    <mj-section background-color="#E3EBF6" padding="12px 0 0 0">
      <!-- card header -->
      <mj-column width="100%">
        <mj-text
          font-family="Raleway, sans-serif"
          font-size="20px"
          line-height="25.08px"
          font-weight="700"
        >
          <p>Hoạt động sôi nổi</p>
        </mj-text>
        <mj-divider
          border-width="1px"
          border-color="#616161"
          padding="16px 0 0 0"
          width="91%"
        />
      </mj-column>
      <!-- Main content -->
      <!-- Main content -->
      <mj-column css-class="main-image" width="89.58%" padding="10px 0 0 0">
        <mj-image
          href="${url4}"
          border-radius="3px"
          src="${article4['img']}"
          alt="${article4['description']}"
        />
        <!-- Category | Time -->
        <mj-text
          font-size="13px"
          line-height="0px"
          padding="11px 0 0 0"
          align="left"
          font-family="Noto Sans, sans-serif"
        >
          <p>
            <a href="${article4['categoryLink']}">
              ${article4['category']}
              <span style="font-size: 12px; color: #616161"> | </span></a
            >
          </p>
        </mj-text>
        <!-- Title -->
        <mj-text
          font-size="20px"
          font-weight="700"
          line-height="25.08px"
          padding="10px 0 0 0"
          align="left"
          font-family="Raleway, sans-serif"
        >
          <a href="${url4}"> ${article4['title']}</a>
        </mj-text>
        <!-- Description -->
        <mj-text
          css-class="main-des"
          font-size="16px"
          line-height="21.79px"
          font-weight="400"
          padding="16px 0 0 0"
          align="left"
          font-family="Nota Sans, sans-serif"
          color="#616161"
        >
          <a style="color: #616161" href="${url4}">
            ${article4['description']}
          </a>
        </mj-text>
      </mj-column>

      <!-- author -->
      <mj-column css-class="author-card" width="89.58%" padding="13px 0 0 0">
        <mj-raw>
          <div style="display: flex; align-items: center; height: 36px">
            <div style="padding: 5px 12px 0 0; height: 36px">
              <a href="${article4['authorLink']}">
                <img
                  src="${article4['avatar']}"
                  alt=""
                  style="width: 32px; height: 32px; border-radius: 50%"
              /></a>
            </div>
            <div
              style="
                text-align: left;
                max-width: 420px;
                line-height: 0px;

                height: 36px;
              "
            >
              <div>
                <a href="${article4['authorLink']}">
                  <p
                    style="
                      width: auto;
                      font-size: 14px;
                      color: #161616;
                      font-family: 'Noto Sans', sans-serif;
                    "
                  >
                    <span style="font-weight: 700"
                      >${article4['author']}</span
                    >
                  </p>
                  <p
                    style="
                      font-size: 12px;
                      color: #616161;
                      font-family: 'Noto Sans', sans-serif;
                      line-height: 5px;
                    "
                  >
                    ${article4['createdDay']}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>

      <!-- hr subcontent 1 -->
      <mj-column css-class="sub-hr" width="91%" padding="11px 0 10px 0">
        <mj-divider border-width="1px" border-color="#e3e3e3" />
      </mj-column>
      <!-- sub-content 1 -->
      <mj-column width="89.58%" padding="0 0 0 0">
        <mj-raw>
          <div class="container">
            <!-- sub-img 1 -->
            <div class="sub-img" style="margin: 5px 0 0 0">
              <a href="${url5}">
                <img
                  src="${article5['img']}"
                  alt="${article5['description']}"
                />
              </a>
            </div>
            <!-- sub category -->
            <div class="sub-content" style="margin: 0 0 0 18px">
              <p class="sub-cate"
                style="
                  font-size: 12px;
                  line-height: 12px;
                  font-family: 'Noto Sans', sans-serif;
                "
              >
                <a href='${article5["categoryLink"]}'
                  >${article5['category']}</a
                >
                |
                <span style="color: #616161"> </span>
              </p>
              <!-- sub title -->
              <div class="sub-title-cont">
                <p
                  class="sub-title"
                  style="
                    margin: 0;
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14px;
                  "
                >
                  <a href="${url5}">${article5['title']} </a>
                </p>
              </div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  position: relative;
                  height: 36px;
                "
              >
                <div
                  class="img-author"
                  style="
                    padding: 5px 12px 0 0;
                    height: 36px;

                    height: 20px;
                  "
                >
                  <img
                    src="${article5['avatar']}"
                    alt=""
                    style="
                      width: 18px;
                      height: 18px;
                      border-radius: 50%;
                      align-items: center;
                      position: absolute;
                      bottom: 5px;
                    "
                  />
                </div>
                <div class="sub-author-container" style="padding-left: 12px">
                  <a href="${article5['authorLink']}">
                    <p
                      class="author-name"
                      style="
                        font-size: 12px;
                        color: #161616;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 0px;
                      "
                    >
                      <span style="font-weight: 700"
                        >${article5['author']}</span
                      >
                    </p>
                    <p
                      style="
                        font-size: 12px;
                        color: #616161;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 5px;
                      "
                    >
                      ${article5['createdDay']}
                    </p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>

      <!-- hr subcontent 2 -->
      <mj-column css-class="sub-har" width="91%" padding="11px 0 10px 0">
        <mj-divider border-width="1px" border-color="#e3e3e3" />
      </mj-column>

      <mj-column css-class="sub-2" width="89.58%" padding="0 0 36px 0">
        <mj-raw>
          <div class="container">
            <!-- sub-img 1 -->
            <div class="sub-img" style="margin: 5px 0 0 0">
              <a href="${url6}">
                <img
                  src="${article6['img']}"
                  alt="${article6['description']}"
              /></a>
            </div>
            <!-- sub category -->
            <div class="sub-content" style="margin: 0 0 0 18px">
              <p class="sub-cate"
                style="
                  font-size: 12px;
                  line-height: 12px;
                  font-family: 'Noto Sans', sans-serif;
                "
              >
                <a href="${article6['categoryLink']}}"
                  >${article6['category']}</a
                >
                |
                <span style="color: #616161"> </span>
              </p>
              <!-- sub title -->
              <div class="sub-title-cont">
                <p
                  class="sub-title"
                  style="
                    margin: 0;
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14px;
                  "
                >
                  <a href="${url6}">${article6['title']} </a>
                </p>
              </div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  position: relative;
                  height: 36px;
                "
              >
                <div
                  class="img-author"
                  style="
                    padding: 5px 12px 0 0;
                    height: 36px;

                    height: 20px;
                  "
                >
                  <img
                    src="${article6['avatar']}"
                    alt=""
                    style="
                      width: 18px;
                      height: 18px;
                      border-radius: 50%;
                      align-items: center;
                      position: absolute;
                      bottom: 5px;
                    "
                  />
                </div>
                <div class="sub-author-container" style="padding-left: 12px">
                  <a href="${article6['authorLink']}">
                    <p
                      class="author-name"
                      style="
                        font-size: 12px;
                        color: #161616;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 0px;
                      "
                    >
                      <span style="font-weight: 700"
                        >${article6['author']}</span
                      >
                    </p>
                    <p
                      style="
                        font-size: 12px;
                        color: #616161;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 5px;
                      "
                    >
                      ${article6['createdDay']}
                    </p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>
    </mj-section>
  </mj-wrapper>
  <!-- Content card 3 -->
  <mj-wrapper>
    <mj-section background-color="#E3EBF6" padding="12px 0 0 0">
      <!-- card header -->
      <mj-column width="100%">
        <mj-text
          font-family="Raleway, sans-serif"
          font-size="20px"
          line-height="25.08px"
          font-weight="700"
        >
          <p>Cây viết nổi bật</p>
        </mj-text>
        <mj-divider
          border-width="1px"
          border-color="#616161"
          padding="16px 0 0 0"
          width="91%"
        />
      </mj-column>
      <!-- Main content -->
      <!-- Main content -->
      <mj-column css-class="main-image" width="89.58%" padding="10px 0 0 0">
        <mj-image
          href="${url7}"
          border-radius="3px"
          src="${article7['img']}"
          alt='${article7["description"]}'
        />
        <!-- Category | Time -->
        <mj-text
          font-size="13px"
          line-height="0px"
          padding="11px 0 0 0"
          align="left"
          font-family="Noto Sans, sans-serif"
        >
          <p>
            <a href="${article7['categoryLink']}">
              ${article7['category']}
              <span style="font-size: 12px; color: #616161"> | </span></a
            >
          </p>
        </mj-text>
        <!-- Title -->
        <mj-text
          font-size="20px"
          font-weight="700"
          line-height="25.08px"
          padding="10px 0 0 0"
          align="left"
          font-family="Raleway, sans-serif"
        >
          <a href="${url7}"> ${article7['title']}</a>
        </mj-text>
        <!-- Description -->
        <mj-text
          css-class="main-des"
          font-size="16px"
          line-height="21.79px"
          font-weight="400"
          padding="16px 0 0 0"
          align="left"
          font-family="Nota Sans, sans-serif"
          color="#616161"
        >
          <a style="color: #616161" href="${url7}">
            ${article7['description']}
          </a>
        </mj-text>
      </mj-column>

      <!-- author -->
      <mj-column css-class="author-card" width="89.58%" padding="13px 0 0 0">
        <mj-raw>
          <div style="display: flex; align-items: center; height: 36px">
            <div style="padding: 5px 12px 0 0; height: 36px">
              <a href="${article7['authorLink']}">
                <img
                  src="${article7['avatar']}"
                  alt=""
                  style="width: 32px; height: 32px; border-radius: 50%"
              /></a>
            </div>
            <div
              style="
                text-align: left;
                max-width: 420px;
                line-height: 0px;

                height: 36px;
              "
            >
              <div>
                <a href="${article7['authorLink']}">
                  <p
                    style="
                      width: auto;
                      font-size: 14px;
                      color: #161616;
                      font-family: 'Noto Sans', sans-serif;
                    "
                  >
                    <span style="font-weight: 700"
                      >${article7['author']}</span
                    >
                  </p>
                  <p
                    style="
                      font-size: 12px;
                      color: #616161;
                      font-family: 'Noto Sans', sans-serif;
                      line-height: 5px;
                    "
                  >
                    ${article7['createdDay']}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>

      <!-- hr subcontent 1 -->
      <mj-column css-class="sub-hr" width="91%" padding="11px 0 10px 0">
        <mj-divider border-width="1px" border-color="#e3e3e3" />
      </mj-column>
      <!-- sub-content 1 -->
      <mj-column width="89.58%" padding="0 0 0 0">
        <mj-raw>
          <div class="container">
            <!-- sub-img 1 -->
            <div class="sub-img" style="margin: 5px 0 0 0">
              <a href="${url8}">
                <img
                  src="${article8['img']}"
                  alt="${article8['description']}"
                />
              </a>
            </div>
            <!-- sub category -->
            <div class="sub-content" style="margin: 0 0 0 18px">
              <p class="sub-cate"
                style="
                  font-size: 12px;
                  line-height: 12px;
                  font-family: 'Noto Sans', sans-serif;
                "
              >
                <a href='${article8["categoryLink"]}'
                  >${article8['category']}</a
                >
                |
                <span style="color: #616161"> </span>
              </p>
              <!-- sub title -->
              <div class="sub-title-cont">
                <p
                  class="sub-title"
                  style="
                    margin: 0;
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14px;
                  "
                >
                  <a href="${url8}">${article8['title']} </a>
                </p>
              </div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  position: relative;
                  height: 36px;
                "
              >
                <div
                  class="img-author"
                  style="
                    padding: 5px 12px 0 0;
                    height: 36px;

                    height: 20px;
                  "
                >
                  <img
                    src="${article8['avatar']}"
                    alt=""
                    style="
                      width: 18px;
                      height: 18px;
                      border-radius: 50%;
                      align-items: center;
                      position: absolute;
                      bottom: 5px;
                    "
                  />
                </div>
                <div class="sub-author-container" style="padding-left: 12px">
                  <a href="${article8['authorLink']}">
                    <p
                      class="author-name"
                      style="
                        font-size: 12px;
                        color: #161616;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 0px;
                      "
                    >
                      <span style="font-weight: 700"
                        >${article8['author']}</span
                      >
                    </p>
                    <p
                      style="
                        font-size: 12px;
                        color: #616161;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 5px;
                      "
                    >
                      ${article8['createdDay']}
                    </p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>

      <!-- hr subcontent 2 -->
      <mj-column css-class="sub-har" width="91%" padding="11px 0 10px 0">
        <mj-divider border-width="1px" border-color="#e3e3e3" />
      </mj-column>

      <mj-column css-class="sub-2" width="89.58%" padding="0 0 36px 0">
        <mj-raw>
          <div class="container">
            <!-- sub-img 1 -->
            <div class="sub-img" style="margin: 5px 0 0 0">
              <a href="${url9}">
                <img
                  src="${article9['img']}"
                  alt="${article9['description']}"
              /></a>
            </div>
            <!-- sub category -->
            <div class="sub-content" style="margin: 0 0 0 18px">
              <p class="sub-cate"
                style="
                  font-size: 12px;
                  line-height: 12px;
                  font-family: 'Noto Sans', sans-serif;
                "
              >
                <a href="${article9['categoryLink']}}"
                  >${article9['category']}</a
                >
                |
                <span style="color: #616161"> </span>
              </p>
              <!-- sub title -->
              <div class="sub-title-cont">
                <p
                  class="sub-title"
                  style="
                    margin: 0;
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14px;
                  "
                >
                  <a href="${url9}">${article9['title']} </a>
                </p>
              </div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  position: relative;
                  height: 36px;
                "
              >
                <div
                  class="img-author"
                  style="
                    padding: 5px 12px 0 0;
                    height: 36px;

                    height: 20px;
                  "
                >
                  <img
                    src="${article9['avatar']}"
                    alt=""
                    style="
                      width: 18px;
                      height: 18px;
                      border-radius: 50%;
                      align-items: center;
                      position: absolute;
                      bottom: 5px;
                    "
                  />
                </div>
                <div class="sub-author-container" style="padding-left: 12px">
                  <a href="${article9['authorLink']}">
                    <p
                      class="author-name"
                      style="
                        font-size: 12px;
                        color: #161616;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 0px;
                      "
                    >
                      <span style="font-weight: 700"
                        >${article9['author']}</span
                      >
                    </p>
                    <p
                      style="
                        font-size: 12px;
                        color: #616161;
                        font-family: 'Noto Sans', sans-serif;
                        line-height: 5px;
                      "
                    >
                      ${article9['createdDay']}
                    </p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </mj-raw>
      </mj-column>
    </mj-section>
  </mj-wrapper>
  <!-- Social -->
  <mj-section background-color="#3398D4">
    <mj-column width="77.86%" padding="16px 0 0 0">
      <mj-text
        align="center"
        font-family="Noto Sans, sans-serif"
        line-height="21.9px"
        color="#FFFFFF"
        font-size="16px"
        font-weight="700"
        font-family="Noto, sand"
      >
        Follow ngay Spiderum để đọc thêm nhiều thông tim thú vị!
      </mj-text>
    </mj-column>
    <mj-column width="100%"> </mj-column>
    <mj-column width="40px" padding="10px 10px 16px 0px">
      <mj-image
        css-class="social-icon"
        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/d1d52b500d3c11ec9971cbd2e720387a.png"
        alt="spiderum"
        href="https://spiderum.com"
        width="40px"
        border-radius="50%"
      />
      <
    </mj-column>
    <mj-column width="40px" padding="10px 10px 16px 0px">
      <mj-image
        css-class="social-icon"
        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/716da5200d3d11ec9971cbd2e720387a.png"
        alt="spiderum"
        href="https://youtube.com/spiderum"
        width="40px"
        border-radius="50%"
      />
    </mj-column>
    <mj-column width="40px" padding="10px 10px 16px 0px">
      <mj-image
        css-class="social-icon"
        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/77c443c00d3d11ec9971cbd2e720387a.png"
        alt="spiderum"
        href="https://open.spotify.com/show/73NBSJpoAxNyHLYGrraSXd"
        width="40px"
        border-radius="50%"
      />
    </mj-column>
  </mj-section>
  <!-- Footer -->
  <mj-section>
    <mj-column width="87.5%">
      <mj-text
        align="center"
        font-size="12px"
        line-height="20px"
        font-family="Noto Sans,sans-serif"
      >
        <p>
          Theo dõi những chủ đề bạn quan tâm hoặc bỏ theo dõi chúng
          <a
            class="link-blue"
            href="/"
            style="font-weight: 700; color: #3398d4"
            >qua đây</a
          >
        </p>

        <p>
          <span style="font-weight: 700">CÔNG TY CỔ PHẦN FELIZZ<br /></span>
          Trực thực Công ty Cổ phần Spiderum Việt Nam (Spiderum Vietnam
          JSC)<br />
          Người chịu trách nhiệm nội dung Trần Việt Anh<br />
          Giấy phép MXH số 341/GP-TTTT do Bộ TTTT cấp ngày 27 tháng 6 năm
          2016<br />
          <span style="font-weight: 700">Liên hệ:</span> 0946.042.093<span
            style="font-weight: 700"
          >
            Email:</span
          >
          contact@spiderum.com<br />
          <span style="font-weight: 700">Địa chỉ: </span> Tầng 5, 1/186 đường
          Bưởi, Cống Vị, Ba Đình, Hà Nội
        </p>

        <p style="font-weight: 700">© 2021 CÔNG TY CỔ PHẦN FELIZZ</p>
      </mj-text>
      <mj-image
        href="https://spiderum.com"
        src="https://spiderum.com/assets/icons/wideLogo.png"
        align="center"
        padding="0 0 25px 0"
        width="131.94px"
        alt="spiderumLogo"
      />
    </mj-column>
  </mj-section>
</mj-body>
</mjml>
`
  writeStream.write(vltn);

  //value value
};

readF()
  .then(() => {
    url1 = url[1];
    url2 = url[2];
    url3 = url[3];
    url4 = url[4];
    url5 = url[5];
    url6 = url[6];
    url7 = url[7];
    url8 = url[8];
    url9 = url[9];
  })
  .then(() => {
    crawl().then(() => console.log("DONE"));
  });
