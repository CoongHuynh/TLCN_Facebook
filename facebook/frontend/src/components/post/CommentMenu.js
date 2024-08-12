import { useRef, useState } from "react";
import MenuItem from "./MenuItem";
import useOnClickOutside from "../../helpers/clickOutside";
import { submitReportToGroupReducer } from "../../functions/reducers";
export default function CommentMenu({
  commentUserId,
  userId,
  imagesLength,
  setShowMenu,
  token,
  idgroup,

  idcomment,
  idpost,
}) {
  const [test, setTest] = useState(commentUserId === userId ? true : false);
  const menu = useRef(null);

  return (
    <ul className="comment_menu" ref={menu}>
      {idgroup && (
        <>
          {" "}
          <div>
            <MenuItem title="Report comment to group admins" />
          </div>
          <div className="line"></div>
        </>
      )}

      <div>
        <MenuItem title="Report comment" />
      </div>
    </ul>
  );
}
