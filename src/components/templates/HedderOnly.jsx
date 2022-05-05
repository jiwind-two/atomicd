import { Hedder } from "../atoms/hedder/Layout";

export const HedderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Hedder />
      {children}
    </>
  );
};
