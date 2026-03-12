import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-zinc-500 mb-4 tracking-wider">
        {"// 404"}
      </p>
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-zinc-50 mb-4">
        Page Not Found
      </h1>
      <p className="font-body text-zinc-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-cyan-500 text-zinc-950 font-semibold font-body hover:bg-cyan-400 transition-colors duration-200 cursor-pointer"
      >
        Back Home
      </Link>
    </div>
  );
}
