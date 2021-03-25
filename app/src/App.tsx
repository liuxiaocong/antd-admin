import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Home from "./page/home";
import Login from "./page/login";
import "./App.less";
import s from "./s.module.css";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const hasLogin = true;

  return (
    <Layout className={s.wrap}>
      <Header className={s.header}>
        <h1>title</h1>
      </Header>
      <Content className={s.content}>
        {hasLogin ? (
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        ) : (
          <Router>
            <div>
              <Switch>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </div>
          </Router>
        )}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        TT ©2021 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
