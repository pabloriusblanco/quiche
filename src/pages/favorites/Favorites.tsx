import { useNavigate } from "react-router-dom";
import BackgroundHeader from "../../components/molecules/Background/Background";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";
import { useAuth } from "../../hooks/useAuth";
import { useResultModal } from "../../hooks/useResultModal";
import { useEffect, useState } from "react";
import { useSpinner } from "../../hooks/useSpinner";
import { genericErrorModalContent } from "../../components/molecules/Modal/Auth/ResultsConfigAuth/ResultsAuthContents";
import { getFavorites } from "../../api/auth/profile";
import HorizontalExtendedCard from "../../components/molecules/Cards/Home/HorizontalExtendedCard/HorizontalExtendedCard";

const Favorites = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const resultModal = useResultModal();
  const spinner = useSpinner();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      resultModal.showResultModal("danger", {
        showIcon: true,
        title: "Error",
        message: "Debes iniciar sesión para ver tus recetas favoritas.",
        allowClose: false,
        onCancel() {
          navigate("/", { replace: true });
        },
      });
      return;
    }
    spinner.startLoading({ text: "Cargando recetas favoritas..." });
    getFavorites()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        resultModal.showResultModal(
          "danger",
          genericErrorModalContent(err.response.data, () => navigate("/"))
        );
      })
      .finally(() => spinner.stopLoading());
  }, []);

  return (
    <>
      <BackgroundHeader sectionHeight="215px" />
      <HomeSearch />
      <div className="space-y-8">
        <section className="container">
          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <HorizontalExtendedCard post={post} key={post.id} />
            ))}
          </div>
        </section>
        <BannerQuicheApp />
      </div>
    </>
  );
};

export default Favorites;
