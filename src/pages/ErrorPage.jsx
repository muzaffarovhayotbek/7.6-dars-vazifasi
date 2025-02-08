import React from 'react';

function ErrorPage() {
  return (
    <div>
      <div className="container mx-auto px-5 max-w-screen-sm flex flex-col-reverse items-center gap-5 sm:flex-row justify-between error-container">
        <div className="error-container">
          <h2 className="text-5xl mb-2 animate-slide-top">404</h2>
          <p className="mb-3 animate-slide-top delay-300">
            Bunday sahifa mavjud emas
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 animate-slide-top delay-600"
          >
            Bosh sahifaga qaytish
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
