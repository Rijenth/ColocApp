export default function BigNum({ type }: { type: string }) {
  return (
    <div className={`dashboard__${type}`}>
      <h1 className="dashboard__number">10</h1>
    </div>
  );
}
