import Spinner from "./components/molecules/Modal/Spinner";
import Layout from "./components/organisms/layout/Layout";
import { ProvideAuth } from "./hooks/useAuth";
import useSpinner from "./hooks/useSpinner";
import WebRoutes from "./routes/Routes";

function App() {
  const spinnerModal = useSpinner();

  // useEffect(() => {
  //   spinnerModal.startLoading();
  //   document.addEventListener("DOMContentLoaded", spinnerModal.stopLoading);
  //   return () => {
  //     document.removeEventListener(
  //       "DOMContentLoaded",
  //       spinnerModal.stopLoading
  //     );
  //   };
  // }, [spinnerModal]);

  return (
    <ProvideAuth>
      <Layout>
        <WebRoutes />
        {spinnerModal.isLoading && <Spinner> </Spinner>}
      </Layout>
    </ProvideAuth>
  );
}

export default App;
