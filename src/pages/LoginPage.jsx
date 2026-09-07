import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import LandingPage from "./LandingPage";

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const { openAuthModal } = useUser();

  useEffect(() => {
    const roleParam = searchParams.get("role") === "admin" ? "admin" : "learner";
    const isSignupParam = searchParams.get("signup") === "true";
    openAuthModal(roleParam, isSignupParam);
  }, [searchParams]);

  return <LandingPage />;
}
