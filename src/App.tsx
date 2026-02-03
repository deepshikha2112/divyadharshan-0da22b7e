import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { SettingsProvider } from "@/contexts/SettingsContext";

import NotificationManager from "@/components/NotificationManager";
import Cover from "./pages/Cover";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Index from "./pages/Index";
import DeityDetail from "./pages/DeityDetail";
import Guidance from "./pages/Guidance";
import Compatibility from "./pages/Compatibility";
import Meditation from "./pages/Meditation";
import Ramcharitmanas from "./pages/Ramcharitmanas";
import BhagavadGita from "./pages/BhagavadGita";
import VishnuPuran from "./pages/VishnuPuran";
import Panchang from "./pages/Panchang";
import PrayerJournal from "./pages/PrayerJournal";
import VratGuide from "./pages/VratGuide";
import AartiPage from "./pages/Aarti";
import SacredStories from "./pages/SacredStories";
import SaintsGurus from "./pages/SaintsGurus";
import SpiritualTechniques from "./pages/SpiritualTechniques";
import Sadhna from "./pages/Sadhna";
import Mantras from "./pages/Mantras";
import PredictionInfo from "./pages/PredictionInfo";
import Settings from "./pages/Settings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import AboutApp from "./pages/AboutApp";
import ContactSupport from "./pages/ContactSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SettingsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <NotificationManager />
            <Routes>
              <Route path="/" element={<Navigate to="/cover" replace />} />
              <Route path="/cover" element={<Cover />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/home" element={<Index />} />
              <Route path="/deity/:id" element={<DeityDetail />} />
              <Route path="/guidance" element={<Guidance />} />
              <Route path="/compatibility" element={<Compatibility />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/ramcharitmanas" element={<Ramcharitmanas />} />
              <Route path="/bhagavad-gita" element={<BhagavadGita />} />
              <Route path="/vishnu-puran" element={<VishnuPuran />} />
              <Route path="/panchang" element={<Panchang />} />
              <Route path="/prayer-journal" element={<PrayerJournal />} />
              <Route path="/vrat-guide" element={<VratGuide />} />
              <Route path="/aarti" element={<AartiPage />} />
              <Route path="/sacred-stories" element={<SacredStories />} />
              <Route path="/saints-gurus" element={<SaintsGurus />} />
              <Route path="/spiritual-techniques" element={<SpiritualTechniques />} />
              <Route path="/sadhna" element={<Sadhna />} />
              <Route path="/mantras" element={<Mantras />} />
              <Route path="/prediction-info" element={<PredictionInfo />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/about" element={<AboutApp />} />
              <Route path="/contact" element={<ContactSupport />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SettingsProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
