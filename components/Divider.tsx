export default function Divider() {
  return (
    <hr
      style={{
        height: 1,
        border: 0,
        margin: 0,
        background:
          "linear-gradient(to right, transparent, var(--color-divider) 48px calc(100% - 48px), transparent)",
      }}
    />
  );
}
