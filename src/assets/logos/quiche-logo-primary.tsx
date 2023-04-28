import * as React from "react";

interface Props {
  fill: string;
  hover?: string;
}

function QuicheLogoPrimary(props: Props & React.SVGProps<SVGSVGElement>) {
  const { fill, hover, ...svgProps } = props;

  return (
    <svg
      viewBox="0 0 196 79"
      {...svgProps}
      className={`w-full fill-${fill} ${
        hover ? `hover:fill-${hover}` : ""
      } transition-all`}
    >
      <path d="M95.822 77.07c2.92-2.57 2.86-6.745-.655-8.62-.808-.42-1.564-.932-2.336-1.364-6.999-4.058-14.033-8.107-21.032-12.166-.5-.279-.925-.427-1.525-.226-.958.3-1.898.102-2.505-.714-.433-.6-.694-1.133-.752-1.91-.01-.035.026-.045.026-.045 4.242-7.612 5.588-16.664 3.135-25.662C65.13 7.84 45.732-2.997 26.838 2.153 7.947 7.302-3.271 26.483 1.777 45.005c5.049 18.524 24.447 29.36 43.34 24.21 7.708-2.1 14.152-6.575 18.693-12.381 1.59-.245 2.857.731 3.064 2.337.06.36.301.824.593 1.046 7.25 5.69 14.537 11.368 21.787 17.058 2.162 1.714 4.456 1.655 6.569-.205zM13.091 55.44c5.14-3.893 7.097-5.332 9.054-6.772 1.157-.844 2.323-1.652 3.424-2.557.818-.676 1.723-.885 2.69-.733 1.814.299 3.62.712 5.435 1.011 2.049.31 4.105.505 6.024-.509.874-.465 1.63-1.086 2.43-1.682 4.803-3.574 9.57-7.139 14.382-10.678.222-.174.418-.303.604-.467.586-.537.674-1.203.186-1.863a7091.911 7091.911 0 00-10.522-13.595c-.608-.816-1.284-.896-2.147-.246-3.78 2.805-7.56 5.61-11.304 8.405-1.477 1.082-2.934 2.235-4.456 3.291-1.62 1.122-2.55 2.659-2.898 4.49-.34 1.717-.447 3.445-.671 5.167-.105.746-.164 1.518-.305 2.273-.198 1.112-.697 1.965-1.667 2.645a1493.39 1493.39 0 00-12.337 9.14 29.12 29.12 0 01-4.29-9.102C2.394 27.77 12.009 11.33 28.214 6.914c16.203-4.417 32.83 4.872 37.16 20.758C69.704 43.56 60.09 60 43.885 64.416c-11.66 3.14-23.418-.716-30.792-8.977zm34.251-29.347c.997-.724 2.099-.496 2.441.619.173.632-.152 1.136-.73 1.558-2.696 1.98-5.381 3.997-8.067 6.012-1.699 1.256-3.424 2.557-5.123 3.813-.738.541-1.522.49-2.017-.054-.56-.64-.412-1.512.424-2.117 1.503-1.127 3.006-2.254 4.482-3.336 2.818-2.24 5.7-4.385 8.59-6.495zm-14.99 4.916c-.033-.406.182-1.031.502-1.27 3.699-2.82 7.417-5.57 11.135-8.32.836-.606 1.94-.227 2.209.757.127.607-.117 1.127-.705 1.514-2.215 1.623-4.42 3.281-6.635 4.904-1.44 1.073-2.846 2.135-4.323 3.217-.888.696-2.12.276-2.182-.802zm11.164 4.925c2.339-1.733 4.704-3.51 7.044-5.243.124-.109.258-.183.382-.293.758-.47 1.515-.375 2.03.24.478.625.347 1.416-.392 1.957-1.244.943-2.49 1.887-3.744 2.795-2.339 1.733-4.705 3.51-7.044 5.243a6.97 6.97 0 01-.66.406c-.797.18-1.35-.01-1.666-.603-.36-.62-.263-1.25.341-1.717 1.21-.933 2.464-1.842 3.709-2.785z" />
      <path d="M37.222 10.575c-14.014 1.856-25.95 14.587-25.827 29.732-2.907-15.33 9.12-30.125 25.827-29.732zM24.209 56.94c10.775 4.918 25.072 1.135 31.97-9.732-4.975 12.268-20.311 17.467-31.97 9.733zM97.805 29.387c0-1.02.289-1.785.867-2.296.578-.544 1.275-.816 2.091-.816.816 0 1.462.239 1.938.715v14.637c0 1.938.306 3.4.918 4.386.612.986 1.445 1.48 2.499 1.48s2.074-.613 3.06-1.837c1.156-1.462 1.734-4.165 1.734-8.109.034-.204.289-.306.765-.306.612 0 .918.901.918 2.703 0 2.89-.629 5.202-1.887 6.936-1.224 1.734-2.958 2.602-5.202 2.602-3.57 0-5.916-1.615-7.038-4.846-1.326 3.23-3.758 4.846-7.294 4.846-2.108 0-3.808-.63-5.1-1.888-1.292-1.292-1.938-3.128-1.938-5.508v-12.7c0-1.02.255-1.784.765-2.294.51-.544 1.156-.816 1.938-.816s1.411.238 1.887.713v14.638c0 4.046 1.02 6.07 3.06 6.07 1.53 0 2.907-.919 4.132-2.755 1.258-1.836 1.887-4.42 1.887-7.752v-7.803z" />
      <path d="M111.338 21.277c-.578-.578-.867-1.292-.867-2.142 0-.85.289-1.564.867-2.142.578-.612 1.292-.918 2.142-.918.85 0 1.564.306 2.142.918.612.578.918 1.292.918 2.142 0 .85-.306 1.564-.918 2.142-.578.578-1.292.867-2.142.867-.85 0-1.564-.289-2.142-.867zm-.204 8.11c0-1.02.255-1.785.765-2.296.51-.544 1.156-.816 1.938-.816s1.411.239 1.887.715v14.637c0 1.938.374 3.4 1.122 4.386.748.986 1.768 1.48 3.06 1.48s2.499-.783 3.621-2.347c1.122-1.564 1.683-4.097 1.683-7.599.068-.204.323-.306.765-.306.613 0 .919.901.919 2.703 0 2.618-.715 4.862-2.143 6.732s-3.247 2.806-5.457 2.806c-2.754 0-4.811-.816-6.171-2.449-1.326-1.632-1.989-3.944-1.989-6.936v-10.71z" />
      <path d="M146.695 38.873c.714 0 1.071.493 1.071 1.48 0 .985-.204 1.971-.612 2.957-.408.986-1.003 1.955-1.785 2.907-.748.952-1.819 1.735-3.213 2.346-1.36.612-2.907.919-4.641.919-3.808 0-6.801-.953-8.977-2.857-2.142-1.938-3.213-4.76-3.213-8.466 0-3.74.952-6.647 2.856-8.721 1.904-2.108 4.336-3.162 7.294-3.162 2.142 0 3.706.578 4.692 1.733.986 1.123 1.479 2.466 1.479 4.03 0 .85-.255 1.53-.765 2.04s-1.003.765-1.479.765c-.884 0-1.462-.204-1.734-.612.204-.51.306-1.241.306-2.193s-.323-1.82-.969-2.601c-.646-.782-1.428-1.173-2.346-1.173-1.598 0-2.754.782-3.469 2.346-.68 1.564-1.02 4.029-1.02 7.395 0 3.332.646 5.746 1.939 7.242 1.326 1.496 3.162 2.245 5.508 2.245s4.318-.715 5.916-2.143c1.598-1.462 2.397-3.519 2.397-6.17.034-.205.289-.307.765-.307z" />
      <path d="M173.638 37.241c.612 0 .918.901.918 2.703 0 2.618-.68 4.862-2.04 6.732-1.326 1.87-3.06 2.806-5.202 2.806s-3.927-.748-5.355-2.245c-1.394-1.53-2.091-3.485-2.091-5.865V34.13c0-4.046-1.02-6.07-3.06-6.07-1.802 0-3.282.919-4.438 2.755-1.156 1.836-1.734 4.913-1.734 9.231v8.721c-.34.476-.935.715-1.785.715-.85 0-1.53-.255-2.04-.765-.51-.544-.765-1.326-.765-2.347V20.818c0-4.42.425-7.616 1.275-9.588.85-2.006 2.482-3.01 4.896-3.01 1.292 0 2.296.545 3.01 1.633s1.071 2.635 1.071 4.64c0 3.64-1.887 7.345-5.662 11.12V30.1c1.428-2.55 3.69-3.825 6.784-3.825 2.21 0 3.961.697 5.253 2.09 1.326 1.395 1.989 3.4 1.989 6.019v7.242c0 1.938.306 3.4.918 4.386.612.986 1.513 1.48 2.703 1.48s2.244-.8 3.162-2.398c.952-1.632 1.428-4.148 1.428-7.548.034-.204.289-.306.765-.306zm-23.002-14.077c2.312-2.992 3.469-5.899 3.469-8.721s-.613-4.233-1.837-4.233c-.68 0-1.122.782-1.326 2.346-.204 1.564-.306 5.1-.306 10.608z" />
      <path d="M194.362 37.853c.714 0 1.071.544 1.071 1.632 0 2.516-.884 4.811-2.652 6.885-1.734 2.075-4.387 3.112-7.957 3.112-3.57 0-6.443-.953-8.619-2.857-2.142-1.938-3.213-4.76-3.213-8.466 0-3.74.952-6.647 2.856-8.721 1.904-2.108 4.335-3.162 7.293-3.162 2.142 0 3.706.578 4.692 1.733.987 1.123 1.48 2.466 1.48 4.03 0 2.55-1.072 4.675-3.214 6.375-2.108 1.666-4.811 2.5-8.109 2.5.306 2.175 1.088 3.824 2.346 4.946 1.292 1.088 2.975 1.633 5.049 1.633 2.108 0 3.996-.783 5.662-2.347 1.7-1.598 2.55-3.927 2.55-6.987.034-.204.289-.306.765-.306zm-16.525.714v.46c2.108-.273 3.927-.936 5.457-1.99 1.564-1.054 2.346-2.618 2.346-4.692 0-1.326-.289-2.33-.867-3.01-.578-.713-1.394-1.07-2.448-1.07-1.598 0-2.754.782-3.468 2.346-.68 1.564-1.02 4.216-1.02 7.956z" />
    </svg>
  );
}

const MemoQuicheLogoPrimary = React.memo(QuicheLogoPrimary);
export default MemoQuicheLogoPrimary;
