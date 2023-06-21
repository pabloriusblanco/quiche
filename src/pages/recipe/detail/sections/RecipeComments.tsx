import { postComment } from "../../../../api/recipes";
import Icon from "../../../../components/atoms/Icons/Icons";
import Paragraph from "../../../../components/atoms/Text/Paragraph";
import { TextWeightType } from "../../../../components/atoms/Text/TextsTypes";
import Title from "../../../../components/atoms/Text/Title";
import CommentForm from "../../../../components/molecules/Forms/CommentForm";
import { useAuth } from "../../../../hooks/useAuth";
import { useResultModal } from "../../../../hooks/useResultModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import { ResponsePostComment } from "../../../../types/Api";

type RecipeCommentsProps = {
  postId: string;
  comments: ResponsePostComment[];
};

const RecipeComments = ({ comments, postId }: RecipeCommentsProps) => {
  const auth = useAuth();
  const spinnerModal = useSpinner();
  const resultModal = useResultModal();

  const commentPost = async (comment: string) => {
    spinnerModal.startLoading({ text: "Enviando comentario" });
    if (!auth.isAuthenticated) {
      spinnerModal.stopLoading();
      auth.toggleAuthModal();
    } else {
      postComment({ comment: comment, postId: postId })
        .then((res) => {
          console.log(res);
          resultModal.showResultModal("success", {
            showIcon: true,
            title: "Comentario enviado",
            message: "Tu comentario ha sido enviado correctamente",
            onConfirm: () => window.location.reload(),
            confirmText: "Recargar",
          });
        })
        .catch((err) => {
          resultModal.showResultModal("danger", {
            showIcon: true,
            title: "Error al enviar comentario",
            message: err.response.data,
          });
        });
      spinnerModal.stopLoading();
    }
  };

  return (
    <div className=" flex flex-col gap-5">
      {comments.length > 0 && (
        <div className="shadow-light overflow-hidden rounded-2xl p-5">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex flex-col gap-2 border-b border-gray-light py-5 first:pt-0 last:border-none last:pb-0"
            >
              <Paragraph color="primary" className="text-[11px]">
                {new Date(comment.createDate).toLocaleDateString()}
              </Paragraph>
              <Paragraph color="gray" className="text-[12px]">
                {comment.comment}
              </Paragraph>
              <div className="flex items-center justify-end">
                <Icon name="userchecked" className="w-3.5 fill-primary" />
                <Paragraph
                  color="gray"
                  className="ml-1 overflow-hidden text-ellipsis text-right text-[11px] font-semibold"
                >
                  {`${comment.user.userName}`}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <Title
          weight={TextWeightType.Bold}
          color="black"
          text="¡Deja tu comentario!"
        />
        <div className="shadow-light flex flex-col gap-5 overflow-hidden rounded-2xl p-5">
          <CommentForm
            onSubmitCallback={commentPost}
            className="flex flex-col gap-5"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeComments;
