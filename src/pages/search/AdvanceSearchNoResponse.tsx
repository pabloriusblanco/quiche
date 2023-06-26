import Icon from "../../components/atoms/Icons/Icons";
import Paragraph from "../../components/atoms/Text/Paragraph";

const AdvanceSearchNoResponse = () => {
  return (
    <div className="shadow-light col-span-12 flex items-center justify-center gap-5 rounded-xl bg-white p-5">
      <div>
        <Icon name="danger" className="w-10 fill-danger"></Icon>
      </div>
      <div>
        <Paragraph letterSpacing={"1"} className="text-xl font-bold">
          No se encontraron resultados.
        </Paragraph>
        <Paragraph>
          Por favor, intenta con otros parámetros de búsqueda.
        </Paragraph>
      </div>
    </div>
  );
};

export default AdvanceSearchNoResponse;
