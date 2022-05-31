import * as React from "react";

interface Props {
  userName: string;
}

const Topbar: React.FC<Props> = (props: Props) => {
  return <h2 className="container flex items-center p-4 mx-auto justify-center">Hello{' '}{props.userName} !</h2>;
};

export default Topbar;