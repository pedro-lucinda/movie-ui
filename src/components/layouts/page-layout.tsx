import { ReactNode } from "react";
import { NavBar } from "../modules/navbar";
import { Footer } from "../modules/footer";
import { FlexBox } from "@ui5/webcomponents-react";

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <FlexBox direction="Column" className="pageLayout">
      <NavBar />
      {children}
      <Footer />
    </FlexBox>
  );
};
