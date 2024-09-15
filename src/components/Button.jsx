const Button = (props) => {
  const { color, text, children = 'submit',key,onClick } = props;
  return (
    <button className={`text-white px-3 py-2 rounded ${color ? color : 'bg-slate-500'}`} key={key} onClick={onClick}>
      {text} - {children}
    </button>
  );
};
export default Button;
