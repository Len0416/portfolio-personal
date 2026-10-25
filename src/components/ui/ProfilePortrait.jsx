import Foto from "../../assets/images/Foto.webp";

function ProfilePortrait() {
  return (
    <div className="profile-portrait">
      {/* Borde animado */}
      <div
        className="profile-portrait__ring"
        aria-hidden="true"
      />

      {/* Fotografía */}
      <img
        src={Foto}
        alt="Retrato personal"
        className="profile-portrait__image"
      />
    </div>
  );
}

export default ProfilePortrait;