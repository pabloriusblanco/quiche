import Icon from "../../components/atoms/Icons/Icons";
import Paragraph from "../../components/atoms/Text/Paragraph";

type AdvanceSearchNoResponseProps = {
  title?: string;
  message?: string;
};

const AdvanceSearchNoResponse = ({
  title = "No se encontraron resultados.",
  message = "Por favor, intenta con otros parámetros de búsqueda.",
}: AdvanceSearchNoResponseProps) => {
  return (
    <div className="shadow-light col-span-12 flex items-center justify-center gap-5 rounded-xl bg-white p-5">
      <div>
        <Icon name="danger" className="w-10 fill-danger"></Icon>
      </div>
      <div>
        <Paragraph letterSpacing={"1"} className="text-xl font-bold">
          {title}
        </Paragraph>
        <Paragraph>{message}</Paragraph>
      </div>
    </div>
  );
};

export default AdvanceSearchNoResponse;
