"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  venostrike: {
    num: 20012,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Venostrike",
    shortDesc: "Power doubles if the target is poisoned.",
    desc: "This move's power is doubled against a poisoned target.",
    pp: 10,
    priority: 0,
    flags: { protect: 1, contact: 1, mirror: 1, metronome: 1 },
    onBasePower(basePower, pokemon, target) {
      if (target.status === "psn" || target.status === "tox") {
        return this.chainModify(2);
      }
    },
    target: "normal",
    type: "Poison",
    contestType: "Tough"
  }
};
//# sourceMappingURL=moves.js.map
