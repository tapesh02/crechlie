"use client";

import { Container, Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import Header from "@components/sections/header/Header";
import SearchBar from "@components/sections/searchBar/SearchBar";
import CrecheCard from "@components/creches/CrecheCard";
import { crechesData } from "../../../mockdata/creches.js";

function ClientHomePage() {
  const [filteredCreches, setFilteredCreches] = useState(crechesData);

  const handleSearch = (searchTerm) => {
    const filtered = crechesData.filter(
      (creche) =>
        creche.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        creche.location.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredCreches(filtered);
  };

  return (
    <main>
      <Header />
      <SearchBar onSearch={handleSearch} />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: "bold" }}>
          Available Creches
        </Typography>

        {filteredCreches.length > 0 ? (
          <Grid container spacing={3}>
            {filteredCreches.map((creche) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={creche.id}>
                <CrecheCard {...creche} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h6" color="text.secondary">
              No creches found matching your search.
            </Typography>
          </Box>
        )}
      </Container>
    </main>
  );
}

export default ClientHomePage;
