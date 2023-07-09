import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOwnedPost } from "../../api/auth/profile";
import { getAllCategories } from "../../api/categories";
import Paragraph from "../../components/atoms/Text/Paragraph";
import {
  TextWeightType,
  TitleType,
} from "../../components/atoms/Text/TextsTypes";
import Title from "../../components/atoms/Text/Title";
import BackgroundHeader from "../../components/molecules/Background/Background";
import Skeleton from "../../components/molecules/Skeleton/Skeleton";
import HomeSearch from "../../components/organisms/Search/SimpleSearch/HomeSearch";
import BannerQuicheApp from "../../components/organisms/banners/BannerQuicheApp";
import { useAuth } from "../../hooks/useAuth";
import { useResultModal } from "../../hooks/useResultModal";
import { useSpinner } from "../../hooks/useSpinner";
import { PostResponse } from "../../types/Api";
import { Category } from "../../types/Recipe";
import SortIsotope from "../search/SortIsotope/SortIsotope";
import HorizontalExtendedCard from "../../components/molecules/Cards/Home/HorizontalExtendedCard/HorizontalExtendedCard";
import Button from "../../components/atoms/Buttons/Button";
import AdvanceSearchNoResponse from "../search/AdvanceSearchNoResponse";

const OwnedRecipes = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const resultModal = useResultModal();
  const spinner = useSpinner();
  const [posts, setPosts] = useState<PostResponse[] | undefined>(undefined);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showDisabledRecipes, setShowDisabledRecipes] = useState(false);

  const getCategories = () => {
    getAllCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
        return []; // Return an empty array as a fallback in case of an error
      });
  };

  useEffect(() => {
    // Only fetch favorites when the user is authenticated
    spinner.startLoading({ text: "Cargando tus recetas..." });
    getOwnedPost()
      .then((res) => {
        getCategories();
        setPosts(res.posts);
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
      <div className="mb-8 flex flex-col space-y-8">
        <section className="container lg:min-h-[475px] xl:min-h-[410px] 2xl:min-h-[700px]">
          <div className="flex w-full flex-col gap-5">
            <div className="flex justify-between">
              {!showDisabledRecipes && (
                <div>
                  <Title
                    weight={TextWeightType.Bold}
                    titleType={TitleType.H2}
                    text={"Tus recetas en Quiche"}
                    color="black"
                  />
                  <Paragraph color="gray" className="text-[12px]">
                    Aquí puedes ver todas las recetas que has creado. Puedes
                    editarlas o eliminarlas. ¡También puedes acceder a ellas
                    haciendo click!
                  </Paragraph>
                </div>
              )}
              {showDisabledRecipes && (
                <div>
                  <Title
                    weight={TextWeightType.Bold}
                    titleType={TitleType.H2}
                    text={"Tus recetas Desactivadas"}
                    color="black"
                  />
                  <Paragraph color="gray" className="text-[12px]">
                    Aquí puedes ver todas las recetas que has desactivado. Para
                    editarlas o verlas haz click en el botón Activar.
                  </Paragraph>
                </div>
              )}
              {posts &&
                posts.filter((post) => post.deleteDate !== null).length > 0 && (
                  <div className="flex items-end">
                    <Button
                      color={showDisabledRecipes ? "primary" : "danger"}
                      extraClasses="!py-2 !px-4 text-[12px]"
                      onClick={() => {
                        setShowDisabledRecipes(!showDisabledRecipes);
                      }}
                    >
                      {showDisabledRecipes
                        ? "Volver a Recetas Activas"
                        : "Ver Recetas Desactivadas"}
                    </Button>
                  </div>
                )}
            </div>
            {!posts && (
              <div className="flex w-full flex-col items-center gap-5">
                <Skeleton
                  gap={4}
                  gridCols={12}
                  gridMatrix={[[6, 6]]}
                  itemHeight={"42px"}
                />
                <Skeleton
                  gap={4}
                  gridCols={12}
                  gridMatrix={[[12], [12], [12], [12], [12], [12], [12]]}
                  itemHeight={"146px"}
                />
              </div>
            )}
            {posts && posts.length < 1 && <AdvanceSearchNoResponse title="¡Aún no tienes recetas!" message="Crea una receta en la sección de Crear Recetas"/>}
            {posts && posts.length > 0 && (
              <div className="w-full">
                {!showDisabledRecipes && (
                  <SortIsotope
                    posts={posts.filter((post) => {
                      return post.deleteDate === null;
                    })}
                    categories={categories}
                    allowDeleteEdit={true}
                  />
                )}
                {showDisabledRecipes && (
                  <SortIsotope
                    posts={posts.filter((post) => {
                      return post.deleteDate !== null;
                    })}
                    categories={categories}
                    allowDeleteEdit={true}
                  />
                )}
              </div>
            )}
          </div>
        </section>
      </div>
      <BannerQuicheApp />
    </>
  );
};

export default OwnedRecipes;
