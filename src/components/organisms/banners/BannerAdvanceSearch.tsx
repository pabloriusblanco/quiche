import dietaryRestrictions from "../../../assets/images/dietaryRestrictions.jpg";
import LinkContainer from "../../atoms/Link/LinkContainer";
import Paragraph from "../../atoms/Text/Paragraph";

const BannerAdvanceSearch = () => {
  return (
    <section className="shadow-light container space-y-4 overflow-hidden rounded-lg bg-white">
      <div className="flex items-center justify-end">
        <div className="w-1/2 space-y-2 p-5 pr-28">
          <h4 className="text-lg font-bold tracking-wide text-black">
            ¿Tienen alguna{" "}
            <span className="text-primary">restricción dietaria</span>?
          </h4>
          <Paragraph color="black-light" className="text-[12px]">
            ¡Descubre la búsqueda avanzada y encuentra tus recetas ideales! Sin
            gluten, sin lactosa, vegetarianos, veganos...
            <br />
            Organiza los resultados y disfruta de los mejores platos que la
            comunidad tiene para ti.{" "}
          </Paragraph>
          <LinkContainer to={`/search`}>
            <Paragraph
              color="primary"
              className="mt-auto text-[12px] underline"
            >
              Ir a búsqueda avanzada
            </Paragraph>
          </LinkContainer>
        </div>
        <div className="relative flex w-1/2">
          <div
            className="absolute bottom-0 h-full w-20 -translate-x-10 bg-primary"
            style={{
              background:
                "linear-gradient(90deg, #F0BA23 41.37%, #F09E23 101.59%)",
            }}
          ></div>
          <div className="absolute bottom-0 h-1/2 w-20 -translate-x-20 rounded-t-[20px] bg-black"></div>
          <img src={dietaryRestrictions} alt="dietary restrictions image" />
        </div>
      </div>
    </section>
  );
};

export default BannerAdvanceSearch;
