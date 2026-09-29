import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { UserProvider, useUser } from "./context/UserContext";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const OnboardingPage = lazy(() => import("./pages/OnboardingPage"));
const SSOVerify = lazy(() => import("./pages/SSOVerify"));
const OfficerDashboard = lazy(() => import("./pages/OfficerDashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const QuizInterface = lazy(() => import("./pages/QuizInterface"));

function AppLoadingFallback() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-teal-600/10 dark:bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 animate-pulse">
          <span className="font-black text-sm">D</span>
        </div>
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide animate-pulse">
          Loading MoSPI DAKSH...
        </p>
      </div>
    </div>
  );
}

/** Route guard: redirect to / (Landing Page) if not authenticated */
function RequireAuth({ children, requiredRole }) {
  const { user } = useUser();
  if (!user || !user.onboarded) return <Navigate to="/" replace />;
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/officer"} replace />;
  }
  return children;
}

const pageVariants = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.18, ease: "easeIn" } },
};

function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
        <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
        <Route path="/sso" element={<PageTransition><SSOVerify /></PageTransition>} />
        <Route
          path="/onboarding"
          element={<PageTransition><OnboardingPage /></PageTransition>}
        />
        <Route
          path="/officer"
          element={
            <RequireAuth>
              <PageTransition><OfficerDashboard /></PageTransition>
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAuth requiredRole="admin">
              <PageTransition><AdminDashboard /></PageTransition>
            </RequireAuth>
          }
        />
        <Route
          path="/quiz/:id"
          element={
            <RequireAuth>
              <PageTransition><QuizInterface /></PageTransition>
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <UserProvider>
        <Suspense fallback={<AppLoadingFallback />}>
          <AppRoutes />
        </Suspense>
      </UserProvider>
    </BrowserRouter>
  );
}
