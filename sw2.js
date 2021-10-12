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
    let vltn = `<mjml owa="desktop" version="4.10.1">
  <mj-head>
    <mj-preview></mj-preview>
    <mj-style>
      a{ text-decoration:none;} .icon-container { text-align: center !important;
      margin: 10px 0 16px 0 !important; padding:0px!important; } .icon-container
      tr { text-align: center !important; display: inline !important; margin:
      2px !important; } .social-icon{
      margin:0!important;padding:0!important}a:hover, img:hover { color:
      #161616; opacity: 0.7; } 
    </mj-style>
    <mj-font
      href="https://fonts.googleapis.com/css?family=Noto+Serif"
      name="Noto Serif"
    ></mj-font>
    <mj-font
      href="https://fonts.googleapis.com/css?family=serif"
      name="serif"
    ></mj-font>
    <mj-font
      href="https://fonts.googleapis.com/css?family=Raleway"
      name="Raleway"
    ></mj-font>
    <mj-font
      href="https://fonts.googleapis.com/css?family=Noto+Sans"
      name="Noto Sans"
    ></mj-font>
    <mj-attributes>
      <mj-section background-color="rgba(227, 235, 246, 0.25)"> </mj-section>
      <mj-wrapper padding="0"> </mj-wrapper>
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#f9f9f9">
    <!-- header -->
    <mj-wrapper>
      <mj-section
        background-color="#f9f9f9"
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-image
            align="center"
            alt=""
            border="none"
            height="auto"
            href=""
            padding-bottom="8px"
            padding-left="25px"
            padding-right="25px"
            padding-top="27px"
            padding="27px 25px 8px 25px"
            src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/fcc1d6600d9611ec989ecdbb5e35c5a8.png"
            target="_blank"
            title=""
            width="166px"
          ></mj-image>
        </mj-column>
        <mj-column width="100%">
          <mj-text
            align="left"
            color="#000000"
            font-size="42px"
            padding-bottom="0px"
            padding-left="50px"
            padding-right="50px"
            padding-top="0px"
            padding="0px 50px 0px 50px"
          >
            <h1
              class="text-build-content"
              style="
                line-height: 57px;
                text-align: center;
                margin-top: 10px;
                margin-bottom: 10px;
              "
              data-testid="Pcd--dmP22p"
            >
              <span
                style="
                  color: #161616;
                  font-family: Noto Serif;
                  font-size: 42px;
                  font-weight: 400;
                "
                >Những bài viết thú vị từ Spiderum.</span
              >
            </h1>
          </mj-text>
        </mj-column>
        <mj-column width="100%">
          <mj-table width="80%" align="center" table-layout="fixed">
            <tr>
              <td align="right" padding="0" width="35%">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/fcc1d6600d9611ec989ecdbb5e35c5a8.png"
                  style="
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    padding: 0;
                    margin: 0;
                  "
                />
              </td>
              <td padding="0" width="60%">
                <p style="margin: 0 0 5px 12px; line-height: 16px" ;>
                  <span
                    style="color: #161616; font-family: Noto Sans,Arial, sans-serif; font-size"
                  >
                    Dành cho
                  </span>
                  <span
                    style="
                      font-family: 'Noto Sans', Arial, sans-serif;
                      font-size: 14px;
                      font-weight: 700;
                      color: #161616;
                    "
                    >[[data:firstname:"Bạn"]]</span
                  ><br />
                  <span
                    style="
                      font-family: 'Noto Sans', Arial, sans-serif;
                      font-weight: 400;
                      font-size: 12px;
                      color: #b5b5b5;
                    "
                    >[[data:username:"spiderum"]]</span
                  >
                </p>
              </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>
    </mj-wrapper>
    <!-- end header  -->
    <!-- article1 -->
    <mj-wrapper>
      <mj-section
        background-color="rgba(227, 235, 246, 0.25)"
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="20px"
            padding-bottom="0px"
            padding-top="0px"
            padding="10px 25px"
          >
            <p
              class="text-build-content"
              style="
                text-align: center;
                margin: 10px 0;
                margin-top: 10px;
                margin-bottom: 10px;
              "
              data-testid="voSIqIxP8"
            >
              <span
                style="
                  color: #161616;
                  font-family: Raleway, Arial, sans-serif;
                  font-size: 20px;
                "
                ><b>Được xem nhiều nhất</b></span
              >
            </p>
          </mj-text>
          <mj-divider
            border-color="#c4c4c4"
            border-style="solid"
            border-width="1px"
            padding-bottom="18px"
            padding-left="27px"
            padding-right="27px"
            padding-top="6px"
            padding="6px 27px 18px 27px"
            width="100%"
          ></mj-divider>
          <mj-image
            align="center"
            alt="Ảnh Spiderum"
            border="none"
            height="auto"
            href="${url1}"
            padding-left="35px"
            padding-right="35px"
            padding-top="0px"
            padding="0px 35px 10px 35px"
            src="${article1["img"]}"
            target="_blank"
            title=""
            width="1200px"
          ></mj-image>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="14px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="jLgNPaaod"
              style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px"
            >
              <span
                style="
                  text-transform: uppercase;
                  color: #55575d;
                  font-family: Noto Sans, Arial, sans-serif;
                  font-size: 14px;
                "
                ><a style="color:#161616"
                  href="${article1["categoryLink"]}"
                  target="_blank"
                  rel="noopener norefer"
                  style="color:#161616"
                  >${article1["category"]}</a
                ></span
              >
            </p>
          </mj-text>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="20px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="89ECIjn7L"
              style="margin: 0"
            >
              <span
                style="
                  color: #161616;
                  font-family: Raleway, Arial, sans-serif;
                  font-size: 20px;
                  line-height: 25px;
                "
                ><b
                  ><a style="color:#161616" style="color:#161616" href="${url1}" target="_blank" rel="noopener norefer"style="color:#161616"
                    >${article1["title"]}</a
                  ></b
                ></span
              >
            </p>
          </mj-text>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="16px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="_Ak57IbVT"
              style="margin: 12px 0 10 0; line-height: 21px"
            >
              <span
                style="
                  color: #161616;
                  font-family: Noto Sans, Arial, sans-serif;
                  font-size: 16px;
                "
                ><a style="color:#161616" style="color:#161616" style="color:#161616" href="${url1}" target="_blank" rel="noopener norefer">
                  ${article1["description"]}</a
                ></span
              >
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="43px"
        padding-right="43px"
        padding-top="8px"
        padding="8px 43px 0px 43px"
        text-align="center"
      >
        <mj-column>
          <mj-table padding="0px" align="center">
            <tr align="center">
              <td padding="0" width="32px">
                <a style="color:#161616" style="color:#161616" 
                  href="${article1["authorLink"]}"
                  target="_blank"
                  rel="noopener nofollow"
                  ><img
                    src="${article1["avatar"]}"
                    style="
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      padding: 0;
                      margin: 0;
                    "
                /></a>
              </td>
              <td align="left">
                <p style="margin: 0 0 5px 12px; line-height: 16px">
                  <a style="color:#161616" style="color:#161616" style="color:#161616"
                    href="${article1["authorLink"]}"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <span
                      style="
                        font-family: 'Noto Sans', Arial, sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #161616;
                      "
                      >${article1["author"]}</span
                    ><br />
                    <span
                      style="
                        font-family: 'Noto Sans', Arial, sans-serif;
                        font-weight: 400;
                        font-size: 12px;
                        color: #b5b5b5;
                      "
                      >${article1["createdDay"]}</span
                    ></a
                  >
                </p>
              </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-divider
            border-color="#e3e3e3"
            border-style="solid"
            border-width="1px"
            padding-bottom="16px"
            padding-left="35px"
            padding-right="35px"
            padding-top="20px"
            padding="20px 35px 16px 35px"
            width="100%"
          ></mj-divider>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="15px"
        padding-left="35px"
        padding-right="35px"
        padding-top="10px"
        padding="10px 35px 15px 35px"
        text-align="center"
      >
        <mj-group>
          <mj-column width="33%">
            <mj-image
              align="center"
              alt=""
              border-radius="3px"
              border="none"
              height="auto"
              href="${url2}"
              padding-left="0px"
              padding-right="0px"
              padding-top="0px"
              padding="0px 0px 10px 0px"
              src="${article2["img"]}"
              target="_blank"
              title=""
              width="700px"
            ></mj-image>
          </mj-column>
          <mj-column width="67%">
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="14px"
              padding-bottom="0px"
              padding-top="0px"
              padding="10px 25px"
            >
              <p
                class="text-build-content"
                data-testid="nsUmNTtyU"
                style="margin: 3px 0 4px 0"
              >
                <span
                  style="
                    text-transform: uppercase;
                    color: #55575d;
                    font-family: Noto Sans, Arial, sans-serif;
                    font-size: 12px;
                  "
                  ><a style="color:#161616" style="color:#161616" style="color:#161616"
                    href="${article2["categoryLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    >${article2["category"]}</a
                  ></span
                >
              </p>
            </mj-text>
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="16px"
              padding-bottom="0px"
              padding-left="25px"
              padding-right="25px"
              padding-top="0px"
              padding="0px 25px 0px 25px"
            >
              <p
                class="text-build-content"
                data-testid="rONVzgIrML"
                style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px"
              >
                <span
                  style="
                    color: #161616;
                    font-family: Raleway, Arial, sans-serif;
                    font-size: 16px;
                    line-height: 20px;
                  "
                  ><b
                    ><a style="color:#161616" style="color:#161616" style="color:#161616" href="${url2}" target="_blank" rel="noopener norefer"
                      >${article2["title"]}</a
                    ></b
                  ></span
                >
              </p>
            </mj-text>
            <!-- author card -->
            <mj-table padding-top="8px" align="center">
              <tr align="center">
                <td padding="0" width="32px">
                  <a style="color:#161616"
                    href="${article2["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    ><img
                      src="${article2["avatar"]}"
                      style="
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        padding: 0;
                        margin: 0;
                      "
                  /></a>
                </td>
                <td align="left">
                  <p style="margin: 0 0 5px 12px; line-height: 16px">
                    <a style="color:#161616"
                      href="${article2["authorLink"]}"
                      target="_blank"
                      rel="noopener norefer"
                    >
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-size: 14px;
                          font-weight: 700;
                          color: #161616;
                        "
                        >${article2["author"]}</span
                      ><br />
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-weight: 400;
                          font-size: 12px;
                          color: #b5b5b5;
                        "
                        >${article2["createdDay"]}</span
                      ></a
                    >
                  </p>
                </td>
              </tr>
            </mj-table>
          </mj-column>
        </mj-group>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-divider
            border-color="#e3e3e3"
            border-style="solid"
            border-width="1px"
            padding-bottom="16px"
            padding-left="35px"
            padding-right="35px"
            padding-top="10px"
            padding="10px 35px 16px 35px"
            width="100%"
          ></mj-divider>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="30px"
        padding-left="35px"
        padding-right="35px"
        padding-top="16px"
        padding="16px 35px 30px 35px"
        text-align="center"
      >
        <mj-group>
          <mj-column width="33%">
            <mj-image
              align="center"
              alt=""
              border-radius="3px"
              border="none"
              height="auto"
              href="${url3}"
              padding-left="0px"
              padding-right="0px"
              padding-top="0px"
              padding="0px 0px 10px 0px"
              src="${article3["img"]}"
              target="_blank"
              title=""
              width="700px"
            ></mj-image>
          </mj-column>
          <mj-column width="67%">
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="14px"
              padding-bottom="0px"
              padding-top="0px"
              padding="10px 25px"
            >
              <p
                class="text-build-content"
                style="
                  line-height: 10px;
                  margin: 10px 0;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
                data-testid="nsUmNTtyU"
              >
                <span
                  style="
                    text-transform: uppercase;
                    color: #55575d;
                    font-family: Noto Sans, Arial, sans-serif;
                    font-size: 12px;
                  "
                  ><a style="color:#161616" style="color:#161616" style="color:#161616"
                    href="${article3["categoryLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    >${article3["category"]}</a
                  ></span
                >
              </p>
            </mj-text>
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="16px"
              padding-bottom="0px"
              padding-left="25px"
              padding-right="25px"
              padding-top="0px"
              padding="0px 25px 0px 25px"
            >
              <p
                class="text-build-content"
                data-testid="nxYBqWr5T"
                style="margin: 3px 0 4px 0"
              >
                <span
                  style="
                    color: #161616;
                    font-family: Raleway, Arial, sans-serif;
                    font-size: 16px;
                    line-height: 22px;
                  "
                  ><b
                    ><a style="color:#161616" style="color:#161616" style="color:#161616" href="${url3}" target="_blank" rel="noopener norefer"
                      >${article3["title"]}</a
                    ></b
                  ></span
                >
              </p>
            </mj-text>
            <mj-table padding-top="8px" align="center">
              <tr align="center">
                <td padding="0" width="32px">
                  <a style="color:#161616"
                    href="${article3["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                  >
                    <img
                      src="${article3["avatar"]}"
                      style="
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        padding: 0;
                        margin: 0;
                      "
                  /></a>
                </td>
                <td align="left">
                  <a style="color:#161616"
                    href="${article3["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                  >
                    <p style="margin: 0 0 5px 12px; line-height: 16px">
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-size: 14px;
                          font-weight: 700;
                          color: #161616;
                        "
                        >${article3["author"]} </span
                      ><br />
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-weight: 400;
                          font-size: 12px;
                          color: #b5b5b5;
                        "
                        >${article3["createdDay"]}</span
                      >
                    </p></a
                  >
                </td>
              </tr>
            </mj-table>
          </mj-column>
        </mj-group>
      </mj-section>
    </mj-wrapper>
    <!-- article2 -->
    <mj-wrapper>
      <mj-section
        background-color="rgba(227, 235, 246, 0.25)"
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="20px"
            padding-bottom="0px"
            padding-top="0px"
            padding="10px 25px"
          >
            <p
              class="text-build-content"
              style="
                text-align: center;
                margin: 10px 0;
                margin-top: 10px;
                margin-bottom: 10px;
              "
              data-testid="voSIqIxP8"
            >
              <span
                style="
                  color: #161616;
                  font-family: Raleway, Arial, sans-serif;
                  font-size: 20px;
                "
                ><b>Hoạt động sôi nổi</b></span
              >
            </p>
          </mj-text>
          <mj-divider
            border-color="#c4c4c4"
            border-style="solid"
            border-width="1px"
            padding-bottom="18px"
            padding-left="27px"
            padding-right="27px"
            padding-top="6px"
            padding="6px 27px 18px 27px"
            width="100%"
          ></mj-divider>
          <mj-image
            align="center"
            alt="Ảnh Spiderum"
            border="none"
            height="auto"
            href="${url4}"
            padding-left="35px"
            padding-right="35px"
            padding-top="0px"
            padding="0px 35px 10px 35px"
            src="${article4["img"]}"
            target="_blank"
            title=""
            width="1200px"
          ></mj-image>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="14px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="jLgNPaaod"
              style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px"
            >
              <span
                style="
                  text-transform: uppercase;
                  color: #55575d;
                  font-family: Noto Sans, Arial, sans-serif;
                  font-size: 14px;
                "
                ><a style="color:#161616"
                  href="${article4["categoryLink"]}"
                  target="_blank"
                  rel="noopener norefer"
                  >${article4["category"]}</a
                ></span
              >
            </p>
          </mj-text>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="20px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="89ECIjn7L"
              style="margin: 0"
            >
              <span
                style="
                  color: #161616;
                  font-family: Raleway, Arial, sans-serif;
                  font-size: 20px;
                  line-height: 25px;
                "
                ><b
                  ><a style="color:#161616" style="color:#161616" href="${url4}" target="_blank" rel="noopener norefer"
                    >${article4["title"]}</a
                  ></b
                ></span
              >
            </p>
          </mj-text>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="16px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="_Ak57IbVT"
              style="margin: 12px 0 10 0; line-height: 21px"
            >
              <span
                style="
                  color: #161616;
                  font-family: Noto Sans, Arial, sans-serif;
                  font-size: 16px;
                "
                ><a style="color:#161616" style="color:#161616" href="${url4}" target="_blank" rel="noopener norefer">
                  ${article4["description"]}</a
                ></span
              >
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="43px"
        padding-right="43px"
        padding-top="8px"
        padding="8px 43px 0px 43px"
        text-align="center"
      >
        <mj-column>
          <mj-table padding="0px" align="center">
            <tr align="center">
              <td padding="0" width="32px">
                <a style="color:#161616"
                  href="${article4["authorLink"]}"
                  target="_blank"
                  rel="noopener nofollow"
                  ><img
                    src="${article4["avatar"]}"
                    style="
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      padding: 0;
                      margin: 0;
                    "
                /></a>
              </td>
              <td align="left">
                <p style="margin: 0 0 5px 12px; line-height: 16px">
                  <a style="color:#161616"
                    href="${article4["authorLink"]}"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <span
                      style="
                        font-family: 'Noto Sans', Arial, sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #161616;
                      "
                      >${article4["author"]}</span
                    ><br />
                    <span
                      style="
                        font-family: 'Noto Sans', Arial, sans-serif;
                        font-weight: 400;
                        font-size: 12px;
                        color: #b5b5b5;
                      "
                      >${article4["createdDay"]}</span
                    ></a
                  >
                </p>
              </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-divider
            border-color="#e3e3e3"
            border-style="solid"
            border-width="1px"
            padding-bottom="16px"
            padding-left="35px"
            padding-right="35px"
            padding-top="20px"
            padding="20px 35px 16px 35px"
            width="100%"
          ></mj-divider>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="15px"
        padding-left="35px"
        padding-right="35px"
        padding-top="10px"
        padding="10px 35px 15px 35px"
        text-align="center"
      >
        <mj-group>
          <mj-column width="33%">
            <mj-image
              align="center"
              alt=""
              border-radius="3px"
              border="none"
              height="auto"
              href="${url5}"
              padding-left="0px"
              padding-right="0px"
              padding-top="0px"
              padding="0px 0px 10px 0px"
              src="${article5["img"]}"
              target="_blank"
              title=""
              width="700px"
            ></mj-image>
          </mj-column>
          <mj-column width="67%">
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="14px"
              padding-bottom="0px"
              padding-top="0px"
              padding="10px 25px"
            >
              <p
                class="text-build-content"
                data-testid="nsUmNTtyU"
                style="margin: 3px 0 4px 0"
              >
                <span
                  style="
                    text-transform: uppercase;
                    color: #55575d;
                    font-family: Noto Sans, Arial, sans-serif;
                    font-size: 12px;
                  "
                  ><a style="color:#161616"
                    href="${article5["categoryLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    >${article5["category"]}</a
                  ></span
                >
              </p>
            </mj-text>
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="16px"
              padding-bottom="0px"
              padding-left="25px"
              padding-right="25px"
              padding-top="0px"
              padding="0px 25px 0px 25px"
            >
              <p
                class="text-build-content"
                data-testid="rONVzgIrML"
                style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px"
              >
                <span
                  style="
                    color: #161616;
                    font-family: Raleway, Arial, sans-serif;
                    font-size: 16px;
                    line-height: 22px;
                  "
                  ><b
                    ><a style="color:#161616" style="color:#161616" href="${url5}" target="_blank" rel="noopener norefer"
                      >${article5["title"]}</a
                    ></b
                  ></span
                >
              </p>
            </mj-text>
            <!-- author card -->
            <mj-table padding-top="8px" align="center">
              <tr align="center">
                <td padding="0" width="32px">
                  <a style="color:#161616"
                    href="${article5["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    ><img
                      src="${article5["avatar"]}"
                      style="
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        padding: 0;
                        margin: 0;
                      "
                  /></a>
                </td>
                <td align="left">
                  <p style="margin: 0 0 5px 12px; line-height: 16px">
                    <a style="color:#161616"
                      href="${article5["authorLink"]}"
                      target="_blank"
                      rel="noopener norefer"
                    >
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-size: 14px;
                          font-weight: 700;
                          color: #161616;
                        "
                        >${article5["author"]}</span
                      ><br />
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-weight: 400;
                          font-size: 12px;
                          color: #b5b5b5;
                        "
                        >${article5["createdDay"]}</span
                      ></a
                    >
                  </p>
                </td>
              </tr>
            </mj-table>
          </mj-column>
        </mj-group>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-divider
            border-color="#e3e3e3"
            border-style="solid"
            border-width="1px"
            padding-bottom="16px"
            padding-left="35px"
            padding-right="35px"
            padding-top="10px"
            padding="10px 35px 16px 35px"
            width="100%"
          ></mj-divider>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="30px"
        padding-left="35px"
        padding-right="35px"
        padding-top="16px"
        padding="16px 35px 30px 35px"
        text-align="center"
      >
        <mj-group>
          <mj-column width="33%">
            <mj-image
              align="center"
              alt=""
              border-radius="3px"
              border="none"
              height="auto"
              href="${url6}"
              padding-left="0px"
              padding-right="0px"
              padding-top="0px"
              padding="0px 0px 10px 0px"
              src="${article6["img"]}"
              target="_blank"
              title=""
              width="700px"
            ></mj-image>
          </mj-column>
          <mj-column width="67%">
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="14px"
              padding-bottom="0px"
              padding-top="0px"
              padding="10px 25px"
            >
              <p
                class="text-build-content"
                style="
                  line-height: 10px;
                  margin: 10px 0;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
                data-testid="nsUmNTtyU"
              >
                <span
                  style="
                    text-transform: uppercase;
                    color: #55575d;
                    font-family: Noto Sans, Arial, sans-serif;
                    font-size: 12px;
                  "
                  ><a style="color:#161616"
                    href="${article6["categoryLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    >${article6["category"]}</a
                  ></span
                >
              </p>
            </mj-text>
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="16px"
              padding-bottom="0px"
              padding-left="25px"
              padding-right="25px"
              padding-top="0px"
              padding="0px 25px 0px 25px"
            >
              <p
                class="text-build-content"
                data-testid="nxYBqWr5T"
                style="margin: 3px 0 4px 0"
              >
                <span
                  style="
                    color: #161616;
                    font-family: Raleway, Arial, sans-serif;
                    font-size: 16px;
                    line-height: 22px;
                  "
                  ><b
                    ><a style="color:#161616" style="color:#161616" href="${url6}" target="_blank" rel="noopener norefer"
                      >${article6["title"]}</a
                    ></b
                  ></span
                >
              </p>
            </mj-text>
            <mj-table padding-top="8px" align="center">
              <tr align="center">
                <td padding="0" width="32px">
                  <a style="color:#161616"
                    href="${article6["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                  >
                    <img
                      src="${article6["avatar"]}"
                      style="
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        padding: 0;
                        margin: 0;
                      "
                  /></a>
                </td>
                <td align="left">
                  <a style="color:#161616"
                    href="${article6["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                  >
                    <p style="margin: 0 0 5px 12px; line-height: 16px">
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-size: 14px;
                          font-weight: 700;
                          color: #161616;
                        "
                        >${article6["author"]} </span
                      ><br />
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-weight: 400;
                          font-size: 12px;
                          color: #b5b5b5;
                        "
                        >${article6["createdDay"]}</span
                      >
                    </p></a
                  >
                </td>
              </tr>
            </mj-table>
          </mj-column>
        </mj-group>
      </mj-section>
    </mj-wrapper>
    <!-- article3 -->
    <mj-wrapper>
      <mj-section
        background-color="rgba(227, 235, 246, 0.25)"
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="20px"
            padding-bottom="0px"
            padding-top="0px"
            padding="10px 25px"
          >
            <p
              class="text-build-content"
              style="
                text-align: center;
                margin: 10px 0;
                margin-top: 10px;
                margin-bottom: 10px;
              "
              data-testid="voSIqIxP8"
            >
              <span
                style="
                  color: #161616;
                  font-family: Raleway, Arial, sans-serif;
                  font-size: 20px;
                "
                ><b>Cây viết nổi bật</b></span
              >
            </p>
          </mj-text>
          <mj-divider
            border-color="#c4c4c4"
            border-style="solid"
            border-width="1px"
            padding-bottom="18px"
            padding-left="27px"
            padding-right="27px"
            padding-top="6px"
            padding="6px 27px 18px 27px"
            width="100%"
          ></mj-divider>
          <mj-image
            align="center"
            alt="Ảnh Spiderum"
            border="none"
            height="auto"
            href="${url7}"
            padding-left="35px"
            padding-right="35px"
            padding-top="0px"
            padding="0px 35px 10px 35px"
            src="${article7["img"]}"
            target="_blank"
            title=""
            width="1200px"
          ></mj-image>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="14px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="jLgNPaaod"
              style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px"
            >
              <span
                style="
                  text-transform: uppercase;
                  color: #55575d;
                  font-family: Noto Sans, Arial, sans-serif;
                  font-size: 14px;
                "
                ><a style="color:#161616"
                  href="${article7["categoryLink"]}"
                  target="_blank"
                  rel="noopener norefer"
                  >${article7["category"]}</a
                ></span
              >
            </p>
          </mj-text>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="20px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="89ECIjn7L"
              style="margin: 0"
            >
              <span
                style="
                  color: #161616;
                  font-family: Raleway, Arial, sans-serif;
                  font-size: 20px;
                  line-height: 25px;
                "
                ><b
                  ><a style="color:#161616" style="color:#161616" href="${url7}" target="_blank" rel="noopener norefer"
                    >${article7["title"]}</a
                  ></b
                ></span
              >
            </p>
          </mj-text>
          <mj-text
            align="left"
            color="#000000"
            font-family="Arial, sans-serif"
            font-size="16px"
            padding-bottom="0px"
            padding-left="43px"
            padding-right="43px"
            padding-top="0px"
            padding="0px 43px 0px 43px"
          >
            <p
              class="text-build-content"
              data-testid="_Ak57IbVT"
              style="margin: 12px 0 10 0; line-height: 21px"
            >
              <span
                style="
                  color: #161616;
                  font-family: Noto Sans, Arial, sans-serif;
                  font-size: 16px;
                "
                ><a style="color:#161616" style="color:#161616" href="${url7}" target="_blank" rel="noopener norefer">
                  ${article7["description"]}</a
                ></span
              >
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="43px"
        padding-right="43px"
        padding-top="8px"
        padding="8px 43px 0px 43px"
        text-align="center"
      >
        <mj-column>
          <mj-table padding="0px" align="center">
            <tr align="center">
              <td padding="0" width="32px">
                <a style="color:#161616"
                  href="${article7["authorLink"]}"
                  target="_blank"
                  rel="noopener nofollow"
                  ><img
                    src="${article7["avatar"]}"
                    style="
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      padding: 0;
                      margin: 0;
                    "
                /></a>
              </td>
              <td align="left">
                <p style="margin: 0 0 5px 12px; line-height: 16px">
                  <a style="color:#161616"
                    href="${article7["authorLink"]}"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <span
                      style="
                        font-family: 'Noto Sans', Arial, sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #161616;
                      "
                      >${article7["author"]}</span
                    ><br />
                    <span
                      style="
                        font-family: 'Noto Sans', Arial, sans-serif;
                        font-weight: 400;
                        font-size: 12px;
                        color: #b5b5b5;
                      "
                      >${article7["createdDay"]}</span
                    ></a
                  >
                </p>
              </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-divider
            border-color="#e3e3e3"
            border-style="solid"
            border-width="1px"
            padding-bottom="16px"
            padding-left="35px"
            padding-right="35px"
            padding-top="20px"
            padding="20px 35px 16px 35px"
            width="100%"
          ></mj-divider>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="15px"
        padding-left="35px"
        padding-right="35px"
        padding-top="10px"
        padding="10px 35px 15px 35px"
        text-align="center"
      >
        <mj-group>
          <mj-column width="33%">
            <mj-image
              align="center"
              alt=""
              border-radius="3px"
              border="none"
              height="auto"
              href="${url8}"
              padding-left="0px"
              padding-right="0px"
              padding-top="0px"
              padding="0px 0px 10px 0px"
              src="${article8["img"]}"
              target="_blank"
              title=""
              width="700px"
            ></mj-image>
          </mj-column>
          <mj-column width="67%">
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="14px"
              padding-bottom="0px"
              padding-top="0px"
              padding="10px 25px"
            >
              <p
                class="text-build-content"
                data-testid="nsUmNTtyU"
                style="margin: 3px 0 4px 0"
              >
                <span
                  style="
                    text-transform: uppercase;
                    color: #55575d;
                    font-family: Noto Sans, Arial, sans-serif;
                    font-size: 12px;
                  "
                  ><a style="color:#161616"
                    href="${article8["categoryLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    >${article8["category"]}</a
                  ></span
                >
              </p>
            </mj-text>
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="16px"
              padding-bottom="0px"
              padding-left="25px"
              padding-right="25px"
              padding-top="0px"
              padding="0px 25px 0px 25px"
            >
              <p
                class="text-build-content"
                data-testid="rONVzgIrML"
                style="margin: 10px 0; margin-top: 10px; margin-bottom: 10px"
              >
                <span
                  style="
                    color: #161616;
                    font-family: Raleway, Arial, sans-serif;
                    font-size: 16px;
                    line-height: 22px;
                  "
                  ><b
                    ><a style="color:#161616" style="color:#161616" href="${url8}" target="_blank" rel="noopener norefer"
                      >${article8["title"]}</a
                    ></b
                  ></span
                >
              </p>
            </mj-text>
            <!-- author card -->
            <mj-table padding-top="8px" align="center">
              <tr align="center">
                <td padding="0" width="32px">
                  <a style="color:#161616"
                    href="${article8["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    ><img
                      src="${article8["avatar"]}"
                      style="
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        padding: 0;
                        margin: 0;
                      "
                  /></a>
                </td>
                <td align="left">
                  <p style="margin: 0 0 5px 12px; line-height: 16px">
                    <a style="color:#161616"
                      href="${article8["authorLink"]}"
                      target="_blank"
                      rel="noopener norefer"
                    >
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-size: 14px;
                          font-weight: 700;
                          color: #161616;
                        "
                        >${article8["author"]}</span
                      ><br />
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-weight: 400;
                          font-size: 12px;
                          color: #b5b5b5;
                        "
                        >${article8["createdDay"]}</span
                      ></a
                    >
                  </p>
                </td>
              </tr>
            </mj-table>
          </mj-column>
        </mj-group>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
        padding-top="0px"
        padding="0px 0px 0px 0px"
        text-align="center"
      >
        <mj-column>
          <mj-divider
            border-color="#e3e3e3"
            border-style="solid"
            border-width="1px"
            padding-bottom="16px"
            padding-left="35px"
            padding-right="35px"
            padding-top="10px"
            padding="10px 35px 16px 35px"
            width="100%"
          ></mj-divider>
        </mj-column>
      </mj-section>
      <mj-section
        background-repeat="repeat"
        padding-bottom="30px"
        padding-left="35px"
        padding-right="35px"
        padding-top="16px"
        padding="16px 35px 30px 35px"
        text-align="center"
      >
        <mj-group>
          <mj-column width="33%">
            <mj-image
              align="center"
              alt=""
              border-radius="3px"
              border="none"
              height="auto"
              href="${url9}"
              padding-left="0px"
              padding-right="0px"
              padding-top="0px"
              padding="0px 0px 10px 0px"
              src="${article9["img"]}"
              target="_blank"
              title=""
              width="700px"
            ></mj-image>
          </mj-column>
          <mj-column width="67%">
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="14px"
              padding-bottom="0px"
              padding-top="0px"
              padding="10px 25px"
            >
              <p
                class="text-build-content"
                style="
                  line-height: 10px;
                  margin: 10px 0;
                  margin-top: 10px;
                  margin-bottom: 10px;
                "
                data-testid="nsUmNTtyU"
              >
                <span
                  style="
                    text-transform: uppercase;
                    color: #55575d;
                    font-family: Noto Sans, Arial, sans-serif;
                    font-size: 12px;
                  "
                  ><a style="color:#161616"
                    href="${article9["categoryLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                    >${article9["category"]}</a
                  ></span
                >
              </p>
            </mj-text>
            <mj-text
              align="left"
              color="#000000"
              font-family="Arial, sans-serif"
              font-size="16px"
              padding-bottom="0px"
              padding-left="25px"
              padding-right="25px"
              padding-top="0px"
              padding="0px 25px 0px 25px"
            >
              <p
                class="text-build-content"
                data-testid="nxYBqWr5T"
                style="margin: 3px 0 4px 0"
              >
                <span
                  style="
                    color: #161616;
                    font-family: Raleway, Arial, sans-serif;
                    font-size: 16px;
                    line-height: 22px;
                  "
                  ><b
                    ><a style="color:#161616" style="color:#161616" href="${url9}" target="_blank" rel="noopener norefer"
                      >${article9["title"]}</a
                    ></b
                  ></span
                >
              </p>
            </mj-text>
            <mj-table padding-top="8px" align="center">
              <tr align="center">
                <td padding="0" width="32px">
                  <a style="color:#161616"
                    href="${article9["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                  >
                    <img
                      src="${article9["avatar"]}"
                      style="
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        padding: 0;
                        margin: 0;
                      "
                  /></a>
                </td>
                <td align="left">
                  <a style="color:#161616"
                    href="${article9["authorLink"]}"
                    target="_blank"
                    rel="noopener norefer"
                  >
                    <p style="margin: 0 0 5px 12px; line-height: 16px">
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-size: 14px;
                          font-weight: 700;
                          color: #161616;
                        "
                        >${article9["author"]} </span
                      ><br />
                      <span
                        style="
                          font-family: 'Noto Sans', Arial, sans-serif;
                          font-weight: 400;
                          font-size: 12px;
                          color: #b5b5b5;
                        "
                        >${article9["createdDay"]}</span
                      >
                    </p></a
                  >
                </td>
              </tr>
            </mj-table>
          </mj-column>
        </mj-group>
      </mj-section>
    </mj-wrapper>
    <!-- footer -->
    <mj-section background-color="#3398D4" padding="0">
      <mj-column css-class="column-80" width="90%" padding="10px 0 0 0">
        <mj-text
          align="center"
          font-family="Noto Sans, sans-serif"
          line-height="21.9px"
          color="#FFFFFF"
          font-size="16px"
          font-weight="700"
          font-family="Noto sans,Arial,sans-serif"
        >
          <p class="text" style="margin: 0px">
            Follow ngay Spiderum để đọc thêm nhiều thông tin thú vị!
          </p>
        </mj-text>
      </mj-column>
      <mj-column width="100%" padding="0"> </mj-column>
      <mj-column css-class="icon-container" width="100%" padding="0">
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
    <!-- Info -->
    <mj-section>
      <mj-column css-class="column-90" width="87.5%">
        <mj-text
          align="center"
          font-size="12px"
          line-height="20px"
          font-family="Noto Sans,Arial,sans-serif"
        >
          <p style="margin: 0">
            Theo dõi những chủ đề bạn quan tâm hoặc bỏ theo dõi chúng
            <a 
              class="link-blue"
              href="[[UNSUB_LINK_EN]]"
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
            <span style="font-weight: 700">Địa chỉ: </span> Tầng 5, 1/186 đường
            Bưởi, Cống Vị, Ba Đình, Hà Nội
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