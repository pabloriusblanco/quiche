import WebRoutes from "./routes/Routes";
import Layout from "./components/organisms/layout/Layout";
import { UserProvider } from "./context/user/UserProvider";
import { ProvideAuth } from "./hooks/useAuth";

function App() {
  return (
    <ProvideAuth>
      <Layout>
        <WebRoutes />
      </Layout>
    </ProvideAuth>
  );
}

export default App;
