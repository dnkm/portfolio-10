import "./styles.scss";
import $ from "jquery";

const PORTFOLIO_DATA = [
  {
    name: "todo list",
    img: "https://miro.medium.com/max/1400/1*bubW56HD3dK44Uj2Jvs-UA.png",
    link: ""
  },
  {
    name: "calendar",
    img: "https://n32e9.csb.app/src/calendar.png",
    link: "https://google.com"
  },
  {
    name: "recipe",
    img:
      "https://images.pexels.com/photos/4033296/pexels-photo-4033296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "https://google.com"
  },
  {
    name: "exercise logger",
    img:
      "https://images.pexels.com/photos/1080882/pexels-photo-1080882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: ""
  }
];

init();

function init() {
  $("<h1 />")
    .text("Daniel Kim's Portfolio")
    .appendTo("#app");

  $("<div />")
    .attr("id", "portfolio-list")
    .appendTo("#app");

  // build portfolio data entries
  PORTFOLIO_DATA.forEach(function(v) {
    let entry = $("<div />")
      .addClass("portfolio-entry")
      .appendTo("#portfolio-list");

    let atag = $("<a />")
      .attr("href", v.link)
      .attr("target", "_blank")
      .appendTo(entry);

    $("<img />")
      .attr("src", v.img)
      .appendTo(atag);

    $("<div />")
      .text(v.name)
      .appendTo(entry);
  });
}
