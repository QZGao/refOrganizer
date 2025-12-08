# refOrganizer

專案頁面：[User:SuperGrey/gadgets/refOrganizer](https://zh.wikipedia.org/wiki/User:SuperGrey/gadgets/refOrganizer)

參考文獻整理工具，可快速將參考文獻挪動到 `{{Reflist}}` 模板內，並將文內參照改為 `{{R}}` 模板。

This is an updated version of the original Reference Organizer which sadly doesn't update anymore since 2017. The main changes are:

1. Default naming scheme for unnamed references (or named references starting with :) is now website name (extracted from URL) + two-digit numbering.
2. Supports WikEd.
3. Bug fixes.

This new version defaults outputted citations to use `{{R}}` (which can be customized; see instructions below). `{{R}}` is perfectly supported for people like me who prefer using this than `<ref />`.

## Installation 使用方法

**匯入中文維基百科：** 將如下代碼複製至 [Special:MyPage/common.js](https://zh.wikipedia.org/wiki/Special:MyPage/common.js)：

```js
importScript('User:SuperGrey/gadgets/refOrganizer/main.js');
```

**匯入所有維基媒體專案：** 將如下代碼複製至 [m:Special:MyPage/global.js](https://meta.wikimedia.org/wiki/Special:MyPage/global.js)：

```js
mw.loader.load('//zh.wikipedia.org/w/index.php?title=User:SuperGrey/gadgets/refOrganizer/main.js&action=raw&ctype=text/javascript');
```

**Install the English Version:** Paste the following code to [m:Special:MyPage/global.js](https://meta.wikimedia.org/wiki/Special:MyPage/global.js) (or whichever place you prefer):

```js
mw.loader.load('//zh.wikipedia.org/w/index.php?title=User:SuperGrey/gadgets/refOrganizer/main.en.js&action=raw&ctype=text/javascript');
```

## Customization 自訂教程

如果希望使用 `<ref />` 而非 `{{R}}` 模板，可以在 [Special:MyPage/common.js](https://zh.wikipedia.org/wiki/Special:MyPage/common.js) 或 [m:Special:MyPage/global.js](https://meta.wikimedia.org/wiki/Special:MyPage/global.js)（小工具的安裝位置）中粘貼以下內容：

```js
if ( typeof( refConsolidateConfig ) === 'undefined' ) refConsolidateConfig = {};
refConsolidateConfig.usetemplateR = false;
```

If you wish to use `<ref />` instead of `{{R}}`, paste the above lines on [m:Special:MyPage/global.js](https://meta.wikimedia.org/wiki/Special:MyPage/global.js) (or whichever place you install the script on).

## License

This project is licensed under the following licenses:

- [GNU Free Documentation License 1.3](LICENSE-FDL)
- [Creative Commons Attribution-ShareAlike 3.0 Unported](LICENSE-CC-BY-SA)
- [GNU General Public License 2.0](LICENSE)

This project incorporates code from the following projects:

- ![Wiki](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/Wiki.svg) [en:Wikipedia:ProveIt](https://en.wikipedia.org/wiki/Wikipedia:ProveIt) (CC BY-SA 3.0、GNU GPL 2.0)
- ![Repository](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/Repository.svg) [Cumbril/refcon](https://github.com/Cumbril/refcon) & ![Wiki](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/Wiki.svg) [en:User:Kaniivel/Reference Organizer](https://en.wikipedia.org/wiki/User:Kaniivel/Reference_Organizer) (GNU FDL、CC BY-SA 3.0、GNU GPL 2.0)
  - ![Wiki](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/Wiki.svg) [User:Vozhuo/Tool/Reference Organizer](https://en.wikipedia.org/wiki/User:Vozhuo/Tool/Reference_Organizer)
