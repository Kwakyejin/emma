import EmmaShape2 from "../assets/EmmaShape2.svg";
import Kakao from "../assets/KAKAO.svg";
import Blog from "../assets/SNS/blog.svg";
import Brunch from "../assets/SNS/brunch.svg";
import Github from "../assets/SNS/GITHUB.svg";
import Instagram from "../assets/SNS/INSTAGRAM.svg";
import Notion from "../assets/SNS/notion.svg";
import LinkedIn from "../assets/SNS/linkedin.svg";
import Custom from "../assets/Custom.svg";
import EmmaShape from "../assets/emma-shape.svg";

export const getIcon = (icon) => {
  switch (icon) {
    case "emma":
      return EmmaShape2;
    case "kakao":
      return Kakao;
    case "blog":
      return Blog;
    case "brunch":
      return Brunch;
    case "github":
      return Github;
    case "instagram":
      return Instagram;
    case "notion":
      return Notion;
    case "linkedin":
      return LinkedIn;
    case "custom":
      return Custom;
    case "emmashape":
      return EmmaShape;
    default:
      return EmmaShape2;
  }
};
