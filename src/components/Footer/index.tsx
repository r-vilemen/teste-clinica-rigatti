import { FooterWrapper, Strong } from "@/ui/styles/Components/Footer/styles";

const Footer = () => {
  return (
    <FooterWrapper>
      Projeto desenvolvido por <Strong>Rodrigo Vilemen</Strong> — Front-End
      Developer.
      <br />
      Código disponível em:{" "}
      <a
        href="https://github.com/r-vilemen/teste-clinica-rigatti"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "underline" }}
      >
        github.com/r-vilemen
      </a>
    </FooterWrapper>
  );
};

export default Footer;
