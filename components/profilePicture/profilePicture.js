import Image from "next/image";

const ProfilePicture = ({ src }) => {
  return (
    <div className="relative h-8 w-8 cursor-pointer rounded aspect-square overflow-hidden">
      <Image layout="fill" objectFit="contain" src={src} alt="Foto de perfil" />
    </div>
  );
};

export default ProfilePicture;
