import React from "react";
// import background from assets

import Input from "../../components/atoms/Inputs/Input";

import Button from "../../components/atoms/Buttons/Button";
import BackgroundHeader from "../../components/molecules/Background/Background";
import { useAuth } from "../../hooks/useAuth";
import SimpleCard from "../../components/molecules/Cards/Simple/SimpleCard";
import Icon from "../../components/atoms/Icons";

const Home: React.FC = () => {
  const auth = useAuth();

  console.log(auth.username);

  return (
    <>
      <BackgroundHeader />
      <div className="shadow-light container flex -translate-y-10 justify-center gap-5 rounded-2xl bg-white p-5">
        <Input placeholder="Escribe el nombre de una receta, ingrediente, usuario" />
        <Button
          buttonType="primary"
          extraClasses="rounded-lg py-0 px-0 flex items-center justify-center w-[47px]"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.41429 0C11.7785 0 14.0459 0.939181 15.7176 2.61093C17.3894 4.28269 18.3286 6.55007 18.3286 8.91429C18.3286 11.1223 17.5194 13.152 16.1891 14.7154L16.5594 15.0857H17.6429L24.5 21.9429L22.4429 24L15.5857 17.1429V16.0594L15.2154 15.6891C13.652 17.0194 11.6223 17.8286 9.41429 17.8286C7.05007 17.8286 4.78269 16.8894 3.11093 15.2176C1.43918 13.5459 0.5 11.2785 0.5 8.91429C0.5 6.55007 1.43918 4.28269 3.11093 2.61093C4.78269 0.939181 7.05007 0 9.41429 0ZM9.41429 2.74286C5.98571 2.74286 3.24286 5.48571 3.24286 8.91429C3.24286 12.3429 5.98571 15.0857 9.41429 15.0857C12.8429 15.0857 15.5857 12.3429 15.5857 8.91429C15.5857 5.48571 12.8429 2.74286 9.41429 2.74286Z" />
          </svg>
        </Button>
      </div>
      <div className="container">
        <SimpleCard
          id={"1"}
          category="lunch"
          description="Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. "
          commentsAmount={14}
          difficulty="easy"
          img="https://s3-alpha-sig.figma.com/img/c25f/d189/ec92b489989ca9f1a9d746bf2d708240?Expires=1684713600&Signature=fdDZ9DbNH401FNUu1BbP8qOtACLkH2SXB2pfl~SKrEyEhe9U5Wz1eJ23Q2ayrhQDLy6ZyFo7EtVW4xYga~yoGgpR~~JXLKsr3ggq~9ZVKMkKgKunEAq7jiDLR3kBECevVfTz744tI7i6396tzotOvV-HpKWFW-hmaUceUILvUzOrjUNg2H81ueIucapbtNAv20BzgAAhoLMBlWc5gLtDaGCMVjgfz9pCv~01c84nqvuDL6MV73jnzYnQmce7lRimDKmf0zHzK7l2nYQfQfmGDMoblIDQJ6mOsuxsptBWWxjNoiwfwVd6tSHkgAr-9wqNncYNr9NeKcrFjLkyRAdtOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          likesAmount={23}
          rating={4.2}
          time="short"
          title="Sopa crema de lentejas y verdeo"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        {auth.isAuthenticated ? (
          <button onClick={() => auth.signOut()}>Sign out</button>
        ) : (
          "STATUS: NOT LOGIN"
        )}
      </div>
    </>
  );
};

export default Home;
