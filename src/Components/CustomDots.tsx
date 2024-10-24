const CustomDot = ({ onClick, active }: any) => (
  <button
    title="123"
    className={`custom-dot ${
      active ? "active bg-[#B2FF02]" : "border-[#B2FF02] border"
    }`}
    onClick={() => onClick()}
  />
);
export default CustomDot;
