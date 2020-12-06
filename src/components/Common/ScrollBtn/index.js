/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default ({ isRight, cssClass = "", handleScroll }) => (
  <button
    onClick={e => handleScroll(e, isRight)}
    className={`arrow-btn ${cssClass}`}
    type="button"
  >
    <span className="material-icons md-33">
      {isRight ? "keyboard_arrow_right" : "keyboard_arrow_left"}
    </span>
  </button>
)
