import { Box, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { academicData, professionalData } from "./data";
import Professional from "./professional";
import Academic from "./academic";

const Career = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            variant="body1"
            bgcolor="#E2F4EC"
            p={0.5}
            borderRadius={1}
          >
            Career
          </Typography>
          <Typography variant="h3" fontWeight="bold" my={1}>
            Education & Experience
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Professional
          professionalData={professionalData}
          title="Professional Area"
        />
      </Grid>

      <Grid item xs={12}>
        <Academic academicData={academicData} title="Academic Area" />
      </Grid>
    </Grid>
  );
};

export default Career;
