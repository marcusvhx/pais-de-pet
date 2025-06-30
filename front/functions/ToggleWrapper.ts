import { Dispatch, SetStateAction } from "react";

const toggleWrapper = (setBooleanState: Dispatch<SetStateAction<boolean>>) => {
  setBooleanState((old) => !old);
  const body = document.body.style;
  body.overflow = body.overflow == "" ? "hidden" : "";
};

export default toggleWrapper;
