import FooterLink from "../footerLink/footerLink";

const Footer = () => {
  return (
    <div className="px-[4%] pb-5 mt-5 mx-0 xl:mx-auto max-w-[980px] ">
      <ul className="flex items-start flex-row flex-wrap text-xs">
        <FooterLink>Audio y subtítulos</FooterLink>
        <FooterLink>Audio descriptivo</FooterLink>
        <FooterLink>Centro de ayuda</FooterLink>
        <FooterLink>Tarjetas de regalo</FooterLink>
        <FooterLink>Relaciones con inversionistas</FooterLink>
        <FooterLink> Empleo </FooterLink>
        <FooterLink> Términos de uso </FooterLink>
        <FooterLink> Privacidad </FooterLink>
        <FooterLink> Avisos legales </FooterLink>
        <FooterLink> Preferencias de cookies </FooterLink>
        <FooterLink> Información corporativa </FooterLink>
        <FooterLink> Contáctanos </FooterLink>
      </ul>
    </div>
  );
};

export default Footer;
