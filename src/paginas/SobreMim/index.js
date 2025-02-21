import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Mariah</h3>

      <img
        src={fotoSobreMim}
        alt="Foto Mariah Hoffmann na formatura"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estudante de desenvolvimento web e estou feliz de te
        ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história profissional inicia na Universidade Federal de Santa Catarina (UFSC), em Florianópolis-SC, 
        onde me formei como Engenheira de Materiais.
        Durante a graduação, não fazia ideia que trabalharia com programação, mas mesmo assim
        desenvolvi minhas habilidades lógicas e minhas soft skills que seriam muito úteis no futuro.
        Além disso, o período acadêmico me proporcionou os primeiros contatos com o mercado de trabalho, realizando estágios
        em 3 grandes empresas e 2 laboratórios da universidade.
      </p>
      <p className={styles.paragrafo}>
        Ainda durante a graduação tive a oportunidade de realizar intercâmbio em outro país. 
        Durante 1 ano morei na França, o que me trouxe maturidade, independência 
        e me permitiu abrir a mente e meus horizontes para outras realidades e culturas muito diferentes da minha realidade até então.
      </p>
      <p className={styles.paragrafo}>
        Depois de formada, atuei 4 anos na área de engenharia de materiais em um cargo de liderança, 
        sendo responsável por gerenciar um laboratório e uma equipe de 6 pessoas. 
        Nesse período realizei alguns cursos de pyhton e tive meu primeiro contato com a programação.
        
      </p>
      <p className={styles.paragrafo}>
        Me encantei e me identifiquei muito com a área dev e decidi realizar uma transição de carreira.
        Passei a conhecer novas tecnologias, explorando um pouco mais o domínio web.
        A partir disso, passei a realizar formações e trilhas de estudos de tecnologias como HTML, CSS, JavaScript, Node.js, React, Express, entre outras, em uma jornada no âmbito Full-stack.
        Desde então, tem sido apenas aprendizados atrás de aprendizados. 

      </p>
      <p className={styles.paragrafo}>
        Hoje sou muito feliz de trazer a experiência de dev mais próxima da realidade, 
        e ansiosa para receber minha primeira oportunidade para atuar na área!
      </p>
    </PostModelo>
  );
}
