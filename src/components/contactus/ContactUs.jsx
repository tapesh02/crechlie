'use-client';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import { useTheme } from "@mui/material/styles";
import { FaChild, FaClock, FaShieldAlt } from "react-icons/fa";
import { MdOutlineLiveTv, MdOutlinePhoneIphone } from "react-icons/md";
import { IoMenu as MenuIcon} from "react-icons/io5";


const ContactUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
          <Box
            component="section"
            id="contact"
            sx={{
              py: { xs: 6, md: 8 },
              bgcolor: "background.paper",
              borderTop: "1px solid #E2E8F0",
            }}
          >
            <Container maxWidth="md">
              <Box textAlign="center" mb={4}>
                <Typography variant="h3" sx={{ mb: 1.5, fontSize: { xs: 26, md: 30 } }}>
                  Enquire with Crechlie.
                </Typography>
                <Typography color="text.secondary">
                  Share a few details and a member of the Crechlie team will contact
                  you to discuss availability, fees, and next steps.
                </Typography>
              </Box>
    
              <Box
                component="form"
                noValidate
                sx={{
                  bgcolor: "background.default",
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                  border: "1px solid #E2E8F0",
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Parent / guardian name" fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Email address" type="email" fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Phone number" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Preferred location" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Child’s age" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Preferred start date" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Additional information (optional)"
                      fullWidth
                      multiline
                      minRows={3}
                    />
                  </Grid>
                </Grid>
    
                <Box mt={3} display="flex" flexDirection="column" gap={1.5}>
                  <Button type="submit" variant="contained" size="large">
                    Submit enquiry
                  </Button>
                  <Typography variant="caption" color="text.secondary">
                    By submitting this form, you consent to Crechlie contacting you
                    about childcare options. You can withdraw your consent at any
                    time.
                  </Typography>
                </Box>
              </Box>
    
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 3, textAlign: "center" }}
              >
                This page provides general information only and does not constitute
                legal, financial, or enrolment advice. Please review your centre’s
                policies and terms before accepting a place.
              </Typography>
            </Container>
          </Box>
  )
}

export default ContactUs