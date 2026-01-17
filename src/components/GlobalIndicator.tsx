import { useLoadingStore } from "../store/LoadingStore";


const GlobalLoadingIndicator = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted overflow-hidden">
      <div className="h-full bg-primary animate-pulse w-full" />
    </div>
  );
};

export default GlobalLoadingIndicator;


