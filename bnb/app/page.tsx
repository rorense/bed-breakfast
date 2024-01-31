import React from "react";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings from "./actions/getListings";

// Page Components
async function page() {
  const listings = await getListings();

  if (listings.length == 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className="
      pt-24 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8"
      >
        <div>My Future listings</div>
      </div>
    </Container>
  );
}

export default page;
