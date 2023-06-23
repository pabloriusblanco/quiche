import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites } from "../../api/auth/profile";
import BackgroundHeader from "../../components/molecules/Background/Background";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";
import { useAuth } from "../../hooks/useAuth";
import { useResultModal } from "../../hooks/useResultModal";
import { useSpinner } from "../../hooks/useSpinner";
import HorizontalExtendedCard from "../../components/molecules/Cards/Home/HorizontalExtendedCard/HorizontalExtendedCard";

const Favorites = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const resultModal = useResultModal();
  const spinner = useSpinner();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Only fetch favorites when the user is authenticated
    spinner.startLoading({ text: "Cargando recetas favoritas..." });
    getFavorites()
      .then((res) => {
        console.log(res);        
        setPosts(res);
      })
      .catch((err) => {
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
      })
      .finally(() => spinner.stopLoading());
  }, [auth.isAuthenticated]);

  return (
    <>
      <BackgroundHeader sectionHeight="215px" />
      <HomeSearch />
      <div className="space-y-8">
        <section className="container">
          <div className="flex flex-col gap-5 w-full">
            {posts.length > 0 &&
              posts.map((post) => (
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
