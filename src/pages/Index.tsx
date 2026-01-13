import { API_CONFIG } from "../api";


const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">NextShop</h1>
        <p className="text-muted-foreground">
          Project structure ready. Start building your pages.
        </p>
        <div className="mt-6 p-4 bg-muted rounded-lg text-left text-sm">
          <p className="font-medium text-foreground mb-2">API Configuration:</p>
          <code className="text-muted-foreground block">
            Base URL: {API_CONFIG.baseURL}
          </code>
          <code className="text-muted-foreground block">
            Tenant: {API_CONFIG.headers['X-Tenant']}
          </code>
        </div>
      </div>
    </div>
  );
};

export default Index;
