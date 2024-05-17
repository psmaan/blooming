interface SocialButtonI {
  image: string;
}
const SocialButton: React.FC<SocialButtonI> = (props) => {
  const handleMouseEnter = (e: any) => {
    const element = e.currentTarget;
    element.classList.add("glitching");
    setTimeout(() => {
      element.classList.remove("glitching");
    }, 200); // Remove the class after 5 seconds
  };
  const handleMouseLeave = (e: any) => {
    const element = e.currentTarget;
    element.classList.remove("glitching");
  };
  return (
    <div
      className="social-icon-wrapper "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={props.image} className="social-icon" alt="" />
    </div>
  );
};
export default SocialButton;
