import WebRoutes from "./routes/Routes";
import Layout from "./components/organisms/layout/Layout";
import { UserProvider } from "./context/user/UserProvider";

function App() {
  return (
    <UserProvider>
      <Layout>
        <WebRoutes />
      </Layout>
    </UserProvider>
  );
}

export default App;
