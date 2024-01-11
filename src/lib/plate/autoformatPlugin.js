import { autoformatRules } from "./autoformatRules"
export const autoformatPlugin = {
  options: {
    rules: autoformatRules,
    enableUndoOnDelete: true
  }
}
