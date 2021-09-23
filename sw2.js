"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const cheerio_1 = require("cheerio");
const fs = require("fs");
const readline = require("readline");
const writeStream = fs.createWriteStream("DONE.mjml");
const url = ["0"];
const thungo = ["0"];
let url1;
let url2;
let url3;
let url4;
let url5;
let url6;
let url7;
let url8;
let url9;
const readF = async () => {
    const file = fs.createReadStream("URL.txt");
    const rl = readline.createInterface({
        input: file,
        crlfDelay: Infinity,
    });
    for await (const line of rl) {
        url.push(line);
    }
    const file1 = fs.createReadStream("thungo.txt");
    const rl1 = readline.createInterface({
        input: file1,
        crlfDelay: Infinity,
    });
    for await (const line of rl1) {
        thungo.push(line);
    }
};
// const readthungo = async () => {
//   const file1 = fs.createReadStream("thungo.txt");
//   const rl1 = readline.createInterface({
//     input: file1,
//     crlfDelay: Infinity,
//   });
//   for await (const line of rl1) {
//     thungo.push(line);
//   }
// };
const getS = async (url) => {
    const res = await axios_1.default.get(url);
    const $ = await cheerio_1.default.load(res.data);
    let title = $("title").text();
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
    console.log(b);
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
      <mj-breakpoint width="384px" />
      <mj-style
        >@import
        url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
        * { -webkit-box-sizing: border-box !important; box-sizing: border-box
        !important; } .confuse { background-color: #f9f9f9 !important; } .confuse
        * { margin: 0 !important; padding: 0 !important; } .icon-container table {
        text-align: center !important; } a { text-decoration: none !important; }
        a:hover p, img:hover, a:hover { opacity: 0.7 !important; } .logo-spiderum
        { margin: 27px 0 22px 0 !important; } @media (min-width: 385px) {
        .logo-spiderum { margin-bottom: 8px !important; } } .heading-top {
        font-family: Noto Serif; font-size: 32px; font-style: normal; font-weight:
        400; line-height: 44px; letter-spacing: 0em; text-align: center; margin:
        0px 30px 24px 30px !important; } @media (min-width: 385px) { .heading-top
        { font-family: Noto Serif; font-size: 42px; font-style: normal;
        font-weight: 500; line-height: 57px; letter-spacing: 0em; text-align:
        center; margin: 0 10% 30px 10% !important; } } .user-container { display:
        -webkit-box !important; display: -ms-flexbox !important; display: flex
        !important; -webkit-box-align: center !important; -ms-flex-align: center
        !important; align-items: center !important; -webkit-box-pack: center
        !important; -ms-flex-pack: center !important; justify-content: center
        !important; height: 36px !important; margin: 0 0 62px 0 !important; }
        .user-container img { width: 32px !important; height: 32px; border-radius:
        50% !important; } @media (min-width: 385px) { .user-container { margin: 0
        0 32px 0 !important; } } .sub-author-container { text-align: left
        !important; line-height: 16px !important; height: 36px !important; margin:
        3px 0 0 12px !important; } .sub-author-container p { width: auto
        !important; font-size: 14px !important; color: #161616 !important;
        font-family: "Noto Sans", sans-serif !important; } .sub-author-container
        .author-id { font-size: 12px !important; color: #616161 !important;
        font-family: "Noto Sans", sans-serif !important; line-height: 14px
        !important; } .main-hr { padding: 12px 20px 25px 20px !important; } @media
        (min-width: 385px) { .main-hr { padding: 12px 27px 25px 27px !important; }
        } .content { padding: 0 20.5px 0 20.5px !important; } @media (min-width:
        385px) { .content { padding: 0 6.3% 0 6.3% !important; } } .title-top {
        font-family: Raleway; font-size: 32px; font-style: normal; font-weight:
        700; line-height: 38px; letter-spacing: 0em; text-align: left; color:
        #3398d4; } .category { font-family: Noto Sans; font-size: 12px;
        font-style: normal; font-weight: 700; line-height: 16px; letter-spacing:
        0em; text-align: left; color: #3398d4; padding: 12px 0 12px 0 !important;
        } .category .info { color: #b5b5b5; font-weight: 700; } .main-content {
        font-family: Noto Sans; font-size: 16px; font-style: normal; font-weight:
        400; line-height: 22px; letter-spacing: 0em; text-align: left; padding: 0
        0 48px 0 !important; } @media (min-width: 385px) { .main-content {
        padding: 0 0 56px 0 !important; } } .article { padding: 0 20px 0 20px
        !important; } @media (min-width: 385px) { .article { padding: 0 5.1% 0
        5.1% !important; } } .author-container { -webkit-box-align: center
        !important; -ms-flex-align: center !important; align-items: center
        !important; -webkit-box-pack: left !important; -ms-flex-pack: left
        !important; justify-content: left !important; padding: 0 20px 0 20px
        !important; margin: 0 !important; } @media (min-width: 385px) {
        .author-container { margin: 0px !important; padding: 0 5.1% 0 5.1%
        !important; } } .author-container .author-id { color: #b5b5b5 !important;
        } .author-container .sub-author-container { margin: 3px 0 0 12px
        !important; } .article-img { padding: 11px 0 11px 0 !important; } @media
        (min-width: 385px) { .article-img { padding: 10px 0 17px 0 !important; } }
        .text-article .category a { font-family: Noto Sans; font-size: 12px;
        font-style: normal; font-weight: 400; line-height: 16px; letter-spacing:
        0em; text-align: left; color: #616161 !important; padding: 0px !important;
        } .title-article { font-family: Raleway; font-size: 20px; font-style:
        normal; font-weight: 700; line-height: 25px; letter-spacing: 0em;
        text-align: left; color: #161616 !important; margin: 10px 0 16px 0
        !important; } @media (min-width: 385px) { .title-article { margin-top:
        12px !important; } } .description-article { font-family: Noto Sans;
        font-size: 16px; font-style: normal; font-weight: 400; line-height: 22px;
        letter-spacing: 0em; text-align: left; color: #616161 !important; } @media
        (min-width: 385px) { .description-article { color: #161616 !important; } }
        .link-article { font-family: Noto Sans; font-size: 16px; font-style:
        normal; font-weight: 700; line-height: 22px; letter-spacing: 0em;
        text-align: left; color: #3398d4 !important; padding-top: 16px !important;
        } .sub-hr { width: 89.54% !important; padding: 11px 0 10px 0 !important; }
        @media (min-width: 385px) { .sub-hr { width: 92.7% !important; padding:
        17px 0 26px 0 !important; } } .link-article-bot { margin-bottom: 19px
        !important; } @media (min-width: 385px) { .link-article-bot {
        margin-bottom: 23px !important; } } .column-80 { width: 80% !important; }
        .column-80 p { margin: 16px 0 0 0 !important; } .column-90 { width: 90%
        !important; } .column-90 p { margin: 5px !important; } .icon-container {
        text-align: center !important; margin: 10px 0 16px 0 !important; }
        .icon-container tr { text-align: center !important; display: inline
        !important; margin: 2px !important; } .company { padding: 17px 0 0 0
        !important; } .logo-company { padding: 8px 0 25px 0 !important; } /*#
        sourceMappingURL=final2.css.map */
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
        <mj-text color="#161616" text-decoration="none"> </mj-text>
      </mj-attributes>
    </mj-head>
    <mj-body width="680px">
      <!-- Heading -->
      <mj-wrapper css-class="confuse">
        <mj-section css-class="">
          <mj-column css-class="logo-spiderum" width="100%" padding="27px 0 0 0">
            <mj-image
              src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/fcc1d6600d9611ec989ecdbb5e35c5a8.png"
              alt="Spiderum log"
              width="166px"
              height="166px"
            />
          </mj-column>
          <mj-column css-class="big-title" width="80%" padding="22px 0 0 0">
            <mj-text>
              <p class="heading heading-top">
                Những bài viết thú vị từ Spiderum.
              </p>
            </mj-text>
          </mj-column>
          <!-- user-card -->
          <mj-column css-class="user-card" width="100%" padding="22px 0 50px 0">
            <mj-raw>
              <div class="user-container">
                <div class="img-card">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-avatar/953eeaa0096811ec9ec5131d8341f662.jpeg"
                    alt=""
                  />
                </div>
                <div class="sub-author-container">
                  <p class="author-name">
                    Dành cho
                    <span style="font-weight: 700">
                      [[data:firstname:"FRIEND"]]
                    </span>
                  </p>
                  <p class="author-id">@[[data:username:"FRIEND"]]</p>
                </div>
              </div>
            </mj-raw>
          </mj-column>
        </mj-section>
      </mj-wrapper>
      <!-- * card content -->
      <mj-wrapper css-class="confuse">
        <!-- main hr -->
        <mj-section
          background-color="rgba(227, 235, 246, 0.25)"
          css-class="blue-25"
        >
          <mj-column width="100%" css-class="main-hr">
            <mj-divider border-width="1px" border-color="#616161" />
          </mj-column>
          <!-- Thu ngo -->
          <mj-column width="100%" css-class="content">
            <mj-text>
              <p class="title-top">${thungo[1]}</p>
              <p class="category">
                EDITOR’S NOTE <span class="info"> | Ngọc Trâm</span>
              </p>
              <p class="main-content">${thungo[2]}</p>
            </mj-text>
          </mj-column>
  
          <!-- article card -->
  
          <!-- article card -->
          <mj-column css-class="user-card" width="100%" padding="22px 0 50px 0">
            <mj-raw>
              <a href="${article1["authorLink"]}">
                <div class="content user-container author-container">
                  <div class="img-card">
                    <img src="${article1["avatar"]}" alt="" />
                  </div>
                  <div class="sub-author-container">
                    <p class="author-name">
                      <span style="font-weight: 700">${article1["author"]}</span>
                    </p>
                    <p class="author-id">${article1["createdDay"]}</p>
                  </div>
                </div>
              </a>
            </mj-raw>
            <!-- author card -->
          </mj-column>
  
          <!-- article image -->
          <mj-column width="100%" css-class="article">
            <mj-image
              css-class="article-img "
              src="${article1["img"]}"
              alt=""
              href="${url1}"
            />
            <mj-text css-class="text-article">
              <p class="category">
                <a href="${article1["categoryLink"]}"
                  >${article1["category"]}<span class="info"> </span
                ></a>
              </p>
  
              <!-- title article -->
              <a href="${url1}">
                <p class="title-article">${article1["title"]}</p>
  
                <!-- description article -->
                <p class="description-article">${article1["description"]}</p>
  
                <p class="link-article">Đọc bài viết tại đây.</p>
              </a>
            </mj-text>
          </mj-column>
          <mj-column width="89.58%" css-class="sub-hr">
            <mj-divider
              border-width="1px"
              border-color="rgba(227, 227, 227, 1)"
            />
          </mj-column>
          <!-- end article -->
  
          <!-- article card -->
          <mj-column css-class="user-card" width="100%" padding="22px 0 50px 0">
            <mj-raw>
              <a href="${article2["authorLink"]}">
                <div class="content user-container author-container">
                  <div class="img-card">
                    <img src="${article2["avatar"]}" alt="" />
                  </div>
                  <div class="sub-author-container">
                    <p class="author-name">
                      <span style="font-weight: 700">${article2["author"]}</span>
                    </p>
                    <p class="author-id">${article2["createdDay"]}</p>
                  </div>
                </div>
              </a>
            </mj-raw>
            <!-- author card -->
          </mj-column>
  
          <!-- article image -->
          <mj-column width="100%" css-class="article">
            <mj-image
              css-class="article-img "
              src="${article2["img"]}"
              alt=""
              href="${url2}"
            />
            <mj-text css-class="text-article">
              <p class="category">
                <a href="${article2["categoryLink"]}"
                  >${article2["category"]}<span class="info"> </span
                ></a>
              </p>
              <!-- title article -->
              <a href="${url2}">
                <p class="title-article">${article2["title"]}</p>
  
                <!-- description article -->
                <p class="description-article">${article2["description"]}</p>
  
                <p class="link-article">Đọc bài viết tại đây.</p>
              </a>
            </mj-text>
          </mj-column>
          <mj-column width="89.58%" css-class="sub-hr">
            <mj-divider
              border-width="1px"
              border-color="rgba(227, 227, 227, 1)"
            />
          </mj-column>
          <!-- end article -->
  
          <!-- article card -->
          <mj-column css-class="user-card" width="100%" padding="22px 0 50px 0">
            <mj-raw>
              <a href="${article3["authorLink"]}">
                <div class="content user-container author-container">
                  <div class="img-card">
                    <img src="${article3["avatar"]}" alt="" />
                  </div>
                  <div class="sub-author-container">
                    <p class="author-name">
                      <span style="font-weight: 700">${article3["author"]}</span>
                    </p>
                    <p class="author-id">${article3["createdDay"]}</p>
                  </div>
                </div>
              </a>
            </mj-raw>
            <!-- author card -->
          </mj-column>
  
          <!-- article image -->
          <mj-column width="100%" css-class="article">
            <mj-image
              css-class="article-img "
              src="${article3["img"]}"
              alt=""
              href="${url3}"
            />
            <mj-text css-class="text-article">
              <p class="category">
                <a href="${article3["categoryLink"]}"
                  >${article3["category"]}<span class="info"> </span
                ></a>
              </p>
              <!-- title article -->
              <a href="${url3}">
                <p class="title-article">${article3["title"]}</p>
  
                <!-- description article -->
                <p class="description-article">${article3["description"]}</p>
  
                <p class="link-article">Đọc bài viết tại đây.</p>
              </a>
            </mj-text>
          </mj-column>
          <mj-column width="89.58%" css-class="sub-hr">
            <mj-divider
              border-width="1px"
              border-color="rgba(227, 227, 227, 1)"
            />
          </mj-column>
          <!-- end article -->
  
          <!-- article card -->
          <mj-column css-class="user-card" width="100%" padding="22px 0 50px 0">
            <mj-raw>
              <a href="${article4["authorLink"]}">
                <div class="content user-container author-container">
                  <div class="img-card">
                    <img src="${article4["avatar"]}" alt="" />
                  </div>
                  <div class="sub-author-container">
                    <p class="author-name">
                      <span style="font-weight: 700">${article4["author"]}</span>
                    </p>
                    <p class="author-id">${article4["createdDay"]}</p>
                  </div>
                </div>
              </a>
            </mj-raw>
            <!-- author card -->
          </mj-column>
  
          <!-- article image -->
          <mj-column width="100%" css-class="article">
            <mj-image
              css-class="article-img "
              src="${article4["img"]}"
              alt=""
              href="${url4}"
            />
            <mj-text css-class="text-article">
              <p class="category">
                <a href="${article4["categoryLink"]}"
                  >${article4["category"]}<span class="info"> </span
                ></a>
              </p>
              <!-- title article -->
              <a href="${url4}">
                <p class="title-article">${article4["title"]}</p>
  
                <!-- description article -->
                <p class="description-article">${article4["description"]}</p>
  
                <p class="link-article">Đọc bài viết tại đây.</p>
              </a>
            </mj-text>
          </mj-column>
          <mj-column width="89.58%" css-class="sub-hr">
            <mj-divider
              border-width="1px"
              border-color="rgba(227, 227, 227, 1)"
            />
          </mj-column>
          <!-- end article -->
  
          <!-- article card -->
          <mj-column css-class="user-card" width="100%" padding="22px 0 50px 0">
            <mj-raw>
              <a href="${article5["authorLink"]}">
                <div class="content user-container author-container">
                  <div class="img-card">
                    <img src="${article5["avatar"]}" alt="" />
                  </div>
                  <div class="sub-author-container">
                    <p class="author-name">
                      <span style="font-weight: 700">${article5["author"]}</span>
                    </p>
                    <p class="author-id">${article5["createdDay"]}</p>
                  </div>
                </div>
              </a>
            </mj-raw>
            <!-- author card -->
          </mj-column>
  
          <!-- article image -->
          <mj-column width="100%" css-class="article">
            <mj-image
              css-class="article-img "
              src="${article5["img"]}"
              alt=""
              href="${url5}"
            />
            <mj-text css-class="text-article">
              <p class="category">
                <a href="${article5["categoryLink"]}"
                  >${article5["category"]}<span class="info"> </span
                ></a>
              </p>
              <!-- title article -->
              <a href="${url5}">
                <p class="title-article">${article5["title"]}</p>
  
                <!-- description article -->
                <p class="description-article">${article5["description"]}</p>
  
                <p class="link-article">Đọc bài viết tại đây.</p>
              </a>
            </mj-text>
          </mj-column>
          <mj-column width="89.58%" css-class="sub-hr">
            <mj-divider
              border-width="1px"
              border-color="rgba(227, 227, 227, 1)"
            />
          </mj-column>
          <!-- end article -->
  
          <!-- article card -->
          <mj-column css-class="user-card" width="100%" padding="22px 0 50px 0">
            <mj-raw>
              <a href="${article6["authorLink"]}">
                <div class="content user-container author-container">
                  <div class="img-card">
                    <img src="${article6["avatar"]}" alt="" />
                  </div>
                  <div class="sub-author-container">
                    <p class="author-name">
                      <span style="font-weight: 700">${article6["author"]}</span>
                    </p>
                    <p class="author-id">${article6["createdDay"]}</p>
                  </div>
                </div>
              </a>
            </mj-raw>
            <!-- author card -->
          </mj-column>
  
          <!-- article image -->
          <mj-column width="100%" css-class="article">
            <mj-image
              css-class="article-img "
              src="${article6["img"]}"
              alt=""
              href="${url6}"
            />
            <mj-text css-class="text-article">
              <p class="category">
                <a href="${article6["categoryLink"]}"
                  >${article6["category"]}<span class="info"> </span
                ></a>
              </p>
              <!-- title article -->
              <a href="${url6}">
                <p class="title-article">${article6["title"]}</p>
  
                <!-- description article -->
                <p class="description-article">${article6["description"]}</p>
  
                <p class="link-article link-article-bot">Đọc bài viết tại đây.</p>
              </a>
            </mj-text>
          </mj-column>
  
          <!-- end article -->
        </mj-section>
      </mj-wrapper>
  
      <!-- Social and Footer -->
      <mj-wrapper css-class="confuse">
        <!-- Social -->
        <mj-section background-color="#3398D4">
          <mj-column css-class="column-80" width="77.86%" padding="16px 0 0 0">
            <mj-text
              align="center"
              font-family="Noto Sans, sans-serif"
              line-height="21.9px"
              color="#FFFFFF"
              font-size="16px"
              font-weight="700"
              font-family="Noto, sand"
              ><p class="text">
                Follow ngay Spiderum để đọc thêm nhiều thông tim thú vị!
              </p></mj-text
            >
          </mj-column>
          <mj-column width="100%"> </mj-column>
          <mj-column
            css-class="icon-container"
            width="100%"
            padding="10px 10px 16px 0px"
          >
            <mj-image
              css-class="social-icon"
              src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/d1d52b500d3c11ec9971cbd2e720387a.png"
              alt="spiderum"
              href="https://spiderum.com"
              width="40px"
              border-radius="50%"
            />
            <mj-image
              css-class="social-icon"
              src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/716da5200d3d11ec9971cbd2e720387a.png"
              alt="spiderum"
              href="https://youtube.com/spiderum"
              width="40px"
              border-radius="50%"
            />
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
          <mj-column css-class="column-90" width="87.5%">
            <mj-text
              align="center"
              font-size="12px"
              line-height="20px"
              font-family="Noto Sans,sans-serif"
            >
              <p class="text">
                Theo dõi những chủ đề bạn quan tâm hoặc bỏ theo dõi chúng
                <a
                  class="link-blue"
                  href="/"
                  style="font-weight: 700; color: #3398d4"
                  >qua đây</a
                >
              </p>
              <p class="text company">
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
                <span style="font-weight: 700">Địa chỉ: </span> Tầng 5, 1/186
                đường Bưởi, Cống Vị, Ba Đình, Hà Nội
              </p>
              <p class="text company" style="font-weight: 700">
                © 2021 CÔNG TY CỔ PHẦN FELIZZ
              </p>
            </mj-text>
            <mj-image
              css-class="logo-company"
              href="https://spiderum.com"
              src="https://spiderum.com/assets/icons/wideLogo.png"
              align="center"
              padding="0 0 25px 0"
              width="131.94px"
              alt="spiderumLogo"
            />
          </mj-column>
        </mj-section>
      </mj-wrapper>
    </mj-body>
  </mjml>
  `;
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
//# sourceMappingURL=sw2.js.map