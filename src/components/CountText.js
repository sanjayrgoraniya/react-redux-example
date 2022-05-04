const CountText = (props) => {
  const { className = "", count = undefined, children, ...extra } = props;

  const color = 0 < count ? 'text-green-800' : count < 0 ? 'text-red-400' : 'text-orange-400'

  return (
    <span
      className={`p-2 text-4xl text-center ${color} ${className}`}
      {...extra}
    >
      {typeof count !== 'number' ? children : count}
    </span>
  );
};

export default CountText;
