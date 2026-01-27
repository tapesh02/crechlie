// import ClientHomePage from "../src/components/sections/clientHomePage/ClientHomePage";

// export default function Home() {
//   return <ClientHomePage />;
// }
"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
  Stack,
  TextField,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import { useTheme } from "@mui/material/styles";
import { FaChild, FaClock, FaShieldAlt } from "react-icons/fa";
import { MdOutlineLiveTv, MdOutlinePhoneIphone } from "react-icons/md";


export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* HERO SECTION */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid  size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: 32, md: 44 },
                  lineHeight: 1.1,
                }}
              >
                Premium childcare in Ireland, with real‑time availability.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, maxWidth: 520 }}
              >
                Crechlie combines qualified early childhood educators, modern
                facilities, and live availability tools to support families
                across Ireland with flexible, reliable childcare.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 2 }}
              >
                <Button
                  href="#availability"
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Check real‑time availability
                </Button>
                <Button href="#contact" variant="outlined" size="large">
                  Book a centre tour
                </Button>
              </Stack>

              <Stack direction="row" spacing={3} flexWrap="wrap">
                <Box display="flex" alignItems="center" gap={1}>
                  <FaShieldAlt color={theme.palette.primary.main} />
                  <Typography variant="caption" color="text.secondary">
                    Registered & compliant with Irish standards
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <FaClock color={theme.palette.primary.main} />
                  <Typography variant="caption" color="text.secondary">
                    Flexible hours for modern families
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  p: 3,
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.10)",
                }}
              >
                <Typography variant="subtitle2" color="text.secondary" mb={1}>
                  Live availability snapshot
                </Typography>
                <Typography variant="h6" mb={2}>
                  Find a place at Crechlie in minutes.
                </Typography>

                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Location (e.g. Dublin, Cork)"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Child’s age"
                    placeholder="e.g. 2 years"
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Preferred days"
                    placeholder="e.g. Mon–Thu"
                  />
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    View live availability
                  </Button>
                  <Typography variant="caption" color="text.secondary">
                    Availability is indicative only and subject to confirmation
                    with your chosen Crechlie centre.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHY CRECHLIE / FEATURES */}
      <Box component="section" id="why-crechlie" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyConent="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: 26, md: 30 } }}>
                Why families choose Crechlie.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                We bring together premium childcare, transparent communication,
                and technology‑enabled convenience for families across Ireland.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                    <CardContent>
                      <Box mb={1.5}>
                        <MdOutlineLiveTv
                          size={26}
                          color={theme.palette.secondary.main}
                        />
                      </Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Real‑time availability
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        See live availability across Crechlie centres and submit
                        enquiries in minutes, helping you plan childcare with clarity.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                    <CardContent>
                      <Box mb={1.5}>
                        <FaChild size={26} color={theme.palette.secondary.main} />
                      </Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Play‑based learning
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Our programs are informed by Ireland’s Aistear and Síolta
                        frameworks, supporting development through structured play.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                    <CardContent>
                      <Box mb={1.5}>
                        <FaShieldAlt
                          size={26}
                          color={theme.palette.secondary.main}
                        />
                      </Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Safety & compliance
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Crechlie centres operate in line with applicable Irish
                        childcare regulations, with robust safety and safeguarding
                        procedures in place.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                    <CardContent>
                      <Box mb={1.5}>
                        <MdOutlinePhoneIphone
                          size={26}
                          color={theme.palette.secondary.main}
                        />
                      </Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Connected with families
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Regular updates, digital communication, and responsive
                        teams keep parents informed about their child’s day.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PROGRAMS SECTION */}
      <Box
        component="section"
        id="programs"
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: "background.paper",
          borderTop: "1px solid #E2E8F0",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" sx={{ mb: 1.5, fontSize: { xs: 26, md: 30 } }}>
              Programs for every stage.
            </Typography>
            <Typography color="text.secondary" maxWidth={580} mx="auto">
              From infants to school‑age children, Crechlie programs are designed
              to support learning, wellbeing, and social development at each step.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                title: "Infant Care",
                age: "6–18 months",
                desc: "A calm, caring environment focused on attachment, comfort, and sensory exploration for our youngest children.",
              },
              {
                title: "Toddler Learning",
                age: "18 months–3 years",
                desc: "Guided play, early language development, and social interaction to build confidence and curiosity.",
              },
              {
                title: "Preschool Prep",
                age: "3–5 years",
                desc: "School‑readiness, early literacy and numeracy, and structured play grounded in Irish early years frameworks.",
              },
              {
                title: "After School Club",
                age: "5+ years",
                desc: "A balanced after‑school environment with homework support, play, and time to unwind.",
              },
            ].map((program) => (
              <Grid key={program.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid #E2E8F0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      {program.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="secondary"
                      sx={{ fontWeight: 600 }}
                    >
                      {program.age}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1.5 }}
                    >
                      {program.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mt: 3, textAlign: "center" }}
          >
            Programs and age ranges may vary by centre and are subject to
            availability and enrolment criteria.
          </Typography>
        </Container>
      </Box>

      {/* REAL-TIME AVAILABILITY SECTION */}
      <Box
        component="section"
        id="availability"
        sx={{ py: { xs: 6, md: 8 } }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: 26, md: 30 } }}>
                Real‑time availability, across Crechlie.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Use Crechlie’s live availability tools to see indicative places
                across participating centres in Ireland, before you get in touch.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Final offers of places are made directly by each centre and may
                take into account factors such as age, session times, and local
                demand.
              </Typography>
              <Button
                href="#contact"
                variant="contained"
                color="primary"
                size="large"
              >
                Enquire about a place
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  p: 3,
                  border: "1px solid #E2E8F0",
                }}
              >
                <Typography variant="subtitle2" color="text.secondary" mb={1}>
                  Example: live view
                </Typography>
                <Stack spacing={1.5}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2">Dublin City Centre</Typography>
                    <Typography variant="caption" color="secondary">
                      Limited places
                    </Typography>
                  </Box>
                  <Divider />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2">Cork</Typography>
                    <Typography variant="caption" color="secondary">
                      Waitlist in some age groups
                    </Typography>
                  </Box>
                  <Divider />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2">Galway</Typography>
                    <Typography variant="caption" color="secondary">
                      Places available
                    </Typography>
                  </Box>
                </Stack>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 2, display: "block" }}
                >
                  Availability information is indicative only and does not
                  constitute an offer of a childcare place.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

   

      {/* NEWS & UPDATES SECTION */}
<Box
  component="section"
  id="news"
  sx={{
    py: { xs: 6, md: 8 },
    bgcolor: "background.paper",
    borderTop: "1px solid #E2E8F0",
  }}
>
  <Container maxWidth="lg">
    <Box textAlign="center" mb={4}>
      <Typography
        variant="h3"
        sx={{ mb: 1.5, fontSize: { xs: 26, md: 30 } }}
      >
        News & updates from Crechlie.
      </Typography>
      <Typography color="text.secondary" maxWidth={620} mx="auto">
        Stay informed about new Crechlie centres, program updates, and
        information relevant to families using early years services in Ireland.
      </Typography>
    </Box>

    <Grid container spacing={3}>
      {/* Article 1 */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: "100%",
            borderRadius: 3,
            border: "1px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="caption"
              color="secondary"
              sx={{ fontWeight: 600 }}
            >
              January 2026
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
              Crechlie expands across Ireland.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crechlie is progressing plans to expand its premium childcare
              offering to additional locations in Ireland, subject to
              regulatory approvals and centre readiness.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Article 2 */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: "100%",
            borderRadius: 3,
            border: "1px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="caption"
              color="secondary"
              sx={{ fontWeight: 600 }}
            >
              December 2025
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
              Real‑time availability enhancements.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crechlie’s live availability tools are being refined to give
              families clearer indicative insights into places across age
              groups, while final offers remain with each centre.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Article 3 */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: "100%",
            borderRadius: 3,
            border: "1px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="caption"
              color="secondary"
              sx={{ fontWeight: 600 }}
            >
              Autumn 2025
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
              Focus on quality & frameworks.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crechlie programs continue to be informed by Ireland’s Aistear
              and Síolta frameworks, supporting quality early learning and
              care for children in participating centres.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Typography
      variant="caption"
      color="text.secondary"
      sx={{ display: "block", mt: 3, textAlign: "center" }}
    >
      Information on this page is for general guidance only and may be updated
      or amended. For centre‑specific details, please contact your local
      Crechlie team.
    </Typography>
  </Container>
</Box>
    </Box>
  );
}
