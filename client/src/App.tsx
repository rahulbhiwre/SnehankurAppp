import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Gallery from "@/pages/gallery";
import Donate from "@/pages/donate";
import Contact from "@/pages/contact";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/snehankurr" component={Home} />
          <Route path="/snehankurr/about" component={About} />
          <Route path="/snehankurr/gallery" component={Gallery} />
          <Route path="/snehankurr/donate" component={Donate} />
          <Route path="/snehankurr/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
