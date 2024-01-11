import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  autoformatSmartQuotes
} from "@udecode/plate-autoformat"

import { autoformatBlocks } from "./autoformatBlocks"
import { autoformatIndentLists } from "./autoformatIndentLists"
import { autoformatMarks } from "./autoformatMarks"

export const autoformatRules = [
  ...autoformatBlocks,
  ...autoformatIndentLists,
  ...autoformatMarks,
  ...autoformatSmartQuotes,
  ...autoformatPunctuation,
  ...autoformatLegal,
  ...autoformatLegalHtml,
  ...autoformatArrow,
  ...autoformatMath
]
