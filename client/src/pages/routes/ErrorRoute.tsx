interface ErrorRouteProps {
  error: Error;
  info: {
    componentStack: string;
  };
}

export function ErrorRoute({ error, info }: ErrorRouteProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Something Went wrong</h2>
          <div className="">
            <h2 className="text-2xl">{error.name}</h2>
            <p>{error.message}</p>
            <p>{info.componentStack}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
