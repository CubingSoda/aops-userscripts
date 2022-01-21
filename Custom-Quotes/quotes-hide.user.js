// ==UserScript==
// @name         Custom Quotes (hide)
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
        `\n[hide=@#${this.model.get(
          "post_number"
        )}][url=aops.com/community/user/${this.model.get(
          "poster_id"
        )}][b]${this.model.get("username")}[/b][/url] · ${this.model.get(
          "date_rendered"
        )} [url=aops.com/community/p${this.model.get(
          "post_id"
        )}](view)[/url][color=transparent]helo[/color]\n${this.model
          .get("post_canonical")
          .trim()}\n\n-----------\n[color=#5b7083][aops]x[/aops] ${this.model.get(
          "post_number"
        )}[color=transparent]hellloolo[/color] [aops]Y[/aops] ${this.model.get(
          "thanks_received"
        )} [color=transparent]hellloolo[/color] [/hide]\n`
      );
    };
  }
};
