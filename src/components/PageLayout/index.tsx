import { Layout, Typography } from "antd";
import { FC } from "react";
import "./index.scss";

const { Header, Content } = Layout;
const { Text } = Typography;

interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Layout className="page-layout stretch">
      <Header className="page-header">
        <Text className="page-heading stretch flex flex--justify-center flex--align-center">
          Flashember
        </Text>
      </Header>
      <Content className="page-content">{children}</Content>
    </Layout>
  );
};

export default PageLayout;
