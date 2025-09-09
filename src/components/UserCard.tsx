import { FC } from "react";
import { UserProfile } from "../types/user-profile";

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;

  const style = {
    border: "solid 1px #ccc",
  };

  return (
    <div>
      <dl>
        <dt>名前</dt>
        <dt>{user.name}</dt>
        <dt>メール</dt>
        <dt>{user.email}</dt>
        <dt>住所</dt>
        <dt>{user.address}</dt>
      </dl>
    </div>
  );
};
