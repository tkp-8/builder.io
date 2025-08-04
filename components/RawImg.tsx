interface RawImgProps {
  image: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  className?: string;
  style?: React.CSSProperties;
  css?: any;
}

export function RawImg({ 
  image, 
  alt = "", 
  width, 
  height, 
  loading, 
  decoding,
  className,
  style,
  css,
  ...props 
}: RawImgProps) {
  const imgStyle = css ? css : style;
  
  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      className={className}
      style={imgStyle}
      {...props}
    />
  );
}
