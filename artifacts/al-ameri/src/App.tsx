import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import ChineseEmbassy from "@/pages/chinese-embassy";
import YemeniEmbassy from "@/pages/yemeni-embassy";
import AmericanEmbassy from "@/pages/american-embassy";
import Tourism from "@/pages/tourism";
import Facilitation from "@/pages/facilitation";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chinese-embassy" component={ChineseEmbassy} />
      <Route path="/yemeni-embassy" component={YemeniEmbassy} />
      <Route path="/american-embassy" component={AmericanEmbassy} />
      <Route path="/tourism" component={Tourism} />
      <Route path="/facilitation" component={Facilitation} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
