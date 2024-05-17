import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TiptapEditor } from "./components/editor";
import { ThemeProvider } from "./components/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <main className="h-screen w-screen">
          <TiptapEditor />
        </main>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
