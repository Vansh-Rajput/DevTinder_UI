
import { lazy, Suspense } from "react";

const Premium = lazy(() => import("../Premium.jsx"));

export default function PremiumLazy() {
  return (
    <Suspense fallback={<div>Loading Premium...</div>}>
      <Premium />
    </Suspense>
  );
}
