const Button = ({ className = "", ...props }) => {
  return (
    <button
      className={`p-4 text-black hover:text-white rounded-lg ${className}`}
      {...props}
    />
  );
};

export default Button;
