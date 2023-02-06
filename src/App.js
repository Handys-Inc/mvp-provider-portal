import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./app/Today/Today";

// notfound
import NotFound from "./app/NotFound/NotFound";
import Perks from "./app/Perks/Perks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General Routes */}
        <Route path="/" exact element={<Today />} />
        <Route path="/perks" exact element={<Perks />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
