import type { IconType } from "react-icons";
import { FaCommentDots } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { TbBrandProducthunt } from "react-icons/tb";
import { BsFilePost } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsChatRightQuote } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

type IC = {
    id: number,
    to: string,
    toolTip: string,
    Icon: IconType
};

export const dBase: IC[] = [
    { id: 1, to: "/", toolTip: "Home", Icon: AiFillHome },
    { id: 2, to: "/comments", toolTip: "Comments", Icon: FaCommentDots },
    { id: 3, to: "/products", toolTip: "Products", Icon: TbBrandProducthunt },
    { id: 4, to: "/posts", toolTip: "Posts", Icon: BsFilePost },
    { id: 5, to: "/quotes", toolTip: "Quotes", Icon: BsChatRightQuote },
    { id: 6, to: "/users", toolTip: "Users", Icon: FaUsers },
    { id: 7, to: "/recipes", toolTip: "Recipes", Icon: IoFastFoodOutline }
];



