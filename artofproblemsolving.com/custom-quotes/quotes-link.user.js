// ==UserScript==
// @name         Custom Quotes (link)
// @namespace    https://github.com/CubingSoda
// @version      1.0.0
// @description  Creates custom quotes for the AoPS forums
// @author       CubingSoda/forester2015
// @match        https://artofproblemsolving.com/*
// @grant        none
// ==/UserScript==

window.onload = () => {
  if (AoPS.Community) {
    AoPS.Community.Views.Post.prototype.onClickQuote = function () {
      this.topic.appendToReply(
        '[quote name="' +
          this.model.get("username") +
          '" url="/community/p' +
          this.model.get("post_id") +
          '"]\n' +
          this.model.get("post_canonical").trim() +
          "\n[/quote]\n\n"
      );
    };
  }
};
