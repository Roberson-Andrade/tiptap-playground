import { TiptapEditor } from "./components/editor";
import { ThemeProvider } from "./components/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="h-screen w-screen">
        <TiptapEditor />
      </main>
    </ThemeProvider>
  );
}
