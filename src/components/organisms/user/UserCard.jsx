import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img
        heghit={160}
        width={160}
        src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw3fHxkb2d8ZW58MHx8fHwxNjUxNjYyMTYx&ixlib=rb-1.2.1&q=80&w=1080"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>kkkkkk.com</dd>
        <dt>TEL</dt>
        <dd>04o7-72-xxx0</dd>
        <dt>会社</dt>
        <dd>あああああ会社</dd>
        <dt>WEB</dt>
        <dd>kkkkkk.com</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
