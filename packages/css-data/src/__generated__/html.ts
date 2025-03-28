import type { StyleValue } from "@webstudio-is/css-engine";

export const html: Map<string, StyleValue> = new Map([
  ["article:display", { type: "keyword", value: "block" }],
  ["aside:display", { type: "keyword", value: "block" }],
  ["details:display", { type: "keyword", value: "block" }],
  ["div:display", { type: "keyword", value: "block" }],
  ["dt:display", { type: "keyword", value: "block" }],
  ["figcaption:display", { type: "keyword", value: "block" }],
  ["footer:display", { type: "keyword", value: "block" }],
  ["form:display", { type: "keyword", value: "block" }],
  ["header:display", { type: "keyword", value: "block" }],
  ["hgroup:display", { type: "keyword", value: "block" }],
  ["html:display", { type: "keyword", value: "block" }],
  ["main:display", { type: "keyword", value: "block" }],
  ["nav:display", { type: "keyword", value: "block" }],
  ["section:display", { type: "keyword", value: "block" }],
  ["summary:display", { type: "keyword", value: "block" }],
  ["body:display", { type: "keyword", value: "block" }],
  ["body:margin-top", { type: "unit", unit: "px", value: 8 }],
  ["body:margin-right", { type: "unit", unit: "px", value: 8 }],
  ["body:margin-bottom", { type: "unit", unit: "px", value: 8 }],
  ["body:margin-left", { type: "unit", unit: "px", value: 8 }],
  ["p:display", { type: "keyword", value: "block" }],
  ["dl:display", { type: "keyword", value: "block" }],
  ["p:margin-top", { type: "unit", unit: "em", value: 1 }],
  ["dl:margin-top", { type: "unit", unit: "em", value: 1 }],
  ["p:margin-bottom", { type: "unit", unit: "em", value: 1 }],
  ["dl:margin-bottom", { type: "unit", unit: "em", value: 1 }],
  ["dd:display", { type: "keyword", value: "block" }],
  ["dd:margin-left", { type: "unit", unit: "px", value: 40 }],
  ["blockquote:display", { type: "keyword", value: "block" }],
  ["figure:display", { type: "keyword", value: "block" }],
  ["blockquote:margin-top", { type: "unit", unit: "em", value: 1 }],
  ["blockquote:margin-right", { type: "unit", unit: "px", value: 40 }],
  ["blockquote:margin-bottom", { type: "unit", unit: "em", value: 1 }],
  ["blockquote:margin-left", { type: "unit", unit: "px", value: 40 }],
  ["figure:margin-top", { type: "unit", unit: "em", value: 1 }],
  ["figure:margin-right", { type: "unit", unit: "px", value: 40 }],
  ["figure:margin-bottom", { type: "unit", unit: "em", value: 1 }],
  ["figure:margin-left", { type: "unit", unit: "px", value: 40 }],
  ["address:display", { type: "keyword", value: "block" }],
  ["address:font-style", { type: "keyword", value: "italic" }],
  ["h1:display", { type: "keyword", value: "block" }],
  ["h1:font-weight", { type: "keyword", value: "bold" }],
  ["h1:font-size", { type: "unit", unit: "em", value: 2 }],
  ["h1:margin-top", { type: "unit", unit: "em", value: 0.67 }],
  ["h1:margin-bottom", { type: "unit", unit: "em", value: 0.67 }],
  ["h2:display", { type: "keyword", value: "block" }],
  ["h2:font-weight", { type: "keyword", value: "bold" }],
  ["h2:font-size", { type: "unit", unit: "em", value: 1.5 }],
  ["h2:margin-top", { type: "unit", unit: "em", value: 0.83 }],
  ["h2:margin-bottom", { type: "unit", unit: "em", value: 0.83 }],
  ["h3:display", { type: "keyword", value: "block" }],
  ["h3:font-weight", { type: "keyword", value: "bold" }],
  ["h3:font-size", { type: "unit", unit: "em", value: 1.17 }],
  ["h3:margin-top", { type: "unit", unit: "em", value: 1 }],
  ["h3:margin-bottom", { type: "unit", unit: "em", value: 1 }],
  ["h4:display", { type: "keyword", value: "block" }],
  ["h4:font-weight", { type: "keyword", value: "bold" }],
  ["h4:margin-top", { type: "unit", unit: "em", value: 1.33 }],
  ["h4:margin-bottom", { type: "unit", unit: "em", value: 1.33 }],
  ["h5:display", { type: "keyword", value: "block" }],
  ["h5:font-weight", { type: "keyword", value: "bold" }],
  ["h5:font-size", { type: "unit", unit: "em", value: 0.83 }],
  ["h5:margin-top", { type: "unit", unit: "em", value: 1.67 }],
  ["h5:margin-bottom", { type: "unit", unit: "em", value: 1.67 }],
  ["h6:display", { type: "keyword", value: "block" }],
  ["h6:font-weight", { type: "keyword", value: "bold" }],
  ["h6:font-size", { type: "unit", unit: "em", value: 0.67 }],
  ["h6:margin-top", { type: "unit", unit: "em", value: 2.33 }],
  ["h6:margin-bottom", { type: "unit", unit: "em", value: 2.33 }],
  ["pre:display", { type: "keyword", value: "block" }],
  ["pre:white-space-collapse", { type: "keyword", value: "preserve" }],
  ["pre:text-wrap-mode", { type: "keyword", value: "nowrap" }],
  ["pre:margin-top", { type: "unit", unit: "em", value: 1 }],
  ["pre:margin-bottom", { type: "unit", unit: "em", value: 1 }],
  ["table:display", { type: "keyword", value: "table" }],
  ["table:border-spacing", { type: "unit", unit: "px", value: 2 }],
  ["table:border-collapse", { type: "keyword", value: "separate" }],
  ["table:box-sizing", { type: "keyword", value: "border-box" }],
  ["table:text-indent", { type: "unit", unit: "number", value: 0 }],
  ["caption:display", { type: "keyword", value: "table-caption" }],
  ["caption:text-align", { type: "keyword", value: "center" }],
  ["tr:display", { type: "keyword", value: "table-row" }],
  ["tr:vertical-align", { type: "keyword", value: "inherit" }],
  ["col:display", { type: "keyword", value: "table-column" }],
  ["colgroup:display", { type: "keyword", value: "table-column-group" }],
  ["tbody:display", { type: "keyword", value: "table-row-group" }],
  ["tbody:vertical-align", { type: "keyword", value: "middle" }],
  ["thead:display", { type: "keyword", value: "table-header-group" }],
  ["thead:vertical-align", { type: "keyword", value: "middle" }],
  ["tfoot:display", { type: "keyword", value: "table-footer-group" }],
  ["tfoot:vertical-align", { type: "keyword", value: "middle" }],
  ["td:display", { type: "keyword", value: "table-cell" }],
  ["td:vertical-align", { type: "keyword", value: "inherit" }],
  ["td:padding-top", { type: "unit", unit: "px", value: 1 }],
  ["td:padding-right", { type: "unit", unit: "px", value: 1 }],
  ["td:padding-bottom", { type: "unit", unit: "px", value: 1 }],
  ["td:padding-left", { type: "unit", unit: "px", value: 1 }],
  ["th:display", { type: "keyword", value: "table-cell" }],
  ["th:vertical-align", { type: "keyword", value: "inherit" }],
  ["th:font-weight", { type: "keyword", value: "bold" }],
  ["th:padding-top", { type: "unit", unit: "px", value: 1 }],
  ["th:padding-right", { type: "unit", unit: "px", value: 1 }],
  ["th:padding-bottom", { type: "unit", unit: "px", value: 1 }],
  ["th:padding-left", { type: "unit", unit: "px", value: 1 }],
  ["b:font-weight", { type: "keyword", value: "bold" }],
  ["strong:font-weight", { type: "keyword", value: "bold" }],
  ["i:font-style", { type: "keyword", value: "italic" }],
  ["cite:font-style", { type: "keyword", value: "italic" }],
  ["em:font-style", { type: "keyword", value: "italic" }],
  ["var:font-style", { type: "keyword", value: "italic" }],
  ["dfn:font-style", { type: "keyword", value: "italic" }],
  ["code:font-family", { type: "fontFamily", value: ["monospace"] }],
  ["kbd:font-family", { type: "fontFamily", value: ["monospace"] }],
  ["samp:font-family", { type: "fontFamily", value: ["monospace"] }],
  ["mark:background-color", { type: "keyword", value: "yellow" }],
  ["mark:color", { type: "keyword", value: "black" }],
  ["u:text-decoration-line", { type: "keyword", value: "underline" }],
  ["ins:text-decoration-line", { type: "keyword", value: "underline" }],
  ["s:text-decoration-line", { type: "keyword", value: "line-through" }],
  ["del:text-decoration-line", { type: "keyword", value: "line-through" }],
  ["sub:vertical-align", { type: "keyword", value: "sub" }],
  ["sub:font-size", { type: "keyword", value: "smaller" }],
  ["sup:vertical-align", { type: "keyword", value: "super" }],
  ["sup:font-size", { type: "keyword", value: "smaller" }],
  ["a:text-decoration-line", { type: "keyword", value: "underline" }],
  ["a:cursor", { type: "keyword", value: "pointer" }],
  ["a:color", { type: "rgb", alpha: 1, r: 0, g: 0, b: 238 }],
  ["ul:display", { type: "keyword", value: "block" }],
  ["ul:list-style-type", { type: "keyword", value: "disc" }],
  ["ul:margin-top", { type: "unit", unit: "em", value: 1 }],
  ["ul:margin-bottom", { type: "unit", unit: "em", value: 1 }],
  ["ul:padding-left", { type: "unit", unit: "px", value: 40 }],
  ["ol:display", { type: "keyword", value: "block" }],
  ["ol:list-style-type", { type: "keyword", value: "decimal" }],
  ["ol:margin-top", { type: "unit", unit: "em", value: 1 }],
  ["ol:margin-bottom", { type: "unit", unit: "em", value: 1 }],
  ["ol:padding-left", { type: "unit", unit: "px", value: 40 }],
  ["li:display", { type: "keyword", value: "list-item" }],
  ["li:text-align", { type: "keyword", value: "match-parent" }],
  ["hr:color", { type: "keyword", value: "gray" }],
  ["hr:border-top-width", { type: "unit", unit: "px", value: 1 }],
  ["hr:border-right-width", { type: "unit", unit: "px", value: 1 }],
  ["hr:border-bottom-width", { type: "unit", unit: "px", value: 1 }],
  ["hr:border-left-width", { type: "unit", unit: "px", value: 1 }],
  ["hr:border-top-style", { type: "keyword", value: "solid" }],
  ["hr:border-right-style", { type: "keyword", value: "solid" }],
  ["hr:border-bottom-style", { type: "keyword", value: "solid" }],
  ["hr:border-left-style", { type: "keyword", value: "solid" }],
  ["hr:margin-top", { type: "unit", unit: "em", value: 0.5 }],
  ["hr:margin-right", { type: "keyword", value: "auto" }],
  ["hr:margin-bottom", { type: "unit", unit: "em", value: 0.5 }],
  ["hr:margin-left", { type: "keyword", value: "auto" }],
  ["hr:overflow-x", { type: "keyword", value: "hidden" }],
  ["hr:overflow-y", { type: "keyword", value: "hidden" }],
  ["hr:display", { type: "keyword", value: "block" }],
  ["legend:display", { type: "keyword", value: "block" }],
  ["legend:padding-left", { type: "unit", unit: "px", value: 2 }],
  ["legend:padding-right", { type: "unit", unit: "px", value: 2 }],
  ["fieldset:display", { type: "keyword", value: "block" }],
  ["fieldset:margin-left", { type: "unit", unit: "px", value: 2 }],
  ["fieldset:margin-right", { type: "unit", unit: "px", value: 2 }],
  ["fieldset:padding-top", { type: "unit", unit: "em", value: 0.35 }],
  ["fieldset:padding-right", { type: "unit", unit: "em", value: 0.75 }],
  ["fieldset:padding-bottom", { type: "unit", unit: "em", value: 0.625 }],
  ["fieldset:padding-left", { type: "unit", unit: "em", value: 0.75 }],
  ["fieldset:border-top-width", { type: "unit", unit: "px", value: 2 }],
  ["fieldset:border-right-width", { type: "unit", unit: "px", value: 2 }],
  ["fieldset:border-bottom-width", { type: "unit", unit: "px", value: 2 }],
  ["fieldset:border-left-width", { type: "unit", unit: "px", value: 2 }],
  ["fieldset:border-top-style", { type: "keyword", value: "solid" }],
  ["fieldset:border-right-style", { type: "keyword", value: "solid" }],
  ["fieldset:border-bottom-style", { type: "keyword", value: "solid" }],
  ["fieldset:border-left-style", { type: "keyword", value: "solid" }],
  ["fieldset:border-top-color", { type: "keyword", value: "lightgray" }],
  ["fieldset:border-right-color", { type: "keyword", value: "lightgray" }],
  ["fieldset:border-bottom-color", { type: "keyword", value: "lightgray" }],
  ["fieldset:border-left-color", { type: "keyword", value: "lightgray" }],
  ["fieldset:min-width", { type: "keyword", value: "min-content" }],
  ["label:cursor", { type: "keyword", value: "default" }],
  ["input:appearance", { type: "keyword", value: "auto" }],
  ["input:padding-top", { type: "unit", unit: "px", value: 1 }],
  ["input:padding-right", { type: "unit", unit: "px", value: 1 }],
  ["input:padding-bottom", { type: "unit", unit: "px", value: 1 }],
  ["input:padding-left", { type: "unit", unit: "px", value: 1 }],
  ["input:border-top-width", { type: "unit", unit: "px", value: 2 }],
  ["input:border-right-width", { type: "unit", unit: "px", value: 2 }],
  ["input:border-bottom-width", { type: "unit", unit: "px", value: 2 }],
  ["input:border-left-width", { type: "unit", unit: "px", value: 2 }],
  ["input:border-top-style", { type: "keyword", value: "solid" }],
  ["input:border-right-style", { type: "keyword", value: "solid" }],
  ["input:border-bottom-style", { type: "keyword", value: "solid" }],
  ["input:border-left-style", { type: "keyword", value: "solid" }],
  ["input:background-color", { type: "keyword", value: "white" }],
  ["input:cursor", { type: "keyword", value: "text" }],
  ["textarea:color", { type: "keyword", value: "initial" }],
  ["select:color", { type: "keyword", value: "initial" }],
  ["button:color", { type: "keyword", value: "initial" }],
  ["textarea:letter-spacing", { type: "keyword", value: "normal" }],
  ["select:letter-spacing", { type: "keyword", value: "normal" }],
  ["button:letter-spacing", { type: "keyword", value: "normal" }],
  ["textarea:word-spacing", { type: "keyword", value: "normal" }],
  ["select:word-spacing", { type: "keyword", value: "normal" }],
  ["button:word-spacing", { type: "keyword", value: "normal" }],
  ["textarea:line-height", { type: "keyword", value: "normal" }],
  ["select:line-height", { type: "keyword", value: "normal" }],
  ["button:line-height", { type: "keyword", value: "normal" }],
  ["textarea:text-transform", { type: "keyword", value: "none" }],
  ["select:text-transform", { type: "keyword", value: "none" }],
  ["button:text-transform", { type: "keyword", value: "none" }],
  ["textarea:text-indent", { type: "unit", unit: "number", value: 0 }],
  ["select:text-indent", { type: "unit", unit: "number", value: 0 }],
  ["button:text-indent", { type: "unit", unit: "number", value: 0 }],
  [
    "textarea:text-shadow",
    {
      type: "layers",
      value: [{ type: "tuple", value: [{ type: "keyword", value: "none" }] }],
    },
  ],
  [
    "select:text-shadow",
    {
      type: "layers",
      value: [{ type: "tuple", value: [{ type: "keyword", value: "none" }] }],
    },
  ],
  [
    "button:text-shadow",
    {
      type: "layers",
      value: [{ type: "tuple", value: [{ type: "keyword", value: "none" }] }],
    },
  ],
  ["textarea:display", { type: "keyword", value: "inline-block" }],
  ["select:display", { type: "keyword", value: "inline-block" }],
  ["button:display", { type: "keyword", value: "inline-block" }],
  ["textarea:text-align", { type: "keyword", value: "start" }],
  ["textarea:appearance", { type: "keyword", value: "auto" }],
  ["textarea:margin-top", { type: "unit", unit: "px", value: 1 }],
  ["textarea:margin-bottom", { type: "unit", unit: "px", value: 1 }],
  ["textarea:border-top-width", { type: "unit", unit: "px", value: 1 }],
  ["textarea:border-right-width", { type: "unit", unit: "px", value: 1 }],
  ["textarea:border-bottom-width", { type: "unit", unit: "px", value: 1 }],
  ["textarea:border-left-width", { type: "unit", unit: "px", value: 1 }],
  ["textarea:border-top-style", { type: "keyword", value: "solid" }],
  ["textarea:border-right-style", { type: "keyword", value: "solid" }],
  ["textarea:border-bottom-style", { type: "keyword", value: "solid" }],
  ["textarea:border-left-style", { type: "keyword", value: "solid" }],
  ["textarea:padding-top", { type: "unit", unit: "px", value: 2 }],
  ["textarea:padding-right", { type: "unit", unit: "px", value: 2 }],
  ["textarea:padding-bottom", { type: "unit", unit: "px", value: 2 }],
  ["textarea:padding-left", { type: "unit", unit: "px", value: 2 }],
  ["textarea:background-color", { type: "keyword", value: "white" }],
  ["textarea:vertical-align", { type: "keyword", value: "text-bottom" }],
  ["textarea:cursor", { type: "keyword", value: "text" }],
  ["textarea:resize", { type: "keyword", value: "both" }],
  ["textarea:white-space-collapse", { type: "keyword", value: "preserve" }],
  ["textarea:text-wrap-mode", { type: "keyword", value: "wrap" }],
  ["textarea:word-wrap", { type: "keyword", value: "break-word" }],
  ["select:text-align", { type: "keyword", value: "start" }],
  ["select:margin-top", { type: "unit", unit: "number", value: 0 }],
  ["select:margin-right", { type: "unit", unit: "number", value: 0 }],
  ["select:margin-bottom", { type: "unit", unit: "number", value: 0 }],
  ["select:margin-left", { type: "unit", unit: "number", value: 0 }],
  ["select:padding-top", { type: "unit", unit: "px", value: 1 }],
  ["select:padding-right", { type: "unit", unit: "px", value: 4 }],
  ["select:padding-bottom", { type: "unit", unit: "px", value: 1 }],
  ["select:padding-left", { type: "unit", unit: "px", value: 4 }],
  ["select:border-top-width", { type: "unit", unit: "px", value: 2 }],
  ["select:border-right-width", { type: "unit", unit: "px", value: 2 }],
  ["select:border-bottom-width", { type: "unit", unit: "px", value: 2 }],
  ["select:border-left-width", { type: "unit", unit: "px", value: 2 }],
  ["select:border-top-style", { type: "keyword", value: "solid" }],
  ["select:border-right-style", { type: "keyword", value: "solid" }],
  ["select:border-bottom-style", { type: "keyword", value: "solid" }],
  ["select:border-left-style", { type: "keyword", value: "solid" }],
  ["select:text-wrap-mode", { type: "keyword", value: "nowrap" }],
  ["select:word-wrap", { type: "keyword", value: "normal" }],
  ["select:cursor", { type: "keyword", value: "default" }],
  ["select:box-sizing", { type: "keyword", value: "border-box" }],
  ["select:user-select", { type: "keyword", value: "none" }],
  ["select:overflow-x", { type: "keyword", value: "clip" }],
  ["select:overflow-y", { type: "keyword", value: "clip" }],
  ["select:vertical-align", { type: "keyword", value: "baseline" }],
  ["select:appearance", { type: "keyword", value: "auto" }],
  ["option:display", { type: "keyword", value: "block" }],
  ["option:float", { type: "keyword", value: "none" }],
  ["option:position", { type: "keyword", value: "static" }],
  ["option:min-height", { type: "unit", unit: "em", value: 1 }],
  ["option:padding-top", { type: "unit", unit: "px", value: 2 }],
  ["option:padding-right", { type: "unit", unit: "px", value: 2 }],
  ["option:padding-bottom", { type: "unit", unit: "px", value: 2 }],
  ["option:padding-left", { type: "unit", unit: "px", value: 4 }],
  ["option:user-select", { type: "keyword", value: "none" }],
  ["option:text-wrap-mode", { type: "keyword", value: "nowrap" }],
  ["option:word-wrap", { type: "keyword", value: "normal" }],
  ["button:appearance", { type: "keyword", value: "auto" }],
  ["button:padding-top", { type: "unit", unit: "px", value: 2 }],
  ["button:padding-right", { type: "unit", unit: "px", value: 6 }],
  ["button:padding-bottom", { type: "unit", unit: "px", value: 3 }],
  ["button:padding-left", { type: "unit", unit: "px", value: 6 }],
  ["button:border-top-width", { type: "unit", unit: "px", value: 2 }],
  ["button:border-right-width", { type: "unit", unit: "px", value: 2 }],
  ["button:border-bottom-width", { type: "unit", unit: "px", value: 2 }],
  ["button:border-left-width", { type: "unit", unit: "px", value: 2 }],
  ["button:border-top-style", { type: "keyword", value: "solid" }],
  ["button:border-right-style", { type: "keyword", value: "solid" }],
  ["button:border-bottom-style", { type: "keyword", value: "solid" }],
  ["button:border-left-style", { type: "keyword", value: "solid" }],
  ["button:cursor", { type: "keyword", value: "default" }],
  ["button:box-sizing", { type: "keyword", value: "border-box" }],
  ["button:user-select", { type: "keyword", value: "none" }],
  ["button:text-align", { type: "keyword", value: "center" }],
  ["button:background-color", { type: "keyword", value: "lightgray" }],
]);
