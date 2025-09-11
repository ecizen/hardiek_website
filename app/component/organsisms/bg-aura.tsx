export default function NoiseBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black min-h-screen">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"1.2\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23noise)\"/></svg>')",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}
