function LogoutIcon({ style }) {
  if (style == null) {
    style = [];
  }
  //Eduardo: codigo morto (tem isso em quase todos os arquivos da pasta icons)
  // Zeni: isso aqui eu deixei pra ter salvo o "padrão" de substituição entre
  // tamanho/cor estáticos e passados por propriedade
  //
  // {style.hasOwnProperty('size') ? style.size : 24}
  // {style.hasOwnProperty('color') ? style.color : "#282828"}
  return (
    <svg
    width={style.hasOwnProperty("size") ? style.size : 24}
    height={style.hasOwnProperty("size") ? style.size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_57_1191)">
        <path
          d="M7 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H7C7.26522 2 7.51957 1.89464 7.70711 1.70711C7.89464 1.51957 8 1.26522 8 1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H7C7.26522 24 7.51957 23.8946 7.70711 23.7071C7.89464 23.5196 8 23.2652 8 23C8 22.7348 7.89464 22.4804 7.70711 22.2929C7.51957 22.1054 7.26522 22 7 22Z"
          fill="black"
        />
        <path
          d="M18.538 18.707L23.125 14.121C23.6857 13.5576 24.0005 12.795 24.0005 12C24.0005 11.2051 23.6857 10.4425 23.125 9.87904L18.538 5.29304C18.3494 5.11088 18.0968 5.01009 17.8346 5.01237C17.5724 5.01465 17.3216 5.11981 17.1362 5.30522C16.9508 5.49063 16.8456 5.74144 16.8433 6.00364C16.841 6.26584 16.9418 6.51844 17.124 6.70704L21.416 11H6C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4805 5 11.7348 5 12C5 12.2653 5.10536 12.5196 5.29289 12.7071C5.48043 12.8947 5.73478 13 6 13H21.417L17.124 17.293C17.0285 17.3853 16.9523 17.4956 16.8999 17.6176C16.8475 17.7396 16.8199 17.8709 16.8188 18.0036C16.8176 18.1364 16.8429 18.2681 16.8932 18.391C16.9435 18.5139 17.0177 18.6255 17.1116 18.7194C17.2055 18.8133 17.3172 18.8876 17.44 18.9379C17.5629 18.9881 17.6946 19.0134 17.8274 19.0123C17.9602 19.0111 18.0914 18.9836 18.2134 18.9311C18.3354 18.8787 18.4458 18.8026 18.538 18.707Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_57_1191">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LogoutIcon;
