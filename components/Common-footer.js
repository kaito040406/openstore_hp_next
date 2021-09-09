export default function Common({ children }) {
  return (
    <>
      <div>header</div>
      <div>{children}</div>
      <div>footer</div>
    </>
  );
}
