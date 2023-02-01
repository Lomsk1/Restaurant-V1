interface Props {
  text: any;
  className: any;
  innerText: any;
}

function RotateText({ text, className, innerText }: Props) {
  // const text = "• QUALITY FOOD • FRESH ENVIRONMENT";
  return (
    <div className={`rotate_text_animation ${className}`}>
      <div className="logo">
        {innerText.split(" ").map((char: string, i: number) => (
          <p key={i}>{char}</p>
        ))}
      </div>
      <div className="text">
        {text?.split("").map((char: string, i: number) => (
          <span key={i} style={{ transform: `rotate(${i * 10.4}deg)` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default RotateText;
