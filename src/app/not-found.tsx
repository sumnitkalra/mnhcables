export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-all duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
