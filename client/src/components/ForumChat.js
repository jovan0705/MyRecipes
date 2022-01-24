import { useParams } from "react-router-dom";

const ForumChat = () => {
  let { region } = useParams();

  return <div>{region}</div>;
};

export default ForumChat;
