import React, { lazy, Suspense } from "react";

const Header = lazy(() =>
  import("../../../components/organisms/Header/Header")
);

const LzHeader = () => {
  return (
    <>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Header></Header>
      </Suspense>
    </>
  );
};

export default LzHeader;
