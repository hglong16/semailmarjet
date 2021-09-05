"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
var fs = require("fs");
var readline = require("readline");
var writeStream = fs.createWriteStream("DONE.mjml");
var url = ["0"];
var url1;
var url2;
var url3;
var url4;
var url5;
var url6;
var url7;
var url8;
var url9;
var readF = function () { return __awaiter(void 0, void 0, void 0, function () {
    var file, rl, rl_1, rl_1_1, line, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                file = fs.createReadStream("URL.txt");
                rl = readline.createInterface({
                    input: file,
                    crlfDelay: Infinity
                });
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, 7, 12]);
                rl_1 = __asyncValues(rl);
                _b.label = 2;
            case 2: return [4 /*yield*/, rl_1.next()];
            case 3:
                if (!(rl_1_1 = _b.sent(), !rl_1_1.done)) return [3 /*break*/, 5];
                line = rl_1_1.value;
                url.push(line);
                _b.label = 4;
            case 4: return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 12];
            case 6:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 7:
                _b.trys.push([7, , 10, 11]);
                if (!(rl_1_1 && !rl_1_1.done && (_a = rl_1["return"]))) return [3 /*break*/, 9];
                return [4 /*yield*/, _a.call(rl_1)];
            case 8:
                _b.sent();
                _b.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 11: return [7 /*endfinally*/];
            case 12: return [2 /*return*/];
        }
    });
}); };
var getS = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var res, $, title, author, authorLink, category, categoryLink, description, createdDay, img, avatar, b;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get(url)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, cheerio_1["default"].load(res.data)];
            case 2:
                $ = _a.sent();
                title = $("title").text();
                author = $(".author-info > a").text();
                authorLink = $(".author-info > a").attr("href");
                category = $(".category > a").text();
                categoryLink = $(".category > a").attr("href");
                description = $('meta[name="description"]').attr("content");
                createdDay = $(".created-day").text();
                img = $("meta[property='og:image']").attr("content");
                avatar = $("avatar> a > img").attr("src");
                b = {
                    title: title,
                    author: author,
                    authorLink: "https://spiderum.com" + authorLink,
                    category: category,
                    categoryLink: "https://spiderum.com" + categoryLink,
                    description: description,
                    createdDay: createdDay,
                    img: img,
                    avatar: avatar
                };
                console.log(b);
                return [2 /*return*/, b];
        }
    });
}); };
var crawl = function () { return __awaiter(void 0, void 0, void 0, function () {
    var article1, article2, article3, article4, article5, article6, article7, article8, article9, vltn;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getS(url1).then(function (s) {
                    return s;
                })];
            case 1:
                article1 = _a.sent();
                return [4 /*yield*/, getS(url2).then(function (s) {
                        return s;
                    })];
            case 2:
                article2 = _a.sent();
                return [4 /*yield*/, getS(url3).then(function (s) {
                        return s;
                    })];
            case 3:
                article3 = _a.sent();
                return [4 /*yield*/, getS(url4).then(function (s) {
                        return s;
                    })];
            case 4:
                article4 = _a.sent();
                return [4 /*yield*/, getS(url5).then(function (s) {
                        return s;
                    })];
            case 5:
                article5 = _a.sent();
                return [4 /*yield*/, getS(url6).then(function (s) {
                        return s;
                    })];
            case 6:
                article6 = _a.sent();
                return [4 /*yield*/, getS(url7).then(function (s) {
                        return s;
                    })];
            case 7:
                article7 = _a.sent();
                return [4 /*yield*/, getS(url8).then(function (s) {
                        return s;
                    })];
            case 8:
                article8 = _a.sent();
                return [4 /*yield*/, getS(url9).then(function (s) {
                        return s;
                    })];
            case 9:
                article9 = _a.sent();
                vltn = "<mjml>\n  <mj-head>\n    <mj-breakpoint width=\"384px\" />\n    <mj-style>\n      * { -webkit-box-sizing: border-box !important; box-sizing: border-box\n      !important; } .confuse { background-color: #f9f9f9 !important; } .confuse\n      * { margin: 0 !important; padding: 0 !important; } .icon-container table {\n      text-align: center !important; } a { text-decoration: none !important; }\n      a:hover p, img:hover, a:hover { opacity: 0.7 !important; } .logo-spiderum\n      { margin: 27px 0 22px 0 !important; } @media (min-width: 385px) {\n      .logo-spiderum { margin-bottom: 8px !important; } } .heading-top {\n      font-family: Noto Serif; font-size: 32px; font-style: normal; font-weight:\n      400; line-height: 44px; letter-spacing: 0em; text-align: center; margin:\n      0px 30px 24px 30px !important; } @media (min-width: 385px) { .heading-top\n      { font-family: Noto Serif; font-size: 42px; font-style: normal;\n      font-weight: 500; line-height: 57px; letter-spacing: 0em; text-align:\n      center; margin: 0 10% 30px 10% !important; } } .user-container { display:\n      -webkit-box !important; display: -ms-flexbox !important; display: flex\n      !important; -webkit-box-align: center !important; -ms-flex-align: center\n      !important; align-items: center !important; -webkit-box-pack: center\n      !important; -ms-flex-pack: center !important; justify-content: center\n      !important; height: 36px !important; margin: 0 0 62px 0 !important; }\n      .user-container img { width: 32px !important; height: 32px; border-radius:\n      50% !important; } @media (min-width: 385px) { .user-container { margin: 0\n      0 32px 0 !important; } } .sub-author-container { text-align: left\n      !important; line-height: 16px !important; height: 36px !important; margin:\n      3px 0 0 12px !important; } .sub-author-container p { width: auto\n      !important; font-size: 14px !important; color: #161616 !important;\n      font-family: \"Noto Sans\", sans-serif !important; } .sub-author-container\n      .author-id { font-size: 12px !important; color: #616161 !important;\n      font-family: \"Noto Sans\", sans-serif !important; line-height: 14px\n      !important; } .main-hr { padding: 12px 20px 25px 20px !important; } @media\n      (min-width: 385px) { .main-hr { padding: 12px 27px 25px 27px !important; }\n      } .content { padding: 0 20.5px 0 20.5px !important; } @media (min-width:\n      385px) { .content { padding: 0 6.3% 0 6.3% !important; } } .title-top {\n      font-family: Raleway; font-size: 32px; font-style: normal; font-weight:\n      700; line-height: 38px; letter-spacing: 0em; text-align: left; color:\n      #3398d4; } .category { font-family: Noto Sans; font-size: 12px;\n      font-style: normal; font-weight: 700; line-height: 16px; letter-spacing:\n      0em; text-align: left; color: #3398d4; padding: 12px 0 12px 0 !important;\n      } .category .info { color: #b5b5b5; font-weight: 700; } .main-content {\n      font-family: Noto Sans; font-size: 16px; font-style: normal; font-weight:\n      400; line-height: 22px; letter-spacing: 0em; text-align: left; padding: 0\n      0 48px 0 !important; } @media (min-width: 385px) { .main-content {\n      padding: 0 0 56px 0 !important; } } .article { padding: 0 20px 0 20px\n      !important; } @media (min-width: 385px) { .article { padding: 0 5.1% 0\n      5.1% !important; } } .author-container { -webkit-box-align: center\n      !important; -ms-flex-align: center !important; align-items: center\n      !important; -webkit-box-pack: left !important; -ms-flex-pack: left\n      !important; justify-content: left !important; padding: 0 20px 0 20px\n      !important; margin: 0 !important; } @media (min-width: 385px) {\n      .author-container { margin: 0px !important; padding: 0 5.1% 0 5.1%\n      !important; } } .author-container .author-id { color: #b5b5b5 !important;\n      } .author-container .sub-author-container { margin: 3px 0 0 12px\n      !important; } .article-img { padding: 11px 0 11px 0 !important; } @media\n      (min-width: 385px) { .article-img { padding: 10px 0 17px 0 !important; } }\n      .text-article .category a { font-family: Noto Sans; font-size: 12px;\n      font-style: normal; font-weight: 400; line-height: 16px; letter-spacing:\n      0em; text-align: left; color: #616161 !important; padding: 0px !important;\n      } .title-article { font-family: Raleway; font-size: 20px; font-style:\n      normal; font-weight: 700; line-height: 25px; letter-spacing: 0em;\n      text-align: left; color: #161616 !important; margin: 10px 0 16px 0\n      !important; } @media (min-width: 385px) { .title-article { margin-top:\n      12px !important; } } .description-article { font-family: Noto Sans;\n      font-size: 16px; font-style: normal; font-weight: 400; line-height: 22px;\n      letter-spacing: 0em; text-align: left; color: #616161 !important; } @media\n      (min-width: 385px) { .description-article { color: #161616 !important; } }\n      .link-article { font-family: Noto Sans; font-size: 16px; font-style:\n      normal; font-weight: 700; line-height: 22px; letter-spacing: 0em;\n      text-align: left; color: #3398d4 !important; padding-top: 16px !important;\n      } .sub-hr { width: 89.54% !important; padding: 11px 0 10px 0 !important; }\n      @media (min-width: 385px) { .sub-hr { width: 92.7% !important; padding:\n      17px 0 26px 0 !important; } } .link-article-bot { margin-bottom: 19px\n      !important; } @media (min-width: 385px) { .link-article-bot {\n      margin-bottom: 23px !important; } } .column-80 { width: 80% !important; }\n      .column-80 p { margin: 16px 0 0 0 !important; } .column-90 { width: 90%\n      !important; } .column-90 p { margin: 5px !important; } .icon-container {\n      text-align: center !important; margin: 10px 0 16px 0 !important; }\n      .icon-container tr { text-align: center !important; display: inline\n      !important; margin: 2px !important; } .company { padding: 17px 0 0 0\n      !important; } .logo-company { padding: 8px 0 25px 0 !important; } /*#\n      sourceMappingURL=final2.css.map */\n    </mj-style>\n    <mj-font\n      name=\"Noto Serif\"\n      href=\"https://fonts.googleapis.com/css2?family=Noto+Serif:wght@0,400;0,700;1,400;1,700&display=swap\"\n    />\n    <mj-font\n      name=\"Noto Sans\"\n      href=\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap\"\n    />\n    <mj-font\n      name=\"Raleway\"\n      href=\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap\"\n    />\n    <mj-attributes>\n      <mj-all padding=\"0px\" align=\"center\" />\n      <mj-section background-color=\"#f9f9f9\"> </mj-section>\n      <mj-text color=\"#161616\" text-decoration=\"none\"> </mj-text>\n    </mj-attributes>\n  </mj-head>\n  <mj-body width=\"680px\">\n    <!-- Heading -->\n    <mj-wrapper css-class=\"confuse\">\n      <mj-section css-class=\"\">\n        <mj-column css-class=\"logo-spiderum\" width=\"100%\" padding=\"27px 0 0 0\">\n          <mj-image\n            src=\"https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/fcc1d6600d9611ec989ecdbb5e35c5a8.png\"\n            alt=\"Spiderum log\"\n            width=\"166px\"\n            height=\"166px\"\n          />\n        </mj-column>\n        <mj-column css-class=\"big-title\" width=\"80%\" padding=\"22px 0 0 0\">\n          <mj-text>\n            <p class=\"heading heading-top\">\n              Nh\u1EEFng b\u00E0i vi\u1EBFt th\u00FA v\u1ECB t\u1EEB Spiderum.\n            </p>\n          </mj-text>\n        </mj-column>\n        <!-- user-card -->\n        <mj-column css-class=\"user-card\" width=\"100%\" padding=\"22px 0 50px 0\">\n          <mj-raw>\n            <div class=\"user-container\">\n              <div class=\"img-card\">\n                <img\n                  src=\"https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-avatar/953eeaa0096811ec9ec5131d8341f662.jpeg\"\n                  alt=\"\"\n                />\n              </div>\n              <div class=\"sub-author-container\">\n                <p class=\"author-name\">\n                  Danh cho\n                  <span style=\"font-weight: 700\">Thcccc sad acccc</span>\n                </p>\n                <p class=\"author-id\">@nguudau</p>\n              </div>\n            </div>\n          </mj-raw>\n        </mj-column>\n      </mj-section>\n    </mj-wrapper>\n    <!-- * card content -->\n    <mj-wrapper css-class=\"confuse\">\n      <!-- main hr -->\n      <mj-section\n        background-color=\"rgba(227, 235, 246, 0.25)\"\n        css-class=\"blue-25\"\n      >\n        <mj-column width=\"100%\" css-class=\"main-hr\">\n          <mj-divider border-width=\"1px\" border-color=\"#616161\" />\n        </mj-column>\n        <!-- Thu ngo -->\n        <mj-column width=\"100%\" css-class=\"content\">\n          <mj-text>\n            <p class=\"title-top\">\n              Molestie diam sagittis, tempor pulvinar vestibulum in egestas id\n              viverra. Dolor adipiscing dignissim\n            </p>\n            <p class=\"category\">\n              EDITOR\u2019S NOTE <span class=\"info\"> | Granny Tan</span>\n            </p>\n            <p class=\"main-content\">\n              Luctus at tristique et orci pulvinar egestas fringilla. Egestas\n              nunc integer venenatis ut tellus sit nibh consectetur. Sit diam\n              tempor ac sed sollicitudin hendrerit tristique. Amet elit eget\n              imperdiet fermentum varius. Amet vestibulum massa euismod mauris\n              in amet vitae cursus nibh. Bibendum amet non volutpat urna, amet.\n              Vulputate elit posuere volutpat dictum eget orci amet venenatis.\n              Dapibus amet cursus semper in scelerisque.\n            </p>\n          </mj-text>\n        </mj-column>\n\n        <!-- article card -->\n\n        <!-- article card -->\n        <mj-column css-class=\"user-card\" width=\"100%\" padding=\"22px 0 50px 0\">\n          <mj-raw>\n            <a href=\"" + article1["authorLink"] + "\">\n              <div class=\"content user-container author-container\">\n                <div class=\"img-card\">\n                  <img src=\"" + article1["avatar"] + "\" alt=\"\" />\n                </div>\n                <div class=\"sub-author-container\">\n                  <p class=\"author-name\">\n                    <span style=\"font-weight: 700\">" + article1["author"] + "</span>\n                  </p>\n                  <p class=\"author-id\">" + article1["createdDay"] + "</p>\n                </div>\n              </div>\n            </a>\n          </mj-raw>\n          <!-- author card -->\n        </mj-column>\n\n        <!-- article image -->\n        <mj-column width=\"100%\" css-class=\"article\">\n          <mj-image\n            css-class=\"article-img \"\n            src=\"" + article1["img"] + "\"\n            alt=\"\"\n            href=\"" + url1 + "\"\n          />\n          <mj-text css-class=\"text-article\">\n            <p class=\"category\">\n              <a href=\"" + article1["categoryLink"] + "\"\n                >" + article1["category"] + "<span class=\"info\"> </span\n              ></a>\n            </p>\n\n            <!-- title article -->\n            <a href=\"" + url1 + "\">\n              <p class=\"title-article\">" + article1["title"] + "</p>\n\n              <!-- description article -->\n              <p class=\"description-article\">" + article1["description"] + "</p>\n\n              <p class=\"link-article\">\u0110\u1ECDc b\u00E0i vi\u1EBFt t\u1EA1i \u0111\u00E2y.</p>\n            </a>\n          </mj-text>\n        </mj-column>\n        <mj-column width=\"89.58%\" css-class=\"sub-hr\">\n          <mj-divider\n            border-width=\"1px\"\n            border-color=\"rgba(227, 227, 227, 1)\"\n          />\n        </mj-column>\n        <!-- end article -->\n\n        <!-- article card -->\n        <mj-column css-class=\"user-card\" width=\"100%\" padding=\"22px 0 50px 0\">\n          <mj-raw>\n            <a href=\"" + article2["authorLink"] + "\">\n              <div class=\"content user-container author-container\">\n                <div class=\"img-card\">\n                  <img src=\"" + article2["avatar"] + "\" alt=\"\" />\n                </div>\n                <div class=\"sub-author-container\">\n                  <p class=\"author-name\">\n                    <span style=\"font-weight: 700\">" + article2["author"] + "</span>\n                  </p>\n                  <p class=\"author-id\">" + article2["createdDay"] + "</p>\n                </div>\n              </div>\n            </a>\n          </mj-raw>\n          <!-- author card -->\n        </mj-column>\n\n        <!-- article image -->\n        <mj-column width=\"100%\" css-class=\"article\">\n          <mj-image\n            css-class=\"article-img \"\n            src=\"" + article2["img"] + "\"\n            alt=\"\"\n            href=\"" + url2 + "\"\n          />\n          <mj-text css-class=\"text-article\">\n            <p class=\"category\">\n              <a href=\"" + article2["categoryLink"] + "\"\n                >" + article2["category"] + "<span class=\"info\"> </span\n              ></a>\n            </p>\n            <!-- title article -->\n            <a href=\"" + url2 + "\">\n              <p class=\"title-article\">" + article2["title"] + "</p>\n\n              <!-- description article -->\n              <p class=\"description-article\">" + article2["description"] + "</p>\n\n              <p class=\"link-article\">\u0110\u1ECDc b\u00E0i vi\u1EBFt t\u1EA1i \u0111\u00E2y.</p>\n            </a>\n          </mj-text>\n        </mj-column>\n        <mj-column width=\"89.58%\" css-class=\"sub-hr\">\n          <mj-divider\n            border-width=\"1px\"\n            border-color=\"rgba(227, 227, 227, 1)\"\n          />\n        </mj-column>\n        <!-- end article -->\n\n        <!-- article card -->\n        <mj-column css-class=\"user-card\" width=\"100%\" padding=\"22px 0 50px 0\">\n          <mj-raw>\n            <a href=\"" + article3["authorLink"] + "\">\n              <div class=\"content user-container author-container\">\n                <div class=\"img-card\">\n                  <img src=\"" + article3["avatar"] + "\" alt=\"\" />\n                </div>\n                <div class=\"sub-author-container\">\n                  <p class=\"author-name\">\n                    <span style=\"font-weight: 700\">" + article3["author"] + "</span>\n                  </p>\n                  <p class=\"author-id\">" + article3["createdDay"] + "</p>\n                </div>\n              </div>\n            </a>\n          </mj-raw>\n          <!-- author card -->\n        </mj-column>\n\n        <!-- article image -->\n        <mj-column width=\"100%\" css-class=\"article\">\n          <mj-image\n            css-class=\"article-img \"\n            src=\"" + article3["img"] + "\"\n            alt=\"\"\n            href=\"" + url3 + "\"\n          />\n          <mj-text css-class=\"text-article\">\n            <p class=\"category\">\n              <a href=\"" + article3["categoryLink"] + "\"\n                >" + article3["category"] + "<span class=\"info\"> </span\n              ></a>\n            </p>\n            <!-- title article -->\n            <a href=\"" + url3 + "\">\n              <p class=\"title-article\">" + article3["title"] + "</p>\n\n              <!-- description article -->\n              <p class=\"description-article\">" + article3["description"] + "</p>\n\n              <p class=\"link-article\">\u0110\u1ECDc b\u00E0i vi\u1EBFt t\u1EA1i \u0111\u00E2y.</p>\n            </a>\n          </mj-text>\n        </mj-column>\n        <mj-column width=\"89.58%\" css-class=\"sub-hr\">\n          <mj-divider\n            border-width=\"1px\"\n            border-color=\"rgba(227, 227, 227, 1)\"\n          />\n        </mj-column>\n        <!-- end article -->\n\n        <!-- article card -->\n        <mj-column css-class=\"user-card\" width=\"100%\" padding=\"22px 0 50px 0\">\n          <mj-raw>\n            <a href=\"" + article4["authorLink"] + "\">\n              <div class=\"content user-container author-container\">\n                <div class=\"img-card\">\n                  <img src=\"" + article4["avatar"] + "\" alt=\"\" />\n                </div>\n                <div class=\"sub-author-container\">\n                  <p class=\"author-name\">\n                    <span style=\"font-weight: 700\">" + article4["author"] + "</span>\n                  </p>\n                  <p class=\"author-id\">" + article4["createdDay"] + "</p>\n                </div>\n              </div>\n            </a>\n          </mj-raw>\n          <!-- author card -->\n        </mj-column>\n\n        <!-- article image -->\n        <mj-column width=\"100%\" css-class=\"article\">\n          <mj-image\n            css-class=\"article-img \"\n            src=\"" + article4["img"] + "\"\n            alt=\"\"\n            href=\"" + url4 + "\"\n          />\n          <mj-text css-class=\"text-article\">\n            <p class=\"category\">\n              <a href=\"" + article4["categoryLink"] + "\"\n                >" + article4["category"] + "<span class=\"info\"> </span\n              ></a>\n            </p>\n            <!-- title article -->\n            <a href=\"" + url4 + "\">\n              <p class=\"title-article\">" + article4["title"] + "</p>\n\n              <!-- description article -->\n              <p class=\"description-article\">" + article4["description"] + "</p>\n\n              <p class=\"link-article\">\u0110\u1ECDc b\u00E0i vi\u1EBFt t\u1EA1i \u0111\u00E2y.</p>\n            </a>\n          </mj-text>\n        </mj-column>\n        <mj-column width=\"89.58%\" css-class=\"sub-hr\">\n          <mj-divider\n            border-width=\"1px\"\n            border-color=\"rgba(227, 227, 227, 1)\"\n          />\n        </mj-column>\n        <!-- end article -->\n\n        <!-- article card -->\n        <mj-column css-class=\"user-card\" width=\"100%\" padding=\"22px 0 50px 0\">\n          <mj-raw>\n            <a href=\"" + article5["authorLink"] + "\">\n              <div class=\"content user-container author-container\">\n                <div class=\"img-card\">\n                  <img src=\"" + article5["avatar"] + "\" alt=\"\" />\n                </div>\n                <div class=\"sub-author-container\">\n                  <p class=\"author-name\">\n                    <span style=\"font-weight: 700\">" + article5["author"] + "</span>\n                  </p>\n                  <p class=\"author-id\">" + article5["createdDay"] + "</p>\n                </div>\n              </div>\n            </a>\n          </mj-raw>\n          <!-- author card -->\n        </mj-column>\n\n        <!-- article image -->\n        <mj-column width=\"100%\" css-class=\"article\">\n          <mj-image\n            css-class=\"article-img \"\n            src=\"" + article5["img"] + "\"\n            alt=\"\"\n            href=\"" + url5 + "\"\n          />\n          <mj-text css-class=\"text-article\">\n            <p class=\"category\">\n              <a href=\"" + article5["categoryLink"] + "\"\n                >" + article5["category"] + "<span class=\"info\"> </span\n              ></a>\n            </p>\n            <!-- title article -->\n            <a href=\"" + url5 + "\">\n              <p class=\"title-article\">" + article5["title"] + "</p>\n\n              <!-- description article -->\n              <p class=\"description-article\">" + article5["description"] + "</p>\n\n              <p class=\"link-article\">\u0110\u1ECDc b\u00E0i vi\u1EBFt t\u1EA1i \u0111\u00E2y.</p>\n            </a>\n          </mj-text>\n        </mj-column>\n        <mj-column width=\"89.58%\" css-class=\"sub-hr\">\n          <mj-divider\n            border-width=\"1px\"\n            border-color=\"rgba(227, 227, 227, 1)\"\n          />\n        </mj-column>\n        <!-- end article -->\n\n        <!-- article card -->\n        <mj-column css-class=\"user-card\" width=\"100%\" padding=\"22px 0 50px 0\">\n          <mj-raw>\n            <a href=\"" + article6["authorLink"] + "\">\n              <div class=\"content user-container author-container\">\n                <div class=\"img-card\">\n                  <img src=\"" + article6["avatar"] + "\" alt=\"\" />\n                </div>\n                <div class=\"sub-author-container\">\n                  <p class=\"author-name\">\n                    <span style=\"font-weight: 700\">" + article6["author"] + "</span>\n                  </p>\n                  <p class=\"author-id\">" + article6["createdDay"] + "</p>\n                </div>\n              </div>\n            </a>\n          </mj-raw>\n          <!-- author card -->\n        </mj-column>\n\n        <!-- article image -->\n        <mj-column width=\"100%\" css-class=\"article\">\n          <mj-image\n            css-class=\"article-img \"\n            src=\"" + article6["img"] + "\"\n            alt=\"\"\n            href=\"" + url6 + "\"\n          />\n          <mj-text css-class=\"text-article\">\n            <p class=\"category\">\n              <a href=\"" + article6["categoryLink"] + "\"\n                >" + article6["category"] + "<span class=\"info\"> </span\n              ></a>\n            </p>\n            <!-- title article -->\n            <a href=\"" + url6 + "\">\n              <p class=\"title-article\">" + article6["title"] + "</p>\n\n              <!-- description article -->\n              <p class=\"description-article\">" + article6["description"] + "</p>\n\n              <p class=\"link-article link-article-bot\">\u0110\u1ECDc b\u00E0i vi\u1EBFt t\u1EA1i \u0111\u00E2y.</p>\n            </a>\n          </mj-text>\n        </mj-column>\n\n        <!-- end article -->\n      </mj-section>\n    </mj-wrapper>\n\n    <!-- Social and Footer -->\n    <mj-wrapper css-class=\"confuse\">\n      <!-- Social -->\n      <mj-section background-color=\"#3398D4\">\n        <mj-column css-class=\"column-80\" width=\"77.86%\" padding=\"16px 0 0 0\">\n          <mj-text\n            align=\"center\"\n            font-family=\"Noto Sans, sans-serif\"\n            line-height=\"21.9px\"\n            color=\"#FFFFFF\"\n            font-size=\"16px\"\n            font-weight=\"700\"\n            font-family=\"Noto, sand\"\n            ><p class=\"text\">\n              Follow ngay Spiderum \u0111\u1EC3 \u0111\u1ECDc th\u00EAm nhi\u1EC1u th\u00F4ng tim th\u00FA v\u1ECB!\n            </p></mj-text\n          >\n        </mj-column>\n        <mj-column width=\"100%\"> </mj-column>\n        <mj-column\n          css-class=\"icon-container\"\n          width=\"100%\"\n          padding=\"10px 10px 16px 0px\"\n        >\n          <mj-image\n            css-class=\"social-icon\"\n            src=\"https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/d1d52b500d3c11ec9971cbd2e720387a.png\"\n            alt=\"spiderum\"\n            href=\"https://spiderum.com\"\n            width=\"40px\"\n            border-radius=\"50%\"\n          />\n          <mj-image\n            css-class=\"social-icon\"\n            src=\"https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/716da5200d3d11ec9971cbd2e720387a.png\"\n            alt=\"spiderum\"\n            href=\"https://youtube.com/spiderum\"\n            width=\"40px\"\n            border-radius=\"50%\"\n          />\n          <mj-image\n            css-class=\"social-icon\"\n            src=\"https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/77c443c00d3d11ec9971cbd2e720387a.png\"\n            alt=\"spiderum\"\n            href=\"https://open.spotify.com/show/73NBSJpoAxNyHLYGrraSXd\"\n            width=\"40px\"\n            border-radius=\"50%\"\n          />\n        </mj-column>\n      </mj-section>\n      <!-- Footer -->\n      <mj-section>\n        <mj-column css-class=\"column-90\" width=\"87.5%\">\n          <mj-text\n            align=\"center\"\n            font-size=\"12px\"\n            line-height=\"20px\"\n            font-family=\"Noto Sans,sans-serif\"\n          >\n            <p class=\"text\">\n              Theo d\u00F5i nh\u1EEFng ch\u1EE7 \u0111\u1EC1 b\u1EA1n quan t\u00E2m ho\u1EB7c b\u1ECF theo d\u00F5i ch\u00FAng\n              <a\n                class=\"link-blue\"\n                href=\"/\"\n                style=\"font-weight: 700; color: #3398d4\"\n                >qua \u0111\u00E2y</a\n              >\n            </p>\n            <p class=\"text company\">\n              <span style=\"font-weight: 700\">C\u00D4NG TY C\u1ED4 PH\u1EA6N FELIZZ<br /></span>\n              Tr\u1EF1c th\u1EF1c C\u00F4ng ty C\u1ED5 ph\u1EA7n Spiderum Vi\u1EC7t Nam (Spiderum Vietnam\n              JSC)<br />\n              Ng\u01B0\u1EDDi ch\u1ECBu tr\u00E1ch nhi\u1EC7m n\u1ED9i dung Tr\u1EA7n Vi\u1EC7t Anh<br />\n              Gi\u1EA5y ph\u00E9p MXH s\u1ED1 341/GP-TTTT do B\u1ED9 TTTT c\u1EA5p ng\u00E0y 27 th\u00E1ng 6 n\u0103m\n              2016<br />\n              <span style=\"font-weight: 700\">Li\u00EAn h\u1EC7:</span> 0946.042.093<span\n                style=\"font-weight: 700\"\n              >\n                Email:</span\n              >\n              contact@spiderum.com<br />\n              <span style=\"font-weight: 700\">\u0110\u1ECBa ch\u1EC9: </span> T\u1EA7ng 5, 1/186\n              \u0111\u01B0\u1EDDng B\u01B0\u1EDFi, C\u1ED1ng V\u1ECB, Ba \u0110\u00ECnh, H\u00E0 N\u1ED9i\n            </p>\n            <p class=\"text company\" style=\"font-weight: 700\">\n              \u00A9 2021 C\u00D4NG TY C\u1ED4 PH\u1EA6N FELIZZ\n            </p>\n          </mj-text>\n          <mj-image\n            css-class=\"logo-company\"\n            href=\"https://spiderum.com\"\n            src=\"https://spiderum.com/assets/icons/wideLogo.png\"\n            align=\"center\"\n            padding=\"0 0 25px 0\"\n            width=\"131.94px\"\n            alt=\"spiderumLogo\"\n          />\n        </mj-column>\n      </mj-section>\n    </mj-wrapper>\n  </mj-body>\n</mjml>\n";
                writeStream.write(vltn);
                return [2 /*return*/];
        }
    });
}); };
readF()
    .then(function () {
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
    .then(function () {
    crawl().then(function () { return console.log("DONE"); });
});
