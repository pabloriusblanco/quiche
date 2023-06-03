import ResultModal from "./components/molecules/Modal/ResultModal/ResultModal";
import Spinner from "./components/molecules/Modal/Spinner";
import Layout from "./components/organisms/layout/Layout";
import { ProvideAuth } from "./hooks/useAuth";
import { ResultModalProvider } from "./hooks/useResultModal";
import { SpinnerProvider } from "./hooks/useSpinner";
import WebRoutes from "./routes/Routes";

function App() {
  return (
    <ProvideAuth>
      <SpinnerProvider>
        <ResultModalProvider>
          <Layout>
            <WebRoutes />
            <Spinner />
            <ResultModal />
          </Layout>
        </ResultModalProvider>
      </SpinnerProvider>
    </ProvideAuth>
  );
}

export default App;
