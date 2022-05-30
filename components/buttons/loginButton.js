const LoginButton = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`bg-netflix-red text-white whitespace-nowrap ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default LoginButton;
